export const site = {
  name: "Summit Calling",
  tagline: "Himalayan Trekking Co.",
  description:
    "Guided Himalayan trekking adventures across Nepal — fixed departures, licensed local guides, and unforgettable mountain journeys.",
  founded: "2026",
  country: "Nepal",
  logo: "/summit-calling-logo.png",
  phone: "+91 95593-29391",
  phoneDisplay: "+91 95593 29391",
  whatsapp: "919559329391",
  email: "hello@summitcalling.com",
  address: "Thamel, Kathmandu, Nepal",
  social: {
    instagram: "https://www.instagram.com/thesummitcalling/",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
  },
};

export const navLinks = [
  { href: "/treks", label: "Treks" },
  { href: "/experiences", label: "Himalayan Tours" },
  { href: "/about", label: "About Us" },
];

export const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/treks", label: "Treks" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function whatsappLink(message) {
  const text = encodeURIComponent(
    message || `Hi ${site.name}, I'd like to know more about your treks.`
  );
  return `https://wa.me/${site.whatsapp}?text=${text}`;
}

export function telLink() {
  return `tel:${site.phone.replace(/[^+\d]/g, "")}`;
}
