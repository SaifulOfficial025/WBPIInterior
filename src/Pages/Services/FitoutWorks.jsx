import React from "react";

function FitoutWorks() {
  return (
    <div className="w-full bg-black/50 text-gray-800">
      {/* Header */}
      <div className="max-w-full mx-auto px-4 pt-6 sm:pt-6 pt-4 bg-white">
        <h2 className="text-xl sm:text-xl text-lg font-semibold tracking-wide text-gray-900">
          FIT-OUT WORKS
        </h2>
        <p className="text-md sm:text-md text-sm text-gray-600 mt-2">
          CONTRACTOR MANAGEMENT, PROCUREMENT, REPORTING ..
        </p>
      </div>

      {/* Top split: left text block (transparent to show hero) and right image */}
      <div className="max-w-full mx-auto px-4 mt-6 sm:mt-6 mt-4 grid grid-cols-1 md:grid-cols-2 items-stretch bg-transparent">
        <div className="bg-transparent text-white p-8 sm:p-8 p-4 flex items-center">
          <div className="prose prose-md text-white text-2xl sm:text-2xl text-base max-w-2xl font-light ml-10 sm:ml-10 ml-2">
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
            className="w-full h-full object-cover shadow-lg"
          />
        </div>
      </div>

      {/* Middle: badge + paragraphs */}
      <div className="max-w-full mx-auto px-4 mt-10 sm:mt-10 mt-6 bg-white py-6 sm:py-6 py-4 pb-16 sm:pb-16 pb-8">
        <div className="inline-block bg-gray-100 text-gray-700 px-4 sm:px-4 px-3 py-2 rounded-full text-md sm:text-md text-sm font-medium mx-16 sm:mx-16 mx-4">
          DESIGN & FIT-OUT
        </div>

        <div className="mt-6 sm:mt-6 mt-4 text-xl sm:text-xl text-base text-gray-600 leading-relaxed font-light mx-16 sm:mx-16 mx-4">
          <p className="mb-4 sm:mb-4 mb-2 text-xl sm:text-xl text-base">
            <span className="font-semibold block sm:inline">
              Our core delivery model is a Fast Track Design & Fit-Out approach
              that brings together the most creative boutique design studios and
              our experienced execution team under one coordinated, accountable
              structure.
            </span>
            <span className="font-normal block sm:inline mt-1 sm:mt-0">
              This model provides the client with a single point of
              responsibility for concept, technical design, procurement,
              authority approvals, and final delivery.
            </span>
          </p>
          <p className="mb-4 sm:mb-4 mb-2 text-base sm:text-base text-sm">
            <span className="font-normal block">
              We collaborate with the market’s most creative boutique design
              studios, all pre-qualified and classified according to their
              strengths across key sectors such as Residential, Hospitality,
              Commercial, and Mixed-Use. This ensures every project is matched
              with the ideal creative partner for its style, complexity, and
              functional requirements.
            </span>
          </p>
          <p className="text-xl sm:text-xl text-base">
            <span className="font-semibold block sm:inline">
              One of the greatest advantages of this model is the substantial
              reduction in delivery time, combined with a single point of
              accountability.
            </span>
            <span className="font-normal block sm:inline mt-1 sm:mt-0">
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
      <div className="max-w-full mx-auto px-4 mt-10 sm:mt-10 mt-6 grid grid-cols-1 md:grid-cols-2 items-stretch bg-transparent">
        <div>
          <img
            src="/fitout2.png"
            alt="Fitout 2"
            className="w-full h-full object-cover shadow-lg"
          />
        </div>
        <div className="bg-transparent text-gray-200 p-8 sm:p-8 p-4 flex flex-col ml-16 sm:ml-16 ml-4">
          <h3 className="font-semibold text-2xl sm:text-2xl text-lg mt-28 sm:mt-28 mt-8 mb-2 sm:mb-2 mb-1">
            KEY BENEFITS
          </h3>
          <ul className="mt-4 sm:mt-4 mt-2 list-disc list-inside text-2xl sm:text-2xl text-base space-y-2 sm:space-y-2 space-y-1 opacity-90 font-light pl-2 sm:pl-2 pl-0">
            <li className="text-base sm:text-2xl">
              Single point of accountability from design to delivery
            </li>
            <li className="text-base sm:text-2xl">
              Faster timelines via parallel Design Development and Authority
              Approvals
            </li>
            <li className="text-base sm:text-2xl">
              Access to creative boutique design studios matched to the
              project’s sector
            </li>
            <li className="text-base sm:text-2xl">
              Fewer design–construction conflicts and smoother coordination
            </li>
            <li className="text-base sm:text-2xl">
              Reduced paperwork (Internal Design - Construction alignment)
            </li>
            <li className="text-base sm:text-2xl">
              Early buildability and value engineering for cost efficiency
            </li>
            <li className="text-base sm:text-2xl">
              Streamlined communication through an integrated workflow
            </li>
          </ul>
        </div>
      </div>

      <div className="h-12" />
    </div>
  );
}

export default FitoutWorks;
