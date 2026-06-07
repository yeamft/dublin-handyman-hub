import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import {
  MessageSquare, Plus, LogOut, Star, RefreshCw,
  LayoutDashboard, Calendar, FileText, Quote, Wrench,
  Menu, X, ChevronRight, ChevronDown, Mail, Trash2, Eye, Tag, Pencil, Check, Users, ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import {
  type AdminData, type RequestStatus, type AdminTestimonial,
  type ContactMessage, type AppointmentRequest, type QuoteRequest,
  type AdminService, type AdminPortfolioItem, type ServiceCategory,
  type AdminUser, type AdminRole,
  getAdminData, saveAdminData, createId, DEFAULT_SUPER,
} from "@/lib/admin-store";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Admin — Fix It Dublin" }] }),
  component: AdminPage,
});

const statuses: RequestStatus[] = ["New", "In progress", "Replied", "Closed"];
const allCategories: ServiceCategory[] = ["Repairs", "Painting", "Gardening", "Carpentry", "Maintenance"];
const roles: AdminRole[] = ["super", "admin", "viewer"];
type Section = "overview" | "messages" | "appointments" | "quotes" | "testimonials" | "services" | "portfolio" | "service-category" | "users";

// ─── Root ─────────────────────────────────────────────────────────────────────
function AdminPage() {
  const [authedUser, setAuthedUser] = useState<AdminUser | null>(null);
  if (!authedUser) return <LoginScreen onLogin={setAuthedUser} />;
  return <AdminShell currentUser={authedUser} onLogout={() => setAuthedUser(null)} />;
}

// ─── Login ────────────────────────────────────────────────────────────────────
function LoginScreen({ onLogin }: { onLogin: (u: AdminUser) => void }) {
  const [error, setError] = useState("");
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const email = fd.get("email") as string;
    const password = fd.get("password") as string;
    const users = getAdminData().adminUsers;
    const match = users.find((u) => u.email === email && u.password === password);
    if (match) onLogin(match);
    else setError("Invalid credentials.");
  };
  const superUser = DEFAULT_SUPER;
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white/20 px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 flex flex-col items-center gap-3">
          <Link to="/" className="grid h-14 w-14 place-items-center rounded-2xl gradient-primary shadow-glow transition-transform hover:scale-105">
            <Wrench className="h-7 w-7 text-white" />
          </Link>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-dark-gray">Fix It Dublin</h1>
            <p className="text-sm text-muted-foreground">Admin Portal</p>
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-white p-8 shadow-elegant">
          <h2 className="text-xl font-semibold text-dark-gray mb-1">Sign in</h2>
          <p className="text-sm text-muted-foreground mb-6">Demo — <span className="text-foreground">{superUser.email}</span> / <span className="text-foreground">{superUser.password}</span></p>
          <form onSubmit={submit} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" defaultValue={superUser.email} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" defaultValue={superUser.password} />
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <Button type="submit" variant="hero" size="lg" className="w-full mt-2">Sign in to Dashboard</Button>
            <Link to="/" className="inline-flex w-full items-center justify-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
              <ChevronRight className="h-3.5 w-3.5 rotate-180" /> Back to website
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

// ─── Shell ────────────────────────────────────────────────────────────────────
function AdminShell({ currentUser, onLogout }: { currentUser: AdminUser; onLogout: () => void }) {
  const [section, setSection] = useState<Section>("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [data, setData] = useState<AdminData>(getAdminData);

  const persist = (next: AdminData) => { setData(next); saveAdminData(next); };
  const refresh = () => setData(getAdminData());

  useEffect(() => {
    const onStorage = () => setData(getAdminData());
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const counts = {
    messages: data.contacts.filter((c) => c.status === "New").length,
    appointments: data.appointments.filter((a) => a.status === "New").length,
    quotes: data.quotes.filter((q) => q.status === "New").length,
  };
  const totalNew = counts.messages + counts.appointments + counts.quotes;

  const navItems: { id: Section; label: string; icon: React.ElementType; badge?: number }[] = [
    { id: "overview",     label: "Overview",     icon: LayoutDashboard },
    { id: "messages",     label: "Messages",     icon: MessageSquare, badge: counts.messages },
    { id: "appointments", label: "Appointments", icon: Calendar,      badge: counts.appointments },
    { id: "quotes",       label: "Quotes",       icon: Quote,         badge: counts.quotes },
    { id: "testimonials", label: "Testimonials", icon: Star },
    { id: "services",         label: "Services",   icon: Wrench },
    { id: "portfolio",         label: "Portfolio",   icon: FileText },
    { id: "service-category",  label: "Categories", icon: Tag },
    ...(currentUser.role === "super" ? [{ id: "users" as Section, label: "Users", icon: Users }] : []),
  ];

  const sectionLabel = navItems.find((n) => n.id === section)?.label ?? "";

  return (
    <div className="fixed inset-0 z-50 flex bg-slate-50 overflow-hidden">
      {/* Sidebar */}
      {sidebarOpen && <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => setSidebarOpen(false)} />}
      <aside className={cn("fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-slate-900 transition-transform duration-300 lg:static lg:translate-x-0", sidebarOpen ? "translate-x-0" : "-translate-x-full")}>
        <div className="flex h-16 items-center gap-3 border-b border-white/10 px-5">
          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl gradient-primary shadow-glow">
            <Wrench className="h-4 w-4 text-white" />
          </div>
          <div className="min-w-0">
            <div className="truncate text-sm font-bold text-white">Fix It Dublin</div>
            <div className="text-[10px] uppercase tracking-widest text-slate-400">Admin</div>
          </div>
          <button className="ml-auto grid h-7 w-7 place-items-center rounded-md text-slate-400 hover:text-white lg:hidden" onClick={() => setSidebarOpen(false)}>
            <X className="h-4 w-4" />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
          {navItems.map(({ id, label, icon: Icon, badge }) => (
            <button key={id} onClick={() => { setSection(id); setSidebarOpen(false); }}
              className={cn("flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                section === id ? "bg-primary text-white shadow-glow" : "text-slate-400 hover:bg-white/5 hover:text-white")}>
              <Icon className="h-4 w-4 shrink-0" />
              <span className="flex-1 text-left">{label}</span>
              {badge != null && badge > 0 && (
                <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">{badge}</span>
              )}
            </button>
          ))}
        </nav>
        <div className="border-t border-white/10 p-4">
          <div className="mb-3 rounded-xl bg-white/5 px-3 py-2.5">
            <div className="text-xs font-semibold text-white">{currentUser.name}</div>
            <div className="truncate text-[11px] text-slate-400">{currentUser.email}</div>
            <div className="mt-1 inline-flex items-center gap-1 rounded-full bg-primary/20 px-2 py-0.5 text-[10px] font-semibold text-primary-foreground/80 capitalize">{currentUser.role}</div>
          </div>
          <Button variant="ghost" size="sm" className="w-full justify-start text-slate-400 hover:bg-white/5 hover:text-white" onClick={onLogout}>
            <LogOut className="h-4 w-4" /> Sign out
          </Button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex flex-1 flex-col min-w-0 overflow-hidden">
        <header className="flex h-16 shrink-0 items-center gap-4 border-b border-border bg-white px-4 md:px-6 shadow-sm">
          <button className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted-foreground hover:bg-secondary lg:hidden" onClick={() => setSidebarOpen(true)}>
            <Menu className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <span>Admin</span>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="font-semibold text-foreground">{sectionLabel}</span>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={refresh}><RefreshCw className="h-3.5 w-3.5" /> Refresh</Button>
            <Button variant="outline" size="sm" className="hidden sm:flex" onClick={onLogout}><LogOut className="h-3.5 w-3.5" /> Logout</Button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto bg-slate-50 p-4 md:p-6 lg:p-8">
          {section === "overview"     && <OverviewPanel data={data} setSection={setSection} />}
          {section === "messages"     && <MessagesTable data={data} persist={persist} />}
          {section === "appointments" && <AppointmentsTable data={data} persist={persist} />}
          {section === "quotes"       && <QuotesTable data={data} persist={persist} />}
          {section === "testimonials" && <TestimonialsTable data={data} persist={persist} />}
          {section === "services"          && <ServicesManager data={data} persist={persist} />}
          {section === "service-category"   && <CategoryManager data={data} persist={persist} />}
          {section === "portfolio"          && <PortfolioManager data={data} persist={persist} />}
          {section === "users"              && <UsersManager data={data} persist={persist} currentUser={currentUser} />}

        </main>
      </div>
    </div>
  );
}

// ─── Overview ─────────────────────────────────────────────────────────────────
function OverviewPanel({ data, setSection }: { data: AdminData; setSection: (s: Section) => void }) {
  // ── KPI cards
  const kpis = [
    { label: "Messages",     newVal: data.contacts.filter((c) => c.status === "New").length,     total: data.contacts.length,     section: "messages"     as Section, icon: MessageSquare, color: "text-blue-600",   bg: "bg-blue-50",   bar: "bg-blue-500"   },
    { label: "Appointments", newVal: data.appointments.filter((a) => a.status === "New").length,  total: data.appointments.length,  section: "appointments" as Section, icon: Calendar,      color: "text-violet-600", bg: "bg-violet-50", bar: "bg-violet-500" },
    { label: "Quotes",       newVal: data.quotes.filter((q) => q.status === "New").length,        total: data.quotes.length,        section: "quotes"       as Section, icon: FileText,      color: "text-amber-600",  bg: "bg-amber-50",  bar: "bg-amber-500"  },
    { label: "Testimonials", newVal: 0,                                                            total: data.testimonials.length,  section: "testimonials" as Section, icon: Star,          color: "text-green-600",  bg: "bg-green-50",  bar: "bg-green-500"  },
  ];

  // ── Status breakdown (messages + appointments + quotes combined)
  const allItems = [
    ...data.contacts.map((c) => c.status),
    ...data.appointments.map((a) => a.status),
    ...data.quotes.map((q) => q.status),
  ];
  const statusCounts: Record<RequestStatus, number> = { "New": 0, "In progress": 0, "Replied": 0, "Closed": 0 };
  allItems.forEach((s) => { statusCounts[s] = (statusCounts[s] ?? 0) + 1; });
  const totalItems = allItems.length || 1;
  const statusConfig: { status: RequestStatus; color: string; bar: string }[] = [
    { status: "New",         color: "text-blue-600",  bar: "bg-blue-500"  },
    { status: "In progress", color: "text-amber-600", bar: "bg-amber-500" },
    { status: "Replied",     color: "text-green-600", bar: "bg-green-500" },
    { status: "Closed",      color: "text-slate-500", bar: "bg-slate-400" },
  ];

  // ── Service demand (appointments + quotes)
  const demandMap: Record<string, number> = {};
  [...data.appointments.map((a) => a.service), ...data.quotes.map((q) => q.service)]
    .forEach((s) => { if (s) demandMap[s] = (demandMap[s] ?? 0) + 1; });
  const demandEntries = Object.entries(demandMap).sort((a, b) => b[1] - a[1]).slice(0, 6);
  const demandMax = demandEntries[0]?.[1] || 1;

  // ── Avg rating
  const avgRating = data.testimonials.length
    ? (data.testimonials.reduce((sum, t) => sum + t.rating, 0) / data.testimonials.length).toFixed(1)
    : "—";

  // ── Resolution rate (Replied + Closed out of total)
  const resolved = statusCounts["Replied"] + statusCounts["Closed"];
  const resolutionPct = totalItems > 1 ? Math.round((resolved / (totalItems)) * 100) : 0;

  // ── Last 7 days activity (contacts + appointments + quotes)
  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    return d.toISOString().slice(0, 10);
  });
  const activityByDay = days.map((day) => ({
    day: new Date(day).toLocaleDateString("en-IE", { weekday: "short" }),
    count: [
      ...data.contacts.map((c) => c.createdAt),
      ...data.appointments.map((a) => a.createdAt),
      ...data.quotes.map((q) => q.createdAt),
    ].filter((iso) => iso.startsWith(day)).length,
  }));
  const actMax = Math.max(...activityByDay.map((d) => d.count), 1);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-dark-gray">Dashboard</h2>
        <p className="mt-1 text-sm text-muted-foreground">Welcome back. Here's your business at a glance.</p>
      </div>

      {/* KPI cards */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {kpis.map(({ label, newVal, total, section, icon: Icon, color, bg, bar }) => (
          <button key={label} onClick={() => setSection(section)}
            className="group rounded-2xl border border-border bg-white p-5 text-left shadow-card transition-all hover:-translate-y-0.5 hover:shadow-elegant">
            <div className="flex items-start justify-between">
              <div className={cn("grid h-10 w-10 place-items-center rounded-xl", bg)}>
                <Icon className={cn("h-5 w-5", color)} />
              </div>
              {newVal > 0 && <span className="inline-flex items-center rounded-full bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-600">{newVal} new</span>}
            </div>
            <div className="mt-4">
              <div className="text-2xl font-bold text-dark-gray">{total}</div>
              <div className="text-sm text-muted-foreground">{label}</div>
            </div>
            <div className="mt-3 h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
              <div className={cn("h-full rounded-full transition-all", bar)}
                style={{ width: total > 0 ? `${Math.min(100, (total / Math.max(...kpis.map(k => k.total), 1)) * 100)}%` : "0%" }} />
            </div>
            <div className={cn("mt-2 text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all", color)}>
              View all <ChevronRight className="h-3 w-3" />
            </div>
          </button>
        ))}
      </div>

      {/* Analytics row */}
      <div className="grid gap-6 lg:grid-cols-3">

        {/* Status breakdown */}
        <div className="rounded-2xl border border-border bg-white p-5 shadow-card">
          <div className="text-sm font-semibold text-dark-gray mb-4">Request Status Breakdown</div>
          <div className="space-y-3">
            {statusConfig.map(({ status, color, bar }) => {
              const count = statusCounts[status];
              const pct = Math.round((count / totalItems) * 100);
              return (
                <div key={status}>
                  <div className="flex items-center justify-between mb-1">
                    <span className={cn("text-xs font-medium", color)}>{status}</span>
                    <span className="text-xs text-muted-foreground">{count} ({pct}%)</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                    <div className={cn("h-full rounded-full transition-all duration-500", bar)} style={{ width: `${pct}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-4 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
            <span>Resolution rate</span>
            <span className="font-semibold text-green-600">{resolutionPct}%</span>
          </div>
        </div>

        {/* 7-day activity */}
        <div className="rounded-2xl border border-border bg-white p-5 shadow-card">
          <div className="text-sm font-semibold text-dark-gray mb-4">Activity — Last 7 Days</div>
          <div className="flex items-end gap-1.5 h-28">
            {activityByDay.map(({ day, count }) => (
              <div key={day} className="flex flex-1 flex-col items-center gap-1">
                <span className="text-[10px] font-semibold text-dark-gray">{count > 0 ? count : ""}</span>
                <div className="w-full rounded-t-md bg-primary/20 overflow-hidden" style={{ height: "80px" }}>
                  <div className="w-full rounded-t-md bg-primary transition-all duration-500"
                    style={{ height: `${(count / actMax) * 80}px`, marginTop: `${80 - (count / actMax) * 80}px` }} />
                </div>
                <span className="text-[10px] text-muted-foreground">{day}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 pt-3 border-t border-border text-xs text-muted-foreground">
            Total this week: <span className="font-semibold text-dark-gray">{activityByDay.reduce((s, d) => s + d.count, 0)}</span> enquiries
          </div>
        </div>

        {/* Quick stats */}
        <div className="rounded-2xl border border-border bg-white p-5 shadow-card space-y-4">
          <div className="text-sm font-semibold text-dark-gray">Quick Stats</div>
          {[
            { label: "Avg. Star Rating",     value: `${avgRating} ⭐`, sub: `${data.testimonials.length} reviews` },
            { label: "Services Listed",      value: data.services.length, sub: "custom services" },
            { label: "Portfolio Items",      value: data.portfolio.length, sub: "project photos" },
            { label: "Custom Categories",    value: data.customCategories.length, sub: "user-defined" },
            { label: "Open Requests",        value: statusCounts["New"] + statusCounts["In progress"], sub: "need attention" },
          ].map(({ label, value, sub }) => (
            <div key={label} className="flex items-center justify-between py-2 border-b border-border last:border-0">
              <div>
                <div className="text-xs font-medium text-dark-gray">{label}</div>
                <div className="text-[11px] text-muted-foreground">{sub}</div>
              </div>
              <div className="text-lg font-bold text-primary">{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Service demand */}
      {demandEntries.length > 0 && (
        <div className="rounded-2xl border border-border bg-white p-5 shadow-card">
          <div className="text-sm font-semibold text-dark-gray mb-4">Service Demand (Appointments + Quotes)</div>
          <div className="space-y-2.5">
            {demandEntries.map(([service, count]) => (
              <div key={service} className="flex items-center gap-3">
                <span className="w-44 shrink-0 text-xs text-foreground truncate">{service}</span>
                <div className="flex-1 h-2.5 rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full rounded-full bg-primary transition-all duration-500" style={{ width: `${(count / demandMax) * 100}%` }} />
                </div>
                <span className="w-6 text-right text-xs font-semibold text-dark-gray shrink-0">{count}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recent mini-tables */}
      <div className="grid gap-6 lg:grid-cols-2">
        <MiniTable title="Recent Messages" cols={["Name", "Status", "Date"]}
          rows={data.contacts.slice(0, 5).map((c) => [c.name, <StatusBadge status={c.status} />, fmtDate(c.createdAt)])}
          onViewAll={() => setSection("messages")} />
        <MiniTable title="Recent Appointments" cols={["Name", "Service", "Status"]}
          rows={data.appointments.slice(0, 5).map((a) => [a.fullName, a.service, <StatusBadge status={a.status} />])}
          onViewAll={() => setSection("appointments")} />
      </div>
    </div>
  );
}

function MiniTable({ title, cols, rows, onViewAll }: { title: string; cols: string[]; rows: React.ReactNode[][]; onViewAll: () => void }) {
  return (
    <Card className="shadow-card">
      <CardHeader className="flex flex-row items-center justify-between pb-3">
        <CardTitle className="text-base text-dark-gray">{title}</CardTitle>
        <button onClick={onViewAll} className="text-xs font-medium text-primary hover:underline flex items-center gap-0.5">
          View all <ChevronRight className="h-3 w-3" />
        </button>
      </CardHeader>
      <CardContent className="p-0">
        {rows.length === 0 ? (
          <p className="px-6 py-8 text-center text-sm text-muted-foreground">No records yet.</p>
        ) : (
          <table className="w-full text-sm">
            <thead><tr className="border-b border-border bg-slate-50">
              {cols.map((c) => <th key={c} className="px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">{c}</th>)}
            </tr></thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-b border-border last:border-0 hover:bg-slate-50/80">
                  {row.map((cell, j) => <td key={j} className="px-4 py-2.5 text-foreground">{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </CardContent>
    </Card>
  );
}

// ─── Messages Table ───────────────────────────────────────────────────────────
function MessagesTable({ data, persist }: { data: AdminData; persist: (d: AdminData) => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  return (
    <TableShell title="Contact Messages" description="Messages submitted via the contact form." count={data.contacts.length}>
      <thead><tr className="bg-slate-50 border-b border-border">
        <Th />
        <Th>Name</Th>
        <Th>Email</Th>
        <Th>Phone</Th>
        <Th>Message</Th>
        <Th>Status</Th>
        <Th>Received</Th>
        <Th>Actions</Th>
      </tr></thead>
      <tbody>
        {data.contacts.length === 0 && <EmptyRow cols={8} />}
        {data.contacts.map((c) => (
          <>
            <tr key={c.id} className="border-b border-border hover:bg-slate-50/60 transition-colors">
              <Td>
                <button onClick={() => setExpanded(expanded === c.id ? null : c.id)} className="grid h-6 w-6 place-items-center rounded text-muted-foreground hover:text-foreground">
                  <ChevronDown className={cn("h-4 w-4 transition-transform", expanded === c.id && "rotate-180")} />
                </button>
              </Td>
              <Td><span className="font-medium text-dark-gray">{c.name}</span></Td>
              <Td><span className="text-muted-foreground">{c.email}</span></Td>
              <Td><span className="text-muted-foreground">{c.phone}</span></Td>
              <Td><span className="line-clamp-1 max-w-xs text-foreground">{c.message}</span></Td>
              <Td>
                <Select value={c.status} onValueChange={(v) => persist({ ...data, contacts: data.contacts.map((x) => x.id === c.id ? { ...x, status: v as RequestStatus } : x) })}>
                  <SelectTrigger className="h-7 w-32 text-xs"><SelectValue /></SelectTrigger>
                  <SelectContent>{statuses.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
                </Select>
              </Td>
              <Td><span className="text-xs text-muted-foreground whitespace-nowrap">{fmtDate(c.createdAt)}</span></Td>
              <Td>
                <div className="flex items-center gap-1.5">
                  <Button size="sm" variant="ghost" className="h-7 px-2 text-xs" asChild>
                    <a href={`mailto:${c.email}`}><Mail className="h-3.5 w-3.5" /></a>
                  </Button>
                  <Button size="sm" variant="ghost" className="h-7 px-2 text-xs text-destructive hover:text-destructive"
                    onClick={() => { persist({ ...data, contacts: data.contacts.filter((x) => x.id !== c.id) }); toast.success("Deleted"); }}>
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </Td>
            </tr>
            {expanded === c.id && (
              <tr key={`${c.id}-expand`} className="bg-blue-50/40 border-b border-border">
                <td colSpan={8} className="px-6 py-4">
                  <ReplyPanel
                    email={c.email} reply={c.reply ?? ""}
                    onSave={(reply) => { persist({ ...data, contacts: data.contacts.map((x) => x.id === c.id ? { ...x, reply, status: "Replied" } : x) }); toast.success("Reply saved"); }}
                  />
                </td>
              </tr>
            )}
          </>
        ))}
      </tbody>
    </TableShell>
  );
}

// ─── Appointments Table ───────────────────────────────────────────────────────
const serviceOptions = [
  "Home Repairs", "Painting", "Gardening", "Carpentry", "Property Maintenance", "General Handyman Services",
];

function AppointmentsTable({ data, persist }: { data: AdminData; persist: (d: AdminData) => void }) {
  const [selected, setSelected] = useState<AppointmentRequest | null>(null);
  const [addOpen, setAddOpen] = useState(false);
  const [addService, setAddService] = useState("");

  const update = (id: string, patch: Partial<AppointmentRequest>) =>
    persist({ ...data, appointments: data.appointments.map((x) => x.id === id ? { ...x, ...patch } : x) });

  const addAppointment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const v = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    persist({ ...data, appointments: [{ id: createId("appointment"), fullName: v.fullName, email: v.email, phone: v.phone, service: addService, date: v.date, time: v.time, address: v.address, notes: v.notes, status: "New", createdAt: new Date().toISOString() }, ...data.appointments] });
    form.reset(); setAddService(""); setAddOpen(false); toast.success("Appointment added");
  };

  return (
    <>
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-dark-gray">Appointments</h2>
            <p className="mt-1 text-sm text-muted-foreground">Bookings submitted via the contact page.</p>
          </div>
          <Button size="sm" onClick={() => setAddOpen(true)}><Plus className="h-4 w-4" /> Add appointment</Button>
        </div>

        <TableShell count={data.appointments.length}>
          <thead><tr className="bg-slate-50 border-b border-border">
            <Th>Name</Th><Th>Service</Th><Th>Date & Time</Th><Th>Address</Th><Th>Status</Th><Th>Received</Th><Th>Actions</Th>
          </tr></thead>
          <tbody>
            {data.appointments.length === 0 && <EmptyRow cols={7} />}
            {data.appointments.map((a) => (
              <tr key={a.id} className="border-b border-border hover:bg-slate-50/60 transition-colors">
                <Td>
                  <div className="font-medium text-dark-gray">{a.fullName}</div>
                  <div className="text-xs text-muted-foreground">{a.email}</div>
                </Td>
                <Td><span className="text-foreground">{a.service}</span></Td>
                <Td><span className="text-foreground whitespace-nowrap">{a.date} {a.time}</span></Td>
                <Td><span className="line-clamp-1 max-w-[160px] text-muted-foreground">{a.address}</span></Td>
                <Td>
                  <Select value={a.status} onValueChange={(v) => update(a.id, { status: v as RequestStatus })}>
                    <SelectTrigger className="h-7 w-32 text-xs"><SelectValue /></SelectTrigger>
                    <SelectContent>{statuses.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
                  </Select>
                </Td>
                <Td><span className="text-xs text-muted-foreground whitespace-nowrap">{fmtDate(a.createdAt)}</span></Td>
                <Td>
                  <div className="flex items-center gap-1.5">
                    <Button size="sm" variant="ghost" className="h-7 px-2" onClick={() => setSelected(a)}><Eye className="h-3.5 w-3.5" /></Button>
                    <Button size="sm" variant="ghost" className="h-7 px-2" asChild><a href={`mailto:${a.email}`}><Mail className="h-3.5 w-3.5" /></a></Button>
                    <Button size="sm" variant="ghost" className="h-7 px-2 text-destructive hover:text-destructive"
                      onClick={() => { persist({ ...data, appointments: data.appointments.filter((x) => x.id !== a.id) }); toast.success("Deleted"); }}>
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </Td>
              </tr>
            ))}
          </tbody>
        </TableShell>
      </div>

      {/* Add modal */}
      {addOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={() => setAddOpen(false)}>
          <div className="w-full max-w-lg rounded-2xl bg-white shadow-elegant overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-violet-50/60">
              <h2 className="text-base font-semibold text-dark-gray">Add Appointment</h2>
              <button onClick={() => setAddOpen(false)} className="grid h-7 w-7 place-items-center rounded-lg text-muted-foreground hover:bg-slate-100"><X className="h-4 w-4" /></button>
            </div>
            <form onSubmit={addAppointment} className="px-6 py-5 space-y-3 max-h-[70vh] overflow-y-auto">
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2 space-y-1.5"><Label>Full name</Label><Input name="fullName" placeholder="Full name" required /></div>
                <div className="space-y-1.5"><Label>Email</Label><Input name="email" type="email" placeholder="Email" required /></div>
                <div className="space-y-1.5"><Label>Phone</Label><Input name="phone" placeholder="Phone" required /></div>
                <div className="col-span-2 space-y-1.5">
                  <Label>Service</Label>
                  <Select value={addService} onValueChange={setAddService} required>
                    <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
                    <SelectContent>{serviceOptions.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5"><Label>Date</Label><Input name="date" type="date" required /></div>
                <div className="space-y-1.5"><Label>Time</Label><Input name="time" type="time" required /></div>
                <div className="col-span-2 space-y-1.5"><Label>Address</Label><Input name="address" placeholder="Property address" required /></div>
                <div className="col-span-2 space-y-1.5"><Label>Notes</Label><Textarea name="notes" placeholder="Additional notes" rows={2} className="resize-none text-sm" /></div>
              </div>
              <Button type="submit" className="w-full mt-1"><Plus className="h-4 w-4" /> Add appointment</Button>
            </form>
          </div>
        </div>
      )}

      {/* Detail modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={() => setSelected(null)}>
          <div className="w-full max-w-lg rounded-2xl bg-white shadow-elegant overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-violet-50/60">
              <div>
                <h2 className="text-base font-semibold text-dark-gray">{selected.fullName}</h2>
                <p className="text-xs text-muted-foreground">{selected.service} &mdash; {selected.date} at {selected.time}</p>
              </div>
              <button onClick={() => setSelected(null)} className="grid h-7 w-7 place-items-center rounded-lg text-muted-foreground hover:bg-slate-100"><X className="h-4 w-4" /></button>
            </div>
            <div className="px-6 py-5 space-y-4 max-h-[70vh] overflow-y-auto">
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
                {([["Email", selected.email], ["Phone", selected.phone], ["Address", selected.address], ["Received", fmtDate(selected.createdAt)]] as [string, string][]).map(([label, value]) => (
                  <div key={label}>
                    <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</div>
                    <div className="mt-0.5 text-foreground break-all">{value}</div>
                  </div>
                ))}
                {selected.notes && (
                  <div className="col-span-2">
                    <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Notes</div>
                    <div className="mt-0.5 text-foreground">{selected.notes}</div>
                  </div>
                )}
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Status</Label>
                <Select value={data.appointments.find((x) => x.id === selected.id)?.status ?? selected.status}
                  onValueChange={(v) => { update(selected.id, { status: v as RequestStatus }); setSelected((s) => s ? { ...s, status: v as RequestStatus } : s); }}>
                  <SelectTrigger className="h-9 text-sm"><SelectValue /></SelectTrigger>
                  <SelectContent>{statuses.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <AppointmentReplyPanel appointment={selected}
                onSave={(reply) => { update(selected.id, { reply, status: "Replied" }); setSelected((s) => s ? { ...s, reply, status: "Replied" } : s); toast.success("Reply saved"); }} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function AppointmentReplyPanel({ appointment, onSave }: { appointment: AppointmentRequest; onSave: (reply: string) => void }) {
  const [reply, setReply] = useState(appointment.reply ?? "");
  useEffect(() => { setReply(appointment.reply ?? ""); }, [appointment.id]);
  return (
    <div className="space-y-1.5">
      <Label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Reply to Customer</Label>
      <Textarea value={reply} onChange={(e) => setReply(e.target.value)} placeholder="Write a reply..." rows={3} className="resize-none bg-white text-sm" />
      <div className="flex gap-2 pt-1">
        <Button size="sm" onClick={() => onSave(reply)}><MessageSquare className="h-3.5 w-3.5" /> Save reply</Button>
        <Button size="sm" variant="outline" asChild>
          <a href={`mailto:${appointment.email}?subject=Fix It Dublin — your appointment&body=${encodeURIComponent(reply)}`}>
            <Mail className="h-3.5 w-3.5" /> Send email
          </a>
        </Button>
      </div>
    </div>
  );
}

// ─── Quotes Table ─────────────────────────────────────────────────────────────
function QuotesTable({ data, persist }: { data: AdminData; persist: (d: AdminData) => void }) {
  const [selected, setSelected] = useState<QuoteRequest | null>(null);
  const [addOpen, setAddOpen] = useState(false);

  const update = (id: string, patch: Partial<QuoteRequest>) =>
    persist({ ...data, quotes: data.quotes.map((x) => x.id === id ? { ...x, ...patch } : x) });

  const add = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const v = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    persist({ ...data, quotes: [{ id: createId("quote"), name: v.name, email: v.email, phone: v.phone, service: v.service, details: v.details, budget: v.budget, status: "New", createdAt: new Date().toISOString() }, ...data.quotes] });
    form.reset(); setAddOpen(false); toast.success("Quote added");
  };

  return (
    <>
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-dark-gray">Quotes</h2>
            <p className="mt-1 text-sm text-muted-foreground">Manage quote requests.</p>
          </div>
          <Button size="sm" onClick={() => setAddOpen(true)}><Plus className="h-4 w-4" /> Add quote</Button>
        </div>

        <TableShell count={data.quotes.length}>
          <thead><tr className="bg-slate-50 border-b border-border">
            <Th>Name</Th><Th>Service</Th><Th>Budget</Th><Th>Details</Th><Th>Status</Th><Th>Received</Th><Th>Actions</Th>
          </tr></thead>
          <tbody>
            {data.quotes.length === 0 && <EmptyRow cols={7} />}
            {data.quotes.map((q) => (
              <tr key={q.id} className="border-b border-border hover:bg-slate-50/60 transition-colors">
                <Td>
                  <div className="font-medium text-dark-gray">{q.name}</div>
                  <div className="text-xs text-muted-foreground">{q.email}</div>
                </Td>
                <Td><span className="text-foreground">{q.service}</span></Td>
                <Td><span className="text-muted-foreground">{q.budget || "—"}</span></Td>
                <Td><span className="line-clamp-1 max-w-[180px] text-muted-foreground">{q.details}</span></Td>
                <Td>
                  <Select value={q.status} onValueChange={(v) => update(q.id, { status: v as RequestStatus })}>
                    <SelectTrigger className="h-7 w-32 text-xs"><SelectValue /></SelectTrigger>
                    <SelectContent>{statuses.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
                  </Select>
                </Td>
                <Td><span className="text-xs text-muted-foreground whitespace-nowrap">{fmtDate(q.createdAt)}</span></Td>
                <Td>
                  <div className="flex items-center gap-1.5">
                    <Button size="sm" variant="ghost" className="h-7 px-2" onClick={() => setSelected(q)}><Eye className="h-3.5 w-3.5" /></Button>
                    <Button size="sm" variant="ghost" className="h-7 px-2" asChild><a href={`mailto:${q.email}`}><Mail className="h-3.5 w-3.5" /></a></Button>
                    <Button size="sm" variant="ghost" className="h-7 px-2 text-destructive hover:text-destructive"
                      onClick={() => { persist({ ...data, quotes: data.quotes.filter((x) => x.id !== q.id) }); toast.success("Deleted"); }}>
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </Td>
              </tr>
            ))}
          </tbody>
        </TableShell>
      </div>

      {/* Add modal */}
      {addOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={() => setAddOpen(false)}>
          <div className="w-full max-w-lg rounded-2xl bg-white shadow-elegant overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-amber-50/60">
              <h2 className="text-base font-semibold text-dark-gray">Add Quote Request</h2>
              <button onClick={() => setAddOpen(false)} className="grid h-7 w-7 place-items-center rounded-lg text-muted-foreground hover:bg-slate-100"><X className="h-4 w-4" /></button>
            </div>
            <form onSubmit={add} className="px-6 py-5 space-y-3 max-h-[70vh] overflow-y-auto">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5"><Label>Name</Label><Input name="name" placeholder="Customer name" required /></div>
                <div className="space-y-1.5"><Label>Phone</Label><Input name="phone" placeholder="Phone" required /></div>
                <div className="space-y-1.5"><Label>Email</Label><Input name="email" type="email" placeholder="Email" required /></div>
                <div className="space-y-1.5"><Label>Budget</Label><Input name="budget" placeholder="e.g. €200–€400" /></div>
                <div className="space-y-1.5"><Label>Service</Label><Input name="service" placeholder="Service type" required /></div>
                <div className="col-span-2 space-y-1.5"><Label>Job Details</Label><Textarea name="details" placeholder="Describe the job" rows={3} className="resize-none text-sm" required /></div>
              </div>
              <Button type="submit" className="w-full mt-1"><Plus className="h-4 w-4" /> Add quote</Button>
            </form>
          </div>
        </div>
      )}

      {/* Detail modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={() => setSelected(null)}>
          <div className="w-full max-w-lg rounded-2xl bg-white shadow-elegant overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-amber-50/60">
              <div>
                <h2 className="text-base font-semibold text-dark-gray">{selected.name}</h2>
                <p className="text-xs text-muted-foreground">{selected.service}{selected.budget ? ` — ${selected.budget}` : ""}</p>
              </div>
              <button onClick={() => setSelected(null)} className="grid h-7 w-7 place-items-center rounded-lg text-muted-foreground hover:bg-slate-100"><X className="h-4 w-4" /></button>
            </div>
            <div className="px-6 py-5 space-y-4 max-h-[70vh] overflow-y-auto">
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
                {([["Email", selected.email], ["Phone", selected.phone], ["Budget", selected.budget || "—"], ["Received", fmtDate(selected.createdAt)]] as [string, string][]).map(([label, value]) => (
                  <div key={label}>
                    <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</div>
                    <div className="mt-0.5 text-foreground break-all">{value}</div>
                  </div>
                ))}
                <div className="col-span-2">
                  <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Job Details</div>
                  <div className="mt-0.5 text-foreground">{selected.details}</div>
                </div>
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Status</Label>
                <Select value={data.quotes.find((x) => x.id === selected.id)?.status ?? selected.status}
                  onValueChange={(v) => { update(selected.id, { status: v as RequestStatus }); setSelected((s) => s ? { ...s, status: v as RequestStatus } : s); }}>
                  <SelectTrigger className="h-9 text-sm"><SelectValue /></SelectTrigger>
                  <SelectContent>{statuses.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <QuoteReplyPanel quote={selected}
                onSave={(reply) => { update(selected.id, { reply, status: "Replied" }); setSelected((s) => s ? { ...s, reply, status: "Replied" } : s); toast.success("Reply saved"); }} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function QuoteReplyPanel({ quote, onSave }: { quote: QuoteRequest; onSave: (reply: string) => void }) {
  const [reply, setReply] = useState(quote.reply ?? "");
  useEffect(() => { setReply(quote.reply ?? ""); }, [quote.id]);
  return (
    <div className="space-y-1.5">
      <Label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Reply to Customer</Label>
      <Textarea value={reply} onChange={(e) => setReply(e.target.value)} placeholder="Write a reply..." rows={3} className="resize-none bg-white text-sm" />
      <div className="flex gap-2 pt-1">
        <Button size="sm" onClick={() => onSave(reply)}><MessageSquare className="h-3.5 w-3.5" /> Save reply</Button>
        <Button size="sm" variant="outline" asChild>
          <a href={`mailto:${quote.email}?subject=Fix It Dublin — your quote request&body=${encodeURIComponent(reply)}`}>
            <Mail className="h-3.5 w-3.5" /> Send email
          </a>
        </Button>
      </div>
    </div>
  );
}

// ─── Testimonials Table ───────────────────────────────────────────────────────
function TestimonialsTable({ data, persist }: { data: AdminData; persist: (d: AdminData) => void }) {
  const [addOpen, setAddOpen] = useState(false);

  const add = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const v = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    persist({ ...data, testimonials: [{ id: createId("testimonial"), name: v.name, area: v.area, rating: Number(v.rating), text: v.text, createdAt: new Date().toISOString() }, ...data.testimonials] });
    form.reset(); setAddOpen(false); toast.success("Testimonial added");
  };

  return (
    <>
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-dark-gray">Testimonials</h2>
          <p className="mt-1 text-sm text-muted-foreground">Add and manage customer reviews.</p>
        </div>
        <Button size="sm" onClick={() => setAddOpen(true)}><Plus className="h-4 w-4" /> Add testimonial</Button>
      </div>

      <TableShell count={data.testimonials.length}>
        <thead><tr className="bg-slate-50 border-b border-border">
          <Th>Name</Th><Th>Area</Th><Th>Rating</Th><Th>Review</Th><Th>Added</Th><Th>Actions</Th>
        </tr></thead>
        <tbody>
          {data.testimonials.length === 0 && <EmptyRow cols={6} />}
          {data.testimonials.map((t) => (
            <tr key={t.id} className="border-b border-border last:border-0 hover:bg-slate-50/60 transition-colors">
              <Td><span className="font-medium text-dark-gray">{t.name}</span></Td>
              <Td><span className="text-muted-foreground">{t.area}</span></Td>
              <Td>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={cn("h-3.5 w-3.5", i < t.rating ? "fill-amber-400 text-amber-400" : "text-slate-200")} />
                  ))}
                  <span className="ml-1 text-xs text-muted-foreground">{t.rating}/5</span>
                </div>
              </Td>
              <Td><span className="line-clamp-2 max-w-sm text-sm text-foreground">"{t.text}"</span></Td>
              <Td><span className="text-xs text-muted-foreground whitespace-nowrap">{fmtDate(t.createdAt)}</span></Td>
              <Td>
                <Button size="sm" variant="ghost" className="h-7 px-2 text-destructive hover:text-destructive"
                  onClick={() => { persist({ ...data, testimonials: data.testimonials.filter((x) => x.id !== t.id) }); toast.success("Deleted"); }}>
                  <Trash2 className="h-3.5 w-3.5" />
                </Button>
              </Td>
            </tr>
          ))}
        </tbody>
      </TableShell>
    </div>

      {/* Add modal */}
      {addOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={() => setAddOpen(false)}>
          <div className="w-full max-w-md rounded-2xl bg-white shadow-elegant overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-green-50/60">
              <h2 className="text-base font-semibold text-dark-gray">Add Testimonial</h2>
              <button onClick={() => setAddOpen(false)} className="grid h-7 w-7 place-items-center rounded-lg text-muted-foreground hover:bg-slate-100"><X className="h-4 w-4" /></button>
            </div>
            <form onSubmit={add} className="px-6 py-5 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5"><Label>Customer name</Label><Input name="name" placeholder="e.g. Sarah O'Connor" required /></div>
                <div className="space-y-1.5"><Label>Area</Label><Input name="area" placeholder="e.g. Rathmines, D6" required /></div>
                <div className="space-y-1.5"><Label>Rating (1–5)</Label><Input name="rating" type="number" min="1" max="5" defaultValue="5" required /></div>
                <div className="col-span-2 space-y-1.5"><Label>Review text</Label><Textarea name="text" placeholder="Customer review..." rows={3} className="resize-none text-sm" required /></div>
              </div>
              <Button type="submit" className="w-full mt-1"><Plus className="h-4 w-4" /> Add testimonial</Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

// ─── Services Manager ────────────────────────────────────────────────────────
function ServicesManager({ data, persist }: { data: AdminData; persist: (d: AdminData) => void }) {
  const [addOpen, setAddOpen] = useState(false);
  const [benefits, setBenefits] = useState("");
  const [category, setCategory] = useState("");
  const [imageDataUrl, setImageDataUrl] = useState("");

  const allCats = [...allCategories, ...data.customCategories];

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setImageDataUrl(reader.result as string);
    reader.readAsDataURL(file);
  };

  const add = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const v = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    const slug = v.title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
    const newService: AdminService = {
      id: createId("service"), slug, title: v.title, category: category || allCats[0],
      description: v.description,
      benefits: benefits.split("\n").map((b) => b.trim()).filter(Boolean),
      imageDataUrl: imageDataUrl || undefined,
      createdAt: new Date().toISOString(),
    };
    persist({ ...data, services: [newService, ...data.services] });
    form.reset(); setBenefits(""); setCategory(""); setImageDataUrl(""); setAddOpen(false);
    toast.success("Service added");
  };

  return (
    <>
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-dark-gray">Services</h2>
            <p className="mt-1 text-sm text-muted-foreground">Add custom services shown on the Services page.</p>
          </div>
          <Button size="sm" onClick={() => setAddOpen(true)}><Plus className="h-4 w-4" /> Add service</Button>
        </div>
        <TableShell count={data.services.length}>
          <thead><tr className="bg-slate-50 border-b border-border">
            <Th>Title</Th><Th>Category</Th><Th>Image</Th><Th>Description</Th><Th>Benefits</Th><Th>Added</Th><Th>Actions</Th>
          </tr></thead>
          <tbody>
            {data.services.length === 0 && <EmptyRow cols={7} />}
            {data.services.map((s) => (
              <tr key={s.id} className="border-b border-border hover:bg-slate-50/60 transition-colors">
                <Td><span className="font-medium text-dark-gray">{s.title}</span></Td>
                <Td><span className="text-muted-foreground">{s.category}</span></Td>
                <Td>
                  {s.imageDataUrl
                    ? <img src={s.imageDataUrl} alt={s.title} className="h-10 w-16 object-cover rounded" />
                    : <span className="text-xs text-muted-foreground">None</span>}
                </Td>
                <Td><span className="line-clamp-2 max-w-[180px] text-sm text-muted-foreground">{s.description}</span></Td>
                <Td><span className="text-xs text-muted-foreground">{s.benefits.length} benefit{s.benefits.length !== 1 ? "s" : ""}</span></Td>
                <Td><span className="text-xs text-muted-foreground whitespace-nowrap">{fmtDate(s.createdAt)}</span></Td>
                <Td>
                  <Button size="sm" variant="ghost" className="h-7 px-2 text-destructive hover:text-destructive"
                    onClick={() => { persist({ ...data, services: data.services.filter((x) => x.id !== s.id) }); toast.success("Deleted"); }}>
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                </Td>
              </tr>
            ))}
          </tbody>
        </TableShell>
      </div>

      {addOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={() => setAddOpen(false)}>
          <div className="w-full max-w-lg rounded-2xl bg-white shadow-elegant overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-blue-50/60">
              <h2 className="text-base font-semibold text-dark-gray">Add Service</h2>
              <button onClick={() => setAddOpen(false)} className="grid h-7 w-7 place-items-center rounded-lg text-muted-foreground hover:bg-slate-100"><X className="h-4 w-4" /></button>
            </div>
            <form onSubmit={add} className="px-6 py-5 space-y-3 max-h-[75vh] overflow-y-auto">
              <div className="space-y-1.5"><Label>Title</Label><Input name="title" placeholder="e.g. Roof Cleaning" required /></div>
              <div className="space-y-1.5">
                <Label>Category</Label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger><SelectValue placeholder="Select category" /></SelectTrigger>
                  <SelectContent>{allCats.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label>Image</Label>
                <Input type="file" accept="image/*" onChange={handleImage} className="cursor-pointer" />
                {imageDataUrl && <img src={imageDataUrl} alt="preview" className="mt-2 h-28 w-full object-cover rounded-lg" />}
              </div>
              <div className="space-y-1.5"><Label>Description</Label><Textarea name="description" placeholder="Short description..." rows={3} className="resize-none text-sm" required /></div>
              <div className="space-y-1.5">
                <Label>Benefits <span className="text-muted-foreground font-normal">(one per line)</span></Label>
                <Textarea value={benefits} onChange={(e) => setBenefits(e.target.value)} placeholder={"Fast turnaround\nFree quote\nFully insured"} rows={3} className="resize-none text-sm" />
              </div>
              <Button type="submit" className="w-full mt-1"><Plus className="h-4 w-4" /> Add service</Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

// ─── Portfolio Manager ────────────────────────────────────────────────────────
function PortfolioManager({ data, persist }: { data: AdminData; persist: (d: AdminData) => void }) {
  const [addOpen, setAddOpen] = useState(false);
  const [editItem, setEditItem] = useState<AdminPortfolioItem | null>(null);
  const [category, setCategory] = useState("");
  const [span, setSpan] = useState<AdminPortfolioItem["span"]>("normal");
  const [imageDataUrl, setImageDataUrl] = useState("");
  const [editCategory, setEditCategory] = useState("");
  const [editSpan, setEditSpan] = useState<AdminPortfolioItem["span"]>("normal");
  const [editImageDataUrl, setEditImageDataUrl] = useState("");

  const allCats = [...allCategories, ...data.customCategories];

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>, setter: (v: string) => void) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setter(reader.result as string);
    reader.readAsDataURL(file);
  };

  const add = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const v = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string>;
    persist({ ...data, portfolio: [{ id: createId("portfolio"), title: v.title, category: category || allCats[0], imageUrl: "", imageDataUrl: imageDataUrl || undefined, span, createdAt: new Date().toISOString() }, ...data.portfolio] });
    e.currentTarget.reset(); setCategory(""); setSpan("normal"); setImageDataUrl(""); setAddOpen(false);
    toast.success("Portfolio item added");
  };

  const openEdit = (p: AdminPortfolioItem) => {
    setEditItem(p); setEditCategory(p.category); setEditSpan(p.span); setEditImageDataUrl(p.imageDataUrl ?? "");
  };

  const saveEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editItem) return;
    const v = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string>;
    persist({ ...data, portfolio: data.portfolio.map((x) => x.id === editItem.id
      ? { ...x, title: v.title, category: editCategory || x.category, span: editSpan, imageDataUrl: editImageDataUrl || x.imageDataUrl }
      : x) });
    setEditItem(null);
    toast.success("Portfolio item updated");
  };

  return (
    <>
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-dark-gray">Portfolio</h2>
            <p className="mt-1 text-sm text-muted-foreground">Add project images shown on the Portfolio page.</p>
          </div>
          <Button size="sm" onClick={() => setAddOpen(true)}><Plus className="h-4 w-4" /> Add item</Button>
        </div>
        <TableShell count={data.portfolio.length}>
          <thead><tr className="bg-slate-50 border-b border-border">
            <Th>Image</Th><Th>Title</Th><Th>Category</Th><Th>Span</Th><Th>Added</Th><Th>Actions</Th>
          </tr></thead>
          <tbody>
            {data.portfolio.length === 0 && <EmptyRow cols={6} />}
            {data.portfolio.map((p) => (
              <tr key={p.id} className="border-b border-border hover:bg-slate-50/60 transition-colors">
                <Td>
                  {(p.imageDataUrl || p.imageUrl)
                    ? <img src={p.imageDataUrl || p.imageUrl} alt={p.title} className="h-12 w-20 object-cover rounded-lg" />
                    : <span className="text-xs text-muted-foreground">No image</span>}
                </Td>
                <Td><span className="font-medium text-dark-gray">{p.title}</span></Td>
                <Td><span className="text-muted-foreground">{p.category}</span></Td>
                <Td><span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-600 capitalize">{p.span}</span></Td>
                <Td><span className="text-xs text-muted-foreground whitespace-nowrap">{fmtDate(p.createdAt)}</span></Td>
                <Td>
                  <div className="flex items-center gap-1.5">
                    <Button size="sm" variant="ghost" className="h-7 px-2" onClick={() => openEdit(p)}><Pencil className="h-3.5 w-3.5" /></Button>
                    <Button size="sm" variant="ghost" className="h-7 px-2 text-destructive hover:text-destructive"
                      onClick={() => { persist({ ...data, portfolio: data.portfolio.filter((x) => x.id !== p.id) }); toast.success("Deleted"); }}>
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </Td>
              </tr>
            ))}
          </tbody>
        </TableShell>
      </div>

      {/* Add modal */}
      {addOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={() => setAddOpen(false)}>
          <div className="w-full max-w-md rounded-2xl bg-white shadow-elegant overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-slate-50">
              <h2 className="text-base font-semibold text-dark-gray">Add Portfolio Item</h2>
              <button onClick={() => setAddOpen(false)} className="grid h-7 w-7 place-items-center rounded-lg text-muted-foreground hover:bg-slate-100"><X className="h-4 w-4" /></button>
            </div>
            <form onSubmit={add} className="px-6 py-5 space-y-3 max-h-[75vh] overflow-y-auto">
              <div className="space-y-1.5"><Label>Title</Label><Input name="title" placeholder="e.g. Kitchen renovation" required /></div>
              <div className="space-y-1.5">
                <Label>Category</Label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger><SelectValue placeholder="Select category" /></SelectTrigger>
                  <SelectContent>{allCats.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label>Image</Label>
                <Input type="file" accept="image/*" onChange={(e) => handleImage(e, setImageDataUrl)} className="cursor-pointer" required />
                {imageDataUrl && <img src={imageDataUrl} alt="preview" className="mt-2 h-28 w-full object-cover rounded-lg" />}
              </div>
              <div className="space-y-1.5">
                <Label>Grid span</Label>
                <Select value={span} onValueChange={(v) => setSpan(v as AdminPortfolioItem["span"])}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="normal">Normal (1×1)</SelectItem>
                    <SelectItem value="tall">Tall (1×2)</SelectItem>
                    <SelectItem value="wide">Wide (2×1)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="w-full mt-1"><Plus className="h-4 w-4" /> Add item</Button>
            </form>
          </div>
        </div>
      )}

      {/* Edit modal */}
      {editItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={() => setEditItem(null)}>
          <div className="w-full max-w-md rounded-2xl bg-white shadow-elegant overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-amber-50/60">
              <h2 className="text-base font-semibold text-dark-gray">Edit Portfolio Item</h2>
              <button onClick={() => setEditItem(null)} className="grid h-7 w-7 place-items-center rounded-lg text-muted-foreground hover:bg-slate-100"><X className="h-4 w-4" /></button>
            </div>
            <form onSubmit={saveEdit} className="px-6 py-5 space-y-3 max-h-[75vh] overflow-y-auto">
              <div className="space-y-1.5"><Label>Title</Label><Input name="title" defaultValue={editItem.title} required /></div>
              <div className="space-y-1.5">
                <Label>Category</Label>
                <Select value={editCategory} onValueChange={setEditCategory}>
                  <SelectTrigger><SelectValue placeholder="Select category" /></SelectTrigger>
                  <SelectContent>{allCats.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label>Replace image <span className="text-muted-foreground font-normal">(optional)</span></Label>
                <Input type="file" accept="image/*" onChange={(e) => handleImage(e, setEditImageDataUrl)} className="cursor-pointer" />
                {(editImageDataUrl || editItem.imageDataUrl || editItem.imageUrl) && (
                  <img src={editImageDataUrl || editItem.imageDataUrl || editItem.imageUrl} alt="preview" className="mt-2 h-28 w-full object-cover rounded-lg" />
                )}
              </div>
              <div className="space-y-1.5">
                <Label>Grid span</Label>
                <Select value={editSpan} onValueChange={(v) => setEditSpan(v as AdminPortfolioItem["span"])}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="normal">Normal (1×1)</SelectItem>
                    <SelectItem value="tall">Tall (1×2)</SelectItem>
                    <SelectItem value="wide">Wide (2×1)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="w-full mt-1"><Check className="h-4 w-4" /> Save changes</Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

// ─── Users Manager ────────────────────────────────────────────────────────
const roleBadge: Record<AdminRole, string> = {
  super:  "bg-violet-100 text-violet-700",
  admin:  "bg-blue-100 text-blue-700",
  viewer: "bg-slate-100 text-slate-500",
};

function UsersManager({ data, persist, currentUser }: { data: AdminData; persist: (d: AdminData) => void; currentUser: AdminUser }) {
  const [addOpen, setAddOpen] = useState(false);
  const [editUser, setEditUser] = useState<AdminUser | null>(null);
  const [addRole, setAddRole] = useState<AdminRole>("admin");
  const [editRole, setEditRole] = useState<AdminRole>("admin");
  const [showAddPw, setShowAddPw] = useState(false);
  const [showEditPw, setShowEditPw] = useState(false);

  const users = data.adminUsers;

  const add = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const v = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string>;
    if (users.find((u) => u.email === v.email)) { toast.error("Email already in use"); return; }
    persist({ ...data, adminUsers: [...users, { id: createId("user"), name: v.name, email: v.email, password: v.password, role: addRole, createdAt: new Date().toISOString() }] });
    e.currentTarget.reset(); setAddRole("admin"); setAddOpen(false); toast.success("User added");
  };

  const openEdit = (u: AdminUser) => { setEditUser(u); setEditRole(u.role); setShowEditPw(false); };

  const saveEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editUser) return;
    const v = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string>;
    if (v.email !== editUser.email && users.find((u) => u.email === v.email)) { toast.error("Email already in use"); return; }
    persist({ ...data, adminUsers: users.map((u) => u.id === editUser.id
      ? { ...u, name: v.name, email: v.email, role: editRole, ...(v.password ? { password: v.password } : {}) }
      : u) });
    setEditUser(null); toast.success("User updated");
  };

  const remove = (u: AdminUser) => {
    if (u.id === currentUser.id) { toast.error("You cannot delete your own account"); return; }
    if (u.role === "super" && users.filter((x) => x.role === "super").length === 1) { toast.error("At least one super admin must remain"); return; }
    persist({ ...data, adminUsers: users.filter((x) => x.id !== u.id) }); toast.success("User removed");
  };

  return (
    <>
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-dark-gray">Admin Users</h2>
            <p className="mt-1 text-sm text-muted-foreground">Manage who can access the admin dashboard.</p>
          </div>
          <Button size="sm" onClick={() => setAddOpen(true)}><Plus className="h-4 w-4" /> Add user</Button>
        </div>
        <TableShell count={users.length}>
          <thead><tr className="bg-slate-50 border-b border-border">
            <Th>Name</Th><Th>Email</Th><Th>Role</Th><Th>Added</Th><Th>Actions</Th>
          </tr></thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-b border-border last:border-0 hover:bg-slate-50/60 transition-colors">
                <Td>
                  <div className="flex items-center gap-2.5">
                    <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary/10 text-primary font-semibold text-sm">
                      {u.name.charAt(0).toUpperCase()}
                    </div>
                    <span className="font-medium text-dark-gray">{u.name}</span>
                    {u.id === currentUser.id && <span className="text-[10px] font-semibold text-primary bg-primary/10 rounded-full px-2 py-0.5">You</span>}
                  </div>
                </Td>
                <Td><span className="text-muted-foreground">{u.email}</span></Td>
                <Td>
                  <span className={cn("inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold capitalize", roleBadge[u.role])}>
                    <ShieldCheck className="h-3 w-3" /> {u.role}
                  </span>
                </Td>
                <Td><span className="text-xs text-muted-foreground whitespace-nowrap">{fmtDate(u.createdAt)}</span></Td>
                <Td>
                  <div className="flex items-center gap-1.5">
                    <Button size="sm" variant="ghost" className="h-7 px-2" onClick={() => openEdit(u)}><Pencil className="h-3.5 w-3.5" /></Button>
                    {u.id !== currentUser.id && (
                      <Button size="sm" variant="ghost" className="h-7 px-2 text-destructive hover:text-destructive" onClick={() => remove(u)}>
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    )}
                  </div>
                </Td>
              </tr>
            ))}
          </tbody>
        </TableShell>
      </div>

      {/* Add modal */}
      {addOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={() => setAddOpen(false)}>
          <div className="w-full max-w-sm rounded-2xl bg-white shadow-elegant overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-primary/5">
              <h2 className="text-base font-semibold text-dark-gray">Add Admin User</h2>
              <button onClick={() => setAddOpen(false)} className="grid h-7 w-7 place-items-center rounded-lg text-muted-foreground hover:bg-slate-100"><X className="h-4 w-4" /></button>
            </div>
            <form onSubmit={add} className="px-6 py-5 space-y-3">
              <div className="space-y-1.5"><Label>Full name</Label><Input name="name" placeholder="e.g. Jane Smith" required /></div>
              <div className="space-y-1.5"><Label>Email</Label><Input name="email" type="email" placeholder="jane@fixitdublin.com" required /></div>
              <div className="space-y-1.5">
                <Label>Password</Label>
                <div className="relative">
                  <Input name="password" type={showAddPw ? "text" : "password"} placeholder="Set a password" required className="pr-10" />
                  <button type="button" onClick={() => setShowAddPw(v => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                    <Eye className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="space-y-1.5">
                <Label>Role</Label>
                <Select value={addRole} onValueChange={(v) => setAddRole(v as AdminRole)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>{roles.map((r) => <SelectItem key={r} value={r} className="capitalize">{r}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <Button type="submit" className="w-full mt-1"><Plus className="h-4 w-4" /> Add user</Button>
            </form>
          </div>
        </div>
      )}

      {/* Edit modal */}
      {editUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={() => setEditUser(null)}>
          <div className="w-full max-w-sm rounded-2xl bg-white shadow-elegant overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-amber-50/60">
              <h2 className="text-base font-semibold text-dark-gray">Edit User</h2>
              <button onClick={() => setEditUser(null)} className="grid h-7 w-7 place-items-center rounded-lg text-muted-foreground hover:bg-slate-100"><X className="h-4 w-4" /></button>
            </div>
            <form onSubmit={saveEdit} className="px-6 py-5 space-y-3">
              <div className="space-y-1.5"><Label>Full name</Label><Input name="name" defaultValue={editUser.name} required /></div>
              <div className="space-y-1.5"><Label>Email</Label><Input name="email" type="email" defaultValue={editUser.email} required /></div>
              <div className="space-y-1.5">
                <Label>New password <span className="text-muted-foreground font-normal">(leave blank to keep current)</span></Label>
                <div className="relative">
                  <Input name="password" type={showEditPw ? "text" : "password"} placeholder="Enter new password" className="pr-10" />
                  <button type="button" onClick={() => setShowEditPw(v => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                    <Eye className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="space-y-1.5">
                <Label>Role</Label>
                <Select value={editRole} onValueChange={(v) => setEditRole(v as AdminRole)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>{roles.map((r) => <SelectItem key={r} value={r} className="capitalize">{r}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <Button type="submit" className="w-full mt-1"><Check className="h-4 w-4" /> Save changes</Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

// ─── Category Manager ────────────────────────────────────────────────────────
function CategoryManager({ data, persist }: { data: AdminData; persist: (d: AdminData) => void }) {
  const [addOpen, setAddOpen] = useState(false);
  const [newCat, setNewCat] = useState("");
  const [editTarget, setEditTarget] = useState<string | null>(null);
  const [editValue, setEditValue] = useState("");

  const builtins: string[] = ["Repairs", "Painting", "Gardening", "Carpentry", "Maintenance"];
  const customs = data.customCategories;
  const allRows = [
    ...builtins.map((name) => ({ name, builtin: true })),
    ...customs.map((name) => ({ name, builtin: false })),
  ];

  const add = () => {
    const trimmed = newCat.trim();
    if (!trimmed || builtins.includes(trimmed) || customs.includes(trimmed)) return;
    persist({ ...data, customCategories: [...customs, trimmed] });
    setNewCat(""); setAddOpen(false);
    toast.success("Category added");
  };

  const openEdit = (cat: string) => { setEditTarget(cat); setEditValue(cat); };

  const saveEdit = () => {
    const trimmed = editValue.trim();
    if (!trimmed || !editTarget) { setEditTarget(null); return; }
    if (trimmed !== editTarget && (builtins.includes(trimmed) || customs.includes(trimmed))) {
      toast.error("Category already exists"); return;
    }
    persist({ ...data, customCategories: customs.map((c) => c === editTarget ? trimmed : c) });
    setEditTarget(null);
    toast.success("Category updated");
  };

  const remove = (cat: string) => {
    persist({ ...data, customCategories: customs.filter((c) => c !== cat) });
    toast.success("Category removed");
  };

  return (
    <>
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-dark-gray">Categories</h2>
            <p className="mt-1 text-sm text-muted-foreground">Manage categories shared across services and portfolio.</p>
          </div>
          <Button size="sm" onClick={() => setAddOpen(true)}><Plus className="h-4 w-4" /> Add category</Button>
        </div>
        <TableShell count={allRows.length}>
          <thead><tr className="bg-slate-50 border-b border-border">
            <Th>#</Th><Th>Name</Th><Th>Type</Th><Th>Actions</Th>
          </tr></thead>
          <tbody>
            {allRows.map(({ name, builtin }, i) => (
              <tr key={name} className="border-b border-border last:border-0 hover:bg-slate-50/60 transition-colors">
                <Td><span className="text-xs text-muted-foreground">{i + 1}</span></Td>
                <Td><span className="font-medium text-dark-gray">{name}</span></Td>
                <Td>
                  <span className={cn("inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold",
                    builtin ? "bg-slate-100 text-slate-500" : "bg-primary/10 text-primary")}>
                    {builtin ? "Built-in" : "Custom"}
                  </span>
                </Td>
                <Td>
                  <div className="flex items-center gap-1.5">
                    {!builtin ? (
                      <>
                        <Button size="sm" variant="ghost" className="h-7 px-2" onClick={() => openEdit(name)}>
                          <Pencil className="h-3.5 w-3.5" />
                        </Button>
                        <Button size="sm" variant="ghost" className="h-7 px-2 text-destructive hover:text-destructive" onClick={() => remove(name)}>
                          <Trash2 className="h-3.5 w-3.5" />
                        </Button>
                      </>
                    ) : (
                      <span className="text-xs text-muted-foreground px-2">—</span>
                    )}
                  </div>
                </Td>
              </tr>
            ))}
          </tbody>
        </TableShell>
      </div>

      {/* Add modal */}
      {addOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={() => setAddOpen(false)}>
          <div className="w-full max-w-sm rounded-2xl bg-white shadow-elegant overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-primary/5">
              <h2 className="text-base font-semibold text-dark-gray">Add Category</h2>
              <button onClick={() => setAddOpen(false)} className="grid h-7 w-7 place-items-center rounded-lg text-muted-foreground hover:bg-slate-100"><X className="h-4 w-4" /></button>
            </div>
            <div className="px-6 py-5 space-y-4">
              <div className="space-y-1.5">
                <Label>Category name</Label>
                <Input value={newCat} onChange={(e) => setNewCat(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && add()}
                  placeholder="e.g. Plastering" autoFocus />
              </div>
              <Button className="w-full" onClick={add}><Plus className="h-4 w-4" /> Add category</Button>
            </div>
          </div>
        </div>
      )}

      {/* Edit modal */}
      {editTarget !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={() => setEditTarget(null)}>
          <div className="w-full max-w-sm rounded-2xl bg-white shadow-elegant overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-amber-50/60">
              <h2 className="text-base font-semibold text-dark-gray">Edit Category</h2>
              <button onClick={() => setEditTarget(null)} className="grid h-7 w-7 place-items-center rounded-lg text-muted-foreground hover:bg-slate-100"><X className="h-4 w-4" /></button>
            </div>
            <div className="px-6 py-5 space-y-4">
              <div className="space-y-1.5">
                <Label>Category name</Label>
                <Input value={editValue} onChange={(e) => setEditValue(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && saveEdit()}
                  autoFocus />
              </div>
              <Button className="w-full" onClick={saveEdit}><Check className="h-4 w-4" /> Save changes</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// ─── Shared table shell ───────────────────────────────────────────────────────
function TableShell({ title, description, count, children }: { title?: string; description?: string; count?: number; children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      {title && (
        <div className="flex items-center justify-between">
          <div>
            {description ? <h2 className="text-2xl font-bold text-dark-gray">{title}</h2> : <h3 className="text-base font-semibold text-dark-gray">{title}</h3>}
            {description && <p className="mt-1 text-sm text-muted-foreground">{description}</p>}
          </div>
          {count != null && <span className="text-sm text-muted-foreground">{count} record{count !== 1 ? "s" : ""}</span>}
        </div>
      )}
      <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-card">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">{children}</table>
        </div>
      </div>
    </div>
  );
}

// ─── Reply panel (expanded row) ───────────────────────────────────────────────
function ReplyPanel({ email, reply: initialReply, onSave }: { email: string; reply: string; onSave: (reply: string) => void }) {
  const [reply, setReply] = useState(initialReply);
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
      <div className="flex-1 space-y-1.5">
        <Label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Admin Reply</Label>
        <Textarea value={reply} onChange={(e) => setReply(e.target.value)} placeholder="Write a reply to the customer..." rows={2} className="resize-none bg-white text-sm" />
      </div>
      <div className="flex gap-2 shrink-0">
        <Button size="sm" onClick={() => onSave(reply)}><MessageSquare className="h-3.5 w-3.5" /> Save</Button>
        <Button size="sm" variant="outline" asChild>
          <a href={`mailto:${email}?subject=Fix It Dublin — your request&body=${encodeURIComponent(reply)}`}>
            <Mail className="h-3.5 w-3.5" /> Email
          </a>
        </Button>
      </div>
    </div>
  );
}

// ─── Tiny helpers ─────────────────────────────────────────────────────────────
function Th({ children }: { children?: React.ReactNode }) {
  return <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground whitespace-nowrap">{children}</th>;
}
function Td({ children }: { children?: React.ReactNode }) {
  return <td className="px-4 py-3 align-middle">{children}</td>;
}
function EmptyRow({ cols }: { cols: number }) {
  return <tr><td colSpan={cols} className="px-4 py-10 text-center text-sm text-muted-foreground">No records yet.</td></tr>;
}
function StatusBadge({ status }: { status: RequestStatus }) {
  const styles: Record<RequestStatus, string> = {
    "New":         "bg-blue-100 text-blue-700",
    "In progress": "bg-amber-100 text-amber-700",
    "Replied":     "bg-green-100 text-green-700",
    "Closed":      "bg-slate-100 text-slate-500",
  };
  return <span className={cn("inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold", styles[status])}>{status}</span>;
}
function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IE", { day: "numeric", month: "short", year: "numeric" });
}
