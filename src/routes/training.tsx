import { createFileRoute } from "@tanstack/react-router";
import { Crown, Users, Scale } from "lucide-react";
import { CTA, PageHero, seo } from "@/components/site";

export const Route = createFileRoute("/training")({
  head: () => seo("Leadership, HR & Governance Training | Afristar Consulting", "Corporate training programs in leadership, human resources and governance for organisations in South Sudan."),
  component: Training,
});

const programs = [
  { icon: Crown, t: "Leadership", items: ["Leading teams & people", "Strategic thinking & decision making", "Coaching & mentoring", "Emerging leaders programme"] },
  { icon: Users, t: "Human Resources", items: ["HR fundamentals for managers", "Recruitment & selection", "Performance management", "Labour law & compliance"] },
  { icon: Scale, t: "Governance", items: ["Board roles & responsibilities", "Ethics, integrity & accountability", "Internal controls & risk", "Policy development"] },
];

function Training() {
  return (
    <>
      <PageHero eyebrow="Training" title="Build leaders. Close skill gaps.">
        We identify gaps and deliver targeted training that boosts productivity — in-house, on-site, or as open workshops in Juba.
      </PageHero>
      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-24 md:grid-cols-3">
        {programs.map((p) => (
          <div key={p.t} className="rounded-lg border bg-card p-8">
            <p.icon className="h-10 w-10 text-primary" />
            <h2 className="mt-6 text-2xl font-extrabold">{p.t}</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {p.items.map((x) => (<li key={x} className="border-l-4 border-gold pl-3">{x}</li>))}
            </ul>
          </div>
        ))}
      </section>
      <CTA />
    </>
  );
}
