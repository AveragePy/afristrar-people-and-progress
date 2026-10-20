import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, Users, Calculator, Globe2, ArrowRight } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { CTA, Clients, seo } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => seo("Afristar Consulting | HR, Training, Accounting & Recruitment in Juba", "Leadership, HR and governance training, full HR consultancy, accounting and bookkeeping, and local & international recruitment in South Sudan."),
  component: Index,
});

const pillars = [
  { icon: GraduationCap, title: "Training", text: "Leadership, HR and governance programs that build capable, accountable teams.", to: "/training" },
  { icon: Users, title: "HR Consultancy", text: "Full-service HR: policies, job design, compliance, performance and organisational development.", to: "/services" },
  { icon: Calculator, title: "Accounting & Bookkeeping", text: "Accurate books, tax compliance and financial reporting you can trust.", to: "/services" },
  { icon: Globe2, title: "Recruitment", text: "Local and international talent sourcing, from job posting to onboarding.", to: "/recruitment" },
] as const;

function Index() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-navy-foreground">
        <img src={hero} alt="Leadership training workshop in Juba" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40">
          <p className="eyebrow !text-gold">Juba · South Sudan</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-extrabold leading-[1.02] md:text-7xl">
            Empowering Businesses, <span className="text-gold">Shaping Futures.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-navy-foreground/85">
            We blend global expertise with local insight — training leaders, building HR systems, keeping your books in order and finding the right people, locally and internationally.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/contact" className="rounded-md bg-accent px-6 py-3 font-bold text-accent-foreground">Book a consultation</Link>
            <Link to="/services" className="rounded-md border border-navy-foreground/40 px-6 py-3 font-bold">Explore services</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="eyebrow">What we do</p>
        <h2 className="mt-3 max-w-2xl text-4xl font-extrabold">Holistic expertise, all under one roof.</h2>
        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border bg-border md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <Link key={p.title} to={p.to} className="group bg-card p-8 transition hover:bg-secondary">
              <p.icon className="h-9 w-9 text-primary" />
              <h3 className="mt-6 text-xl font-bold">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              <ArrowRight className="mt-6 h-5 w-5 text-primary transition group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2">
          <div>
            <p className="eyebrow">Why Afristar</p>
            <h2 className="mt-3 text-4xl font-extrabold">More than consultants — architects of success.</h2>
          </div>
          <div className="space-y-6 text-muted-foreground">
            <p>South Sudan's market is vibrant but complex. Talent gaps, regulatory hurdles and financial uncertainty can derail even the most promising ventures. With deep roots in this land, we understand your challenges intimately.</p>
            <ul className="space-y-4 text-foreground">
              <li><strong>Data-driven, heart-led.</strong> Analytics meet empathy in every solution.</li>
              <li><strong>Partnership over prescriptions.</strong> Your goals become ours.</li>
              <li><strong>Your growth, our legacy.</strong> We measure success by your impact.</li>
            </ul>
          </div>
        </div>
      </section>
      <Clients />
      <CTA />
    </>
  );
}
