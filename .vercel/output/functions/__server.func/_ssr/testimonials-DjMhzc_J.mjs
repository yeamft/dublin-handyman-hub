import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { B as Button } from "./router-BiDOj-Nv.mjs";
import { P as PageHero } from "./PageHero-C8C8ItKC.mjs";
import "../_libs/sonner.mjs";
import { Q as Quote, d as Star } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
const reviews = [{
  name: "Sarah O'Connor",
  area: "Rathmines, D6",
  rating: 5,
  text: "Fixed three jobs in one visit — painting touch-ups, a wobbly banister and a leaking tap. Spotless, on time and friendly. Already booked them again."
}, {
  name: "Liam Byrne",
  area: "Clontarf, D3",
  rating: 5,
  text: "Great value and proper craftsmanship on our decking. The team explained every option and finished a day early."
}, {
  name: "Aoife Murphy",
  area: "Stoneybatter, D7",
  rating: 5,
  text: "Polite, tidy and properly skilled. They turned our hallway around in a weekend and it looks brand new."
}, {
  name: "David Walsh",
  area: "Sandymount, D4",
  rating: 5,
  text: "Honest pricing, no surprises. Came back to redo a small bit at no extra cost. That's how you keep customers."
}, {
  name: "Emma Doyle",
  area: "Drumcondra, D9",
  rating: 5,
  text: "Booked for a 'tidy-up' of the garden and got a transformation. Hedges, lawn, planting — all handled beautifully."
}, {
  name: "Mark Kennedy",
  area: "Phibsborough, D7",
  rating: 5,
  text: "As a landlord, having one reliable team for everything is gold. Fix It Dublin handle four of my properties now."
}];
function TestimonialsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Testimonials", title: "What our customers say", subtitle: "Real Dublin homeowners, landlords and businesses sharing their experience." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 md:py-16 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-3 max-w-4xl mx-auto", children: [{
      stat: "4.9 / 5",
      label: "Average rating"
    }, {
      stat: "200+",
      label: "Verified reviews"
    }, {
      stat: "98%",
      label: "Would recommend"
    }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl gradient-primary p-6 text-primary-foreground text-center shadow-glow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold", children: s.stat }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm opacity-90", children: s.label })
    ] }, s.label)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pb-20 md:pb-28 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: reviews.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-2xl border border-border bg-card p-7 shadow-card transition-smooth hover:-translate-y-1 hover:shadow-elegant", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "absolute top-5 right-5 h-8 w-8 text-primary/15" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex", children: [...Array(r.rating)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-primary text-primary" }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-foreground leading-relaxed", children: [
        '"',
        r.text,
        '"'
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 border-t border-border pt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-dark-gray", children: r.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: r.area })
      ] })
    ] }, r.name)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl gradient-hero p-10 md:p-16 text-primary-foreground text-center shadow-elegant", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl", children: "Join 200+ happy Dublin customers" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-primary-foreground/80 max-w-xl mx-auto", children: "Get a free, no-obligation quote and find out why Dubliners keep coming back." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 flex flex-wrap gap-3 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "hero", size: "xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Get a Free Quote" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outlineHero", size: "xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", children: "Browse services" }) })
      ] })
    ] }) }) })
  ] });
}
export {
  TestimonialsPage as component
};
