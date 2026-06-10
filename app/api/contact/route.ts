import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    
    if (!apiKey) {
      console.error("Missing RESEND_API_KEY environment variable");
      return NextResponse.json(
        { error: "Server configuration error: Missing API Key." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const body = await req.json();
    const { name, email, phone, company, service, budget, details } = body;

    // Simple validation
    if (!name || !email || !phone || !service || !details) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Compose the email HTML
    const htmlContent = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 10px;">
        <h2 style="color: #1a1a1a;">New Project Inquiry</h2>
        <p style="color: #4a4a4a; font-size: 16px;">You have received a new inquiry from the Queryholic Contact Form.</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr style="border-bottom: 1px solid #eaeaea;">
            <td style="padding: 10px 0; font-weight: bold; width: 30%;">Name:</td>
            <td style="padding: 10px 0;">${name}</td>
          </tr>
          <tr style="border-bottom: 1px solid #eaeaea;">
            <td style="padding: 10px 0; font-weight: bold;">Email:</td>
            <td style="padding: 10px 0;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr style="border-bottom: 1px solid #eaeaea;">
            <td style="padding: 10px 0; font-weight: bold;">Phone:</td>
            <td style="padding: 10px 0;">${phone}</td>
          </tr>
          <tr style="border-bottom: 1px solid #eaeaea;">
            <td style="padding: 10px 0; font-weight: bold;">Company:</td>
            <td style="padding: 10px 0;">${company || "N/A"}</td>
          </tr>
          <tr style="border-bottom: 1px solid #eaeaea;">
            <td style="padding: 10px 0; font-weight: bold;">Service Required:</td>
            <td style="padding: 10px 0;">${service}</td>
          </tr>
          <tr style="border-bottom: 1px solid #eaeaea;">
            <td style="padding: 10px 0; font-weight: bold;">Estimated Budget:</td>
            <td style="padding: 10px 0;">${budget || "N/A"}</td>
          </tr>
        </table>
        
        <div style="margin-top: 30px;">
          <h3 style="color: #1a1a1a; margin-bottom: 10px;">Project Details:</h3>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; color: #333; line-height: 1.5; white-space: pre-wrap;">
            ${details}
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
