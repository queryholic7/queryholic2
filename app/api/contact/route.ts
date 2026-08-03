import { NextResponse } from "next/server";
import { Resend } from "resend";

function escapeHtml(str: string): string {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const body = await req.json().catch(() => null);

    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "Invalid request payload" }, { status: 400 });
    }

    const { name, email, phone, company, service, budget, details } = body;

    // Strict validation
    if (!name || !email || !phone || !service || !details) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    if (String(details).length > 5000 || String(name).length > 200) {
      return NextResponse.json(
        { error: "Field length exceeds allowed limit" },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(String(name).trim());
    const safeEmail = escapeHtml(String(email).trim());
    const safePhone = escapeHtml(String(phone).trim());
    const safeCompany = escapeHtml(String(company || "N/A").trim());
    const safeService = escapeHtml(String(service).trim());
    const safeBudget = escapeHtml(String(budget || "N/A").trim());
    const safeDetails = escapeHtml(String(details).trim());

    if (!apiKey) {
      console.warn("⚠️ Missing RESEND_API_KEY. Email sending is bypassed for development mode.");
      return NextResponse.json(
        { success: true, message: "Simulated success (Missing API Key)" },
        { status: 200 }
      );
    }

    const resend = new Resend(apiKey);

    // Compose the email HTML
    const htmlContent = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 10px;">
        <h2 style="color: #1a1a1a;">New Project Inquiry</h2>
        <p style="color: #4a4a4a; font-size: 16px;">You have received a new inquiry from the Queryholic Contact Form.</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr style="border-bottom: 1px solid #eaeaea;">
            <td style="padding: 10px 0; font-weight: bold; width: 30%;">Name:</td>
            <td style="padding: 10px 0;">${safeName}</td>
          </tr>
          <tr style="border-bottom: 1px solid #eaeaea;">
            <td style="padding: 10px 0; font-weight: bold;">Email:</td>
            <td style="padding: 10px 0;"><a href="mailto:${safeEmail}">${safeEmail}</a></td>
          </tr>
          <tr style="border-bottom: 1px solid #eaeaea;">
            <td style="padding: 10px 0; font-weight: bold;">Phone:</td>
            <td style="padding: 10px 0;">${safePhone}</td>
          </tr>
          <tr style="border-bottom: 1px solid #eaeaea;">
            <td style="padding: 10px 0; font-weight: bold;">Company:</td>
            <td style="padding: 10px 0;">${safeCompany}</td>
          </tr>
          <tr style="border-bottom: 1px solid #eaeaea;">
            <td style="padding: 10px 0; font-weight: bold;">Service Required:</td>
            <td style="padding: 10px 0;">${safeService}</td>
          </tr>
          <tr style="border-bottom: 1px solid #eaeaea;">
            <td style="padding: 10px 0; font-weight: bold;">Estimated Budget:</td>
            <td style="padding: 10px 0;">${safeBudget}</td>
          </tr>
        </table>
        
        <div style="margin-top: 30px;">
          <h3 style="color: #1a1a1a; margin-bottom: 10px;">Project Details:</h3>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; color: #333; line-height: 1.5; white-space: pre-wrap;">
            ${safeDetails}
          </div>
        </div>
        
        <div style="margin-top: 40px; font-size: 12px; color: #888; text-align: center;">
          Submitted via Queryholic Contact Form
        </div>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: "Queryholic Contact <onboarding@resend.dev>",
      to: "queryholic@gmail.com",
      replyTo: email,
      subject: "New Project Inquiry — Queryholic",
      html: htmlContent,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error: any) {
    console.error("Failed to send contact email:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
