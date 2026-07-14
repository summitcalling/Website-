export const site = {
  name: "Wildridges",
  tagline: "Himalayan Trekking Co.",
  description:
    "Guided Himalayan trekking adventures across Nepal — fixed departures, licensed local guides, and unforgettable mountain journeys.",
  founded: "2015",
  country: "Nepal",
  phone: "+977 981-2345678",
  phoneDisplay: "+977 981 234 5678",
  whatsapp: "9779812345678",
  email: "hello@wildridges.com",
  address: "Thamel, Kathmandu, Nepal",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
  },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/treks", label: "Treks" },
  { href: "/fixed-departures", label: "Fixed Departures" },
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
