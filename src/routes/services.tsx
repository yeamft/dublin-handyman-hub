import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useMemo } from "react";
import {
  CheckCircle2,
  ArrowRight,
  Phone,
  Clock,
  ShieldCheck,
  BadgeEuro,
  Wrench,
  CalendarCheck,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { services as staticServices, categories } from "@/lib/services-data";
import { getAdminData, type AdminService } from "@/lib/admin-store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Fix It Dublin Handyman" },
      { name: "description", content: "Home repairs, painting, gardening, carpentry, property maintenance and general handyman services across Dublin." },
      { property: "og:title", content: "Fix It Dublin Services" },
      { property: "og:description", content: "Browse our full range of Dublin handyman services." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

type ServiceItem = {
  slug: string;
  title: string;
  image: string;
  imageDataUrl?: string;
  category: string;
  description: string;
  benefits: string[];
  popular?: boolean;
};

const POPULAR_SLUGS = new Set(["home-repairs", "general-handyman", "painting"]);

const howItWorks = [
  { icon: MessageSquare, step: "1", title: "Tell us the job", desc: "Call, message, or use our quick form — describe what you need fixed or improved." },
  { icon: BadgeEuro, step: "2", title: "Get a free quote", desc: "Transparent pricing with no hidden fees. We respond within a few hours on weekdays." },
  { icon: CalendarCheck, step: "3", title: "We get it done", desc: "Most visits booked within 24–48 hours. Tidy, insured, and on time." },
];

function ServicesPage() {
  const [adminServices, setAdminServices] = useState<AdminService[]>([]);
  const [customCats, setCustomCats] = useState<string[]>([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const data = getAdminData();
    setAdminServices(data.services);
    setCustomCats(data.customCategories);
  }, []);

  const allServices: ServiceItem[] = useMemo(
    () => [
      ...staticServices.map((s) => ({
        slug: s.slug,
        title: s.title,
        image: s.image as string,
        imageDataUrl: undefined as string | undefined,
        category: s.category,
        description: s.description,
        benefits: [...s.benefits],
        popular: POPULAR_SLUGS.has(s.slug),
      })),
      ...adminServices.map((s) => ({
        slug: s.slug,
        title: s.title,
        image: "",
        imageDataUrl: s.imageDataUrl,
        category: s.category,
        description: s.description,
        benefits: s.benefits,
        popular: false,
      })),
    ],
    [adminServices],
  );

  const filterCategories = useMemo(
    () => ["All", ...new Set([...categories, ...customCats, ...allServices.map((s) => s.category)])],
    [allServices, customCats],
  );

  const filtered =
    filter === "All" ? allServices : allServices.filter((s) => s.category === filter);

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="One team for every job around the house"
        subtitle="Repairs, painting, gardening, carpentry and property maintenance across Dublin — free quotes, fair prices, same-week availability."
      />

      {/* Trust strip */}
      <section className="border-b border-border bg-secondary/40">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Wrench, label: `${allServices.length} services offered` },
              { icon: Clock, label: "Most jobs within 24–48 hrs" },
              { icon: ShieldCheck, label: "Fully insured tradespeople" },
              { icon: BadgeEuro, label: "Free, no-obligation quotes" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-card">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg gradient-primary text-primary-foreground shadow-glow">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium text-dark-gray">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">What we do</span>
              <h2 className="mt-3 text-3xl md:text-4xl text-dark-gray">Browse by service type</h2>
              <p className="mt-3 text-muted-foreground">
                Filter by category or scroll through our full range. Every service includes a free quote before work begins.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {filterCategories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setFilter(c)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium border transition-smooth",
                  filter === c
                    ? "gradient-primary text-primary-foreground border-transparent shadow-glow"
                    : "border-border bg-card text-foreground hover:border-primary hover:text-primary",
                )}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {filtered.map((s) => (
              <article
                key={s.slug}
                id={s.slug}
                className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-smooth hover:-translate-y-1 hover:shadow-elegant scroll-mt-24"
              >
                {(s.imageDataUrl || s.image) && (
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img
                      src={s.imageDataUrl || s.image}
                      alt={s.title}
                      loading="lazy"
                      width={1200}
                      height={900}
                      className="h-full w-full object-cover transition-smooth group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-gray/50 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    {s.popular && (
                      <span className="absolute top-4 left-4 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary-foreground shadow-glow">
                        Popular
                      </span>
                    )}
                  </div>
                )}
                <div className="flex flex-1 flex-col p-7">
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary">{s.category}</span>
                  <h3 className="mt-2 text-2xl font-bold text-dark-gray">{s.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{s.description}</p>
                  <ul className="mt-5 space-y-2">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap items-center gap-3 pt-4 border-t border-border">
                    <Button asChild variant="hero" size="lg">
                      <Link to="/contact">Get a Free Quote</Link>
                    </Button>
                    <Link
                      to="/portfolio"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all"
                    >
                      See our work <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-12 text-center text-muted-foreground">No services in this category yet. Try another filter or contact us for a custom job.</p>
          )}
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Simple process</span>
            <h2 className="mt-3 text-3xl md:text-4xl text-dark-gray">How booking works</h2>
            <p className="mt-3 text-muted-foreground">Three easy steps from enquiry to a job well done.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {howItWorks.map(({ icon: Icon, step, title, desc }) => (
              <div key={step} className="relative rounded-2xl border border-border bg-card p-7 shadow-card text-center">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 grid h-7 w-7 place-items-center rounded-full gradient-primary text-xs font-bold text-primary-foreground shadow-glow">
                  {step}
                </span>
                <span className="mx-auto mt-2 grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-dark-gray">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 md:pb-28 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="overflow-hidden rounded-3xl gradient-hero p-10 md:p-14 text-primary-foreground shadow-elegant relative">
            <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_80%_20%,white,transparent_40%)]" />
            <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-4xl">Not sure which service you need?</h2>
                <p className="mt-3 text-primary-foreground/80">
                  Describe the job and we'll point you in the right direction — or handle multiple tasks in one visit.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="hero" size="xl">
                  <Link to="/contact">Get a Free Quote <ArrowRight className="h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="outlineHero" size="xl">
                  <a href="tel:+353871234567"><Phone className="h-4 w-4" /> +353 87 123 4567</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
