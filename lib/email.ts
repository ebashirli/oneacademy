import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(qr: string) {
  try {
    const response = await resend.emails.send({
      from: "info@oneacademy.az",
      to: "ebashirli@gmail.com",
      subject: "New QR Parameter Triggered",
      html: `<p>A user accessed with QR param: <strong>${qr}</strong></p>`,
    });

    console.log("Email sent with Resend:", response);
  } catch (error) {
    console.error("Resend email failed:", error);
  }
}
