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
        <span className="text-xs font-semibold uppercase tracking-wide text-ink/50">
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
        <span className="text-xs font-semibold uppercase tracking-wide text-ink/50">
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
        <span className="text-xs font-semibold uppercase tracking-wide text-ink/50">
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
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M20.52 3.449C12.831-3.984.106 1.407.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.44 5.71 1.44h.005c9.5 0 15.442-8.657 12.83-16.339zm-3.99 15.351a10.68 10.68 0 01-5.435 1.494h-.004a10.9 10.9 0 01-5.549-1.513l-.397-.235-3.766.982 1.005-3.671-.259-.379a10.09 10.09 0 01-1.65-5.616c.005-6.126 5.043-11.096 11.245-11.096 3.007 0 5.831 1.174 7.943 3.294 2.11 2.121 3.271 4.94 3.269 7.943-.003 6.126-5.041 11.096-11.402 11.797z" />
        </svg>
        Send via WhatsApp
      </button>
    </form>
  );
}
