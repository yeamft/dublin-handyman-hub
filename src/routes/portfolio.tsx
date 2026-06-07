import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, useEffect } from "react";
import { X } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { categories, services as staticServices, type ServiceCategory } from "@/lib/services-data";
import { getAdminData, type AdminPortfolioItem, builtinCategories } from "@/lib/admin-store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio & Gallery — Fix It Dublin" },
      { name: "description", content: "Browse completed handyman, painting, gardening and carpentry projects across Dublin." },
      { property: "og:title", content: "Fix It Dublin Portfolio" },
      { property: "og:description", content: "Recent Dublin projects: repairs, painting, gardening, carpentry, maintenance." },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

type Item = { id: string; title: string; category: string; image: string; span: "tall" | "wide" | "normal" };

function buildStaticItems(): Item[] {
  const spans: Item["span"][] = ["tall", "normal", "wide", "normal", "normal", "tall", "wide", "normal", "normal", "tall", "normal", "wide"];
  return Array.from({ length: 12 }, (_, i) => {
    const s = staticServices[i % staticServices.length];
    return { id: `static-${i}`, title: `${s.title} project`, category: s.category, image: s.image, span: spans[i] };
  });
}

function PortfolioPage() {
  const staticItems = useMemo(buildStaticItems, []);
  const [adminItems, setAdminItems] = useState<AdminPortfolioItem[]>([]);
  const [customCats, setCustomCats] = useState<string[]>([]);
  useEffect(() => {
    const d = getAdminData();
    setAdminItems(d.portfolio);
    setCustomCats(d.customCategories);
  }, []);

  const allItems: Item[] = [
    ...staticItems,
    ...adminItems.map((p) => ({ id: p.id, title: p.title, category: p.category, image: p.imageDataUrl || p.imageUrl, span: p.span })),
  ];

  const allFilterCats = [...new Set([...builtinCategories, ...customCats, ...adminItems.map((p) => p.category)])];

  const [filter, setFilter] = useState<string>("All");
  const [lightbox, setLightbox] = useState<Item | null>(null);
  const filtered = filter === "All" ? allItems : allItems.filter((i) => i.category === filter);

  return (
    <>
      <PageHero eyebrow="Portfolio" title="Recent work across Dublin" subtitle="A snapshot of completed projects — from quick fixes to full transformations." />

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {(["All", ...allFilterCats] as string[]).map((c) => (
              <button
                key={c}
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

          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] gap-4">
            {filtered.map((item) => (
              <button
                key={item.id}
                onClick={() => setLightbox(item)}
                className={cn(
                  "group relative overflow-hidden rounded-2xl shadow-card transition-smooth hover:shadow-elegant",
                  item.span === "tall" && "row-span-2",
                  item.span === "wide" && "col-span-2",
                )}
              >
                <img src={item.image} alt={item.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-smooth group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-gray/80 via-dark-gray/0 to-transparent opacity-80 group-hover:opacity-100 transition-smooth" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-left text-primary-foreground">
                  <div className="text-[10px] uppercase tracking-widest text-primary-glow">{item.category}</div>
                  <div className="text-sm font-semibold">{item.title}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[60] bg-dark-gray/90 backdrop-blur-md p-4 flex items-center justify-center animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            aria-label="Close"
            className="absolute top-5 right-5 grid h-11 w-11 place-items-center rounded-full bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
            onClick={() => setLightbox(null)}
          >
            <X className="h-5 w-5" />
          </button>
          <figure className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.image} alt={lightbox.title} className="w-full h-auto max-h-[80vh] object-contain rounded-2xl shadow-elegant" />
            <figcaption className="mt-4 text-center text-primary-foreground">
              <div className="text-xs uppercase tracking-widest text-primary-glow">{lightbox.category}</div>
              <div className="text-lg font-semibold">{lightbox.title}</div>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}