import { createFileRoute } from "@tanstack/react-router";
import { CTA, PageHero, seo } from "@/components/site";

export const Route = createFileRoute("/services")({
  head: () => seo("Services | Afristar Consulting", "Full HR consultancy, accounting and bookkeeping, taxation, risk management, strategy and business consulting in South Sudan."),
  component: Services,
});

const services = [
  { t: "Full HR Consultancy", d: "End-to-end HR partnership: policies and handbooks, job descriptions that attract top talent, labour-law compliance, performance management and HR systems.", items: ["HR policies & procedures", "Job descriptions & grading", "Labour law compliance", "Performance management"] },
  { t: "Accounting & Bookkeeping", d: "Clean, accurate books and financial statements so you can make confident decisions and stay audit-ready.", items: ["Monthly bookkeeping", "Financial statements", "Payroll processing", "Audit preparation"] },
  { t: "Taxation Services", d: "World-class tax rigour applied to South Sudan's regulations — compliance, filing and planning.", items: ["Tax registration & filing", "Tax planning", "Compliance reviews"] },
  { t: "Risk Management", d: "Identify risks before they escalate, with mitigation strategies tailored to the local landscape — from internal audits to crisis frameworks.", items: ["Internal audit", "Risk assessment", "Crisis management"] },
  { t: "Business Management Consulting", d: "Practical guidance to streamline operations, improve performance and grow sustainably.", items: ["Performance improvement", "Customised business solutions"] },
  { t: "Strategy & Organisational Development", d: "Develop and implement strategies, structures and cultures that deliver tangible outcomes.", items: ["Strategic planning", "Org design", "Change management"] },
];

function Services() {
  return (
    <>
      <PageHero eyebrow="Our services" title="Everything your organisation needs to grow.">
        HR, finance, risk and strategy — tailored, never one-size-fits-all.
      </PageHero>
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <article key={s.t} className="rounded-lg border bg-card p-8">
              <span className="font-display text-sm font-bold text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
              <h2 className="mt-2 text-2xl font-extrabold">{s.t}</h2>
              <p className="mt-3 text-muted-foreground">{s.d}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {s.items.map((x) => (<li key={x} className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold">{x}</li>))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
