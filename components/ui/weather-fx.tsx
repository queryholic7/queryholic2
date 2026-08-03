"use client";

import React, { useEffect, useRef } from "react";

export interface WeatherFxProps {
  fill?: boolean;
  position?: "absolute" | "fixed" | "relative";
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
  angle?: number; // In degrees, e.g. -30 for wind angle
  speed?: number; // Speed multiplier (default: 2)
  colors?: string[]; // e.g. ["static-white"]
  type?: "rain" | "snow" | "fog";
  intensity?: number; // 1 to 100+ (default: 75)
  className?: string;
  style?: React.CSSProperties;
  zIndex?: number;
  opacity?: number;
}

interface Drop {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  width: number;
}

export function WeatherFx({
  fill = true,
  position = "fixed",
  top = "0",
  left = "0",
  right,
  bottom,
  angle = -30,
  speed = 2,
  colors = ["static-white"],
  type = "rain",
  intensity = 75,
  className = "",
  style,
  zIndex = 30,
  opacity = 0.8,
}: WeatherFxProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let isRunning = true;

    // Handle canvas dimensions
    const resizeCanvas = () => {
      if (!canvas) return;
      const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
      const width = fill && position === "fixed" ? window.innerWidth : canvas.parentElement?.clientWidth || window.innerWidth;
      const height = fill && position === "fixed" ? window.innerHeight : canvas.parentElement?.clientHeight || window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Resolve color
    const resolveColor = (alpha: number) => {
      const primaryColor = colors[0] || "static-white";
      if (primaryColor === "static-white" || primaryColor === "white") {
        return `rgba(255, 255, 255, ${alpha})`;
      }
      if (primaryColor.startsWith("#") || primaryColor.startsWith("rgb")) {
        return primaryColor;
      }
      return `rgba(220, 230, 255, ${alpha})`;
    };

    // Physics calculations
    const rad = ((angle + 90) * Math.PI) / 180;
    const cosAngle = Math.cos(rad);
    const sinAngle = Math.sin(rad);

    const baseCount = Math.max(20, Math.floor(intensity * 1.8));
    const drops: Drop[] = [];

    const initDrop = (): Drop => {
      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);
      const dropSpeed = (Math.random() * 8 + 12) * (speed / 2);
      return {
        x: Math.random() * (w + 400) - 200,
        y: Math.random() * (h + 200) - 200,
        length: Math.random() * 20 + 15,
        speed: dropSpeed,
        opacity: Math.random() * 0.35 + 0.15,
        width: Math.random() * 1.2 + 0.6,
      };
    };

    for (let i = 0; i < baseCount; i++) {
      drops.push(initDrop());
    }

    // Animation Loop
    const render = () => {
      if (!isRunning) return;

      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);

      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < drops.length; i++) {
        const drop = drops[i];

        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(
          drop.x + drop.length * cosAngle,
          drop.y + drop.length * sinAngle
        );
        ctx.strokeStyle = resolveColor(drop.opacity);
        ctx.lineWidth = drop.width;
        ctx.lineCap = "round";
        ctx.stroke();

        // Update position
        drop.x += drop.speed * cosAngle;
        drop.y += drop.speed * sinAngle;

        // Reset if off-screen
        if (drop.y > h + 50 || drop.x < -200 || drop.x > w + 200) {
          drop.x = Math.random() * (w + 400) - 200;
          drop.y = -50 - Math.random() * 100;
          drop.speed = (Math.random() * 8 + 12) * (speed / 2);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Tab visibility handling to pause canvas animation when inactive
    const handleVisibilityChange = () => {
      if (document.hidden) {
        isRunning = false;
        cancelAnimationFrame(animationFrameId);
      } else {
        if (!isRunning) {
          isRunning = true;
          render();
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      isRunning = false;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [angle, speed, colors, intensity, fill, position]);

  const posStyle: React.CSSProperties = {
    position: position,
    top: top !== undefined ? top : undefined,
    left: left !== undefined ? left : undefined,
    right: right !== undefined ? right : undefined,
    bottom: bottom !== undefined ? bottom : undefined,
    width: fill ? "100%" : undefined,
    height: fill ? "100%" : undefined,
    pointerEvents: "none",
    zIndex: zIndex,
    opacity: opacity,
    ...style,
  };

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      style={posStyle}
    />
  );
}

export default WeatherFx;
