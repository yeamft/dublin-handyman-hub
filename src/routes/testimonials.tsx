import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Fix It Dublin Reviews" },
      { name: "description", content: "Hear what Dublin homeowners say about our handyman, painting, gardening and carpentry work." },
      { property: "og:title", content: "Fix It Dublin Testimonials" },
      { property: "og:description", content: "5-star Dublin reviews from real customers." },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: TestimonialsPage,
});

const reviews = [
  { name: "Sarah O'Connor", area: "Rathmines, D6", rating: 5, text: "Fixed three jobs in one visit — painting touch-ups, a wobbly banister and a leaking tap. Spotless, on time and friendly. Already booked them again." },
  { name: "Liam Byrne", area: "Clontarf, D3", rating: 5, text: "Great value and proper craftsmanship on our decking. The team explained every option and finished a day early." },
  { name: "Aoife Murphy", area: "Stoneybatter, D7", rating: 5, text: "Polite, tidy and properly skilled. They turned our hallway around in a weekend and it looks brand new." },
  { name: "David Walsh", area: "Sandymount, D4", rating: 5, text: "Honest pricing, no surprises. Came back to redo a small bit at no extra cost. That's how you keep customers." },
  { name: "Emma Doyle", area: "Drumcondra, D9", rating: 5, text: "Booked for a 'tidy-up' of the garden and got a transformation. Hedges, lawn, planting — all handled beautifully." },
  { name: "Mark Kennedy", area: "Phibsborough, D7", rating: 5, text: "As a landlord, having one reliable team for everything is gold. Fix It Dublin handle four of my properties now." },
];

function TestimonialsPage() {
  return (
    <>
      <PageHero eyebrow="Testimonials" title="What our customers say" subtitle="Real Dublin homeowners, landlords and businesses sharing their experience." />

      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            {[
              { stat: "4.9 / 5", label: "Average rating" },
              { stat: "200+", label: "Verified reviews" },
              { stat: "98%", label: "Would recommend" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl gradient-primary p-6 text-primary-foreground text-center shadow-glow">
                <div className="text-3xl font-bold">{s.stat}</div>
                <div className="mt-1 text-sm opacity-90">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r) => (
              <div key={r.name} className="relative rounded-2xl border border-border bg-card p-7 shadow-card transition-smooth hover:-translate-y-1 hover:shadow-elegant">
                <Quote className="absolute top-5 right-5 h-8 w-8 text-primary/15" />
                <div className="flex">
                  {[...Array(r.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
                </div>
                <p className="mt-4 text-foreground leading-relaxed">"{r.text}"</p>
                <div className="mt-6 border-t border-border pt-4">
                  <div className="text-sm font-semibold text-dark-gray">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.area}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="rounded-3xl gradient-hero p-10 md:p-16 text-primary-foreground text-center shadow-elegant">
            <h2 className="text-3xl md:text-4xl">Join 200+ happy Dublin customers</h2>
            <p className="mt-3 text-primary-foreground/80 max-w-xl mx-auto">Get a free, no-obligation quote and find out why Dubliners keep coming back.</p>
            <div className="mt-7 flex flex-wrap gap-3 justify-center">
              <Button asChild variant="hero" size="xl"><Link to="/contact">Get a Free Quote</Link></Button>
              <Button asChild variant="outlineHero" size="xl"><Link to="/services">Browse services</Link></Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}