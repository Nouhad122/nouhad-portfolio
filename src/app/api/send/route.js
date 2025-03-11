import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with environment variable
const resendApiKey = process.env.RESEND_API_KEY || "dummy_key_for_build";
const fromEmail = process.env.FROM_EMAIL || "nouhadalhallab122@gmail.com";

const resend = new Resend(resendApiKey);

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();
    
    // Don't attempt to send emails during build or without API key
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === "dummy_key_for_build") {
      console.warn("Email service not fully configured");
      return NextResponse.json({
        success: true,
        message: "Email received (send functionality inactive)"
      });
    }
    
    // Send email using HTML template
    const data = await resend.emails.send({
      from: `Portfolio Contact <${fromEmail}>`,
      to: [fromEmail],
      reply_to: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 1px solid #eee; padding-bottom: 10px;">New Portfolio Contact</h2>
          <p><strong>From:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <h3 style="margin-top: 20px;">Message:</h3>
          <div style="background-color: #f7f7f7; padding: 15px; border-radius: 5px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
      `
    });
    
    return NextResponse.json({
      success: true,
      message: "Email sent successfully"
    });
  } catch (error) {
    console.error("Failed to send email:", error);
    
    return NextResponse.json({
      success: false,
      message: "Failed to send email. Please try again later."
    }, { status: 500 });
  }
}