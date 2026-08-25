import PageHeader from "@/components/PageHeader";
import { site } from "@/data/site";
import { CONTAINER } from "@/lib/layout";

export const metadata = {
  title: `Cancellation & Refund Policy — ${site.name}`,
  description: `The cancellation, rescheduling, and refund policy for treks, expeditions, helicopter tours, and mountain flights booked with ${site.name}.`,
};

const BODY_TEXT = "text-[17px] leading-relaxed text-ink";

const sections = [
  {
    title: "For Treks and Expeditions",
    subsections: [
      {
        title: "Cancellation Policy",
        points: [
          "If you cancel your booking 30 days or more before the tour start date, your 20% booking deposit will be refunded in full.",
          "If you cancel less than 30 days before the tour start date, the 20% booking deposit is non-refundable.",
          "If the remaining 80% balance has already been paid and you cancel before the tour begins, Summit Calling will refund the balance after deducting any actual non-recoverable expenses incurred on your behalf, including but not limited to flights, permits, accommodation, transportation, guide fees, and other prepaid services.",
          "No refund will be issued once the tour has commenced or for any unused portion of the tour due to late arrival, early departure, or voluntary withdrawal.",
          "Any applicable bank transaction charges, payment gateway fees, currency conversion charges, or third-party booking charges will be deducted from the refundable amount, wherever applicable.",
        ],
      },
      {
        title: "Cancellation Due to Force Majeure",
        points: [
          "If the tour is cancelled, postponed, or significantly affected due to circumstances beyond Summit Calling's reasonable control, including but not limited to natural disasters, pandemics, political unrest, government restrictions, strikes, or severe weather conditions, Summit Calling reserves the right to deduct any actual non-recoverable expenses incurred. The remaining amount, if any, will be refunded.",
          "Any applicable bank transaction charges, payment gateway fees, currency conversion charges, or third-party booking charges will be deducted from the refundable amount, wherever applicable.",
        ],
      },
      {
        title: "Rescheduling",
        points: [
          "Participants may request to reschedule their booking by notifying Summit Calling at least 15 days before the scheduled tour start date.",
          "Rescheduling requests are subject to availability and any applicable permit, airline, accommodation, or other third-party booking policies.",
          "Any additional costs arising from rescheduling, including changes in permits, flights, accommodation, transportation, or other third-party services, shall be borne by the participant.",
        ],
      },
    ],
  },
  {
    title: "For Helicopter Tours",
    subsections: [
      {
        title: "Cancellation Policy",
        points: [
          "Cancellations made more than 24 hours before the scheduled departure are eligible for a refund of all payments made, excluding the 20% non-refundable booking deposit.",
          "Cancellations made within 24 hours of the scheduled departure or no-shows are non-refundable.",
          "If the tour is cancelled due to adverse weather conditions, air traffic restrictions, or other operational reasons beyond our control, guests may choose either a full refund (including the booking deposit), or to reschedule the tour to the next available date, subject to seat availability.",
        ],
      },
      {
        title: "Rescheduling Policy",
        points: [
          "Guests wishing to reschedule their booking for personal reasons must notify us at least 24 hours before the scheduled departure.",
          "Rescheduling requests are subject to seat availability.",
          "Rescheduling requests made within 24 hours of departure may not be accommodated and may be treated as a cancellation.",
        ],
      },
    ],
  },
  {
    title: "For Mountain Flight (Everest Experience)",
    subsections: [
      {
        title: "Cancellation & Rescheduling Policy",
        points: [
          "Cancellations made more than 24 hours before the scheduled departure are eligible for a 100% refund.",
          "Cancellations made within 24 hours of departure or on the day of the flight are non-refundable.",
          "If the flight is cancelled due to bad weather, air traffic restrictions, or any other operational reasons beyond our control, guests may choose either a full refund, or to reschedule the flight to the next available day or any other available date, subject to seat availability.",
          "Guests wishing to reschedule their booking for personal reasons must inform us at least 24 hours before the scheduled departure, subject to seat availability.",
        ],
      },
    ],
  },
  {
    title: "Booking Policy",
    paragraphs: [
      "For booking terms, payment schedules, and booking-related conditions, please refer to the respective tour or trek page.",
    ],
  },
  {
    title: "Refund Policy",
    paragraphs: [
      "Approved refunds will be processed within 7–15 business days from the date the refund is confirmed by Summit Calling.",
      "The time taken for the refunded amount to appear in the customer's account may vary depending on the bank, card issuer, payment gateway, or other payment service provider.",
    ],
  },
  {
    title: "General Terms",
    paragraphs: [
      "All cancellations, refunds, and rescheduling requests are subject to the applicable terms stated for the respective trek, expedition, helicopter tour, or mountain flight. In case of any discrepancy, the specific cancellation terms applicable to the booked service shall prevail.",
    ],
  },
  {
    title: "Policy Updates",
    paragraphs: [
      "Summit Calling reserves the right to amend or update this Cancellation and Refund Policy when necessary. Any changes will be reflected on this page. We recommend that you review the applicable Cancellation and Refund Policy before booking any of our services.",
    ],
  },
  {
    title: "Our Approach",
    paragraphs: [
      "We strive to maintain a fair and flexible cancellation policy while also considering the costs involved in planning and arranging your trip. Please keep in mind that cancellation charges and non-refundable amounts may be necessary to cover expenses already incurred in connection with permits, flights, accommodation, transportation, guides, and other prepaid services.",
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

export default function CancellationPolicyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Cancellation & Refund Policy"
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
                {section.subsections?.map((sub) => (
                  <div key={sub.title} className="mt-8">
                    <h3 className="text-base font-semibold text-ink">{sub.title}</h3>
                    {sub.paragraphs?.map((p, i) => (
                      <p key={i} className={`mt-3 ${BODY_TEXT}`}>
                        {p}
                      </p>
                    ))}
                    {sub.points && <Points items={sub.points} />}
                  </div>
                ))}
              </div>
            ))}

            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-semibold text-ink">
                Questions &amp; Clarifications
              </h2>
              <p className={`mt-4 ${BODY_TEXT}`}>
                If you have any questions regarding our Cancellation, Refund, or Rescheduling Policy, please contact us before making your booking. Our team will be happy to clarify any terms or conditions. You can reach us at{" "}
                <a href={`mailto:${site.email}`} className="text-blue hover:text-blue-dark">
                  {site.email}
                </a>
                , and we will be glad to assist you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
