import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();
    
    // For build purposes only
    console.log("Would send email:", { email, subject, message });
    
    return NextResponse.json({
      success: true,
      message: "Message received successfully"
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}