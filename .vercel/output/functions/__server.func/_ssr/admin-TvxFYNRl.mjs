import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { B as Button, c as cn } from "./router-BiDOj-Nv.mjs";
import { L as Label, I as Input, S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem, T as Textarea } from "./select-4QkP97Fc.mjs";
import { D as DEFAULT_SUPER, g as getAdminData, s as saveAdminData, d as createId } from "./admin-store-Py7tE2py.mjs";
import { W as Wrench, g as ChevronRight, L as LayoutDashboard, h as MessageSquare, i as Calendar, Q as Quote, d as Star, j as FileText, T as Tag, U as Users, X, k as LogOut, M as Menu, R as RefreshCw, l as ChevronDown, b as Mail, m as Trash2, n as Plus, E as Eye, o as Pencil, p as Check, q as ShieldCheck } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-select.mjs";
import "../_libs/radix-ui__number.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-arrow.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
const Card = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      className: cn("rounded-xl border bg-card text-card-foreground shadow", className),
      ...props
    }
  )
);
Card.displayName = "Card";
const CardHeader = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("flex flex-col space-y-1.5 p-6", className), ...props })
);
CardHeader.displayName = "CardHeader";
const CardTitle = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      className: cn("font-semibold leading-none tracking-tight", className),
      ...props
    }
  )
);
CardTitle.displayName = "CardTitle";
const CardDescription = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("text-sm text-muted-foreground", className), ...props })
);
CardDescription.displayName = "CardDescription";
const CardContent = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("p-6 pt-0", className), ...props })
);
CardContent.displayName = "CardContent";
const CardFooter = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("flex items-center p-6 pt-0", className), ...props })
);
CardFooter.displayName = "CardFooter";
const statuses = ["New", "In progress", "Replied", "Closed"];
const allCategories = ["Repairs", "Painting", "Gardening", "Carpentry", "Maintenance"];
const roles = ["super", "admin", "viewer"];
function AdminPage() {
  const [authedUser, setAuthedUser] = reactExports.useState(null);
  if (!authedUser) return /* @__PURE__ */ jsxRuntimeExports.jsx(LoginScreen, { onLogin: setAuthedUser });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AdminShell, { currentUser: authedUser, onLogout: () => setAuthedUser(null) });
}
function LoginScreen({
  onLogin
}) {
  const [error, setError] = reactExports.useState("");
  const submit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const email = fd.get("email");
    const password = fd.get("password");
    const users = getAdminData().adminUsers;
    const match = users.find((u) => u.email === email && u.password === password);
    if (match) onLogin(match);
    else setError("Invalid credentials.");
  };
  const superUser = DEFAULT_SUPER;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex flex-col items-center justify-center bg-white/20 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 flex flex-col items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "grid h-14 w-14 place-items-center rounded-2xl gradient-primary shadow-glow transition-transform hover:scale-105", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Wrench, { className: "h-7 w-7 text-white" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-dark-gray", children: "Fix It Dublin" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Admin Portal" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-white p-8 shadow-elegant", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-dark-gray mb-1", children: "Sign in" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mb-6", children: [
        "Demo — ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: superUser.email }),
        " / ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: superUser.password })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "email", name: "email", type: "email", defaultValue: superUser.email })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "password", children: "Password" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "password", name: "password", type: "password", defaultValue: superUser.password })
        ] }),
        error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-destructive", children: error }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", variant: "hero", size: "lg", className: "w-full mt-2", children: "Sign in to Dashboard" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "inline-flex w-full items-center justify-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3.5 w-3.5 rotate-180" }),
          " Back to website"
        ] })
      ] })
    ] })
  ] }) });
}
function AdminShell({
  currentUser,
  onLogout
}) {
  const [section, setSection] = reactExports.useState("overview");
  const [sidebarOpen, setSidebarOpen] = reactExports.useState(false);
  const [data, setData] = reactExports.useState(getAdminData);
  const persist = (next) => {
    setData(next);
    saveAdminData(next);
  };
  const refresh = () => setData(getAdminData());
  reactExports.useEffect(() => {
    const onStorage = () => setData(getAdminData());
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);
  const counts = {
    messages: data.contacts.filter((c) => c.status === "New").length,
    appointments: data.appointments.filter((a) => a.status === "New").length,
    quotes: data.quotes.filter((q) => q.status === "New").length
  };
  const navItems = [{
    id: "overview",
    label: "Overview",
    icon: LayoutDashboard
  }, {
    id: "messages",
    label: "Messages",
    icon: MessageSquare,
    badge: counts.messages
  }, {
    id: "appointments",
    label: "Appointments",
    icon: Calendar,
    badge: counts.appointments
  }, {
    id: "quotes",
    label: "Quotes",
    icon: Quote,
    badge: counts.quotes
  }, {
    id: "testimonials",
    label: "Testimonials",
    icon: Star
  }, {
    id: "services",
    label: "Services",
    icon: Wrench
  }, {
    id: "portfolio",
    label: "Portfolio",
    icon: FileText
  }, {
    id: "service-category",
    label: "Categories",
    icon: Tag
  }, ...currentUser.role === "super" ? [{
    id: "users",
    label: "Users",
    icon: Users
  }] : []];
  const sectionLabel = navItems.find((n) => n.id === section)?.label ?? "";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 flex bg-slate-50 overflow-hidden", children: [
    sidebarOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-40 bg-black/50 lg:hidden", onClick: () => setSidebarOpen(false) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: cn("fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-slate-900 transition-transform duration-300 lg:static lg:translate-x-0", sidebarOpen ? "translate-x-0" : "-translate-x-full"), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-16 items-center gap-3 border-b border-white/10 px-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-9 w-9 shrink-0 place-items-center rounded-xl gradient-primary shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Wrench, { className: "h-4 w-4 text-white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-sm font-bold text-white", children: "Fix It Dublin" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-slate-400", children: "Admin" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "ml-auto grid h-7 w-7 place-items-center rounded-md text-slate-400 hover:text-white lg:hidden", onClick: () => setSidebarOpen(false), children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex-1 overflow-y-auto px-3 py-4 space-y-1", children: navItems.map(({
        id,
        label,
        icon: Icon,
        badge
      }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
        setSection(id);
        setSidebarOpen(false);
      }, className: cn("flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors", section === id ? "bg-primary text-white shadow-glow" : "text-slate-400 hover:bg-white/5 hover:text-white"), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-left", children: label }),
        badge != null && badge > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white", children: badge })
      ] }, id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-white/10 p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 rounded-xl bg-white/5 px-3 py-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-white", children: currentUser.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-[11px] text-slate-400", children: currentUser.email }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 inline-flex items-center gap-1 rounded-full bg-primary/20 px-2 py-0.5 text-[10px] font-semibold text-primary-foreground/80 capitalize", children: currentUser.role })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", size: "sm", className: "w-full justify-start text-slate-400 hover:bg-white/5 hover:text-white", onClick: onLogout, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" }),
          " Sign out"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col min-w-0 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex h-16 shrink-0 items-center gap-4 border-b border-border bg-white px-4 md:px-6 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "grid h-9 w-9 place-items-center rounded-lg border border-border text-muted-foreground hover:bg-secondary lg:hidden", onClick: () => setSidebarOpen(true), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Admin" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3.5 w-3.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: sectionLabel })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: refresh, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "h-3.5 w-3.5" }),
            " Refresh"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", className: "hidden sm:flex", onClick: onLogout, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-3.5 w-3.5" }),
            " Logout"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 overflow-y-auto bg-slate-50 p-4 md:p-6 lg:p-8", children: [
        section === "overview" && /* @__PURE__ */ jsxRuntimeExports.jsx(OverviewPanel, { data, setSection }),
        section === "messages" && /* @__PURE__ */ jsxRuntimeExports.jsx(MessagesTable, { data, persist }),
        section === "appointments" && /* @__PURE__ */ jsxRuntimeExports.jsx(AppointmentsTable, { data, persist }),
        section === "quotes" && /* @__PURE__ */ jsxRuntimeExports.jsx(QuotesTable, { data, persist }),
        section === "testimonials" && /* @__PURE__ */ jsxRuntimeExports.jsx(TestimonialsTable, { data, persist }),
        section === "services" && /* @__PURE__ */ jsxRuntimeExports.jsx(ServicesManager, { data, persist }),
        section === "service-category" && /* @__PURE__ */ jsxRuntimeExports.jsx(CategoryManager, { data, persist }),
        section === "portfolio" && /* @__PURE__ */ jsxRuntimeExports.jsx(PortfolioManager, { data, persist }),
        section === "users" && /* @__PURE__ */ jsxRuntimeExports.jsx(UsersManager, { data, persist, currentUser })
      ] })
    ] })
  ] });
}
function OverviewPanel({
  data,
  setSection
}) {
  const kpis = [{
    label: "Messages",
    newVal: data.contacts.filter((c) => c.status === "New").length,
    total: data.contacts.length,
    section: "messages",
    icon: MessageSquare,
    color: "text-blue-600",
    bg: "bg-blue-50",
    bar: "bg-blue-500"
  }, {
    label: "Appointments",
    newVal: data.appointments.filter((a) => a.status === "New").length,
    total: data.appointments.length,
    section: "appointments",
    icon: Calendar,
    color: "text-violet-600",
    bg: "bg-violet-50",
    bar: "bg-violet-500"
  }, {
    label: "Quotes",
    newVal: data.quotes.filter((q) => q.status === "New").length,
    total: data.quotes.length,
    section: "quotes",
    icon: FileText,
    color: "text-amber-600",
    bg: "bg-amber-50",
    bar: "bg-amber-500"
  }, {
    label: "Testimonials",
    newVal: 0,
    total: data.testimonials.length,
    section: "testimonials",
    icon: Star,
    color: "text-green-600",
    bg: "bg-green-50",
    bar: "bg-green-500"
  }];
  const allItems = [...data.contacts.map((c) => c.status), ...data.appointments.map((a) => a.status), ...data.quotes.map((q) => q.status)];
  const statusCounts = {
    "New": 0,
    "In progress": 0,
    "Replied": 0,
    "Closed": 0
  };
  allItems.forEach((s) => {
    statusCounts[s] = (statusCounts[s] ?? 0) + 1;
  });
  const totalItems = allItems.length || 1;
  const statusConfig = [{
    status: "New",
    color: "text-blue-600",
    bar: "bg-blue-500"
  }, {
    status: "In progress",
    color: "text-amber-600",
    bar: "bg-amber-500"
  }, {
    status: "Replied",
    color: "text-green-600",
    bar: "bg-green-500"
  }, {
    status: "Closed",
    color: "text-slate-500",
    bar: "bg-slate-400"
  }];
  const demandMap = {};
  [...data.appointments.map((a) => a.service), ...data.quotes.map((q) => q.service)].forEach((s) => {
    if (s) demandMap[s] = (demandMap[s] ?? 0) + 1;
  });
  const demandEntries = Object.entries(demandMap).sort((a, b) => b[1] - a[1]).slice(0, 6);
  const demandMax = demandEntries[0]?.[1] || 1;
  const avgRating = data.testimonials.length ? (data.testimonials.reduce((sum, t) => sum + t.rating, 0) / data.testimonials.length).toFixed(1) : "—";
  const resolved = statusCounts["Replied"] + statusCounts["Closed"];
  const resolutionPct = totalItems > 1 ? Math.round(resolved / totalItems * 100) : 0;
  const days = Array.from({
    length: 7
  }, (_, i) => {
    const d = /* @__PURE__ */ new Date();
    d.setDate(d.getDate() - (6 - i));
    return d.toISOString().slice(0, 10);
  });
  const activityByDay = days.map((day) => ({
    day: new Date(day).toLocaleDateString("en-IE", {
      weekday: "short"
    }),
    count: [...data.contacts.map((c) => c.createdAt), ...data.appointments.map((a) => a.createdAt), ...data.quotes.map((q) => q.createdAt)].filter((iso) => iso.startsWith(day)).length
  }));
  const actMax = Math.max(...activityByDay.map((d) => d.count), 1);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-dark-gray", children: "Dashboard" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Welcome back. Here's your business at a glance." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4", children: kpis.map(({
      label,
      newVal,
      total,
      section,
      icon: Icon,
      color,
      bg,
      bar
    }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setSection(section), className: "group rounded-2xl border border-border bg-white p-5 text-left shadow-card transition-all hover:-translate-y-0.5 hover:shadow-elegant", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("grid h-10 w-10 place-items-center rounded-xl", bg), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: cn("h-5 w-5", color) }) }),
        newVal > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center rounded-full bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-600", children: [
          newVal,
          " new"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-dark-gray", children: total }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: label })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 h-1.5 w-full rounded-full bg-slate-100 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("h-full rounded-full transition-all", bar), style: {
        width: total > 0 ? `${Math.min(100, total / Math.max(...kpis.map((k) => k.total), 1) * 100)}%` : "0%"
      } }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("mt-2 text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all", color), children: [
        "View all ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3 w-3" })
      ] })
    ] }, label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-white p-5 shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-dark-gray mb-4", children: "Request Status Breakdown" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: statusConfig.map(({
          status,
          color,
          bar
        }) => {
          const count = statusCounts[status];
          const pct = Math.round(count / totalItems * 100);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("text-xs font-medium", color), children: status }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                count,
                " (",
                pct,
                "%)"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-full rounded-full bg-slate-100 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("h-full rounded-full transition-all duration-500", bar), style: {
              width: `${pct}%`
            } }) })
          ] }, status);
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Resolution rate" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-green-600", children: [
            resolutionPct,
            "%"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-white p-5 shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-dark-gray mb-4", children: "Activity — Last 7 Days" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end gap-1.5 h-28", children: activityByDay.map(({
          day,
          count
        }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold text-dark-gray", children: count > 0 ? count : "" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full rounded-t-md bg-primary/20 overflow-hidden", style: {
            height: "80px"
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full rounded-t-md bg-primary transition-all duration-500", style: {
            height: `${count / actMax * 80}px`,
            marginTop: `${80 - count / actMax * 80}px`
          } }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: day })
        ] }, day)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 pt-3 border-t border-border text-xs text-muted-foreground", children: [
          "Total this week: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-dark-gray", children: activityByDay.reduce((s, d) => s + d.count, 0) }),
          " enquiries"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-white p-5 shadow-card space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-dark-gray", children: "Quick Stats" }),
        [{
          label: "Avg. Star Rating",
          value: `${avgRating} ⭐`,
          sub: `${data.testimonials.length} reviews`
        }, {
          label: "Services Listed",
          value: data.services.length,
          sub: "custom services"
        }, {
          label: "Portfolio Items",
          value: data.portfolio.length,
          sub: "project photos"
        }, {
          label: "Custom Categories",
          value: data.customCategories.length,
          sub: "user-defined"
        }, {
          label: "Open Requests",
          value: statusCounts["New"] + statusCounts["In progress"],
          sub: "need attention"
        }].map(({
          label,
          value,
          sub
        }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between py-2 border-b border-border last:border-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium text-dark-gray", children: label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: sub })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold text-primary", children: value })
        ] }, label))
      ] })
    ] }),
    demandEntries.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-white p-5 shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-dark-gray mb-4", children: "Service Demand (Appointments + Quotes)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5", children: demandEntries.map(([service, count]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-44 shrink-0 text-xs text-foreground truncate", children: service }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-2.5 rounded-full bg-slate-100 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full rounded-full bg-primary transition-all duration-500", style: {
          width: `${count / demandMax * 100}%`
        } }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-6 text-right text-xs font-semibold text-dark-gray shrink-0", children: count })
      ] }, service)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MiniTable, { title: "Recent Messages", cols: ["Name", "Status", "Date"], rows: data.contacts.slice(0, 5).map((c) => [c.name, /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: c.status }), fmtDate(c.createdAt)]), onViewAll: () => setSection("messages") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MiniTable, { title: "Recent Appointments", cols: ["Name", "Service", "Status"], rows: data.appointments.slice(0, 5).map((a) => [a.fullName, a.service, /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: a.status })]), onViewAll: () => setSection("appointments") })
    ] })
  ] });
}
function MiniTable({
  title,
  cols,
  rows,
  onViewAll
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "flex flex-row items-center justify-between pb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base text-dark-gray", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: onViewAll, className: "text-xs font-medium text-primary hover:underline flex items-center gap-0.5", children: [
        "View all ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3 w-3" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: rows.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-6 py-8 text-center text-sm text-muted-foreground", children: "No records yet." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "border-b border-border bg-slate-50", children: cols.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground", children: c }, c)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: rows.map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "border-b border-border last:border-0 hover:bg-slate-50/80", children: row.map((cell, j) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-foreground", children: cell }, j)) }, i)) })
    ] }) })
  ] });
}
function MessagesTable({
  data,
  persist
}) {
  const [expanded, setExpanded] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(TableShell, { title: "Contact Messages", description: "Messages submitted via the contact form.", count: data.contacts.length, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-slate-50 border-b border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Th, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Name" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Email" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Phone" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Message" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Status" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Received" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Actions" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
      data.contacts.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyRow, { cols: 8 }),
      data.contacts.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border hover:bg-slate-50/60 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setExpanded(expanded === c.id ? null : c.id), className: "grid h-6 w-6 place-items-center rounded text-muted-foreground hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: cn("h-4 w-4 transition-transform", expanded === c.id && "rotate-180") }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-dark-gray", children: c.name }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: c.email }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: c.phone }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "line-clamp-1 max-w-xs text-foreground", children: c.message }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: c.status, onValueChange: (v) => persist({
            ...data,
            contacts: data.contacts.map((x) => x.id === c.id ? {
              ...x,
              status: v
            } : x)
          }), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-7 w-32 text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: statuses.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground whitespace-nowrap", children: fmtDate(c.createdAt) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", className: "h-7 px-2 text-xs", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${c.email}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-3.5 w-3.5" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", className: "h-7 px-2 text-xs text-destructive hover:text-destructive", onClick: () => {
              persist({
                ...data,
                contacts: data.contacts.filter((x) => x.id !== c.id)
              });
              toast.success("Deleted");
            }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" }) })
          ] }) })
        ] }, c.id),
        expanded === c.id && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "bg-blue-50/40 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 8, className: "px-6 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ReplyPanel, { email: c.email, reply: c.reply ?? "", onSave: (reply) => {
          persist({
            ...data,
            contacts: data.contacts.map((x) => x.id === c.id ? {
              ...x,
              reply,
              status: "Replied"
            } : x)
          });
          toast.success("Reply saved");
        } }) }) }, `${c.id}-expand`)
      ] }))
    ] })
  ] });
}
const serviceOptions = ["Home Repairs", "Painting", "Gardening", "Carpentry", "Property Maintenance", "General Handyman Services"];
function AppointmentsTable({
  data,
  persist
}) {
  const [selected, setSelected] = reactExports.useState(null);
  const [addOpen, setAddOpen] = reactExports.useState(false);
  const [addService, setAddService] = reactExports.useState("");
  const update = (id, patch) => persist({
    ...data,
    appointments: data.appointments.map((x) => x.id === id ? {
      ...x,
      ...patch
    } : x)
  });
  const addAppointment = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const v = Object.fromEntries(new FormData(form).entries());
    persist({
      ...data,
      appointments: [{
        id: createId("appointment"),
        fullName: v.fullName,
        email: v.email,
        phone: v.phone,
        service: addService,
        date: v.date,
        time: v.time,
        address: v.address,
        notes: v.notes,
        status: "New",
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      }, ...data.appointments]
    });
    form.reset();
    setAddService("");
    setAddOpen(false);
    toast.success("Appointment added");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-dark-gray", children: "Appointments" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Bookings submitted via the contact page." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: () => setAddOpen(true), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
          " Add appointment"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TableShell, { count: data.appointments.length, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-slate-50 border-b border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Service" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Date & Time" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Address" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Received" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
          data.appointments.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyRow, { cols: 7 }),
          data.appointments.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border hover:bg-slate-50/60 transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Td, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-dark-gray", children: a.fullName }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: a.email })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: a.service }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground whitespace-nowrap", children: [
              a.date,
              " ",
              a.time
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "line-clamp-1 max-w-[160px] text-muted-foreground", children: a.address }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: a.status, onValueChange: (v) => update(a.id, {
              status: v
            }), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-7 w-32 text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: statuses.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground whitespace-nowrap", children: fmtDate(a.createdAt) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", className: "h-7 px-2", onClick: () => setSelected(a), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-3.5 w-3.5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", className: "h-7 px-2", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${a.email}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-3.5 w-3.5" }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", className: "h-7 px-2 text-destructive hover:text-destructive", onClick: () => {
                persist({
                  ...data,
                  appointments: data.appointments.filter((x) => x.id !== a.id)
                });
                toast.success("Deleted");
              }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" }) })
            ] }) })
          ] }, a.id))
        ] })
      ] })
    ] }),
    addOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50", onClick: () => setAddOpen(false), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-lg rounded-2xl bg-white shadow-elegant overflow-hidden", onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-6 py-4 border-b border-border bg-violet-50/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-semibold text-dark-gray", children: "Add Appointment" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setAddOpen(false), className: "grid h-7 w-7 place-items-center rounded-lg text-muted-foreground hover:bg-slate-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: addAppointment, className: "px-6 py-5 space-y-3 max-h-[70vh] overflow-y-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Full name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { name: "fullName", placeholder: "Full name", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { name: "email", type: "email", placeholder: "Email", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Phone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { name: "phone", placeholder: "Phone", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Service" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: addService, onValueChange: setAddService, required: true, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select a service" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: serviceOptions.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { name: "date", type: "date", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Time" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { name: "time", type: "time", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Address" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { name: "address", placeholder: "Property address", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Notes" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { name: "notes", placeholder: "Additional notes", rows: 2, className: "resize-none text-sm" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", className: "w-full mt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
          " Add appointment"
        ] })
      ] })
    ] }) }),
    selected && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50", onClick: () => setSelected(null), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-lg rounded-2xl bg-white shadow-elegant overflow-hidden", onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-6 py-4 border-b border-border bg-violet-50/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-semibold text-dark-gray", children: selected.fullName }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
            selected.service,
            " — ",
            selected.date,
            " at ",
            selected.time
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelected(null), className: "grid h-7 w-7 place-items-center rounded-lg text-muted-foreground hover:bg-slate-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-5 space-y-4 max-h-[70vh] overflow-y-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-x-6 gap-y-3 text-sm", children: [
          [["Email", selected.email], ["Phone", selected.phone], ["Address", selected.address], ["Received", fmtDate(selected.createdAt)]].map(([label, value]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground", children: label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 text-foreground break-all", children: value })
          ] }, label)),
          selected.notes && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground", children: "Notes" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 text-foreground", children: selected.notes })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: data.appointments.find((x) => x.id === selected.id)?.status ?? selected.status, onValueChange: (v) => {
            update(selected.id, {
              status: v
            });
            setSelected((s) => s ? {
              ...s,
              status: v
            } : s);
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9 text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: statuses.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AppointmentReplyPanel, { appointment: selected, onSave: (reply) => {
          update(selected.id, {
            reply,
            status: "Replied"
          });
          setSelected((s) => s ? {
            ...s,
            reply,
            status: "Replied"
          } : s);
          toast.success("Reply saved");
        } })
      ] })
    ] }) })
  ] });
}
function AppointmentReplyPanel({
  appointment,
  onSave
}) {
  const [reply, setReply] = reactExports.useState(appointment.reply ?? "");
  reactExports.useEffect(() => {
    setReply(appointment.reply ?? "");
  }, [appointment.id]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground", children: "Reply to Customer" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { value: reply, onChange: (e) => setReply(e.target.value), placeholder: "Write a reply...", rows: 3, className: "resize-none bg-white text-sm" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: () => onSave(reply), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-3.5 w-3.5" }),
        " Save reply"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `mailto:${appointment.email}?subject=Fix It Dublin — your appointment&body=${encodeURIComponent(reply)}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-3.5 w-3.5" }),
        " Send email"
      ] }) })
    ] })
  ] });
}
function QuotesTable({
  data,
  persist
}) {
  const [selected, setSelected] = reactExports.useState(null);
  const [addOpen, setAddOpen] = reactExports.useState(false);
  const update = (id, patch) => persist({
    ...data,
    quotes: data.quotes.map((x) => x.id === id ? {
      ...x,
      ...patch
    } : x)
  });
  const add = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const v = Object.fromEntries(new FormData(form).entries());
    persist({
      ...data,
      quotes: [{
        id: createId("quote"),
        name: v.name,
        email: v.email,
        phone: v.phone,
        service: v.service,
        details: v.details,
        budget: v.budget,
        status: "New",
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      }, ...data.quotes]
    });
    form.reset();
    setAddOpen(false);
    toast.success("Quote added");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-dark-gray", children: "Quotes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Manage quote requests." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: () => setAddOpen(true), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
          " Add quote"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TableShell, { count: data.quotes.length, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-slate-50 border-b border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Service" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Budget" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Details" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Received" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
          data.quotes.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyRow, { cols: 7 }),
          data.quotes.map((q) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border hover:bg-slate-50/60 transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Td, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-dark-gray", children: q.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: q.email })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: q.service }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: q.budget || "—" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "line-clamp-1 max-w-[180px] text-muted-foreground", children: q.details }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: q.status, onValueChange: (v) => update(q.id, {
              status: v
            }), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-7 w-32 text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: statuses.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground whitespace-nowrap", children: fmtDate(q.createdAt) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", className: "h-7 px-2", onClick: () => setSelected(q), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-3.5 w-3.5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", className: "h-7 px-2", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${q.email}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-3.5 w-3.5" }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", className: "h-7 px-2 text-destructive hover:text-destructive", onClick: () => {
                persist({
                  ...data,
                  quotes: data.quotes.filter((x) => x.id !== q.id)
                });
                toast.success("Deleted");
              }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" }) })
            ] }) })
          ] }, q.id))
        ] })
      ] })
    ] }),
    addOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50", onClick: () => setAddOpen(false), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-lg rounded-2xl bg-white shadow-elegant overflow-hidden", onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-6 py-4 border-b border-border bg-amber-50/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-semibold text-dark-gray", children: "Add Quote Request" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setAddOpen(false), className: "grid h-7 w-7 place-items-center rounded-lg text-muted-foreground hover:bg-slate-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: add, className: "px-6 py-5 space-y-3 max-h-[70vh] overflow-y-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { name: "name", placeholder: "Customer name", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Phone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { name: "phone", placeholder: "Phone", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { name: "email", type: "email", placeholder: "Email", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Budget" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { name: "budget", placeholder: "e.g. €200–€400" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Service" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { name: "service", placeholder: "Service type", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Job Details" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { name: "details", placeholder: "Describe the job", rows: 3, className: "resize-none text-sm", required: true })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", className: "w-full mt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
          " Add quote"
        ] })
      ] })
    ] }) }),
    selected && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50", onClick: () => setSelected(null), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-lg rounded-2xl bg-white shadow-elegant overflow-hidden", onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-6 py-4 border-b border-border bg-amber-50/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-semibold text-dark-gray", children: selected.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
            selected.service,
            selected.budget ? ` — ${selected.budget}` : ""
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelected(null), className: "grid h-7 w-7 place-items-center rounded-lg text-muted-foreground hover:bg-slate-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-5 space-y-4 max-h-[70vh] overflow-y-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-x-6 gap-y-3 text-sm", children: [
          [["Email", selected.email], ["Phone", selected.phone], ["Budget", selected.budget || "—"], ["Received", fmtDate(selected.createdAt)]].map(([label, value]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground", children: label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 text-foreground break-all", children: value })
          ] }, label)),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground", children: "Job Details" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 text-foreground", children: selected.details })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: data.quotes.find((x) => x.id === selected.id)?.status ?? selected.status, onValueChange: (v) => {
            update(selected.id, {
              status: v
            });
            setSelected((s) => s ? {
              ...s,
              status: v
            } : s);
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9 text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: statuses.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(QuoteReplyPanel, { quote: selected, onSave: (reply) => {
          update(selected.id, {
            reply,
            status: "Replied"
          });
          setSelected((s) => s ? {
            ...s,
            reply,
            status: "Replied"
          } : s);
          toast.success("Reply saved");
        } })
      ] })
    ] }) })
  ] });
}
function QuoteReplyPanel({
  quote,
  onSave
}) {
  const [reply, setReply] = reactExports.useState(quote.reply ?? "");
  reactExports.useEffect(() => {
    setReply(quote.reply ?? "");
  }, [quote.id]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground", children: "Reply to Customer" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { value: reply, onChange: (e) => setReply(e.target.value), placeholder: "Write a reply...", rows: 3, className: "resize-none bg-white text-sm" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: () => onSave(reply), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-3.5 w-3.5" }),
        " Save reply"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `mailto:${quote.email}?subject=Fix It Dublin — your quote request&body=${encodeURIComponent(reply)}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-3.5 w-3.5" }),
        " Send email"
      ] }) })
    ] })
  ] });
}
function TestimonialsTable({
  data,
  persist
}) {
  const [addOpen, setAddOpen] = reactExports.useState(false);
  const add = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const v = Object.fromEntries(new FormData(form).entries());
    persist({
      ...data,
      testimonials: [{
        id: createId("testimonial"),
        name: v.name,
        area: v.area,
        rating: Number(v.rating),
        text: v.text,
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      }, ...data.testimonials]
    });
    form.reset();
    setAddOpen(false);
    toast.success("Testimonial added");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-dark-gray", children: "Testimonials" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Add and manage customer reviews." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: () => setAddOpen(true), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
          " Add testimonial"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TableShell, { count: data.testimonials.length, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-slate-50 border-b border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Area" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Rating" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Review" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Added" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
          data.testimonials.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyRow, { cols: 6 }),
          data.testimonials.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border last:border-0 hover:bg-slate-50/60 transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-dark-gray", children: t.name }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: t.area }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-0.5", children: [
              Array.from({
                length: 5
              }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: cn("h-3.5 w-3.5", i < t.rating ? "fill-amber-400 text-amber-400" : "text-slate-200") }, i)),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-1 text-xs text-muted-foreground", children: [
                t.rating,
                "/5"
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "line-clamp-2 max-w-sm text-sm text-foreground", children: [
              '"',
              t.text,
              '"'
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground whitespace-nowrap", children: fmtDate(t.createdAt) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", className: "h-7 px-2 text-destructive hover:text-destructive", onClick: () => {
              persist({
                ...data,
                testimonials: data.testimonials.filter((x) => x.id !== t.id)
              });
              toast.success("Deleted");
            }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" }) }) })
          ] }, t.id))
        ] })
      ] })
    ] }),
    addOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50", onClick: () => setAddOpen(false), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md rounded-2xl bg-white shadow-elegant overflow-hidden", onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-6 py-4 border-b border-border bg-green-50/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-semibold text-dark-gray", children: "Add Testimonial" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setAddOpen(false), className: "grid h-7 w-7 place-items-center rounded-lg text-muted-foreground hover:bg-slate-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: add, className: "px-6 py-5 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Customer name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { name: "name", placeholder: "e.g. Sarah O'Connor", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Area" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { name: "area", placeholder: "e.g. Rathmines, D6", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Rating (1–5)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { name: "rating", type: "number", min: "1", max: "5", defaultValue: "5", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Review text" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { name: "text", placeholder: "Customer review...", rows: 3, className: "resize-none text-sm", required: true })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", className: "w-full mt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
          " Add testimonial"
        ] })
      ] })
    ] }) })
  ] });
}
function ServicesManager({
  data,
  persist
}) {
  const [addOpen, setAddOpen] = reactExports.useState(false);
  const [benefits, setBenefits] = reactExports.useState("");
  const [category, setCategory] = reactExports.useState("");
  const [imageDataUrl, setImageDataUrl] = reactExports.useState("");
  const allCats = [...allCategories, ...data.customCategories];
  const handleImage = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setImageDataUrl(reader.result);
    reader.readAsDataURL(file);
  };
  const add = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const v = Object.fromEntries(new FormData(form).entries());
    const slug = v.title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
    const newService = {
      id: createId("service"),
      slug,
      title: v.title,
      category: category || allCats[0],
      description: v.description,
      benefits: benefits.split("\n").map((b) => b.trim()).filter(Boolean),
      imageDataUrl: imageDataUrl || void 0,
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    persist({
      ...data,
      services: [newService, ...data.services]
    });
    form.reset();
    setBenefits("");
    setCategory("");
    setImageDataUrl("");
    setAddOpen(false);
    toast.success("Service added");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-dark-gray", children: "Services" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Add custom services shown on the Services page." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: () => setAddOpen(true), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
          " Add service"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TableShell, { count: data.services.length, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-slate-50 border-b border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Title" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Category" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Image" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Description" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Benefits" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Added" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
          data.services.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyRow, { cols: 7 }),
          data.services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border hover:bg-slate-50/60 transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-dark-gray", children: s.title }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: s.category }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: s.imageDataUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s.imageDataUrl, alt: s.title, className: "h-10 w-16 object-cover rounded" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "None" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "line-clamp-2 max-w-[180px] text-sm text-muted-foreground", children: s.description }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
              s.benefits.length,
              " benefit",
              s.benefits.length !== 1 ? "s" : ""
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground whitespace-nowrap", children: fmtDate(s.createdAt) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", className: "h-7 px-2 text-destructive hover:text-destructive", onClick: () => {
              persist({
                ...data,
                services: data.services.filter((x) => x.id !== s.id)
              });
              toast.success("Deleted");
            }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" }) }) })
          ] }, s.id))
        ] })
      ] })
    ] }),
    addOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50", onClick: () => setAddOpen(false), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-lg rounded-2xl bg-white shadow-elegant overflow-hidden", onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-6 py-4 border-b border-border bg-blue-50/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-semibold text-dark-gray", children: "Add Service" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setAddOpen(false), className: "grid h-7 w-7 place-items-center rounded-lg text-muted-foreground hover:bg-slate-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: add, className: "px-6 py-5 space-y-3 max-h-[75vh] overflow-y-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Title" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { name: "title", placeholder: "e.g. Roof Cleaning", required: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Category" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: category, onValueChange: setCategory, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select category" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: allCats.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c, children: c }, c)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Image" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "file", accept: "image/*", onChange: handleImage, className: "cursor-pointer" }),
          imageDataUrl && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: imageDataUrl, alt: "preview", className: "mt-2 h-28 w-full object-cover rounded-lg" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Description" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { name: "description", placeholder: "Short description...", rows: 3, className: "resize-none text-sm", required: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { children: [
            "Benefits ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-normal", children: "(one per line)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { value: benefits, onChange: (e) => setBenefits(e.target.value), placeholder: "Fast turnaround\nFree quote\nFully insured", rows: 3, className: "resize-none text-sm" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", className: "w-full mt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
          " Add service"
        ] })
      ] })
    ] }) })
  ] });
}
function PortfolioManager({
  data,
  persist
}) {
  const [addOpen, setAddOpen] = reactExports.useState(false);
  const [editItem, setEditItem] = reactExports.useState(null);
  const [category, setCategory] = reactExports.useState("");
  const [span, setSpan] = reactExports.useState("normal");
  const [imageDataUrl, setImageDataUrl] = reactExports.useState("");
  const [editCategory, setEditCategory] = reactExports.useState("");
  const [editSpan, setEditSpan] = reactExports.useState("normal");
  const [editImageDataUrl, setEditImageDataUrl] = reactExports.useState("");
  const allCats = [...allCategories, ...data.customCategories];
  const handleImage = (e, setter) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setter(reader.result);
    reader.readAsDataURL(file);
  };
  const add = (e) => {
    e.preventDefault();
    const v = Object.fromEntries(new FormData(e.currentTarget).entries());
    persist({
      ...data,
      portfolio: [{
        id: createId("portfolio"),
        title: v.title,
        category: category || allCats[0],
        imageUrl: "",
        imageDataUrl: imageDataUrl || void 0,
        span,
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      }, ...data.portfolio]
    });
    e.currentTarget.reset();
    setCategory("");
    setSpan("normal");
    setImageDataUrl("");
    setAddOpen(false);
    toast.success("Portfolio item added");
  };
  const openEdit = (p) => {
    setEditItem(p);
    setEditCategory(p.category);
    setEditSpan(p.span);
    setEditImageDataUrl(p.imageDataUrl ?? "");
  };
  const saveEdit = (e) => {
    e.preventDefault();
    if (!editItem) return;
    const v = Object.fromEntries(new FormData(e.currentTarget).entries());
    persist({
      ...data,
      portfolio: data.portfolio.map((x) => x.id === editItem.id ? {
        ...x,
        title: v.title,
        category: editCategory || x.category,
        span: editSpan,
        imageDataUrl: editImageDataUrl || x.imageDataUrl
      } : x)
    });
    setEditItem(null);
    toast.success("Portfolio item updated");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-dark-gray", children: "Portfolio" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Add project images shown on the Portfolio page." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: () => setAddOpen(true), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
          " Add item"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TableShell, { count: data.portfolio.length, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-slate-50 border-b border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Image" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Title" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Category" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Span" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Added" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
          data.portfolio.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyRow, { cols: 6 }),
          data.portfolio.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border hover:bg-slate-50/60 transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: p.imageDataUrl || p.imageUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.imageDataUrl || p.imageUrl, alt: p.title, className: "h-12 w-20 object-cover rounded-lg" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "No image" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-dark-gray", children: p.title }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: p.category }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-600 capitalize", children: p.span }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground whitespace-nowrap", children: fmtDate(p.createdAt) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", className: "h-7 px-2", onClick: () => openEdit(p), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-3.5 w-3.5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", className: "h-7 px-2 text-destructive hover:text-destructive", onClick: () => {
                persist({
                  ...data,
                  portfolio: data.portfolio.filter((x) => x.id !== p.id)
                });
                toast.success("Deleted");
              }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" }) })
            ] }) })
          ] }, p.id))
        ] })
      ] })
    ] }),
    addOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50", onClick: () => setAddOpen(false), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md rounded-2xl bg-white shadow-elegant overflow-hidden", onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-6 py-4 border-b border-border bg-slate-50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-semibold text-dark-gray", children: "Add Portfolio Item" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setAddOpen(false), className: "grid h-7 w-7 place-items-center rounded-lg text-muted-foreground hover:bg-slate-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: add, className: "px-6 py-5 space-y-3 max-h-[75vh] overflow-y-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Title" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { name: "title", placeholder: "e.g. Kitchen renovation", required: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Category" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: category, onValueChange: setCategory, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select category" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: allCats.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c, children: c }, c)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Image" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "file", accept: "image/*", onChange: (e) => handleImage(e, setImageDataUrl), className: "cursor-pointer", required: true }),
          imageDataUrl && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: imageDataUrl, alt: "preview", className: "mt-2 h-28 w-full object-cover rounded-lg" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Grid span" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: span, onValueChange: (v) => setSpan(v), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "normal", children: "Normal (1×1)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "tall", children: "Tall (1×2)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "wide", children: "Wide (2×1)" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", className: "w-full mt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
          " Add item"
        ] })
      ] })
    ] }) }),
    editItem && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50", onClick: () => setEditItem(null), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md rounded-2xl bg-white shadow-elegant overflow-hidden", onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-6 py-4 border-b border-border bg-amber-50/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-semibold text-dark-gray", children: "Edit Portfolio Item" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setEditItem(null), className: "grid h-7 w-7 place-items-center rounded-lg text-muted-foreground hover:bg-slate-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: saveEdit, className: "px-6 py-5 space-y-3 max-h-[75vh] overflow-y-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Title" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { name: "title", defaultValue: editItem.title, required: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Category" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: editCategory, onValueChange: setEditCategory, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select category" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: allCats.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c, children: c }, c)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { children: [
            "Replace image ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-normal", children: "(optional)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "file", accept: "image/*", onChange: (e) => handleImage(e, setEditImageDataUrl), className: "cursor-pointer" }),
          (editImageDataUrl || editItem.imageDataUrl || editItem.imageUrl) && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: editImageDataUrl || editItem.imageDataUrl || editItem.imageUrl, alt: "preview", className: "mt-2 h-28 w-full object-cover rounded-lg" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Grid span" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: editSpan, onValueChange: (v) => setEditSpan(v), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "normal", children: "Normal (1×1)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "tall", children: "Tall (1×2)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "wide", children: "Wide (2×1)" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", className: "w-full mt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }),
          " Save changes"
        ] })
      ] })
    ] }) })
  ] });
}
const roleBadge = {
  super: "bg-violet-100 text-violet-700",
  admin: "bg-blue-100 text-blue-700",
  viewer: "bg-slate-100 text-slate-500"
};
function UsersManager({
  data,
  persist,
  currentUser
}) {
  const [addOpen, setAddOpen] = reactExports.useState(false);
  const [editUser, setEditUser] = reactExports.useState(null);
  const [addRole, setAddRole] = reactExports.useState("admin");
  const [editRole, setEditRole] = reactExports.useState("admin");
  const [showAddPw, setShowAddPw] = reactExports.useState(false);
  const [showEditPw, setShowEditPw] = reactExports.useState(false);
  const users = data.adminUsers;
  const add = (e) => {
    e.preventDefault();
    const v = Object.fromEntries(new FormData(e.currentTarget).entries());
    if (users.find((u) => u.email === v.email)) {
      toast.error("Email already in use");
      return;
    }
    persist({
      ...data,
      adminUsers: [...users, {
        id: createId("user"),
        name: v.name,
        email: v.email,
        password: v.password,
        role: addRole,
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      }]
    });
    e.currentTarget.reset();
    setAddRole("admin");
    setAddOpen(false);
    toast.success("User added");
  };
  const openEdit = (u) => {
    setEditUser(u);
    setEditRole(u.role);
    setShowEditPw(false);
  };
  const saveEdit = (e) => {
    e.preventDefault();
    if (!editUser) return;
    const v = Object.fromEntries(new FormData(e.currentTarget).entries());
    if (v.email !== editUser.email && users.find((u) => u.email === v.email)) {
      toast.error("Email already in use");
      return;
    }
    persist({
      ...data,
      adminUsers: users.map((u) => u.id === editUser.id ? {
        ...u,
        name: v.name,
        email: v.email,
        role: editRole,
        ...v.password ? {
          password: v.password
        } : {}
      } : u)
    });
    setEditUser(null);
    toast.success("User updated");
  };
  const remove = (u) => {
    if (u.id === currentUser.id) {
      toast.error("You cannot delete your own account");
      return;
    }
    if (u.role === "super" && users.filter((x) => x.role === "super").length === 1) {
      toast.error("At least one super admin must remain");
      return;
    }
    persist({
      ...data,
      adminUsers: users.filter((x) => x.id !== u.id)
    });
    toast.success("User removed");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-dark-gray", children: "Admin Users" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Manage who can access the admin dashboard." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: () => setAddOpen(true), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
          " Add user"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TableShell, { count: users.length, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-slate-50 border-b border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Role" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Added" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: users.map((u) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border last:border-0 hover:bg-slate-50/60 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary/10 text-primary font-semibold text-sm", children: u.name.charAt(0).toUpperCase() }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-dark-gray", children: u.name }),
            u.id === currentUser.id && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold text-primary bg-primary/10 rounded-full px-2 py-0.5", children: "You" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: u.email }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: cn("inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold capitalize", roleBadge[u.role]), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-3 w-3" }),
            " ",
            u.role
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground whitespace-nowrap", children: fmtDate(u.createdAt) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", className: "h-7 px-2", onClick: () => openEdit(u), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-3.5 w-3.5" }) }),
            u.id !== currentUser.id && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", className: "h-7 px-2 text-destructive hover:text-destructive", onClick: () => remove(u), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" }) })
          ] }) })
        ] }, u.id)) })
      ] })
    ] }),
    addOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50", onClick: () => setAddOpen(false), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-sm rounded-2xl bg-white shadow-elegant overflow-hidden", onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-6 py-4 border-b border-border bg-primary/5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-semibold text-dark-gray", children: "Add Admin User" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setAddOpen(false), className: "grid h-7 w-7 place-items-center rounded-lg text-muted-foreground hover:bg-slate-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: add, className: "px-6 py-5 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Full name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { name: "name", placeholder: "e.g. Jane Smith", required: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { name: "email", type: "email", placeholder: "jane@fixitdublin.com", required: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Password" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { name: "password", type: showAddPw ? "text" : "password", placeholder: "Set a password", required: true, className: "pr-10" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setShowAddPw((v) => !v), className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Role" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: addRole, onValueChange: (v) => setAddRole(v), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: roles.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: r, className: "capitalize", children: r }, r)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", className: "w-full mt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
          " Add user"
        ] })
      ] })
    ] }) }),
    editUser && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50", onClick: () => setEditUser(null), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-sm rounded-2xl bg-white shadow-elegant overflow-hidden", onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-6 py-4 border-b border-border bg-amber-50/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-semibold text-dark-gray", children: "Edit User" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setEditUser(null), className: "grid h-7 w-7 place-items-center rounded-lg text-muted-foreground hover:bg-slate-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: saveEdit, className: "px-6 py-5 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Full name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { name: "name", defaultValue: editUser.name, required: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { name: "email", type: "email", defaultValue: editUser.email, required: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { children: [
            "New password ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-normal", children: "(leave blank to keep current)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { name: "password", type: showEditPw ? "text" : "password", placeholder: "Enter new password", className: "pr-10" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setShowEditPw((v) => !v), className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Role" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: editRole, onValueChange: (v) => setEditRole(v), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: roles.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: r, className: "capitalize", children: r }, r)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", className: "w-full mt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }),
          " Save changes"
        ] })
      ] })
    ] }) })
  ] });
}
function CategoryManager({
  data,
  persist
}) {
  const [addOpen, setAddOpen] = reactExports.useState(false);
  const [newCat, setNewCat] = reactExports.useState("");
  const [editTarget, setEditTarget] = reactExports.useState(null);
  const [editValue, setEditValue] = reactExports.useState("");
  const builtins = ["Repairs", "Painting", "Gardening", "Carpentry", "Maintenance"];
  const customs = data.customCategories;
  const allRows = [...builtins.map((name) => ({
    name,
    builtin: true
  })), ...customs.map((name) => ({
    name,
    builtin: false
  }))];
  const add = () => {
    const trimmed = newCat.trim();
    if (!trimmed || builtins.includes(trimmed) || customs.includes(trimmed)) return;
    persist({
      ...data,
      customCategories: [...customs, trimmed]
    });
    setNewCat("");
    setAddOpen(false);
    toast.success("Category added");
  };
  const openEdit = (cat) => {
    setEditTarget(cat);
    setEditValue(cat);
  };
  const saveEdit = () => {
    const trimmed = editValue.trim();
    if (!trimmed || !editTarget) {
      setEditTarget(null);
      return;
    }
    if (trimmed !== editTarget && (builtins.includes(trimmed) || customs.includes(trimmed))) {
      toast.error("Category already exists");
      return;
    }
    persist({
      ...data,
      customCategories: customs.map((c) => c === editTarget ? trimmed : c)
    });
    setEditTarget(null);
    toast.success("Category updated");
  };
  const remove = (cat) => {
    persist({
      ...data,
      customCategories: customs.filter((c) => c !== cat)
    });
    toast.success("Category removed");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-dark-gray", children: "Categories" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Manage categories shared across services and portfolio." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: () => setAddOpen(true), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
          " Add category"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TableShell, { count: allRows.length, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-slate-50 border-b border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "#" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: allRows.map(({
          name,
          builtin
        }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border last:border-0 hover:bg-slate-50/60 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: i + 1 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-dark-gray", children: name }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold", builtin ? "bg-slate-100 text-slate-500" : "bg-primary/10 text-primary"), children: builtin ? "Built-in" : "Custom" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Td, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1.5", children: !builtin ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", className: "h-7 px-2", onClick: () => openEdit(name), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-3.5 w-3.5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", className: "h-7 px-2 text-destructive hover:text-destructive", onClick: () => remove(name), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" }) })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground px-2", children: "—" }) }) })
        ] }, name)) })
      ] })
    ] }),
    addOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50", onClick: () => setAddOpen(false), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-sm rounded-2xl bg-white shadow-elegant overflow-hidden", onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-6 py-4 border-b border-border bg-primary/5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-semibold text-dark-gray", children: "Add Category" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setAddOpen(false), className: "grid h-7 w-7 place-items-center rounded-lg text-muted-foreground hover:bg-slate-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-5 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Category name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: newCat, onChange: (e) => setNewCat(e.target.value), onKeyDown: (e) => e.key === "Enter" && add(), placeholder: "e.g. Plastering", autoFocus: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "w-full", onClick: add, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
          " Add category"
        ] })
      ] })
    ] }) }),
    editTarget !== null && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50", onClick: () => setEditTarget(null), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-sm rounded-2xl bg-white shadow-elegant overflow-hidden", onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-6 py-4 border-b border-border bg-amber-50/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-semibold text-dark-gray", children: "Edit Category" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setEditTarget(null), className: "grid h-7 w-7 place-items-center rounded-lg text-muted-foreground hover:bg-slate-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-5 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Category name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: editValue, onChange: (e) => setEditValue(e.target.value), onKeyDown: (e) => e.key === "Enter" && saveEdit(), autoFocus: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "w-full", onClick: saveEdit, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }),
          " Save changes"
        ] })
      ] })
    ] }) })
  ] });
}
function TableShell({
  title,
  description,
  count,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    title && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        description ? /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-dark-gray", children: title }) : /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold text-dark-gray", children: title }),
        description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: description })
      ] }),
      count != null && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
        count,
        " record",
        count !== 1 ? "s" : ""
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-2xl border border-border bg-white shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("table", { className: "w-full text-sm", children }) }) })
  ] });
}
function ReplyPanel({
  email,
  reply: initialReply,
  onSave
}) {
  const [reply, setReply] = reactExports.useState(initialReply);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 sm:flex-row sm:items-end", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground", children: "Admin Reply" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { value: reply, onChange: (e) => setReply(e.target.value), placeholder: "Write a reply to the customer...", rows: 2, className: "resize-none bg-white text-sm" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: () => onSave(reply), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-3.5 w-3.5" }),
        " Save"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `mailto:${email}?subject=Fix It Dublin — your request&body=${encodeURIComponent(reply)}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-3.5 w-3.5" }),
        " Email"
      ] }) })
    ] })
  ] });
}
function Th({
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground whitespace-nowrap", children });
}
function Td({
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 align-middle", children });
}
function EmptyRow({
  cols
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: cols, className: "px-4 py-10 text-center text-sm text-muted-foreground", children: "No records yet." }) });
}
function StatusBadge({
  status
}) {
  const styles = {
    "New": "bg-blue-100 text-blue-700",
    "In progress": "bg-amber-100 text-amber-700",
    "Replied": "bg-green-100 text-green-700",
    "Closed": "bg-slate-100 text-slate-500"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold", styles[status]), children: status });
}
function fmtDate(iso) {
  return new Date(iso).toLocaleDateString("en-IE", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
}
export {
  AdminPage as component
};
