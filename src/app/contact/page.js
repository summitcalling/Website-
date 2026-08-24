import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { site } from "@/data/site";
import { CONTAINER } from "@/lib/layout";

export const metadata = {
  title: `Contact — ${site.name}`,
  description: "Get in touch to plan your next Himalayan trek.",
};

function LocationIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="shrink-0">
      <path d="M12 21s-7-6.1-7-11.5A7 7 0 0112 2a7 7 0 017 7.5C19 14.9 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="shrink-0">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="shrink-0">
      <path d="M4 6h16v12H4zM4 6l8 7 8-7" />
    </svg>
  );
}

const officeLocations = [
  {
    name: "Bangalore Office",
    address: "Flat No. GF6, Malibu Homes-1, Green Garden Layout, Kundalahalli Gate, Bangalore – 560037, Karnataka, India",
    phones: ["+91 96430 32601", "+91 89513 49974"],
  },
  {
    name: "Kanpur Office",
    address: "242 HIG, Ratanlal Nagar, Kanpur – 208022, Uttar Pradesh, India",
    phones: ["+91 74599 29391", "+91 95593 29391"],
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="Get in Touch"
      />
      <section className="bg-cream">
        <div className={`${CONTAINER} py-14`}>
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
            {officeLocations.map((office) => (
              <div key={office.name} className="rounded-2xl border border-ink/15 bg-white p-6">
                <div className="text-center font-serif text-lg font-semibold text-ink">
                  {office.name}
                </div>
                <div className="mt-4 flex items-start gap-2.5 text-sm text-ink">
                  <LocationIcon />
                  <span>{office.address}</span>
                </div>
                <div className="mt-3 flex flex-col gap-2">
                  {office.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/[^+\d]/g, "")}`}
                      className="flex items-center gap-2.5 text-sm font-medium text-ink transition-colors hover:text-blue"
                    >
                      <PhoneIcon />
                      {phone}
                    </a>
                  ))}
                </div>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-3 flex items-center gap-2.5 text-sm font-medium text-ink transition-colors hover:text-blue"
                >
                  <MailIcon />
                  {site.email}
                </a>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-3xl">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
