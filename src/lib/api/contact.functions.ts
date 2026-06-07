import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import nodemailer from "nodemailer";

const ADMIN_EMAIL = "fkt2119@gmail.com";

const contactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  message: z.string(),
});

const bookingSchema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  phone: z.string(),
  service: z.string(),
  date: z.string(),
  time: z.string(),
  address: z.string(),
  notes: z.string().optional(),
});

function createTransporter() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
}

export const sendContactEmail = createServerFn({ method: "POST" })
  .inputValidator(contactSchema)
  .handler(async ({ data }) => {
    const transporter = createTransporter();
    await transporter.sendMail({
      from: `"Fix It Dublin" <${process.env.GMAIL_USER}>`,
      to: ADMIN_EMAIL,
      subject: `New Contact Message from ${data.name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `,
    });
    return { ok: true };
  });

export const sendBookingEmail = createServerFn({ method: "POST" })
  .inputValidator(bookingSchema)
  .handler(async ({ data }) => {
    const transporter = createTransporter();
    await transporter.sendMail({
      from: `"Fix It Dublin" <${process.env.GMAIL_USER}>`,
      to: ADMIN_EMAIL,
      subject: `New Booking Request from ${data.fullName}`,
      html: `
        <h2>New Appointment Booking</h2>
        <p><strong>Name:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Service:</strong> ${data.service}</p>
        <p><strong>Date:</strong> ${data.date} at ${data.time}</p>
        <p><strong>Address:</strong> ${data.address}</p>
        ${data.notes ? `<p><strong>Notes:</strong> ${data.notes}</p>` : ""}
      `,
    });
    return { ok: true };
  });
