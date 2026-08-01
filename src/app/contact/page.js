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
    icon: (
      <>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M20.52 3.449C12.831-3.984.106 1.407.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.44 5.71 1.44h.005c9.5 0 15.442-8.657 12.83-16.339zm-3.99 15.351a10.68 10.68 0 01-5.435 1.494h-.004a10.9 10.9 0 01-5.549-1.513l-.397-.235-3.766.982 1.005-3.671-.259-.379a10.09 10.09 0 01-1.65-5.616c.005-6.126 5.043-11.096 11.245-11.096 3.007 0 5.831 1.174 7.943 3.294 2.11 2.121 3.271 4.94 3.269 7.943-.003 6.126-5.041 11.096-11.402 11.797z" />
      </>
    ),
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
