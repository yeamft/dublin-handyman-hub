import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { B as Button } from "./router-BiDOj-Nv.mjs";
import { P as PageHero } from "./PageHero-C8C8ItKC.mjs";
import { s as services } from "./services-data-BbHGALVh.mjs";
import { g as getAdminData } from "./admin-store-Py7tE2py.mjs";
import "../_libs/sonner.mjs";
import { C as CircleCheck, e as ArrowRight } from "../_libs/lucide-react.mjs";
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
function ServicesPage() {
  const [adminServices, setAdminServices] = reactExports.useState([]);
  reactExports.useEffect(() => {
    setAdminServices(getAdminData().services);
  }, []);
  const allServices = [...services.map((s) => ({
    ...s,
    image: s.image,
    imageDataUrl: void 0,
    benefits: [...s.benefits]
  })), ...adminServices.map((s) => ({
    slug: s.slug,
    title: s.title,
    image: "",
    imageDataUrl: s.imageDataUrl,
    category: s.category,
    description: s.description,
    benefits: s.benefits
  }))];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Our Services", title: "Everything your home needs", subtitle: "One trusted team for repairs, painting, gardening, carpentry and ongoing property maintenance." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-8 md:grid-cols-2", children: allServices.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-smooth hover:-translate-y-1 hover:shadow-elegant", children: [
      (s.imageDataUrl || s.image) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden aspect-[16/10]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s.imageDataUrl || s.image, alt: s.title, loading: "lazy", width: 1200, height: 900, className: "h-full w-full object-cover transition-smooth group-hover:scale-105" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col p-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-widest text-primary", children: s.category }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-2xl font-bold text-dark-gray", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground leading-relaxed", children: s.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-2", children: s.benefits.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 mt-0.5 text-primary shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: b })
        ] }, b)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap gap-3 pt-4 border-t border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "hero", size: "lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Book Service" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", size: "lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", children: [
            "Request Quote ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] }) })
        ] })
      ] })
    ] }, s.slug)) }) }) })
  ] });
}
export {
  ServicesPage as component
};
