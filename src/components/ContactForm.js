"use client";

import { useState } from "react";
import { whatsappLink } from "@/data/site";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", trek: "", message: "" });
  const [sent, setSent] = useState(false);

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const text = `Hi, I'm ${form.name}.${
      form.trek ? ` I'm interested in: ${form.trek}.` : ""
    }${form.message ? ` ${form.message}` : ""}`;
    window.open(whatsappLink(text), "_blank", "noreferrer");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl bg-white p-8 text-center ring-1 ring-ink/5">
        <p className="font-serif text-lg text-ink">
          Thanks, {form.name || "there"}! We&apos;ve opened WhatsApp with your
          message — send it across and we&apos;ll reply within the hour.
        </p>
        <button
          type="button"
          onClick={() => {
            setForm({ name: "", trek: "", message: "" });
            setSent(false);
          }}
          className="mt-4 text-sm font-semibold text-orange hover:text-orange-dark"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white p-6 sm:p-8 ring-1 ring-ink/5 space-y-5"
    >
      <label className="block">
        <span className="text-xs font-semibold uppercase tracking-wide text-ink/50">
          Your Name
        </span>
        <input
          required
          type="text"
          value={form.name}
          onChange={update("name")}
          placeholder="Jane Doe"
          className="mt-2 w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 text-sm text-ink outline-none focus:ring-2 focus:ring-orange"
        />
      </label>

      <label className="block">
        <span className="text-xs font-semibold uppercase tracking-wide text-ink/50">
          Trek You&apos;re Interested In
        </span>
        <input
          type="text"
          value={form.trek}
          onChange={update("trek")}
          placeholder="e.g. Everest Base Camp"
          className="mt-2 w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 text-sm text-ink outline-none focus:ring-2 focus:ring-orange"
        />
      </label>

      <label className="block">
        <span className="text-xs font-semibold uppercase tracking-wide text-ink/50">
          Message
        </span>
        <textarea
          rows={4}
          value={form.message}
          onChange={update("message")}
          placeholder="Tell us about your trip plans..."
          className="mt-2 w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 text-sm text-ink outline-none focus:ring-2 focus:ring-orange resize-none"
        />
      </label>

      <button
        type="submit"
        className="w-full rounded-full bg-whatsapp py-3.5 text-sm font-semibold text-white hover:brightness-95 transition-all inline-flex items-center justify-center gap-2"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2z" />
        </svg>
        Send via WhatsApp
      </button>
    </form>
  );
}
