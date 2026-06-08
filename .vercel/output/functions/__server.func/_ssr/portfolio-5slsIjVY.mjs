import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero } from "./PageHero-C8C8ItKC.mjs";
import { s as services } from "./services-data-BbHGALVh.mjs";
import { g as getAdminData, b as builtinCategories } from "./admin-store-Py7tE2py.mjs";
import { c as cn } from "./router-BiDOj-Nv.mjs";
import "../_libs/sonner.mjs";
import { X } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
function buildStaticItems() {
  const spans = ["tall", "normal", "wide", "normal", "normal", "tall", "wide", "normal", "normal", "tall", "normal", "wide"];
  return Array.from({
    length: 12
  }, (_, i) => {
    const s = services[i % services.length];
    return {
      id: `static-${i}`,
      title: `${s.title} project`,
      category: s.category,
      image: s.image,
      span: spans[i]
    };
  });
}
function PortfolioPage() {
  const staticItems = reactExports.useMemo(buildStaticItems, []);
  const [adminItems, setAdminItems] = reactExports.useState([]);
  const [customCats, setCustomCats] = reactExports.useState([]);
  reactExports.useEffect(() => {
    const d = getAdminData();
    setAdminItems(d.portfolio);
    setCustomCats(d.customCategories);
  }, []);
  const allItems = [...staticItems, ...adminItems.map((p) => ({
    id: p.id,
    title: p.title,
    category: p.category,
    image: p.imageDataUrl || p.imageUrl,
    span: p.span
  }))];
  const allFilterCats = [.../* @__PURE__ */ new Set([...builtinCategories, ...customCats, ...adminItems.map((p) => p.category)])];
  const [filter, setFilter] = reactExports.useState("All");
  const [lightbox, setLightbox] = reactExports.useState(null);
  const filtered = filter === "All" ? allItems : allItems.filter((i) => i.category === filter);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Portfolio", title: "Recent work across Dublin", subtitle: "A snapshot of completed projects — from quick fixes to full transformations." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-20 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 justify-center", children: ["All", ...allFilterCats].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setFilter(c), className: cn("px-5 py-2 rounded-full text-sm font-medium border transition-smooth", filter === c ? "gradient-primary text-primary-foreground border-transparent shadow-glow" : "border-border bg-card text-foreground hover:border-primary hover:text-primary"), children: c }, c)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] gap-4", children: filtered.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setLightbox(item), className: cn("group relative overflow-hidden rounded-2xl shadow-card transition-smooth hover:shadow-elegant", item.span === "tall" && "row-span-2", item.span === "wide" && "col-span-2"), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.image, alt: item.title, loading: "lazy", className: "absolute inset-0 h-full w-full object-cover transition-smooth group-hover:scale-110" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-dark-gray/80 via-dark-gray/0 to-transparent opacity-80 group-hover:opacity-100 transition-smooth" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-4 text-left text-primary-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-primary-glow", children: item.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: item.title })
        ] })
      ] }, item.id)) })
    ] }) }),
    lightbox && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { role: "dialog", "aria-modal": "true", className: "fixed inset-0 z-[60] bg-dark-gray/90 backdrop-blur-md p-4 flex items-center justify-center animate-fade-in", onClick: () => setLightbox(null), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { "aria-label": "Close", className: "absolute top-5 right-5 grid h-11 w-11 place-items-center rounded-full bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20", onClick: () => setLightbox(null), children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "max-w-5xl w-full", onClick: (e) => e.stopPropagation(), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: lightbox.image, alt: lightbox.title, className: "w-full h-auto max-h-[80vh] object-contain rounded-2xl shadow-elegant" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-4 text-center text-primary-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-primary-glow", children: lightbox.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-semibold", children: lightbox.title })
        ] })
      ] })
    ] })
  ] });
}
export {
  PortfolioPage as component
};
