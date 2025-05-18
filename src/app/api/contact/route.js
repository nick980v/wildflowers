import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { firstName, surname, email, phone, message } = await request.json();

    if (!firstName || !surname || !email || !message) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: "Wild flowers Contact Form<enquiries@wildflowerscommunity.uk>",
      to: ["enquiries@wildflowerscommunity.uk"],
      subject: `New contact form message from ${firstName} ${surname}`,
      html: `<p><strong>Name:</strong> ${firstName} ${surname}</p>
             <p><strong>Email:</strong> ${email}</p>
             ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
             <p><strong>Message:</strong><br/>${message}</p>`,
    });

    return NextResponse.json({ message: "Email sent", data });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
