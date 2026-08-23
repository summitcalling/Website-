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
          className="mt-4 text-sm font-semibold text-blue hover:text-blue-dark"
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
        <span className="text-xs font-semibold uppercase tracking-wide text-ink">
          Your Name
        </span>
        <input
          required
          type="text"
          value={form.name}
          onChange={update("name")}
          placeholder="Jane Doe"
          className="mt-2 w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 text-sm text-ink outline-none focus:ring-2 focus:ring-blue"
        />
      </label>

      <label className="block">
        <span className="text-xs font-semibold uppercase tracking-wide text-ink">
          Trek You&apos;re Interested In
        </span>
        <input
          type="text"
          value={form.trek}
          onChange={update("trek")}
          placeholder="e.g. Everest Base Camp"
          className="mt-2 w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 text-sm text-ink outline-none focus:ring-2 focus:ring-blue"
        />
      </label>

      <label className="block">
        <span className="text-xs font-semibold uppercase tracking-wide text-ink">
          Message
        </span>
        <textarea
          rows={4}
          value={form.message}
          onChange={update("message")}
          placeholder="Tell us about your trip plans..."
          className="mt-2 w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 text-sm text-ink outline-none focus:ring-2 focus:ring-blue resize-none"
        />
      </label>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 bg-ink py-3.5 text-sm font-semibold text-white transition-colors hover:bg-ink-light"
      >
        Send via WhatsApp
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </form>
  );
}
