import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { B as Button } from "./router-BiDOj-Nv.mjs";
import { I as Input, T as Textarea, S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem, L as Label } from "./select-4QkP97Fc.mjs";
import { P as PageHero } from "./PageHero-C8C8ItKC.mjs";
import { a as addContactMessage, c as addAppointmentRequest } from "./admin-store-Py7tE2py.mjs";
import { a as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./server-j61WAxgv.mjs";
import "../_libs/seroval.mjs";
import { P as Phone, b as Mail, c as MapPin, f as Clock, S as Send } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-select.mjs";
import "../_libs/radix-ui__number.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-arrow.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const contactSchema$1 = objectType({
  name: stringType(),
  email: stringType().email(),
  phone: stringType(),
  message: stringType()
});
const bookingSchema$1 = objectType({
  fullName: stringType(),
  email: stringType().email(),
  phone: stringType(),
  service: stringType(),
  date: stringType(),
  time: stringType(),
  address: stringType(),
  notes: stringType().optional()
});
const sendContactEmail = createServerFn({
  method: "POST"
}).inputValidator(contactSchema$1).handler(createSsrRpc("9c6bbcc38ff832edead4ab27296aff8211eb16e33754aa39f39fe680989058fa"));
const sendBookingEmail = createServerFn({
  method: "POST"
}).inputValidator(bookingSchema$1).handler(createSsrRpc("2a45f69cd38d9ebd202940515c3a323dcb7255ef9ef40932944f8bec42d7f0c8"));
const contactSchema = objectType({
  name: stringType().trim().min(2, "Please enter your name").max(100),
  email: stringType().trim().email("Enter a valid email").max(255),
  phone: stringType().trim().min(7, "Enter a valid phone number").max(30),
  message: stringType().trim().min(10, "Please tell us a bit more").max(1e3)
});
const bookingSchema = objectType({
  fullName: stringType().trim().min(2, "Please enter your name").max(100),
  email: stringType().trim().email("Enter a valid email").max(255),
  phone: stringType().trim().min(7, "Enter a valid phone").max(30),
  service: stringType().min(1, "Choose a service"),
  date: stringType().min(1, "Pick a date"),
  time: stringType().min(1, "Pick a time"),
  address: stringType().trim().min(5, "Enter the property address").max(255),
  notes: stringType().trim().max(1e3).optional()
});
const serviceOptions = ["Home Repairs", "Painting", "Gardening", "Carpentry", "Property Maintenance", "General Handyman Services"];
const areas = ["Dublin 1 – City Centre", "Dublin 2", "Dublin 3 – Clontarf", "Dublin 4 – Sandymount", "Dublin 6 – Rathmines", "Dublin 7 – Stoneybatter", "Dublin 8", "Dublin 9 – Drumcondra", "Dublin 12", "Dublin 14 – Dundrum", "Dublin 15 – Blanchardstown", "Dublin 18 – Sandyford", "Dún Laoghaire", "Swords", "Malahide", "Tallaght"];
function ContactPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Contact", title: "Let's get your job sorted", subtitle: "Call, message, or book a slot online — we'll come back to you fast." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-20 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-4", children: [{
      icon: Phone,
      title: "Call us",
      value: "+353 87 123 4567",
      href: "tel:+353871234567"
    }, {
      icon: Mail,
      title: "Email",
      value: "jim.obrien61@gmail.com",
      href: "mailto:jim.obrien61@gmail.com"
    }, {
      icon: MapPin,
      title: "Service area",
      value: "All across Dublin"
    }, {
      icon: Clock,
      title: "Hours",
      value: "Mon–Sat: 8:00 – 19:00"
    }].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-card text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-grid h-12 w-12 place-items-center rounded-xl gradient-primary text-primary-foreground shadow-glow mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground", children: c.title }),
      c.href ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: c.href, className: "mt-1 block text-sm font-semibold text-dark-gray hover:text-primary", children: c.value }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm font-semibold text-dark-gray", children: c.value })
    ] }, c.title)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pb-20 md:pb-28 bg-secondary/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(QuickContactForm, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(BookingForm, {})
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pb-20 md:pb-28 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-3xl shadow-elegant border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "Fix It Dublin service area map", src: "https://www.google.com/maps?q=Dublin,Ireland&output=embed", loading: "lazy", className: "w-full h-[420px] border-0", referrerPolicy: "no-referrer-when-downgrade" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-widest text-primary", children: "Coverage" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl md:text-4xl text-dark-gray", children: "Serving every corner of Dublin" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "We cover the city centre and surrounding areas — including:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 grid grid-cols-2 gap-2", children: areas.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground", children: a }, a)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-5 text-sm text-muted-foreground", children: [
          "Not sure if we cover your area? ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+353871234567", className: "text-primary font-semibold", children: "Just give us a call" }),
          "."
        ] })
      ] })
    ] }) }) })
  ] });
}
function Field({
  label,
  name,
  error,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: name, className: "text-sm font-medium text-dark-gray", children: label }),
    children,
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: error })
  ] });
}
function QuickContactForm() {
  const [errors, setErrors] = reactExports.useState({});
  const [loading, setLoading] = reactExports.useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const result = contactSchema.safeParse(data);
    if (!result.success) {
      const errs = {};
      result.error.issues.forEach((i) => {
        if (i.path[0]) errs[i.path[0]] = i.message;
      });
      setErrors(errs);
      toast.error("Please fix the highlighted fields");
      return;
    }
    setErrors({});
    setLoading(true);
    setTimeout(() => {
      addContactMessage(result.data);
      sendContactEmail({
        data: result.data
      }).catch(console.error);
      setLoading(false);
      form.reset();
      toast.success("Message sent — we'll be in touch within a few hours.");
    }, 800);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, noValidate: true, className: "rounded-3xl border border-border bg-card p-7 md:p-8 shadow-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl text-dark-gray", children: "Quick Contact" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Send a message and we'll respond by phone or email." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Name", name: "name", error: errors.name, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "name", name: "name", placeholder: "Your name" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", name: "email", error: errors.email, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "email", name: "email", type: "email", placeholder: "you@example.com" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", name: "phone", error: errors.phone, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "phone", name: "phone", type: "tel", placeholder: "+353 ..." }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Message", name: "message", error: errors.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { id: "message", name: "message", rows: 5, placeholder: "Tell us about the job..." }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", variant: "hero", size: "xl", className: "mt-6 w-full", disabled: loading, children: loading ? "Sending..." : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" }),
      " Send Message"
    ] }) })
  ] });
}
function BookingForm() {
  const [errors, setErrors] = reactExports.useState({});
  const [service, setService] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const payload = {
      ...data,
      service
    };
    const result = bookingSchema.safeParse(payload);
    if (!result.success) {
      const errs = {};
      result.error.issues.forEach((i) => {
        if (i.path[0]) errs[i.path[0]] = i.message;
      });
      setErrors(errs);
      toast.error("Please fix the highlighted fields");
      return;
    }
    setErrors({});
    setLoading(true);
    setTimeout(() => {
      addAppointmentRequest({
        fullName: result.data.fullName,
        email: result.data.email,
        phone: result.data.phone,
        service: result.data.service,
        date: result.data.date,
        time: result.data.time,
        address: result.data.address,
        notes: result.data.notes
      });
      sendBookingEmail({
        data: {
          ...result.data,
          notes: result.data.notes ?? ""
        }
      }).catch(console.error);
      setLoading(false);
      form.reset();
      setService("");
      toast.success("Booking received! We'll confirm your appointment shortly.");
    }, 900);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, noValidate: true, className: "rounded-3xl border border-border bg-card p-7 md:p-8 shadow-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl text-dark-gray", children: "Book Your Handyman Service" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Choose your preferred service and date, and we'll contact you to confirm your appointment." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full name", name: "fullName", error: errors.fullName, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "fullName", name: "fullName", placeholder: "Your full name" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", name: "bk-email", error: errors.email, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "bk-email", name: "email", type: "email", placeholder: "you@example.com" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", name: "bk-phone", error: errors.phone, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "bk-phone", name: "phone", type: "tel", placeholder: "+353 ..." }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Service required", name: "service", error: errors.service, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: service, onValueChange: setService, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select a service" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: serviceOptions.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Preferred date", name: "date", error: errors.date, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "date", name: "date", type: "date" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Preferred time", name: "time", error: errors.time, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "time", name: "time", type: "time" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Property address", name: "address", error: errors.address, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "address", name: "address", placeholder: "Street, area, Dublin" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Additional notes", name: "notes", error: errors.notes, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { id: "notes", name: "notes", rows: 3, placeholder: "Anything we should know?" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-col sm:flex-row gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", variant: "hero", size: "xl", className: "flex-1", disabled: loading, children: loading ? "Booking..." : "Book Appointment" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", size: "xl", className: "flex-1", onClick: () => toast.info("Use the Quick Contact form for a free quote — we'll respond fast."), children: "Request Free Quote" })
    ] })
  ] });
}
export {
  ContactPage as component
};
