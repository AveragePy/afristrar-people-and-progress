import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ContactList, PageHero, seo } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => seo("Contact Afristar Consulting | Juba, South Sudan", "Call, WhatsApp or email Afristar Consulting, or visit us at Pension Plaza, Airport Road, Juba."),
  component: Contact,
});

function Contact() {
  const [f, setF] = useState({ name: "", email: "", service: "HR Consultancy", message: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${f.name}\nEmail: ${f.email}\nService: ${f.service}\n\n${f.message}`;
    window.location.href = `mailto:agok.takpiny@afristarz.com?subject=${encodeURIComponent("Enquiry: " + f.service)}&body=${encodeURIComponent(body)}`;
  };
  const input = "w-full rounded-md border bg-card px-4 py-3 outline-none focus:ring-2 focus:ring-ring";
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's start the conversation." />
      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-extrabold">Get in touch</h2>
          <p className="mt-3 mb-8 text-muted-foreground">From the first consultation to the final deliverable, we walk beside you.</p>
          <ContactList />
        </div>
        <form onSubmit={submit} className="space-y-4 rounded-lg border bg-card p-8">
          <input required placeholder="Your name" className={input} value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} />
          <input required type="email" placeholder="Email" className={input} value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} />
          <select className={input} value={f.service} onChange={(e) => setF({ ...f, service: e.target.value })}>
            {["HR Consultancy", "Training", "Accounting & Bookkeeping", "Recruitment", "Other"].map((s) => <option key={s}>{s}</option>)}
          </select>
          <textarea required rows={5} placeholder="How can we help?" className={input} value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} />
          <button className="w-full rounded-md bg-accent py-3 font-bold text-accent-foreground">Send enquiry</button>
        </form>
      </section>
    </>
  );
}
