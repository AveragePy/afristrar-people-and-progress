import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/Afristar_Logo_White.png";

const nav = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/training", label: "Training" },
  { to: "/recruitment", label: "Recruitment" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-navy-foreground/10 bg-navy text-navy-foreground">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" aria-label="Afristar Consulting home" className="flex shrink-0 items-center">
          <img src={logo} alt="Afristar Consulting" className="block h-12 w-auto object-contain" />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="text-sm font-semibold text-navy-foreground/80 hover:text-navy-foreground" activeProps={{ className: "text-navy-foreground underline decoration-gold decoration-4 underline-offset-8" }}>
              {n.label}
            </Link>
          ))}
          <Link to="/contact" className="rounded-md bg-accent px-5 py-2.5 text-sm font-bold text-accent-foreground hover:brightness-95">Book a consultation</Link>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 border-t border-navy-foreground/10 px-6 py-4 md:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="font-semibold">{n.label}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-extrabold">Afristar <span className="font-normal">Consulting</span></p>
          <p className="mt-2 italic text-navy-foreground/70">Empowering Businesses, Shaping Futures</p>
        </div>
        <div className="space-y-2 text-sm">
          {nav.map((n) => (<Link key={n.to} to={n.to} className="block text-navy-foreground/80 hover:text-gold">{n.label}</Link>))}
        </div>
        <ContactList light />
      </div>
      <div className="border-t border-navy-foreground/10 py-5 text-center text-xs text-navy-foreground/60">© {new Date().getFullYear()} Afristar Consulting · Juba, South Sudan</div>
    </footer>
  );
}

function SocialLinks({ light = false }: { light?: boolean }) {
  const base =
    "flex h-11 w-11 items-center justify-center rounded-full border transition-colors hover:text-gold hover:border-gold " +
    (light ? "border-navy-foreground/30 text-navy-foreground/85" : "border-foreground/30 text-foreground");
  return (
    <div className="mt-5 flex items-center gap-3">
      <a
        href="https://www.facebook.com/share/1DYFc1bkdr/?mibextid=wwXIfr"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className={base}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
          <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
        </svg>
      </a>
      <a
        href="https://wa.me/61401332694"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className={base}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  );
}

export function ContactList({ light = false }: { light?: boolean }) {
  const c = light ? "text-navy-foreground/85" : "text-foreground";
  return (
    <div>
      <ul className={`space-y-3 text-sm ${c}`}>
        <li className="flex gap-3"><Phone className="h-4 w-4 shrink-0 text-gold" /><span>+211 925 873 260 · +211 910 283 426<br />WhatsApp +61 401 332 694</span></li>
        <li className="flex gap-3"><Mail className="h-4 w-4 shrink-0 text-gold" /><a href="mailto:agok.takpiny@afristarz.com">agok.takpiny@afristarz.com</a></li>
        <li className="flex gap-3"><MapPin className="h-4 w-4 shrink-0 text-gold" /><span>Unit 10, 3rd Floor, Airport Road, Pension Plaza, Juba</span></li>
      </ul>
      <SocialLinks light={light} />
    </div>
  );
}

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <p className="eyebrow !text-gold">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold md:text-6xl">{title}</h1>
        {children && <p className="mt-6 max-w-2xl text-lg text-navy-foreground/80">{children}</p>}
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="bg-accent">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-14 md:flex-row md:items-center">
        <h2 className="text-3xl font-extrabold text-accent-foreground md:text-4xl">Let's turn ambition into achievement.</h2>
        <Link to="/contact" className="rounded-md bg-primary px-6 py-3 font-bold text-primary-foreground">Talk to us today</Link>
      </div>
    </section>
  );
}

export const clients = [
  { name: "National Communication Authority", work: "Organisational restructuring and staff realignment." },
  { name: "South Sudan Revenue Authority", work: "HR audits with actionable recommendations." },
  { name: "National Elections Commission", work: "Recruitment processes for elections staff, including thousands of voter registration officers." },
  { name: "IGAD", work: "Civic education training for civil society, women, youth and persons with disabilities." },
  { name: "UNMISS", work: "HR consultancy for the National Elections Commission — writing all HR policies, the HR manual and the employee handbook." },
];

export function Clients() {
  return (
    <section className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <p className="eyebrow !text-gold">Our clients</p>
        <h2 className="mt-3 max-w-3xl text-4xl font-extrabold">Trusted by national institutions and regional bodies.</h2>
        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-navy-foreground/15 bg-navy-foreground/15 md:grid-cols-2 lg:grid-cols-3">
          {clients.map((c, i) => (
            <div key={c.name} className={`flex flex-col bg-navy p-8${i === clients.length - 1 ? " md:col-span-2" : ""}`}>
              <h3 className="font-display text-lg font-bold text-gold">{c.name}</h3>
              {c.work ? <p className="mt-3 text-sm leading-relaxed text-navy-foreground/80">{c.work}</p> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function seo(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
