"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { treks } from "@/data/treks";
import { CONTAINER } from "@/lib/layout";

const fitnessOptions = ["Beginner", "Moderate", "Experienced"];
const dayOptions = ["Up to 6", "7-10", "11-14"];
const budgetOptions = ["Under ₹60,000", "₹60,000-₹1,20,000", "Above ₹1,20,000"];

const perks = [
  {
    title: "Matched to your fitness",
    description: "From easy ridge walks to high-altitude challenges.",
    icon: <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />,
  },
  {
    title: "Fits your schedule",
    description: "Short weekend treks to full two-week expeditions.",
    icon: <path d="M12 8v4l3 3M12 22a10 10 0 100-20 10 10 0 000 20z" />,
  },
  {
    title: "Within your budget",
    description: "Transparent pricing, no hidden costs.",
    icon: <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM12 6v12M9 9h4.5a2 2 0 010 4H9" />,
  },
];

function PillGroup({ step, label, options, value, onChange }) {
  return (
    <div>
      <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-ink">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue/10 text-[11px] font-bold text-blue">
          {step}
        </span>
        {label}
      </span>
      <div className="mt-2.5 flex flex-wrap gap-2">
        {options.map((opt) => {
          const active = opt === value;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onChange(opt)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                active
                  ? "border-blue bg-blue text-white"
                  : "border-ink/15 bg-cream text-ink hover:border-blue/50"
              }`}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function matchTrek({ fitness, days, budget }) {
  return treks
    .filter((trek) => {
      if (days === "Up to 6" && trek.duration > 7) return false;
      if (days === "7-10" && (trek.duration < 7 || trek.duration > 11)) return false;
      if (days === "11-14" && trek.duration < 10) return false;

      if (fitness === "Beginner" && !["Easy", "Easy–Moderate", "Moderate"].includes(trek.difficulty))
        return false;

      if (budget === "Under ₹60,000" && trek.price > 60000) return false;
      if (budget === "₹60,000-₹1,20,000" && (trek.price < 60000 || trek.price > 120000))
        return false;
      if (budget === "Above ₹1,20,000" && trek.price < 120000) return false;

      return true;
    })
    .slice(0, 3);
}

export default function TrekFinder() {
  const [fitness, setFitness] = useState(fitnessOptions[1]);
  const [days, setDays] = useState(dayOptions[1]);
  const [budget, setBudget] = useState(budgetOptions[1]);
  const [results, setResults] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const matches = matchTrek({ fitness, days, budget });
    setResults(matches.length ? matches : treks.slice(0, 3));
  }

  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-sky/10 blur-3xl" />
      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 w-full text-white/[0.03]"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path d="M0 200 L150 60 L280 140 L420 20 L560 130 L700 50 L860 150 L1000 40 L1200 120 L1200 200 Z" />
      </svg>

      <div className={`relative ${CONTAINER} py-20`}>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue">
              <span className="h-px w-6 bg-blue" />
              Trek Finder
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-white">
              Not Sure Which Trek Is Right for You?
            </h2>
            <p className="mt-4 text-white max-w-md mx-auto lg:mx-0">
              Answer three quick questions and we&apos;ll recommend the
              perfect route — matched to your fitness, time, and budget.
            </p>

            <div className="mt-10 space-y-6">
              {perks.map((perk) => (
                <div key={perk.title} className="flex items-start gap-4 text-left">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-blue">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      {perk.icon}
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{perk.title}</h3>
                    <p className="mt-0.5 text-sm text-white">{perk.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <form
              onSubmit={handleSubmit}
              className="relative overflow-hidden rounded-3xl bg-white p-6 sm:p-8 text-left space-y-7 shadow-2xl shadow-ink/40"
            >
              <span className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-blue to-sky" />

              <PillGroup
                step={1}
                label="Fitness Level"
                options={fitnessOptions}
                value={fitness}
                onChange={setFitness}
              />
              <PillGroup
                step={2}
                label="Number of Days"
                options={dayOptions}
                value={days}
                onChange={setDays}
              />
              <PillGroup
                step={3}
                label="Budget (INR)"
                options={budgetOptions}
                value={budget}
                onChange={setBudget}
              />

              <button
                type="submit"
                className="w-full rounded-full bg-blue py-3.5 text-sm font-semibold text-white hover:bg-blue-dark transition-colors inline-flex items-center justify-center gap-2"
              >
                Find My Trek
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <p className="text-center text-xs text-ink">
                No spam. We&apos;ll email a personalised shortlist within 24 hours.
              </p>
            </form>

            {results && (
              <div className="mt-6 rounded-2xl bg-white/5 p-6 text-left">
                <h3 className="text-white font-serif text-lg mb-4">
                  Recommended for you
                </h3>
                <ul className="space-y-3">
                  {results.map((trek) => (
                    <li key={trek.slug}>
                      <Link
                        href={`/treks/${trek.slug}`}
                        className="flex items-center gap-3 rounded-xl bg-white/5 p-2.5 hover:bg-white/10 transition-colors"
                      >
                        <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg">
                          <Image
                            src={trek.image}
                            alt={trek.name}
                            fill
                            className="object-cover"
                            sizes="48px"
                          />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-white text-sm font-medium">
                            {trek.name}
                          </span>
                          <span className="block text-xs text-white">
                            {trek.duration} days
                          </span>
                        </span>
                        <span className="shrink-0 text-blue text-sm font-semibold">
                          ₹{trek.price.toLocaleString("en-IN")}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
