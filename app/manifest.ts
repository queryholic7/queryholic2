import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Queryholic — Engineering The Future",
    short_name: "Queryholic",
    description:
      "Queryholic builds scalable websites, web applications, AI-powered systems, embedded solutions, and digital platforms for startups and modern businesses.",
    start_url: "/",
    display: "standalone",
    background_color: "#030303",
    theme_color: "#4f46e5",
    orientation: "portrait-primary",
    categories: ["business", "technology", "software"],
    icons: [
      {
        src: "https://res.cloudinary.com/drqsvwrjt/image/upload/v1770208225/queryholic_pro_txcp6w.jpg",
        sizes: "192x192",
        type: "image/jpeg",
      },
      {
        src: "https://res.cloudinary.com/drqsvwrjt/image/upload/v1770208225/queryholic_pro_txcp6w.jpg",
        sizes: "512x512",
        type: "image/jpeg",
      },
      {
        src: "https://res.cloudinary.com/drqsvwrjt/image/upload/v1770208225/queryholic_pro_txcp6w.jpg",
        sizes: "512x512",
        type: "image/jpeg",
        purpose: "maskable",
      },
    ],
  };
}
