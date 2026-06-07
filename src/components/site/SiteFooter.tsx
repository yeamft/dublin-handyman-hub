import { Link } from "@tanstack/react-router";
import { Wrench, Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";

const services = [
  "Home Repairs",
  "Painting Services",
  "Gardening Services",
  "Carpentry Services",
  "Property Maintenance",
  "General Handyman",
];

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-dark-gray text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-xl gradient-primary shadow-glow">
                <Wrench className="h-5 w-5" />
              </span>
              <span className="text-lg font-bold">Fix It Dublin</span>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed">
              Reliable home repairs, painting, gardening & carpentry services across Dublin. Professional workmanship, fair pricing.
            </p>
            <div className="mt-5 flex gap-3">
              <a aria-label="Facebook" href="https://facebook.com" target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-full bg-primary-foreground/10 hover:bg-primary transition-smooth">
                <Facebook className="h-4 w-4" />
              </a>
              <a aria-label="Instagram" href="https://instagram.com" target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-full bg-primary-foreground/10 hover:bg-primary transition-smooth">
                <Instagram className="h-4 w-4" />
              </a>
              <a aria-label="WhatsApp" href="https://wa.me/353871234567" target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-full bg-primary-foreground/10 hover:bg-primary transition-smooth">
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-primary-foreground/70 hover:text-primary-foreground transition-smooth">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground">Services</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {services.map((s) => (
                <li key={s} className="text-primary-foreground/70">{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-primary-glow" />
                <a href="tel:+353871234567" className="hover:text-primary-foreground">+353 87 123 4567</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-primary-glow" />
                <a href="mailto:jim.obrien61@gmail.com" className="hover:text-primary-foreground">jim.obrien61@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-primary-glow" />
                <span>Dublin, Ireland</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Fix It Dublin. All rights reserved.</p>
          <p>Fix It Dublin – Reliable Home Repairs, Painting, Gardening & Carpentry Services Across Dublin.</p>
        </div>
      </div>
    </footer>
  );
}