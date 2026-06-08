import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { B as Button } from "./router-BiDOj-Nv.mjs";
import { P as PageHero } from "./PageHero-C8C8ItKC.mjs";
import { h as heroImg } from "./hero-handyman-BDaGeLWk.mjs";
import "../_libs/sonner.mjs";
import { q as ShieldCheck, s as Sparkles, H as HeartHandshake, t as Target } from "../_libs/lucide-react.mjs";
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
const values = [{
  icon: ShieldCheck,
  title: "Reliability",
  desc: "We turn up when we say we will, every time."
}, {
  icon: Sparkles,
  title: "Quality",
  desc: "Pride in our craft and respect for your home."
}, {
  icon: HeartHandshake,
  title: "Honesty",
  desc: "Straight talk, fair quotes, no surprises."
}, {
  icon: Target,
  title: "Care",
  desc: "We treat every job as if it were our own home."
}];
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "About Us", title: "Built by Dubliners, for Dublin homes", subtitle: "A small, skilled team committed to making home maintenance simple, friendly, and properly done." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-6 grid gap-12 lg:grid-cols-2 lg:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "Fix It Dublin team", loading: "lazy", width: 1600, height: 1200, className: "rounded-3xl shadow-elegant w-full h-auto object-cover aspect-[4/3]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-widest text-primary", children: "Our Story" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl md:text-4xl text-dark-gray", children: "A decade of trusted Dublin workmanship" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: "Fix It Dublin started in 2014 with a simple idea: most homeowners just want a reliable handyman who picks up the phone and does a great job. From a one-person operation, we've grown into a trusted team of skilled tradespeople serving homeowners, landlords and small businesses right across the city." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: "We're proud of our reputation — but we're prouder of the relationships we've built. Many of our customers have been with us for years, and most new bookings still come through word of mouth." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid grid-cols-3 gap-4", children: [{
          stat: "10+",
          label: "Years in Dublin"
        }, {
          stat: "2,000+",
          label: "Jobs completed"
        }, {
          stat: "4.9★",
          label: "Average rating"
        }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-4 text-center shadow-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-primary", children: s.stat }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-muted-foreground", children: s.label })
        ] }, s.label)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28 bg-secondary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-widest text-primary", children: "Our Values" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl md:text-4xl text-dark-gray", children: "What we stand for" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Four simple principles guide every job we take on." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: values.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-card transition-smooth hover:-translate-y-1 hover:shadow-elegant", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-grid h-12 w-12 place-items-center rounded-xl gradient-primary text-primary-foreground shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(v.icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-lg font-semibold text-dark-gray", children: v.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: v.desc })
      ] }, v.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 lg:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-widest text-primary", children: "Mission" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 text-2xl md:text-3xl text-dark-gray", children: "Make Dublin homes easier to look after" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: "We exist to take the stress out of home maintenance. Our mission is to be the single, dependable team Dubliners call for anything around the house." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-widest text-primary", children: "Customer-First" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 text-2xl md:text-3xl text-dark-gray", children: "You stay in control, always" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: "Clear quotes before we start. A tidy workspace while we're there. A friendly follow-up when we're done. That's the standard." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "hero", size: "xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Work with us" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", size: "xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", children: "Browse services" }) })
      ] })
    ] }) })
  ] });
}
export {
  AboutPage as component
};
