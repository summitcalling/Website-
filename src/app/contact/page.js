import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { site, telLink, whatsappLink } from "@/data/site";
import { CONTAINER } from "@/lib/layout";

export const metadata = {
  title: `Contact — ${site.name}`,
  description: "Get in touch to plan your next Himalayan trek.",
};

const iconColors = {
  sky: "bg-sky/10 text-sky",
  whatsapp: "bg-whatsapp/10 text-whatsapp",
  blue: "bg-blue/10 text-blue",
};

const infoItems = [
  {
    label: "Call Us",
    value: site.phoneDisplay,
    href: telLink(),
    color: "sky",
    icon: <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8z" />,
  },
  {
    label: "WhatsApp",
    value: "Chat 24/7",
    href: whatsappLink(),
    color: "whatsapp",
    icon: <path d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2z" />,
  },
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    color: "blue",
    icon: <path d="M4 6h16v12H4zM4 6l8 7 8-7" />,
  },
  {
    label: "Office",
    value: site.address,
    color: "blue",
    icon: <path d="M12 21s-7-6.1-7-11.5A7 7 0 0112 2a7 7 0 017 7.5C19 14.9 12 21 12 21z" />,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Plan Your Trek With Us"
        description="Have a question about a route, fitness level, or fixed departure? Reach out — a real trekking expert replies within an hour."
      />
      <section className="bg-cream">
        <div className={`${CONTAINER} py-14 grid grid-cols-1 lg:grid-cols-5 gap-10`}>
          <div className="lg:col-span-2 space-y-4">
            {infoItems.map((item) => {
              const content = (
                <div className="flex items-start gap-3 rounded-2xl bg-white p-5 ring-1 ring-ink/5">
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${iconColors[item.color]}`}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      {item.icon}
                    </svg>
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-ink/45">
                      {item.label}
                    </div>
                    <div className="mt-1 text-sm font-medium text-ink">
                      {item.value}
                    </div>
                  </div>
                </div>
              );
              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="block hover:opacity-90 transition-opacity"
                >
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
