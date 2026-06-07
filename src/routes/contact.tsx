import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { PageHero } from "@/components/site/PageHero";
import { addAppointmentRequest, addContactMessage } from "@/lib/admin-store";
import { sendContactEmail, sendBookingEmail } from "@/lib/api/contact.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Booking — Fix It Dublin" },
      { name: "description", content: "Book a Dublin handyman or request a free quote. Call, message or use our quick booking form." },
      { property: "og:title", content: "Contact Fix It Dublin" },
      { property: "og:description", content: "Get a free quote or book a handyman service across Dublin." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(30),
  message: z.string().trim().min(10, "Please tell us a bit more").max(1000),
});

const bookingSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(7, "Enter a valid phone").max(30),
  service: z.string().min(1, "Choose a service"),
  date: z.string().min(1, "Pick a date"),
  time: z.string().min(1, "Pick a time"),
  address: z.string().trim().min(5, "Enter the property address").max(255),
  notes: z.string().trim().max(1000).optional(),
});

const serviceOptions = [
  "Home Repairs",
  "Painting",
  "Gardening",
  "Carpentry",
  "Property Maintenance",
  "General Handyman Services",
];

const areas = [
  "Dublin 1 – City Centre", "Dublin 2", "Dublin 3 – Clontarf", "Dublin 4 – Sandymount",
  "Dublin 6 – Rathmines", "Dublin 7 – Stoneybatter", "Dublin 8", "Dublin 9 – Drumcondra",
  "Dublin 12", "Dublin 14 – Dundrum", "Dublin 15 – Blanchardstown", "Dublin 18 – Sandyford",
  "Dún Laoghaire", "Swords", "Malahide", "Tallaght",
];

function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's get your job sorted" subtitle="Call, message, or book a slot online — we'll come back to you fast." />

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { icon: Phone, title: "Call us", value: "+353 87 123 4567", href: "tel:+353871234567" },
              { icon: Mail, title: "Email", value: "jim.obrien61@gmail.com", href: "mailto:jim.obrien61@gmail.com" },
              { icon: MapPin, title: "Service area", value: "All across Dublin" },
              { icon: Clock, title: "Hours", value: "Mon–Sat: 8:00 – 19:00" },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-border bg-card p-6 shadow-card text-center">
                <span className="inline-grid h-12 w-12 place-items-center rounded-xl gradient-primary text-primary-foreground shadow-glow mx-auto">
                  <c.icon className="h-5 w-5" />
                </span>
                <div className="mt-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{c.title}</div>
                {c.href ? (
                  <a href={c.href} className="mt-1 block text-sm font-semibold text-dark-gray hover:text-primary">{c.value}</a>
                ) : (
                  <div className="mt-1 text-sm font-semibold text-dark-gray">{c.value}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <QuickContactForm />
            <BookingForm />
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl shadow-elegant border border-border">
              <iframe
                title="Fix It Dublin service area map"
                src="https://www.google.com/maps?q=Dublin,Ireland&output=embed"
                loading="lazy"
                className="w-full h-[420px] border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">Coverage</span>
              <h2 className="mt-3 text-3xl md:text-4xl text-dark-gray">Serving every corner of Dublin</h2>
              <p className="mt-3 text-muted-foreground">We cover the city centre and surrounding areas — including:</p>
              <ul className="mt-5 grid grid-cols-2 gap-2">
                {areas.map((a) => (
                  <li key={a} className="rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground">
                    {a}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-muted-foreground">Not sure if we cover your area? <a href="tel:+353871234567" className="text-primary font-semibold">Just give us a call</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, error, children }: { label: string; name: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={name} className="text-sm font-medium text-dark-gray">{label}</Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}

function QuickContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const result = contactSchema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => { if (i.path[0]) errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      toast.error("Please fix the highlighted fields");
      return;
    }
    setErrors({});
    setLoading(true);
    setTimeout(() => {
      addContactMessage(result.data);
      sendContactEmail({ data: result.data }).catch(console.error);
      setLoading(false);
      form.reset();
      toast.success("Message sent — we'll be in touch within a few hours.");
    }, 800);
  };

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-3xl border border-border bg-card p-7 md:p-8 shadow-card">
      <h2 className="text-2xl md:text-3xl text-dark-gray">Quick Contact</h2>
      <p className="mt-2 text-sm text-muted-foreground">Send a message and we'll respond by phone or email.</p>

      <div className="mt-6 space-y-4">
        <Field label="Name" name="name" error={errors.name}><Input id="name" name="name" placeholder="Your name" /></Field>
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Email" name="email" error={errors.email}><Input id="email" name="email" type="email" placeholder="you@example.com" /></Field>
          <Field label="Phone" name="phone" error={errors.phone}><Input id="phone" name="phone" type="tel" placeholder="+353 ..." /></Field>
        </div>
        <Field label="Message" name="message" error={errors.message}>
          <Textarea id="message" name="message" rows={5} placeholder="Tell us about the job..." />
        </Field>
      </div>

      <Button type="submit" variant="hero" size="xl" className="mt-6 w-full" disabled={loading}>
        {loading ? "Sending..." : (<><Send className="h-4 w-4" /> Send Message</>)}
      </Button>
    </form>
  );
}

function BookingForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [service, setService] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const payload = { ...data, service };
    const result = bookingSchema.safeParse(payload);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => { if (i.path[0]) errs[i.path[0] as string] = i.message; });
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
        notes: result.data.notes,
      });
      sendBookingEmail({ data: { ...result.data, notes: result.data.notes ?? "" } }).catch(console.error);
      setLoading(false);
      form.reset();
      setService("");
      toast.success("Booking received! We'll confirm your appointment shortly.");
    }, 900);
  };

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-3xl border border-border bg-card p-7 md:p-8 shadow-card">
      <h2 className="text-2xl md:text-3xl text-dark-gray">Book Your Handyman Service</h2>
      <p className="mt-2 text-sm text-muted-foreground">Choose your preferred service and date, and we'll contact you to confirm your appointment.</p>

      <div className="mt-6 space-y-4">
        <Field label="Full name" name="fullName" error={errors.fullName}><Input id="fullName" name="fullName" placeholder="Your full name" /></Field>
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Email" name="bk-email" error={errors.email}><Input id="bk-email" name="email" type="email" placeholder="you@example.com" /></Field>
          <Field label="Phone" name="bk-phone" error={errors.phone}><Input id="bk-phone" name="phone" type="tel" placeholder="+353 ..." /></Field>
        </div>
        <Field label="Service required" name="service" error={errors.service}>
          <Select value={service} onValueChange={setService}>
            <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
            <SelectContent>
              {serviceOptions.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
            </SelectContent>
          </Select>
        </Field>
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Preferred date" name="date" error={errors.date}><Input id="date" name="date" type="date" /></Field>
          <Field label="Preferred time" name="time" error={errors.time}><Input id="time" name="time" type="time" /></Field>
        </div>
        <Field label="Property address" name="address" error={errors.address}><Input id="address" name="address" placeholder="Street, area, Dublin" /></Field>
        <Field label="Additional notes" name="notes" error={errors.notes}>
          <Textarea id="notes" name="notes" rows={3} placeholder="Anything we should know?" />
        </Field>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <Button type="submit" variant="hero" size="xl" className="flex-1" disabled={loading}>
          {loading ? "Booking..." : "Book Appointment"}
        </Button>
        <Button type="button" variant="outline" size="xl" className="flex-1" onClick={() => toast.info("Use the Quick Contact form for a free quote — we'll respond fast.")}>
          Request Free Quote
        </Button>
      </div>
    </form>
  );
}