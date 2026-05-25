import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const adminEmail = process.env.ADMIN_EMAIL || "dkhalili93@gmail.com";

    if (!apiKey) {
      console.log("Contact form submission (no Resend key configured):", {
        name,
        email,
        message,
      });
      return NextResponse.json({ success: true });
    }

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: adminEmail,
      subject: `New message from ${name}`,
      html: `
        <div style="font-family: -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #0A0A0F; color: #E8E8ED; border-radius: 12px;">
          <div style="border-bottom: 1px solid rgba(0,212,255,0.2); padding-bottom: 16px; margin-bottom: 24px;">
            <h2 style="margin: 0; color: #00D4FF; font-size: 18px;">New Contact Form Submission</h2>
          </div>
          <p><strong style="color: #00D4FF;">Name:</strong> ${name}</p>
          <p><strong style="color: #00D4FF;">Email:</strong> <a href="mailto:${email}" style="color: #E8E8ED;">${email}</a></p>
          <p><strong style="color: #00D4FF;">Message:</strong></p>
          <div style="background: #12121A; padding: 16px; border-radius: 8px; border: 1px solid rgba(0,212,255,0.12);">
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
