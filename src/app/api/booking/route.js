import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const form = await request.json();

    // Compose the email body with all booking fields
    const html = `
      <h2>New Booking Submission</h2>
      <h3>Child Information</h3>
      <p><strong>Full Name:</strong> ${form.childFullName || ""}</p>
      <p><strong>Preferred Name:</strong> ${form.childPreferredName || ""}</p>
      <p><strong>Date of Birth:</strong> ${form.childDOB || ""}</p>
      <p><strong>Home Address:</strong> ${form.childAddress || ""}</p>
      <h3>Parent/Carer Information</h3>
      <p><strong>Full Name:</strong> ${form.parentFullName || ""}</p>
      <p><strong>Relationship to Child:</strong> ${form.parentRelationship || ""}</p>
      <p><strong>Phone Number:</strong> ${form.parentPhone || ""}</p>
      <p><strong>Email Address:</strong> ${form.parentEmail || ""}</p>
      <p><strong>Emergency Contact Name:</strong> ${form.emergencyName || ""}</p>
      <p><strong>Emergency Contact Phone:</strong> ${form.emergencyPhone || ""}</p>
      <p><strong>Regular Drop-off/Pick-up Person Name:</strong> ${form.dropoffName || ""}</p>
      <p><strong>Relationship:</strong> ${form.dropoffRelationship || ""}</p>
      <p><strong>Contact:</strong> ${form.dropoffContact || ""}</p>
      <h3>Session Booking</h3>
      <p><strong>Booking Type:</strong> ${form.bookingType || ""}</p>
      <p><strong>One-Off Date:</strong> ${form.oneOffDate || ""}</p>
      <p><strong>Friday AM:</strong> ${form.sessionFridayAM ? "Yes" : "No"}</p>
      <p><strong>Community Lunch:</strong> ${form.sessionLunch ? "Yes" : "No"}</p>
      <p><strong>Friday PM:</strong> ${form.sessionFridayPM ? "Yes" : "No"}</p>
      <p><strong>Order Starter Pack:</strong> ${form.starterPack || ""}</p>
      <h3>Medical and Allergy Info</h3>
      <p><strong>Allergies/Intolerances:</strong> ${form.hasAllergies ? "Yes" : "No"}</p>
      <p><strong>Allergy Details:</strong> ${form.allergies || ""}</p>
      <p><strong>Medical Conditions/Needs:</strong> ${form.hasMedical ? "Yes" : "No"}</p>
      <p><strong>Medical Details:</strong> ${form.medical || ""}</p>
      <p><strong>Medication:</strong> ${form.hasMedication ? "Yes" : "No"}</p>
      <p><strong>Medication Details:</strong> ${form.medication || ""}</p>
      <h3>Permissions</h3>
      <p><strong>Photo Consent:</strong> ${form.photoConsent || ""}</p>
      <h3>Additional Notes and Consent</h3>
      <p><strong>Additional Notes:</strong> ${form.additionalNotes || ""}</p>
      <p><strong>Digital Signature:</strong> ${form.digitalSignature || ""}</p>
      <p><strong>Date Signed:</strong> ${form.signatureDate || ""}</p>
      <p><strong>Agreed to Privacy Policy and Terms:</strong> ${form.agree ? "Yes" : "No"}</p>
    `;

    const data = await resend.emails.send({
      from: "Wild flowers Booking <enquiries@wildflowerscommunity.uk>",
      to: ["enquiries@wildflowerscommunity.uk"],
      subject: `New booking from ${form.parentFullName || "Unknown Parent"}`,
      html,
    });

    return NextResponse.json({ message: "Booking sent", data });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { message: "Failed to send booking" },
      { status: 500 }
    );
  }
}
