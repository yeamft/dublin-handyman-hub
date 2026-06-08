const builtinCategories = ["Repairs", "Painting", "Gardening", "Carpentry", "Maintenance"];
const STORAGE_KEY = "fix-it-dublin-admin-data";
const DEFAULT_SUPER = {
  id: "user-super",
  name: "Admin User",
  email: "admin@fixitdublin.com",
  password: "admin123",
  role: "super",
  createdAt: (/* @__PURE__ */ new Date()).toISOString()
};
const defaultData = {
  contacts: [
    {
      id: "contact-demo-1",
      name: "Niamh Kelly",
      email: "niamh@example.com",
      phone: "+353 87 555 0111",
      message: "Can you repair a broken internal door handle and patch a small wall hole?",
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      status: "New"
    }
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
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      status: "In progress"
    }
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
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      status: "New"
    }
  ],
  testimonials: [
    {
      id: "testimonial-demo-1",
      name: "Sarah O'Connor",
      area: "Rathmines, D6",
      rating: 5,
      text: "Fixed three jobs in one visit — spotless, on time and friendly.",
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    }
  ],
  services: [],
  portfolio: [],
  customCategories: [],
  adminUsers: [DEFAULT_SUPER]
};
const isBrowser = () => typeof window !== "undefined";
function createId(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}
function getAdminData() {
  if (!isBrowser()) return defaultData;
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (!saved) return defaultData;
  try {
    const parsed = JSON.parse(saved);
    return {
      contacts: parsed.contacts ?? defaultData.contacts,
      appointments: parsed.appointments ?? defaultData.appointments,
      quotes: parsed.quotes ?? defaultData.quotes,
      testimonials: parsed.testimonials ?? defaultData.testimonials,
      services: parsed.services ?? defaultData.services,
      portfolio: parsed.portfolio ?? defaultData.portfolio,
      customCategories: parsed.customCategories ?? defaultData.customCategories,
      adminUsers: parsed.adminUsers?.length ? parsed.adminUsers : defaultData.adminUsers
    };
  } catch {
    return defaultData;
  }
}
function saveAdminData(data) {
  if (!isBrowser()) return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
function addContactMessage(message) {
  const data = getAdminData();
  data.contacts.unshift({ ...message, id: createId("contact"), createdAt: (/* @__PURE__ */ new Date()).toISOString(), status: "New" });
  saveAdminData(data);
}
function addAppointmentRequest(appointment) {
  const data = getAdminData();
  data.appointments.unshift({ ...appointment, id: createId("appointment"), createdAt: (/* @__PURE__ */ new Date()).toISOString(), status: "New" });
  saveAdminData(data);
}
export {
  DEFAULT_SUPER as D,
  addContactMessage as a,
  builtinCategories as b,
  addAppointmentRequest as c,
  createId as d,
  getAdminData as g,
  saveAdminData as s
};
