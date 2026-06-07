import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { services } from "@/lib/services-data";

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

function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Our Services" title="Everything your home needs" subtitle="One trusted team for repairs, painting, gardening, carpentry and ongoing property maintenance." />

      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((s) => (
              <article key={s.slug} className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-smooth hover:-translate-y-1 hover:shadow-elegant">
                <div className="overflow-hidden aspect-[16/10]">
                  <img src={s.image} alt={s.title} loading="lazy" width={1200} height={900} className="h-full w-full object-cover transition-smooth group-hover:scale-105" />
                </div>
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
                  <div className="mt-6 flex flex-wrap gap-3 pt-4 border-t border-border">
                    <Button asChild variant="hero" size="lg"><Link to="/contact">Book Service</Link></Button>
                    <Button asChild variant="outline" size="lg"><Link to="/contact">Request Quote <ArrowRight className="h-4 w-4" /></Link></Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}