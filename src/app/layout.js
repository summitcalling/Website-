import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { site } from "@/data/site";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const BASE_URL = "https://summitcalling.com";

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
  keywords: [
    "Himalayan trekking",
    "Nepal trekking company",
    "Everest Base Camp trek",
    "Annapurna Circuit trek",
    "Manaslu Circuit trek",
    "Langtang Valley trek",
    "Mardi Himal trek",
    "helicopter tour Nepal",
    "Kathmandu trekking agency",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [
      {
        url: "/kala-patthar-hero-4.png",
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ["/kala-patthar-hero-4.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: site.name,
  alternateName: "The Summit Calling",
  url: BASE_URL,
  logo: `${BASE_URL}${site.logo}`,
  image: `${BASE_URL}/kala-patthar-hero-4.png`,
  description: site.description,
  telephone: site.phone,
  email: site.email,
  sameAs: [site.social.instagram, site.social.facebook, site.social.youtube],
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Flat No. GF6, Malibu Homes-1, Green Garden Layout, Kundalahalli Gate",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      postalCode: "560037",
      addressCountry: "IN",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "242 HIG, Ratanlal Nagar",
      addressLocality: "Kanpur",
      addressRegion: "Uttar Pradesh",
      postalCode: "208022",
      addressCountry: "IN",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
