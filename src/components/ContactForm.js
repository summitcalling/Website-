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
        className="w-full rounded-full bg-whatsapp py-3.5 text-sm font-semibold text-white hover:brightness-95 transition-all inline-flex items-center justify-center gap-2"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.006-3.492c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.593-6.593 6.593zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.588-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.337-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
        </svg>
        Send via WhatsApp
      </button>
    </form>
  );
}
