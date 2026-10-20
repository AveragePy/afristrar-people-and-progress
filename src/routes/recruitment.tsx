import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Globe2 } from "lucide-react";
import img from "@/assets/recruitment.jpg";
import { CTA, PageHero, seo } from "@/components/site";

export const Route = createFileRoute("/recruitment")({
  head: () => seo("Local & International Recruitment | Afristar Consulting", "End-to-end recruitment of local South Sudanese and international talent — from job posting to onboarding."),
  component: Recruitment,
});

const steps = ["Role analysis & job description", "Sourcing & advertising", "Screening & assessment", "Interviews & reference checks", "Offer & onboarding"];

function Recruitment() {
  return (
    <>
      <PageHero eyebrow="Recruitment" title="The right people, from Juba or from anywhere.">
        We manage end-to-end recruitment so you hire right the first time.
      </PageHero>
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <img src={img} alt="Recruiter welcoming a new hire" width={1200} height={912} loading="lazy" className="rounded-lg object-cover" />
        <div className="space-y-8">
          <div>
            <MapPin className="h-8 w-8 text-primary" />
            <h2 className="mt-3 text-2xl font-extrabold">Local recruitment</h2>
            <p className="mt-2 text-muted-foreground">Access skilled South Sudanese professionals across sectors, with deep knowledge of the local market and labour regulations.</p>
          </div>
          <div>
            <Globe2 className="h-8 w-8 text-primary" />
            <h2 className="mt-3 text-2xl font-extrabold">International recruitment</h2>
            <p className="mt-2 text-muted-foreground">Source specialist and expatriate talent through our global network, including Australia, and connect South Sudanese professionals with opportunities abroad.</p>
          </div>
        </div>
      </section>
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="eyebrow">Our process</p>
          <ol className="mt-8 grid gap-6 md:grid-cols-5">
            {steps.map((s, i) => (
              <li key={s}>
                <span className="font-display text-4xl font-extrabold text-primary">{i + 1}</span>
                <p className="mt-2 font-semibold">{s}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <CTA />
    </>
  );
}
