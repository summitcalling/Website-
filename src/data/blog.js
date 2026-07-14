export const posts = [
  {
    slug: "everest-base-camp-packing-list",
    title: "The Complete Everest Base Camp Packing List",
    excerpt:
      "Everything you actually need for 14 days on the trail — and the things first-timers always overpack.",
    date: "2026-05-02",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=70",
    content: [
      "Packing for a high-altitude trek is about layering, not bulk. Focus on a good down jacket, moisture-wicking base layers, and a broken-in pair of trekking boots.",
      "Don't forget a water purification method, a personal first-aid kit, and a headlamp with spare batteries — teahouse electricity is not always reliable above Namche Bazaar.",
      "Most trekkers overpack cotton clothing, which stays wet and cold. Stick to wool or synthetic fabrics throughout.",
    ],
  },
  {
    slug: "best-season-to-trek-nepal",
    title: "When Is the Best Time to Trek in Nepal?",
    excerpt:
      "Spring or autumn? A season-by-season breakdown for every major Himalayan trekking region.",
    date: "2026-04-14",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=70",
    content: [
      "Autumn (September to November) offers the clearest skies and the most stable weather across nearly every trekking region in Nepal.",
      "Spring (March to May) brings blooming rhododendron forests and slightly warmer nights, with a small trade-off in visibility during late afternoons.",
      "Rain-shadow regions like Upper Mustang and Dolpo are actually best trekked during the summer monsoon, when the rest of the country is wet.",
    ],
  },
  {
    slug: "acclimatization-altitude-sickness-guide",
    title: "A Trekker's Guide to Acclimatization",
    excerpt:
      "How our itineraries are built around altitude, and what to do if you start feeling symptoms.",
    date: "2026-03-22",
    image:
      "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=900&q=70",
    content: [
      "The golden rule above 3,000m is: climb high, sleep low. Every itinerary we run is built with dedicated acclimatization days at key altitudes.",
      "Mild headaches and fatigue are common and expected. Persistent symptoms, confusion, or loss of coordination are signs to descend immediately and inform your guide.",
      "All our trek leaders carry a pulse oximeter and are trained to recognise early signs of Acute Mountain Sickness (AMS).",
    ],
  },
];

export function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug);
}
