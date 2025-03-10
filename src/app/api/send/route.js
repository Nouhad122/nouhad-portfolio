import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY || "dummy_key_for_build";
const fromEmail = process.env.FROM_EMAIL || "placeholder@example.com";

const resend = new Resend(resendApiKey);

export async function POST(req, res) {
  if (!process.env.RESEND_API_KEY) {
    console.warn("Missing Resend API key in environment variables");
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 500 }
    );
  }

  const { email, subject, message } = await req.json();
  
  try {
    // Using HTML string instead of React components
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h1 style="color: #333;">${subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p style="background-color: #f5f5f5; padding: 12px; border-radius: 4px;">${message}</p>
        </div>
      `
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}