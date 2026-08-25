import PageHeader from "@/components/PageHeader";
import { site } from "@/data/site";
import { CONTAINER } from "@/lib/layout";

export const metadata = {
  title: `Terms & Conditions — ${site.name}`,
  description: `The terms and conditions governing treks, expeditions, and adventure activities booked with ${site.name}.`,
};

const BODY_TEXT = "text-[17px] leading-relaxed text-ink";

const sections = [
  {
    title: "1. Acceptance of Terms",
    paragraphs: [
      `By accessing the ${site.name} website or booking any trek, expedition, or adventure activity with ${site.name} ("Company", "we", "our"), you acknowledge that you have read, understood, and agreed to these Terms & Conditions.`,
    ],
  },
  {
    title: "2. Booking & Payment",
    points: [
      "Your booking is confirmed only after receipt of the required advance payment.",
      "The remaining balance must be paid according to the payment schedule communicated during booking.",
      "Failure to complete payment within the specified time may result in cancellation of your booking.",
    ],
  },
  {
    title: "3. Cancellation & Refunds",
    paragraphs: [
      "All participant cancellations, refunds, and rescheduling requests shall be governed by the Summit Calling Cancellation Policy published on our website.",
      "Where Summit Calling is required to cancel, postpone, or substantially modify a trek due to operational reasons, weather conditions, Force Majeure, or other circumstances beyond its reasonable control, the applicable options, credits, refunds, or alternative arrangements shall be determined in accordance with the Cancellation Policy and the circumstances of the particular trip.",
    ],
  },
  {
    title: "4. Medical Fitness",
    paragraphs: [
      "Participants must be physically and mentally fit to undertake their chosen trek, expedition, or adventure activity.",
      "Participants are required to:",
    ],
    points: [
      "Disclose accurate and complete information regarding any relevant medical conditions, injuries, allergies, medications, or other health concerns at the time of booking.",
      "Inform Summit Calling and the Trek Leader of any change in their health or medical condition before or during the trek.",
      "Follow reasonable medical and safety instructions provided by the Trek Leader or other qualified personnel.",
    ],
    paragraphsAfter: [
      "Summit Calling reserves the right to deny participation or discontinue a participant's trek at any stage if the participant is considered medically unfit, unsafe to continue, or medically unsuitable for the activity.",
      "Any decision to discontinue a participant for medical or safety reasons shall be made in the interest of the participant and/or the group. No refund shall be provided in such cases, subject to the applicable Cancellation Policy.",
    ],
  },
  {
    title: "5. Authority of Trek Leader",
    paragraphs: [
      "The Trek Leader or Expedition Leader has the authority to make decisions concerning the safety and continuation of the trek.",
      "This may include decisions relating to:",
    ],
    points: [
      "Participant health and fitness",
      "Weather and trail conditions",
      "Route selection or changes",
      "Pace and group movement",
      "Acclimatization requirements",
      "Rest or additional acclimatization days",
      "Delaying, shortening, rerouting, or terminating the trek",
      "Medical assistance or emergency evacuation",
    ],
    paragraphsAfter: [
      "All such decisions made in the reasonable interest of participant safety and operational requirements shall be final and binding during the trek.",
      "Participants are required to follow the instructions of the Trek Leader, guides, and support staff. Failure to comply with safety instructions, misconduct, or behaviour that may endanger the participant or others may result in removal from the trek without refund.",
    ],
  },
  {
    title: "6. Itinerary Changes",
    paragraphs: [
      "Mountain and adventure activities are subject to changing weather, terrain, transportation, and other operational conditions. All itineraries published by Summit Calling are indicative and may be modified when necessary.",
      "Summit Calling reserves the right to modify, delay, reroute, shorten, suspend, or cancel any part of the itinerary where reasonably necessary due to:",
    ],
    points: [
      "Weather or adverse climatic conditions",
      "Trail or terrain conditions",
      "Landslides, avalanches, rockfalls, or other natural hazards",
      "Road blockages or transportation disruptions",
      "Political situations or civil unrest",
      "Government restrictions or changes in regulations",
      "Permit-related issues",
      "Participant health or safety concerns",
      "Medical emergencies",
      "Operational or logistical circumstances",
      "Any other unforeseen circumstances beyond the Company's reasonable control",
    ],
    paragraphsAfter: [
      "Where changes are required, Summit Calling will make reasonable efforts to provide the safest and most practical alternative available.",
      "Additional costs arising from itinerary changes due to circumstances beyond Summit Calling's control may be borne by the participant. Summit Calling shall not be liable for compensation for changes, delays, or disruptions arising from such circumstances, except where otherwise required by applicable law or specifically provided under the Cancellation Policy.",
    ],
  },
  {
    title: "7. Travel Insurance",
    paragraphs: [
      "Participants are strongly advised to obtain comprehensive travel insurance appropriate for the activity and destination.",
      "The insurance should ideally cover:",
    ],
    points: [
      "High-altitude trekking and mountaineering",
      "Medical emergencies",
      "Hospitalization and medical treatment",
      "Emergency evacuation, including helicopter rescue where applicable",
      "Trip cancellation and interruption",
      "Loss, theft, or damage of personal baggage and belongings",
    ],
    paragraphsAfter: [
      "For certain treks, expeditions, or international activities, appropriate travel insurance may be mandatory.",
    ],
  },
  {
    title: "8. Rescue & Emergency Evacuation",
    paragraphs: ["In case of illness or accident:"],
    points: [
      "Rescue and evacuation decisions will be made by the Trek Leader or relevant authorities.",
      "All evacuation, helicopter rescue, medical treatment, hospitalization, and related expenses shall be borne entirely by the participant.",
      "Summit Calling will assist in coordination but is not financially liable for these costs.",
    ],
  },
  {
    title: "9. Personal Belongings",
    paragraphs: ["Participants are responsible for their own:"],
    points: ["Luggage", "Cameras", "Mobile phones", "Trekking equipment", "Personal valuables"],
    paragraphsAfter: ["Summit Calling shall not be responsible for loss, theft, or damage."],
  },
  {
    title: "10. Participant Conduct",
    paragraphs: ["Participants are expected to:"],
    points: [
      "Follow instructions from guides and trek leaders.",
      "Respect local customs and communities.",
      "Respect fellow trekkers.",
      "Avoid behavior that puts themselves or others at risk.",
      "Refrain from consuming illegal drugs or engaging in dangerous conduct.",
    ],
    paragraphsAfter: ["Violation of these rules may result in immediate removal from the trek without refund."],
  },
  {
    title: "11. Environmental Responsibility",
    paragraphs: ["Summit Calling follows Leave No Trace principles.", "Participants must:"],
    points: [
      "Avoid littering.",
      "Respect wildlife.",
      "Use designated waste disposal methods.",
      "Protect natural resources.",
      "Follow local environmental regulations.",
    ],
  },
  {
    title: "12. Assumption of Risk & Liability",
    paragraphs: ["To the fullest extent permitted by law, Summit Calling shall not be liable for:"],
    points: [
      "Any injury, illness or death during the activity",
      "Loss or damage of personal belongings",
      "Delays, cancellations, or disruptions due to natural or extreme causes",
      "Acts or omissions of third-party service providers",
    ],
    paragraphsAfter: ["Participation is entirely at the participant's own risk."],
  },
  {
    title: "13. Force Majeure",
    paragraphs: [
      "Summit Calling shall not be held responsible for delays, cancellations, or changes caused by circumstances beyond our control, including but not limited to:",
    ],
    points: [
      "Natural disasters",
      "Heavy rainfall or snowfall",
      "Landslides",
      "Earthquakes",
      "Political unrest",
      "Government restrictions",
      "Pandemics",
      "Transportation disruptions",
      "Permit cancellations",
    ],
    paragraphsAfter: ["No compensation shall be payable for such events."],
  },
  {
    title: "14. Third-Party Services",
    paragraphs: [
      "Certain services arranged by Summit Calling, including helicopter services, hotels, transportation, airlines, local operators, guides, accommodation providers, and other service providers, may be operated or supplied by independent third parties.",
      "Summit Calling may act as a booking, coordination, or facilitation agent for such services. While we make reasonable efforts to work with reliable and reputable service providers, the actual delivery of these services remains subject to the terms, availability, operational decisions, and safety requirements of the respective service provider.",
      "Summit Calling shall not be responsible for delays, cancellations, changes, operational decisions, acts, omissions, service deficiencies, or failures of third-party providers, except to the extent required by applicable law.",
    ],
  },
  {
    title: "15. Photography & Media",
    paragraphs: [
      "Photographs and videos taken during the trek may be used by Summit Calling for promotional and marketing purposes.",
      "If you do not wish to appear in such media, please notify us in writing before your trek begins.",
    ],
  },
  {
    title: "16. Website Usage",
    paragraphs: [
      "All content on this website, including text, photographs, graphics, itineraries, and logos, is the property of Summit Calling.",
      "No content may be copied, reproduced, or distributed without prior written permission.",
    ],
  },
  {
    title: "17. Privacy",
    paragraphs: [
      "Any personal information collected during booking shall be used solely for operational, legal, and communication purposes.",
      "We do not sell or share your personal information with third parties except where required by law or for essential travel arrangements.",
    ],
  },
  {
    title: "18. Governing Law",
    paragraphs: [
      "These Terms & Conditions shall be governed by the laws of India.",
      "Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Kanpur, Uttar Pradesh, India (or another city if your business is registered elsewhere).",
    ],
  },
  {
    title: "19. Changes to Terms",
    paragraphs: [
      "Summit Calling reserves the right to amend these Terms & Conditions at any time without prior notice.",
      "The latest version published on our website shall always apply.",
    ],
  },
  {
    title: "20. Flight & Helicopter Services",
    paragraphs: [
      "Where Summit Calling arranges helicopter services, mountain sightseeing flights, high-altitude flights, helicopter transfers, Everest sightseeing flights, Kala Patthar flights, Everest Base Camp flights, Annapurna Base Camp flights, or other aviation-related services, the following terms shall apply.",
    ],
    subsections: [
      {
        title: "20.1 Weather & Operational Conditions",
        paragraphs: [
          "Flights and helicopter operations in the Himalayas are highly dependent on weather, visibility, wind conditions, air traffic, terrain, landing-site conditions, and other operational factors.",
          "The pilot-in-command and/or relevant operator has the final authority to delay, cancel, divert, reroute, shorten, modify, or terminate a flight based on:",
        ],
        points: [
          "Weather and visibility",
          "Wind conditions",
          "Air traffic restrictions",
          "Technical or mechanical concerns",
          "Airport, helipad, or landing-site conditions",
          "Government or aviation authority restrictions",
          "Passenger safety",
          "Weight and balance requirements",
          "Other operational considerations",
        ],
        paragraphsAfter: [
          "A confirmed booking does not guarantee that the flight will operate at the scheduled time, follow the planned route, or reach the planned landing or sightseeing location.",
          "For high-altitude destinations such as Everest Base Camp, Kala Patthar, or Annapurna Base Camp, operations may be affected by altitude, weather, visibility, air traffic, safety considerations, and applicable aviation regulations.",
          "The pilot's decision regarding landing, hovering, rerouting, sightseeing, or returning to the departure point shall be final.",
          "Summit Calling shall not be responsible for delays, cancellations, diversions, or changes resulting from circumstances beyond its reasonable control.",
        ],
      },
      {
        title: "20.2 Safety & Passenger Conduct",
        paragraphs: [
          "Passenger safety is the highest priority during all flight and helicopter operations.",
          "Passengers must:",
        ],
        points: [
          "Follow all instructions provided by the pilot, crew, ground staff, and Summit Calling representatives.",
          "Comply with applicable aviation, security, baggage, and weight restrictions.",
          "Follow instructions during boarding, flight, landing, and disembarkation.",
          "Remain seated and follow crew instructions whenever required.",
        ],
        paragraphsAfter: [
          "Summit Calling and/or the relevant operator reserves the right to refuse boarding to any passenger who appears intoxicated; behaves in a disruptive, abusive, or threatening manner; refuses to follow safety instructions; provides inaccurate information relevant to the flight; or is considered a safety risk to themselves, the crew, aircraft, or other passengers.",
          "The pilot-in-command's decisions regarding flight safety are final and binding.",
        ],
      },
      {
        title: "20.3 Personal Belongings & Insurance",
        paragraphs: [
          "Passengers undertaking flights to high-altitude destinations such as Kala Patthar, Everest Base Camp, Annapurna Base Camp, or other Himalayan locations acknowledge that altitude may affect individuals differently.",
          "Passengers are responsible for determining whether they are medically fit to undertake the journey and should seek appropriate medical advice where necessary.",
          "Summit Calling may require passengers to disclose relevant medical or physical conditions where such information is necessary for operational or safety purposes.",
          "In the event of a medical or safety concern, the pilot-in-command and/or relevant authorities may decide to modify, delay, divert, or discontinue the flight.",
        ],
      },
      {
        title: "20.5 Personal Belongings & Baggage",
        paragraphs: [
          "Passengers are responsible for their personal belongings and baggage during the journey.",
          "Baggage allowance and weight restrictions are determined by the relevant operator and applicable aviation regulations.",
          "Excess baggage may not be accepted or may be subject to additional charges.",
          "Summit Calling shall not be responsible for loss, theft, or damage to personal belongings except to the extent required by applicable law.",
        ],
      },
      {
        title: "20.6 Insurance",
        paragraphs: [
          "Passengers are strongly advised to obtain comprehensive travel and medical insurance appropriate for their journey.",
          "Insurance should ideally include coverage for:",
        ],
        points: [
          "Flight or helicopter transportation",
          "Medical emergencies",
          "Emergency evacuation",
          "High-altitude activities",
          "Trip cancellation or interruption",
          "Personal baggage and belongings",
        ],
        paragraphsAfter: [
          "Summit Calling shall not be responsible for costs that are not covered by the passenger's insurance policy.",
        ],
      },
      {
        title: "20.7 Flight Route, Landing & Sightseeing",
        paragraphs: [
          "For sightseeing flights and high-altitude aviation services, the actual flight route, duration, viewing points, and landing locations may vary depending on:",
        ],
        points: [
          "Weather and visibility",
          "Air traffic",
          "Landing-site conditions",
          "Aviation regulations",
          "Safety requirements",
          "Government restrictions",
          "Operational requirements",
        ],
        paragraphsAfter: [
          "A planned landing at Everest Base Camp, Kala Patthar, Annapurna Base Camp, or any other designated location is not guaranteed and remains subject to the pilot's assessment and applicable aviation permissions.",
          "No refund or compensation shall be payable solely because a planned landing or sightseeing point cannot be completed due to safety, weather, aviation, or operational restrictions, except where specifically provided under the applicable cancellation/refund policy.",
        ],
      },
    ],
  },
];

function Points({ items }) {
  return (
    <ul className="mt-3 space-y-2">
      {items.map((point) => (
        <li key={point} className={`flex items-start gap-2.5 ${BODY_TEXT}`}>
          <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-blue" />
          {point}
        </li>
      ))}
    </ul>
  );
}

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms & Conditions"
      />

      <section className="bg-white">
        <div className={`${CONTAINER} py-16 max-w-3xl mx-auto`}>
          <div className="space-y-14">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-serif text-xl sm:text-2xl font-semibold text-ink">
                  {section.title}
                </h2>
                {section.paragraphs?.map((p, i) => (
                  <p key={i} className={`mt-4 ${BODY_TEXT}`}>
                    {p}
                  </p>
                ))}
                {section.points && <Points items={section.points} />}
                {section.paragraphsAfter?.map((p, i) => (
                  <p key={i} className={`mt-4 ${BODY_TEXT}`}>
                    {p}
                  </p>
                ))}
                {section.subsections?.map((sub) => (
                  <div key={sub.title} className="mt-8">
                    <h3 className="text-base font-semibold text-ink">{sub.title}</h3>
                    {sub.paragraphs?.map((p, i) => (
                      <p key={i} className={`mt-3 ${BODY_TEXT}`}>
                        {p}
                      </p>
                    ))}
                    {sub.points && <Points items={sub.points} />}
                    {sub.paragraphsAfter?.map((p, i) => (
                      <p key={i} className={`mt-3 ${BODY_TEXT}`}>
                        {p}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            ))}

            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-semibold text-ink">
                21. Contact Information
              </h2>
              <p className={`mt-4 ${BODY_TEXT}`}>{site.name}</p>
              <p className={BODY_TEXT}>
                Email:{" "}
                <a href={`mailto:${site.email}`} className="text-blue hover:text-blue-dark">
                  {site.email}
                </a>
              </p>
              <p className={BODY_TEXT}>
                Phone:{" "}
                <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`} className="text-blue hover:text-blue-dark">
                  {site.phoneDisplay}
                </a>
              </p>
              <p className={`mt-4 text-sm text-ink`}>Last updated: August 2026</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
