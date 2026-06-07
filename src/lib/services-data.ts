import repairs from "@/assets/service-repairs.jpg";
import painting from "@/assets/service-painting.jpg";
import gardening from "@/assets/service-gardening.jpg";
import carpentry from "@/assets/service-carpentry.jpg";
import maintenance from "@/assets/service-maintenance.jpg";
import handyman from "@/assets/service-handyman.jpg";

export type ServiceCategory =
  | "Repairs"
  | "Painting"
  | "Gardening"
  | "Carpentry"
  | "Maintenance";

export const services = [
  {
    slug: "home-repairs",
    title: "Home Repairs",
    image: repairs,
    category: "Repairs" as ServiceCategory,
    description:
      "Fast, reliable fixes for everything from leaky taps and broken tiles to electrical fittings and door repairs.",
    benefits: ["Same-day call-outs", "Fixed transparent pricing", "Quality parts & finish"],
  },
  {
    slug: "painting",
    title: "Painting Services",
    image: painting,
    category: "Painting" as ServiceCategory,
    description:
      "Interior and exterior painting with clean lines and zero mess. Premium paints and professional preparation.",
    benefits: ["Premium paint brands", "Dust-free preparation", "Free colour consultation"],
  },
  {
    slug: "gardening",
    title: "Gardening & Landscaping",
    image: gardening,
    category: "Gardening" as ServiceCategory,
    description:
      "From a quick tidy-up to full garden makeovers — lawns, hedges, decking and planting handled by pros.",
    benefits: ["Full clean-up included", "Eco-friendly approach", "Regular maintenance plans"],
  },
  {
    slug: "carpentry",
    title: "Carpentry Services",
    image: carpentry,
    category: "Carpentry" as ServiceCategory,
    description:
      "Bespoke carpentry: shelving, flooring, doors, decking and fitted furniture finished to a high standard.",
    benefits: ["Custom-built solutions", "Premium hardwood options", "Precision craftsmanship"],
  },
  {
    slug: "property-maintenance",
    title: "Property Maintenance",
    image: maintenance,
    category: "Maintenance" as ServiceCategory,
    description:
      "Reliable upkeep for landlords and homeowners — gutters, roofs, paintwork and routine inspections.",
    benefits: ["Monthly service plans", "Landlord-friendly invoicing", "Single point of contact"],
  },
  {
    slug: "general-handyman",
    title: "General Handyman Services",
    image: handyman,
    category: "Repairs" as ServiceCategory,
    description:
      "Flat-pack assembly, TV mounting, picture hanging and the long list of small jobs — sorted in one visit.",
    benefits: ["No job too small", "Hourly or fixed pricing", "Fully insured tradespeople"],
  },
] as const;

export const categories: ServiceCategory[] = [
  "Repairs",
  "Painting",
  "Gardening",
  "Carpentry",
  "Maintenance",
];