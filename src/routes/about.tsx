import { createFileRoute } from "@tanstack/react-router";
import { CTA, PageHero, seo } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => seo("About Afristar Consulting | Your Partner for Growth", "Meet Afristar Consulting and founder Agok Wal — our mission, vision and core values for South Sudan's businesses."),
  component: About,
});

const values = [
  ["Empowerment", "We equip you with tools and knowledge to sustain growth long after we're gone."],
  ["Integrity", "Transparent, ethical, and compliant — always."],
  ["Innovation", "Blending global best practices with local ingenuity."],
  ["Community Impact", "Your success fuels South Sudan's prosperity."],
];

function About() {
  return (
    <>
      <PageHero eyebrow="About us" title="Your partner for growth in South Sudan.">
        We don't just solve problems; we ignite potential. Whether you're a startup scaling new heights or a professional crafting your legacy, we're here to turn ambition into achievement.
      </PageHero>
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2">
        <div className="rounded-lg border bg-card p-10">
          <p className="eyebrow">Mission</p>
          <p className="mt-4 text-2xl font-semibold leading-snug">To empower businesses in South Sudan with strategic consulting services that foster growth, sustainability, and financial prosperity.</p>
        </div>
        <div className="rounded-lg bg-navy p-10 text-navy-foreground">
          <p className="eyebrow !text-gold">Vision</p>
          <p className="mt-4 text-2xl font-semibold leading-snug">To be recognised for our exceptional expertise, commitment to client success, and positive impact on businesses and communities.</p>
        </div>
      </section>
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="eyebrow">Meet the founder</p>
          <h2 className="mt-3 text-4xl font-extrabold">Agok Wal — CEO & Founder</h2>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">A seasoned HR expert and financial auditor, Agok bridges global excellence with South Sudan's unique needs. With years at Australia's Taxation Office, he brings world-class rigour to local challenges. His mission: to make Afristar synonymous with transformative growth.</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="eyebrow">Core values</p>
        <div className="mt-8 grid gap-8 md:grid-cols-4">
          {values.map(([t, d]) => (
            <div key={t} className="border-t-4 border-gold pt-6">
              <h3 className="text-xl font-bold">{t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
