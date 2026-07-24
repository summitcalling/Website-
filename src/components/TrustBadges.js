const badges = [
  "Licensed Local Operator",
  "Experienced Guides",
  "Safe & Responsible Trekking",
  "Hundreds of Happy Trekkers",
  "24/7 WhatsApp Support",
  "Fixed Small-Group Departures",
];

function CheckIcon() {
  return (
    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue/15 text-blue">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
        <path d="M4 12l5 5L20 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function Badge({ text }) {
  return (
    <div className="flex shrink-0 items-center gap-3 px-8">
      <CheckIcon />
      <span className="whitespace-nowrap text-sm font-medium text-white/90">{text}</span>
      <span className="ml-5 h-1 w-1 rounded-full bg-white/20" />
    </div>
  );
}

export default function TrustBadges() {
  return (
    <section className="overflow-hidden border-y border-white/5 bg-ink py-5">
      <div className="flex w-max animate-marquee">
        {[...badges, ...badges].map((badge, i) => (
          <Badge key={`${badge}-${i}`} text={badge} />
        ))}
      </div>
    </section>
  );
}
