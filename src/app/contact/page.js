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
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    value: "Chat 24/7",
    href: whatsappLink(),
    color: "whatsapp",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.006-3.492c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.593-6.593 6.593zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.588-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.337-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    color: "blue",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 6h16v12H4zM4 6l8 7 8-7" />
      </svg>
    ),
  },
  {
    label: "Office",
    value: site.address,
    color: "blue",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 21s-7-6.1-7-11.5A7 7 0 0112 2a7 7 0 017 7.5C19 14.9 12 21 12 21z" />
      </svg>
    ),
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
                    {item.icon}
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
