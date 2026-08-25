import PageHeader from "@/components/PageHeader";
import { site } from "@/data/site";
import { CONTAINER } from "@/lib/layout";

export const metadata = {
  title: `Privacy Policy — ${site.name}`,
  description: `How Summit Calling LLP collects, uses, stores, protects, and shares personal information in connection with our website, trekking, and adventure services.`,
};

const BODY_TEXT = "text-[17px] leading-relaxed text-ink";

const sections = [
  {
    title: "1. Introduction",
    paragraphs: [
      `Summit Calling LLP ("Summit Calling", "Company", "we", "our", or "us") respects your privacy and is committed to protecting the personal information you provide to us.`,
      "This Privacy Policy explains how Summit Calling LLP collects, uses, stores, protects, and shares personal information in connection with our website, trekking and adventure services, expeditions, mountaineering activities, travel arrangements, helicopter services, and other related services.",
      "This Privacy Policy applies to visitors to our website, customers, participants, and other individuals who provide personal information to Summit Calling.",
      "By using our website, submitting an enquiry, providing information, or booking or participating in any of our services, you acknowledge that you have read and understood this Privacy Policy.",
      "Summit Calling LLP will process personal information in accordance with applicable privacy and data-protection laws in India, including the Digital Personal Data Protection Act, 2023, and applicable rules and regulations, to the extent applicable.",
    ],
  },
  {
    title: "2. Information We Collect",
    subsections: [
      {
        title: "Personal Information",
        points: [
          "Full name",
          "Email address",
          "Mobile or WhatsApp number",
          "Residential or correspondence address",
          "Date of birth",
          "Nationality",
          "Country of residence",
          "Emergency contact details",
        ],
      },
      {
        title: "Travel and Identification Information",
        points: [
          "Passport details",
          "Government-issued identification details",
          "Visa or immigration information, where applicable",
          "Travel dates and preferences",
          "Flight details",
          "Trek or expedition details",
          "Information required for permits or government requirements",
        ],
      },
      {
        title: "Health and Safety Information",
        paragraphs: [
          "For certain trekking, high-altitude, mountaineering, and adventure activities, we may request information necessary for participant safety, including:",
        ],
        points: [
          "Relevant medical conditions",
          "Allergies",
          "Medication information",
          "Fitness or physical-readiness information",
          "Blood group, where required",
          "Emergency medical information",
          "Travel or medical insurance details",
        ],
        paragraphsAfter: [
          "Such information will be collected and used only where reasonably necessary for safety, emergency preparedness, trek management, insurance, legal requirements, or the provision of our services.",
        ],
      },
      {
        title: "Payment Information",
        paragraphs: [
          "Payments may be processed through third-party payment gateways, banks, or financial service providers. We may receive payment confirmation, transaction reference numbers, payment status, booking amounts, and refund information. Summit Calling LLP does not intentionally store complete debit or credit card numbers, CVV details, banking passwords, UPI PINs, or similar confidential banking credentials on its own systems.",
        ],
      },
      {
        title: "Website and Technical Information",
        paragraphs: [
          "When you use our website, certain information may be collected automatically, including IP address, browser and device information, operating system, pages visited, date and time of access, referral source, website usage information, cookies, and analytics information.",
        ],
      },
    ],
  },
  {
    title: "3. How We Collect Information",
    points: [
      "Directly from you when you make an enquiry or booking",
      "When you request an itinerary or other information",
      "When you contact us by phone, email, WhatsApp, or other communication channels",
      "When you submit documents required for a booking or permit",
      "During your participation in a trek, expedition, or adventure activity",
      "Through feedback or communications with our team",
      "Automatically through cookies and similar technologies",
      "From third parties involved in providing your services, such as payment providers, accommodation providers, transportation operators, airlines, helicopter operators, insurance providers, permit authorities, government authorities, or local trekking partners",
    ],
  },
  {
    title: "4. How We Use Your Information",
    paragraphs: ["We may use your information to:"],
    points: [
      "Process and manage bookings",
      "Prepare itineraries and travel documentation",
      "Obtain permits and complete government requirements",
      "Arrange transportation and accommodation",
      "Arrange helicopter services where applicable",
      "Coordinate trek leaders, guides, porters, local operators, and other service providers",
      "Manage participant safety",
      "Handle emergencies, rescue, and evacuation",
      "Verify participant identity",
      "Process payments and refunds",
      "Send booking confirmations and itinerary updates",
      "Respond to enquiries and provide customer support",
      "Improve our website and services",
      "Maintain business, accounting, and operational records",
      "Comply with applicable legal, tax, regulatory, and government requirements",
      "Prevent fraud, misuse, or unauthorized activity",
      "Send promotional communications where permitted and, where required, with appropriate consent",
    ],
    paragraphsAfter: [
      "We may also process information where required or otherwise permitted by applicable law.",
    ],
  },
  {
    title: "5. Sharing of Information",
    paragraphs: [
      "Summit Calling LLP does not sell your personal information.",
      "We may share information with trusted third parties where reasonably necessary to provide our services, fulfil your booking, comply with legal requirements, or protect participant health and safety.",
    ],
    points: [
      "Trek leaders and guides",
      "Local trekking and expedition operators",
      "Government authorities and permit offices",
      "Accommodation providers",
      "Transportation providers",
      "Helicopter operators",
      "Airlines and aviation service providers",
      "Insurance providers",
      "Medical professionals and hospitals",
      "Emergency rescue and evacuation agencies",
      "Payment gateway providers",
      "Website, hosting, analytics, and technology service providers",
      "Other service providers directly involved in fulfilling your booking",
    ],
    paragraphsAfter: [
      "We aim to share only information reasonably necessary for the relevant purpose, subject to operational requirements and applicable law. Third-party providers may process information under their own privacy policies and terms.",
    ],
  },
  {
    title: "6. Emergency and Safety Situations",
    paragraphs: [
      "Trekking, mountaineering, high-altitude travel, and adventure activities may involve circumstances requiring urgent action. In the event of an accident, illness, medical emergency, rescue, evacuation, or other safety-related situation, Summit Calling LLP may share relevant participant information with medical professionals, hospitals, rescue agencies, helicopter operators, insurance providers, government authorities, trek leaders, guides, emergency contacts, or other persons reasonably required to coordinate assistance.",
      "Such information may be shared without obtaining prior consent where necessary to protect a participant's health, safety, or life or where obtaining consent is not reasonably practicable.",
    ],
  },
  {
    title: "7. Payments, Cookies and Third-Party Services",
    paragraphs: [
      "Payments made through our website or other payment channels may be processed by third-party payment providers. Such providers may have their own privacy policies and security practices.",
      "Our website may use cookies and similar technologies to improve website functionality, remember user preferences, understand website traffic, analyse website usage, improve user experience, and measure marketing effectiveness. We may use third-party analytics services such as Google Analytics or similar tools.",
      "Our website may also contain links to third-party websites, including payment providers, airlines, accommodation providers, social media platforms, insurance providers, and other travel services. Summit Calling LLP is not responsible for the privacy practices, security, content, or handling of information by third-party websites or services.",
    ],
  },
  {
    title: "8. Data Security and Retention",
    paragraphs: [
      "We take reasonable technical, administrative, and organizational measures designed to protect personal information from unauthorized access, misuse, loss, theft, alteration, destruction, or unauthorized disclosure. However, no electronic transmission or storage system can be guaranteed to be completely secure.",
      "We retain personal information only for as long as reasonably necessary for booking and operational requirements, trek and expedition records, safety and emergency records, accounting and taxation, insurance requirements, legal and regulatory compliance, resolving disputes, enforcing agreements, and providing customer support.",
      "Where information is no longer reasonably required and there is no legal or legitimate reason to retain it, we will take reasonable steps to delete, anonymize, or otherwise dispose of it as appropriate.",
    ],
  },
  {
    title: "9. Marketing Communications",
    paragraphs: [
      "Where permitted by applicable law, Summit Calling LLP may send information about new trekking packages, upcoming departures, special offers, promotions, new services, and travel-related updates. Where consent is required, we will seek the appropriate consent.",
      "You may opt out of promotional communications at any time by contacting us at hello@summitcalling.com. Where an unsubscribe option is provided, you may also use that option. Opting out of marketing communications will not prevent us from sending essential communications relating to your booking or service, including booking confirmations, payment updates, itinerary changes, safety information, and emergency communications.",
    ],
  },
  {
    title: "10. Your Privacy Rights",
    paragraphs: [
      "Subject to applicable law, you may have the right to request information about personal information held or processed by us, request correction of inaccurate information, request deletion where legally applicable, withdraw consent where processing is based on consent, opt out of promotional communications, raise questions or concerns regarding the use of your information, and submit a privacy-related request or grievance.",
      "To make a privacy-related request, please contact us using the details below. We may need to verify your identity before processing certain requests. Some information may need to be retained where required by law or where reasonably necessary for safety, accounting, contractual, dispute-resolution, insurance, or other lawful purposes.",
    ],
  },
  {
    title: "11. Photography and Media",
    paragraphs: [
      "Photographs and videos may be captured during treks, expeditions, events, or other activities organized by Summit Calling LLP. Where appropriate and permitted, photographs or videos may be used for website content, social media, marketing, promotional materials, advertising, and documentation of Summit Calling activities.",
      "If you do not wish to appear in identifiable promotional photographs or videos, you may notify us in writing before the commencement of your trip. We will make reasonable efforts to respect such requests. Where consent is legally required for a particular use, the appropriate consent will be obtained.",
    ],
  },
  {
    title: "12. Children and Minors",
    paragraphs: [
      "Our services are not intended for children to independently book or participate in trekking, expedition, or adventure activities without appropriate involvement and consent of a parent or legal guardian. Where a minor participates in an activity, Summit Calling LLP may require information and consent from the parent or legal guardian in accordance with applicable law.",
    ],
  },
  {
    title: "13. International Travel and Data Transfers",
    paragraphs: [
      "Some of our trekking, travel, transportation, accommodation, helicopter, insurance, or other service partners may operate outside India. When arranging an international trip or service, your personal information may therefore need to be shared with or processed by service providers, operators, government authorities, or other relevant parties outside India.",
      "We will take reasonable steps to ensure that such information is shared only where necessary for the relevant service, operational requirement, legal requirement, safety requirement, or emergency situation and in accordance with applicable law.",
    ],
  },
  {
    title: "14. Changes to This Privacy Policy",
    paragraphs: [
      `Summit Calling LLP may update or modify this Privacy Policy from time to time to reflect changes in our services, technology, business practices, or applicable laws and regulations. Any updated version will be published on our website with a revised "Last Updated" date. We encourage you to review this Privacy Policy periodically.`,
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

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
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
                15. Contact Us
              </h2>
              <p className={`mt-4 ${BODY_TEXT}`}>Summit Calling LLP</p>
              <p className={BODY_TEXT}>Identification No.: ADB-3351</p>

              <p className={`mt-4 ${BODY_TEXT}`}>Registered Office:</p>
              <p className={BODY_TEXT}>242 HIG, Ratan Lal Nagar,</p>
              <p className={BODY_TEXT}>Kanpur, Uttar Pradesh, India</p>

              <p className={`mt-4 ${BODY_TEXT}`}>
                Website:{" "}
                <a href="https://www.summitcalling.com" className="text-blue hover:text-blue-dark">
                  www.summitcalling.com
                </a>
              </p>
              <p className={BODY_TEXT}>
                Email:{" "}
                <a href="mailto:hello@summitcalling.com" className="text-blue hover:text-blue-dark">
                  hello@summitcalling.com
                </a>
              </p>
              <p className={BODY_TEXT}>
                Phone:{" "}
                <a href="tel:+919559329391" className="text-blue hover:text-blue-dark">
                  +91 95593 29391
                </a>
              </p>

              <p className={`mt-4 ${BODY_TEXT}`}>
                For privacy-related requests, you may mention &ldquo;Privacy Request&rdquo; in the
                subject line of your email.
              </p>

              <p className="mt-4 text-sm text-ink">Last updated: 18 August 2026</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
