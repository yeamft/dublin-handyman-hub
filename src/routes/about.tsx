import { createFileRoute, Link } from "@tanstack/react-router";
import { HeartHandshake, Sparkles, Target, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import heroImg from "@/assets/hero-handyman.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Fix It Dublin — Local Handyman Experts" },
      { name: "description", content: "Meet the team behind Fix It Dublin. A decade of trusted home repairs, painting, gardening and carpentry across Dublin." },
      { property: "og:title", content: "About Fix It Dublin" },
      { property: "og:description", content: "Local Dublin handymen with a decade of trusted experience." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: ShieldCheck, title: "Reliability", desc: "We turn up when we say we will, every time." },
  { icon: Sparkles, title: "Quality", desc: "Pride in our craft and respect for your home." },
  { icon: HeartHandshake, title: "Honesty", desc: "Straight talk, fair quotes, no surprises." },
  { icon: Target, title: "Care", desc: "We treat every job as if it were our own home." },
];

function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Us" title="Built by Dubliners, for Dublin homes" subtitle="A small, skilled team committed to making home maintenance simple, friendly, and properly done." />

      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6 grid gap-12 lg:grid-cols-2 lg:items-center">
          <img src={heroImg} alt="Fix It Dublin team" loading="lazy" width={1600} height={1200} className="rounded-3xl shadow-elegant w-full h-auto object-cover aspect-[4/3]" />
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Our Story</span>
            <h2 className="mt-3 text-3xl md:text-4xl text-dark-gray">A decade of trusted Dublin workmanship</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Fix It Dublin started in 2014 with a simple idea: most homeowners just want a reliable handyman who picks up the phone and does a great job. From a one-person operation, we've grown into a trusted team of skilled tradespeople serving homeowners, landlords and small businesses right across the city.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We're proud of our reputation — but we're prouder of the relationships we've built. Many of our customers have been with us for years, and most new bookings still come through word of mouth.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { stat: "10+", label: "Years in Dublin" },
                { stat: "2,000+", label: "Jobs completed" },
                { stat: "4.9★", label: "Average rating" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl border border-border bg-card p-4 text-center shadow-card">
                  <div className="text-2xl font-bold text-primary">{s.stat}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary/40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Our Values</span>
            <h2 className="mt-3 text-3xl md:text-4xl text-dark-gray">What we stand for</h2>
            <p className="mt-4 text-muted-foreground">Four simple principles guide every job we take on.</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-6 shadow-card transition-smooth hover:-translate-y-1 hover:shadow-elegant">
                <span className="inline-grid h-12 w-12 place-items-center rounded-xl gradient-primary text-primary-foreground shadow-glow">
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-dark-gray">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">Mission</span>
              <h3 className="mt-3 text-2xl md:text-3xl text-dark-gray">Make Dublin homes easier to look after</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">We exist to take the stress out of home maintenance. Our mission is to be the single, dependable team Dubliners call for anything around the house.</p>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">Customer-First</span>
              <h3 className="mt-3 text-2xl md:text-3xl text-dark-gray">You stay in control, always</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">Clear quotes before we start. A tidy workspace while we're there. A friendly follow-up when we're done. That's the standard.</p>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="xl"><Link to="/contact">Work with us</Link></Button>
            <Button asChild variant="outline" size="xl"><Link to="/services">Browse services</Link></Button>
          </div>
        </div>
      </section>
    </>
  );
}