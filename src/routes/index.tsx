import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  BadgeEuro,
  Hammer,
  Clock,
  MapPin,
  ArrowRight,
  Phone,
  Star,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/services-data";
import heroImg from "@/assets/hero-handyman.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fix It Dublin — Reliable Handyman Services Across Dublin" },
      { name: "description", content: "Professional home repairs, painting, gardening & carpentry across Dublin. Get a free quote in minutes." },
      { property: "og:title", content: "Fix It Dublin — Reliable Handyman Services" },
      { property: "og:description", content: "Professional home repairs, painting, gardening & carpentry across Dublin." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const whyUs = [
  { icon: ShieldCheck, title: "Reliable Service", desc: "Punctual, vetted tradespeople you can trust in your home." },
  { icon: BadgeEuro, title: "Affordable Pricing", desc: "Transparent quotes with no hidden fees — ever." },
  { icon: Hammer, title: "Skilled Workmanship", desc: "Decades of combined experience across every trade." },
  { icon: Clock, title: "Fast Response Times", desc: "Most jobs scheduled within 24–48 hours." },
  { icon: MapPin, title: "Local Dublin Experts", desc: "Dublin born and based — we know the local stock." },
];

const testimonials = [
  { name: "Sarah O'Connor", area: "Rathmines, D6", text: "Fixed three jobs in one visit — painting, a wobbly banister and a leaking tap. Spotless and on time." },
  { name: "Liam Byrne", area: "Clontarf, D3", text: "Great value and proper craftsmanship. The garden looks transformed. Highly recommend." },
  { name: "Aoife Murphy", area: "Stoneybatter, D7", text: "Polite, tidy and properly skilled. Already booked them for the next room." },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-hero text-primary-foreground">
        <div className="absolute inset-0 opacity-30 mix-blend-overlay [background-image:radial-gradient(circle_at_20%_20%,white,transparent_40%),radial-gradient(circle_at_80%_60%,white,transparent_50%)]" />

        {/* Animated background orbs */}
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-primary-glow/15 blur-3xl" style={{ animation: "float 7s ease-in-out infinite" }} />
        <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-2xl" />

        <div className="container relative mx-auto grid gap-12 px-4 py-20 md:px-6 md:py-28 lg:grid-cols-2 lg:items-center">

          {/* ── Left copy ── */}
          <div className="flex flex-col">
            <span className="hero-badge inline-flex w-fit items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-glow animate-pulse" /> Trusted across Dublin since 2014
            </span>

            <h1 className="hero-h1 mt-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Reliable Handyman <br className="hidden md:block" />
              Services Across{" "}
              <span className="relative inline-block text-primary-glow">
                Dublin
                <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-primary-glow/60"
                  style={{ animation: "hero-fade-right 0.8s cubic-bezier(0.22,1,0.36,1) 1s both" }} />
              </span>
            </h1>

            <p className="hero-sub mt-5 max-w-xl text-base text-primary-foreground/80 md:text-lg">
              Professional home repairs, painting, gardening, and carpentry — done right, on time, and at fair Dublin prices.
            </p>

            <div className="hero-btns mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="xl" className="hero-glow">
                <Link to="/contact">Get a Free Quote <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outlineHero" size="xl">
                <Link to="/contact">Book a Service</Link>
              </Button>
              <Button asChild variant="ghost" size="xl" className="text-primary-foreground hover:bg-primary-foreground/10">
                <a href="tel:+353871234567"><Phone className="h-4 w-4" /> Call Now</a>
              </Button>
            </div>

            <div className="hero-trust mt-10 flex flex-wrap items-center gap-6 text-sm text-primary-foreground/70">
              {[
                "Fully insured",
                "Free quotes",
                "5-star rated",
              ].map((label, i) => (
                <div key={label} className="flex items-center gap-2"
                  style={{ animation: `hero-fade-up 0.5s cubic-bezier(0.22,1,0.36,1) ${0.95 + i * 0.12}s both` }}>
                  <CheckCircle2 className="h-4 w-4 text-primary-glow" /> {label}
                </div>
              ))}
            </div>
          </div>

          {/* ── Right image ── */}
          <div className="hero-img relative">
            {/* Glow blob */}
            <div className="absolute -inset-6 rounded-3xl bg-primary/25 blur-3xl" style={{ animation: "glow-pulse 3s ease-in-out infinite" }} />

            {/* Floating image wrapper */}
            <div className="hero-float relative">
              <img
                src={heroImg}
                width={1600}
                height={1200}
                alt="Professional Fix It Dublin handyman ready to help"
                className="relative rounded-3xl shadow-elegant w-full h-auto object-cover aspect-[4/3] ring-1 ring-white/10"
              />

              {/* Rating badge */}
              <div className="hero-rating absolute -bottom-5 -left-5 hidden md:flex items-center gap-3 rounded-2xl bg-background text-foreground px-4 py-3 shadow-elegant">
                <div className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
                </div>
                <div className="text-xs">
                  <div className="font-semibold">4.9 / 5</div>
                  <div className="text-muted-foreground">200+ Dublin reviews</div>
                </div>
              </div>

              {/* Jobs done badge */}
              <div className="absolute -top-4 -right-4 hidden md:flex flex-col items-center justify-center h-20 w-20 rounded-full bg-primary shadow-glow text-primary-foreground text-center"
                style={{ animation: "badge-pop 0.6s cubic-bezier(0.34,1.56,0.64,1) 1.3s both" }}>
                <span className="text-xl font-bold leading-none">500+</span>
                <span className="text-[9px] uppercase tracking-wide opacity-80 leading-tight">Jobs done</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Why Fix It Dublin</span>
            <h2 className="mt-3 text-3xl md:text-4xl text-dark-gray">The handyman you'd recommend to your neighbour</h2>
            <p className="mt-4 text-muted-foreground">We built Fix It Dublin to be the easy, reliable choice for Dublin homes — clear pricing, real craftsmanship, and friendly service.</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {whyUs.map((w) => (
              <div key={w.title} className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-smooth hover:-translate-y-1 hover:shadow-elegant">
                <span className="inline-grid h-12 w-12 place-items-center rounded-xl gradient-primary text-primary-foreground shadow-glow">
                  <w.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-dark-gray">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">Our Services</span>
              <h2 className="mt-3 text-3xl md:text-4xl text-dark-gray">Everything your home needs, one trusted team</h2>
            </div>
            <Button asChild variant="outline" size="lg">
              <Link to="/services">View all services <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s) => (
              <Link
                key={s.slug}
                to="/services"
                className="group block overflow-hidden rounded-2xl bg-card border border-border shadow-card transition-smooth hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="overflow-hidden aspect-[4/3]">
                  <img src={s.image} alt={s.title} loading="lazy" width={1200} height={900} className="h-full w-full object-cover transition-smooth group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-dark-gray">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{s.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Customer Stories</span>
            <h2 className="mt-3 text-3xl md:text-4xl text-dark-gray">Dublin homeowners trust us</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <div className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
                </div>
                <p className="mt-4 text-foreground leading-relaxed">"{t.text}"</p>
                <div className="mt-5 border-t border-border pt-4">
                  <div className="text-sm font-semibold text-dark-gray">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.area}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="overflow-hidden rounded-3xl gradient-hero p-10 md:p-16 text-primary-foreground shadow-elegant relative">
            <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_80%_20%,white,transparent_40%)]" />
            <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl">Ready to get it fixed?</h2>
                <p className="mt-3 text-primary-foreground/80">Tell us about your job — we'll come back with a free, no-obligation quote within hours.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="hero" size="xl"><Link to="/contact">Get a Free Quote</Link></Button>
                <Button asChild variant="outlineHero" size="xl"><a href="tel:+353871234567"><Phone className="h-4 w-4" /> +353 87 123 4567</a></Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
