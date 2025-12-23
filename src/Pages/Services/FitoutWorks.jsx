import React from "react";

function FitoutWorks() {
  return (
    <div className="w-full bg-white text-gray-800">
      {/* Header */}
      <div className="max-w-full mx-auto px-4 pt-6">
        <h2 className="text-xl font-semibold tracking-wide">FIT-OUT WORKS</h2>
        <p className="text-md text-gray-400 mt-2">
          CONTRACTOR MANAGEMENT, PROCUREMENT, REPORTING ..
        </p>
      </div>

      {/* Top split: left text block (gray) and right image */}
      <div className="max-w-full mx-auto px-4 mt-6 grid grid-cols-1 md:grid-cols-2 items-stretch ">
        <div className="bg-[#7a797a] text-white p-8 flex items-center">
          <div className="prose prose-md text-white text-2xl max-w-2xl font-light">
            <p>
              We offer a structured delivery model that, depending on the
              client’s preferred approach and the stage at which we are engaged,
              can be delivered as either Design & Fit-Out or Fit-Out.
            </p>
            <br />
            <p>
              Our Fast Track Design & Fit-Out model is the core of our business.
              It integrates design (through our partners), procurement, and
              permitting in parallel, significantly reducing delivery time while
              maintaining a single point of accountability.
            </p>
            <br />
            <p>
              Our Fit-Out model is ideal when the design is already completed,
              allowing us to competitively tender or be directly appointed to
              execute the project with precision.
            </p>
            <br />
            <p>
              Both approaches provide efficiency, transparency in both progress
              and pricing, and high-quality delivery tailored to each client’s
              needs.
            </p>
          </div>
        </div>
        <div className="w-full h-full">
          <img
            src="/fitout1.png"
            alt="Fitout 1"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Middle: badge + paragraphs */}
      <div className="max-w-9xl mx-16 px-4 mt-10">
        <div className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-md font-medium">
          DESIGN & FIT-OUT
        </div>

        <div className="mt-6 text-xl text-gray-600 leading-relaxed font-light">
          <p className="mb-4">
            <span className="font-semibold">
              Our core delivery model is a Fast Track Design & Fit-Out approach
              that brings together the most creative boutique design studios and
              our experienced execution team under one coordinated, accountable
              structure.
            </span>
            <br />
            <span className="font-normal">
              This model provides the client with a single point of
              responsibility for concept, technical design, procurement,
              authority approvals, and final delivery.
            </span>
          </p>
          <p className="mb-4">
            <span className="font-normal">
              We collaborate with the market’s most creative boutique design
              studios, all pre-qualified and classified according to their
              strengths across key sectors such as Residential, Hospitality,
              Commercial, and Mixed-Use. This ensures every project is matched
              with the ideal creative partner for its style, complexity, and
              functional requirements.
            </span>
          </p>
          <p>
            <span className="font-semibold">
              One of the greatest advantages of this model is the substantial
              reduction in delivery time, combined with a single point of
              accountability.
            </span>
            <br />
            <span className="font-normal">
              The design process is prioritised to produce Authority Approval
              documentation early, enabling submission to commence within only a
              few weeks, far faster than in traditional Design & Fit-Out
              sequential models. This allows Design Development to progress in
              parallel with Local Authority approvals, compressing the programme
              and accelerating the project’s start on site.
            </span>
          </p>
        </div>
      </div>

      {/* Bottom: image left, key benefits right */}
      <div className="max-w-full mx-auto px-4 mt-10 grid grid-cols-1 md:grid-cols-2  items-stretch">
        <div>
          <img
            src="/fitout2.png"
            alt="Fitout 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-[#7a797a] text-gray-200 p-8 flex flex-col ">
          <h3 className="font-semibold text-2xl mt-28">KEY BENEFITS</h3>
          <ul className="mt-4 list-disc list-inside text-2xl space-y-2 opacity-90 font-light ">
            <li>Single point of accountability from design to delivery</li>
            <li>
              Faster timelines via parallel Design Development and Authority
              Approvals
            </li>
            <li>
              Access to creative boutique design studios matched to the
              project’s sector
            </li>
            <li>
              Fewer design–construction conflicts and smoother coordination
            </li>
            <li>
              Reduced paperwork (Internal Design - Construction alignment)
            </li>
            <li>
              Early buildability and value engineering for cost efficiency
            </li>
            <li>Streamlined communication through an integrated workflow</li>
          </ul>
        </div>
      </div>

      <div className="h-12" />
    </div>
  );
}

export default FitoutWorks;
