import React from "react";

function ReportingToggle() {
  return (
    <div className="w-full bg-white text-gray-800 py-10 px-0">
      <span className="text-light uppercase mx-16 text-2xl font-semibold">
        Reporting Details
      </span>
      <div className="max-w-full mx-16 grid grid-cols-1 md:grid-cols-5 gap-6 mt-16">
        {/* Row 1 */}
        <div className="bg-[#7a797a] text-white p-8 flex flex-col justify-center min-h-[200px] md:col-span-3">
          <div className="text-xl font-semibold mb-2">
            ONLINE DASHBOARDS (CUSTOMIZED FOR EACH PROJECT)
          </div>
          <ul className="text-gray-200 text-2xl font-light list-disc list-inside space-y-1">
            <li>Progress tracking</li>
            <li>Cost and procurement status</li>
            <li>Programme updates</li>
            <li>Milestones and upcoming activities</li>
            <li>HSE and quality performance indicators</li>
          </ul>
        </div>
        <div className="w-full h-full md:col-span-2">
          <img
            src="/reporting1.png"
            alt="Online Dashboards"
            className="object-cover w-full h-full rounded"
          />
        </div>

        {/* Row 2 */}
        <div className="w-full h-full md:col-span-2">
          <img
            src="/reporting2.png"
            alt="Detailed Construction Programmes"
            className="object-cover w-full h-full rounded"
          />
        </div>
        <div className="bg-[#7a797a] text-white p-8 flex flex-col justify-center min-h-[200px] md:col-span-3">
          <div className="text-xl font-semibold mb-2">
            DETAILED CONSTRUCTION PROGRAMMES
          </div>
          <ul className="text-gray-200 text-2xl font-light list-disc list-inside space-y-1">
            <li>We issue and update detailed programmes that show:</li>
            <li>Critical path</li>
            <li>Dependencies</li>
            <li>Subcontractor sequencing</li>
            <li>Weekly progress forecasts</li>
          </ul>
        </div>

        {/* Row 3 */}
        <div className="bg-[#7a797a] text-white p-8 flex flex-col justify-center min-h-[200px] md:col-span-3">
          <div className="text-xl font-semibold mb-2">
            WEEKLY MINUTES OF MEETING (MOMS)
          </div>
          <ul className="text-gray-200 text-2xl font-light list-disc list-inside space-y-1">
            <li>Clear, structured MOMs with:</li>
            <li>Actions</li>
            <li>Responsibilities</li>
            <li>Deadlines</li>
            <li>Tracking of all open and closed items</li>
          </ul>
        </div>
        <div className="w-full h-full md:col-span-2">
          <img
            src="/reporting3.png"
            alt="Weekly Minutes of Meeting"
            className="object-cover w-full h-full rounded"
          />
        </div>

        {/* Row 4 */}
        <div className="w-full h-full md:col-span-2">
          <img
            src="/reporting4.png"
            alt="Matterport 360 Scanning"
            className="object-cover w-full h-full rounded"
          />
        </div>
        <div className="bg-[#7a797a] text-white p-8 flex flex-col justify-center min-h-[200px] md:col-span-3">
          <div className="text-xl font-semibold mb-2">
            MATTERPORT 360° SCANNING
          </div>
          <ul className="text-gray-200 text-2xl font-light list-disc list-inside space-y-1">
            <li>We provide regular 360° walkthrough scans for:</li>
            <li>Remote site reviews</li>
            <li>Progress verification</li>
            <li>Quality comparison</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ReportingToggle;
