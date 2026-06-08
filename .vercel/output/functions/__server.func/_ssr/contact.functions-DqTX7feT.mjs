import { T as TSS_SERVER_FUNCTION, a as createServerFn } from "./server-j61WAxgv.mjs";
import { n as nodemailer } from "../_libs/nodemailer.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "events";
import "url";
import "fs";
import "http";
import "https";
import "zlib";
import "net";
import "dns";
import "os";
import "path";
import "tls";
import "child_process";
var createServerRpc = (serverFnMeta, splitImportFn) => {
  const url = "/_serverFn/" + serverFnMeta.id;
  return Object.assign(splitImportFn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const ADMIN_EMAIL = "fkt2119@gmail.com";
const contactSchema = objectType({
  name: stringType(),
  email: stringType().email(),
  phone: stringType(),
  message: stringType()
});
const bookingSchema = objectType({
  fullName: stringType(),
  email: stringType().email(),
  phone: stringType(),
  service: stringType(),
  date: stringType(),
  time: stringType(),
  address: stringType(),
  notes: stringType().optional()
});
function createTransporter() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD
    }
  });
}
const sendContactEmail_createServerFn_handler = createServerRpc({
  id: "9c6bbcc38ff832edead4ab27296aff8211eb16e33754aa39f39fe680989058fa",
  name: "sendContactEmail",
  filename: "src/lib/api/contact.functions.ts"
}, (opts) => sendContactEmail.__executeServer(opts));
const sendContactEmail = createServerFn({
  method: "POST"
}).inputValidator(contactSchema).handler(sendContactEmail_createServerFn_handler, async ({
  data
}) => {
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
      `
  });
  return {
    ok: true
  };
});
const sendBookingEmail_createServerFn_handler = createServerRpc({
  id: "2a45f69cd38d9ebd202940515c3a323dcb7255ef9ef40932944f8bec42d7f0c8",
  name: "sendBookingEmail",
  filename: "src/lib/api/contact.functions.ts"
}, (opts) => sendBookingEmail.__executeServer(opts));
const sendBookingEmail = createServerFn({
  method: "POST"
}).inputValidator(bookingSchema).handler(sendBookingEmail_createServerFn_handler, async ({
  data
}) => {
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
      `
  });
  return {
    ok: true
  };
});
export {
  sendBookingEmail_createServerFn_handler,
  sendContactEmail_createServerFn_handler
};
