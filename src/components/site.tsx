import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/afristar-logo.png.asset.json";

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
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" aria-label="Afristar Consulting home">
          <img src={logo.url} alt="Afristar Consulting" className="h-12 w-auto" />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="text-sm font-semibold text-foreground/80 hover:text-foreground" activeProps={{ className: "text-foreground underline decoration-gold decoration-4 underline-offset-8" }}>
              {n.label}
            </Link>
          ))}
          <Link to="/contact" className="rounded-md bg-accent px-5 py-2.5 text-sm font-bold text-accent-foreground hover:brightness-95">Book a consultation</Link>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 border-t px-6 py-4 md:hidden">
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

export function ContactList({ light = false }: { light?: boolean }) {
  const c = light ? "text-navy-foreground/85" : "text-foreground";
  return (
    <ul className={`space-y-3 text-sm ${c}`}>
      <li className="flex gap-3"><Phone className="h-4 w-4 shrink-0 text-gold" /><span>+211 925 873 260 · +211 910 283 426<br />WhatsApp +61 401 332 694</span></li>
      <li className="flex gap-3"><Mail className="h-4 w-4 shrink-0 text-gold" /><a href="mailto:agok.takpiny@afristarz.com">agok.takpiny@afristarz.com</a></li>
      <li className="flex gap-3"><MapPin className="h-4 w-4 shrink-0 text-gold" /><span>Unit 10, 3rd Floor, Airport Road, Pension Plaza, Juba</span></li>
    </ul>
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
