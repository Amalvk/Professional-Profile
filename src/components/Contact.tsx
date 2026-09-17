import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { profile } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";
import SocialLinks from "./SocialLinks";
import Reveal from "./Reveal";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          user_name: form.name,
          user_email: form.email,
          message: form.message,
        },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS send failed:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16 sm:px-8 md:py-24 lg:px-12">
      <Reveal>
        <SectionHeading eyebrow="Let's talk" title="Contact" icon={FiMail} />
      </Reveal>

      <div className="grid gap-10 md:grid-cols-2">
        <Reveal>
          <div className="flex items-start gap-4">
            <img
              src="https://github.com/amalvk.png"
              alt={profile.name}
              className="h-20 w-20 shrink-0 rounded-full border-2 border-white/40 object-cover"
            />
            <p className="max-w-md text-base leading-relaxed text-onbg-muted">
              I'm currently open to new opportunities and collaborations. Whether
              you have a question or just want to say hi, my inbox is always
              open.
            </p>
          </div>

          <div className="mt-6 flex items-center gap-3 text-sm text-onbg-text">
            <FiMail className="h-4 w-4 text-onbg-accent" />
            <a href={`mailto:${profile.email}`} className="hover:text-onbg-accent">
              {profile.email}
            </a>
          </div>
          <div className="mt-3 flex items-center gap-3 text-sm text-onbg-text">
            <FiMapPin className="h-4 w-4 text-onbg-accent" />
            {profile.location}
          </div>

          <SocialLinks className="mt-6" />
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1.5 block text-sm text-onbg-muted">Name</label>
            <input
              required
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-heading outline-none focus:border-accent"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm text-onbg-muted">Email</label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-heading outline-none focus:border-accent"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm text-onbg-muted">Message</label>
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full resize-none rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-heading outline-none focus:border-accent"
              placeholder="Tell me about your project..."
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
          >
            {status === "sending" ? "Sending..." : "Send message"}
            <FiSend className="h-4 w-4" />
          </button>

          {status === "sent" && (
            <p className="text-sm text-accent-2">
              Thanks for reaching out! I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-500">
              Something went wrong. Please try again or email me directly at{" "}
              <a href={`mailto:${profile.email}`} className="underline">
                {profile.email}
              </a>
              .
            </p>
          )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
