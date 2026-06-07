export type RequestStatus = "New" | "In progress" | "Replied" | "Closed";

export type ServiceCategory = string;

export const builtinCategories: ServiceCategory[] = ["Repairs", "Painting", "Gardening", "Carpentry", "Maintenance"];

export type AdminService = {
  id: string;
  slug: string;
  title: string;
  category: ServiceCategory;
  description: string;
  benefits: string[];
  imageDataUrl?: string;
  createdAt: string;
};

export type AdminPortfolioItem = {
  id: string;
  title: string;
  category: ServiceCategory;
  imageUrl: string;
  imageDataUrl?: string;
  span: "normal" | "tall" | "wide";
  createdAt: string;
};

export type ContactMessage = {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
  status: RequestStatus;
  reply?: string;
};

export type AppointmentRequest = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  address: string;
  notes?: string;
  createdAt: string;
  status: RequestStatus;
  reply?: string;
};

export type QuoteRequest = {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  details: string;
  budget?: string;
  createdAt: string;
  status: RequestStatus;
  reply?: string;
};

export type AdminTestimonial = {
  id: string;
  name: string;
  area: string;
  rating: number;
  text: string;
  createdAt: string;
};

export type AdminRole = "super" | "admin" | "viewer";

export type AdminUser = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: AdminRole;
  createdAt: string;
};

export type AdminData = {
  contacts: ContactMessage[];
  appointments: AppointmentRequest[];
  quotes: QuoteRequest[];
  testimonials: AdminTestimonial[];
  services: AdminService[];
  portfolio: AdminPortfolioItem[];
  customCategories: string[];
  adminUsers: AdminUser[];
};

const STORAGE_KEY = "fix-it-dublin-admin-data";

export const DEFAULT_SUPER: AdminUser = {
  id: "user-super",
  name: "Admin User",
  email: "admin@fixitdublin.com",
  password: "admin123",
  role: "super",
  createdAt: new Date().toISOString(),
};

const defaultData: AdminData = {
  contacts: [
    {
      id: "contact-demo-1",
      name: "Niamh Kelly",
      email: "niamh@example.com",
      phone: "+353 87 555 0111",
      message: "Can you repair a broken internal door handle and patch a small wall hole?",
      createdAt: new Date().toISOString(),
      status: "New",
    },
  ],
  appointments: [
    {
      id: "appointment-demo-1",
      fullName: "Conor Ryan",
      email: "conor@example.com",
      phone: "+353 86 555 0133",
      service: "Painting",
      date: "2026-06-12",
      time: "10:00",
      address: "Rathmines, Dublin 6",
      notes: "Bedroom repaint, walls only.",
      createdAt: new Date().toISOString(),
      status: "In progress",
    },
  ],
  quotes: [
    {
      id: "quote-demo-1",
      name: "Grace Murphy",
      email: "grace@example.com",
      phone: "+353 85 555 0144",
      service: "Garden tidy-up",
      details: "Hedge trimming, lawn cut, and removal of green waste in Clontarf.",
      budget: "€250–€400",
      createdAt: new Date().toISOString(),
      status: "New",
    },
  ],
  testimonials: [
    {
      id: "testimonial-demo-1",
      name: "Sarah O'Connor",
      area: "Rathmines, D6",
      rating: 5,
      text: "Fixed three jobs in one visit — spotless, on time and friendly.",
      createdAt: new Date().toISOString(),
    },
  ],
  services: [],
  portfolio: [],
  customCategories: [],
  adminUsers: [DEFAULT_SUPER],
};

const isBrowser = () => typeof window !== "undefined";

export function createId(prefix: string) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export function getAdminData(): AdminData {
  if (!isBrowser()) return defaultData;
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (!saved) return defaultData;
  try {
    const parsed = JSON.parse(saved) as Partial<AdminData>;
    return {
      contacts: parsed.contacts ?? defaultData.contacts,
      appointments: parsed.appointments ?? defaultData.appointments,
      quotes: parsed.quotes ?? defaultData.quotes,
      testimonials: parsed.testimonials ?? defaultData.testimonials,
      services: parsed.services ?? defaultData.services,
      portfolio: parsed.portfolio ?? defaultData.portfolio,
      customCategories: parsed.customCategories ?? defaultData.customCategories,
    adminUsers: parsed.adminUsers?.length ? parsed.adminUsers : defaultData.adminUsers,
    };
  } catch {
    return defaultData;
  }
}

export function addQuoteRequest(quote: Omit<QuoteRequest, "id" | "createdAt" | "status">) {
  const data = getAdminData();
  data.quotes.unshift({ ...quote, id: createId("quote"), createdAt: new Date().toISOString(), status: "New" });
  saveAdminData(data);
}

export function saveAdminData(data: AdminData) {
  if (!isBrowser()) return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function addContactMessage(message: Omit<ContactMessage, "id" | "createdAt" | "status">) {
  const data = getAdminData();
  data.contacts.unshift({ ...message, id: createId("contact"), createdAt: new Date().toISOString(), status: "New" });
  saveAdminData(data);
}

export function addAppointmentRequest(appointment: Omit<AppointmentRequest, "id" | "createdAt" | "status">) {
  const data = getAdminData();
  data.appointments.unshift({ ...appointment, id: createId("appointment"), createdAt: new Date().toISOString(), status: "New" });
  saveAdminData(data);
}
