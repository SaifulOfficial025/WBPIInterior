import React, { useState } from "react";
import { FaPaperclip } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { sendRFPEmail } from "./RFPFormEmailWork";

const gray = "#d6d3ce";
const checkedGray = "#8a8580";

function Checkbox({ label, checked, onChange }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer select-none">
      <span
        className={`inline-block w-4 h-4 border border-gray-300 rounded-sm mr-1 flex-shrink-0 flex items-center justify-center`}
        style={{ background: checked ? checkedGray : gray }}
        onClick={onChange}
      >
        {checked && <FaCheck className="text-white text-xs" />}
      </span>
      <span className="text-sm tracking-wide text-gray-500" onClick={onChange}>
        {label}
      </span>
    </label>
  );
}

function SelectBox({ options, value, onChange, className }) {
  return (
    <div className={`inline-block relative ${className || ""}`}>
      <select
        value={value || ""}
        onChange={onChange}
        className="appearance-none bg-[#d6d3ce] text-sm px-2 py-1 pr-6 rounded-none border-none focus:outline-none min-w-[90px]"
      >
        <option value="">Select...</option>
        {options.map((opt, i) => (
          <option key={i} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-2 top-1.5 text-sm text-gray-500">
        ▼
      </span>
    </div>
  );
}

function RFP() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    projectType: {},
    serviceType: {},
    designLevel: {},
    spaceCond: {},
    designStyle: "",
    projectStart: {},
    phasing: "",
    schMeeting: {},
    sowType: {},
    nominations: {},
    companyName: "",
    projectName: "",
    projectArea: "",
    projectLocation: "",
  });

  const [attachments1, setAttachments1] = useState([]);
  const [attachments2, setAttachments2] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleFileChange = (e, setterFn) => {
    const files = Array.from(e.target.files);
    setterFn(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const result = await sendRFPEmail(formData, attachments1, attachments2);

      if (result.success) {
        setSubmitMessage("✓ " + result.message);
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            message: "",
            projectType: {},
            serviceType: {},
            designLevel: {},
            spaceCond: {},
            designStyle: "",
            projectStart: {},
            phasing: "",
            schMeeting: {},
            sowType: {},
            nominations: {},
            companyName: "",
            projectName: "",
            projectArea: "",
            projectLocation: "",
          });
          setAttachments1([]);
          setAttachments2([]);
          setSubmitMessage("");
        }, 3000);
      } else {
        setSubmitMessage("✗ " + result.message);
      }
    } catch (error) {
      setSubmitMessage("✗ An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (category, label) => {
    setFormData((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [label]: !prev[category][label],
      },
    }));
  };

  const handleSelectChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="w-full bg-white text-gray-700 p-4 md:p-8">
      <div className="text-3xl font-semibold mb-4">RFP</div>
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        onSubmit={handleSubmit}
      >
        {/* Left Column */}
        <div className="flex flex-col gap-4">
          {/* Name, Email, Message */}
          <div>
            <label className="text-sm text-gray-400 tracking-widest">
              NAME
            </label>
            <input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="block w-full border-0 border-b border-gray-300 focus:ring-0 text-sm py-2 bg-transparent"
            />
          </div>
          <div>
            <label className="text-sm text-gray-400 tracking-widest">
              EMAIL
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="block w-full border-0 border-b border-gray-300 focus:ring-0 text-sm py-2 bg-transparent"
            />
          </div>
          <div>
            <label className="text-sm text-gray-400 tracking-widest">
              MESSAGE
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="block w-full border-0 border-b border-gray-300 focus:ring-0 text-sm py-2 bg-transparent min-h-[40px]"
            />
          </div>
          {/* Attachments */}
          <div className="mt-8">
            <div className="flex items-center justify-between border-b border-gray-300 pb-2">
              <div className="flex-1">
                <div className="text-sm text-gray-400 tracking-widest">
                  ATTACHMENTS
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  Note: Any relevant document
                </div>
                {attachments1.length > 0 && (
                  <div className="text-xs text-gray-600 mt-2">
                    {attachments1.map((file, idx) => (
                      <div key={idx}>{file.name}</div>
                    ))}
                  </div>
                )}
              </div>
              <input
                type="file"
                id="file-upload-1"
                multiple
                onChange={(e) => handleFileChange(e, setAttachments1)}
                className="hidden"
              />
              <label htmlFor="file-upload-1" className="cursor-pointer">
                <FaPaperclip className="text-lg text-gray-400 hover:text-gray-600" />
              </label>
            </div>
          </div>
        </div>
        {/* Right Column */}
        <div className="flex flex-col gap-4">
          {/* Project Type */}
          <div>
            <div className="flex items-center gap-4 border-b border-gray-300 pb-2">
              <span className="text-sm text-gray-400 tracking-widest">
                PROJECT TYPE
              </span>
              <Checkbox
                label="COMMERCIAL"
                checked={formData.projectType["COMMERCIAL"]}
                onChange={() =>
                  handleCheckboxChange("projectType", "COMMERCIAL")
                }
              />
              <Checkbox
                label="RESIDENTIAL"
                checked={formData.projectType["RESIDENTIAL"]}
                onChange={() =>
                  handleCheckboxChange("projectType", "RESIDENTIAL")
                }
              />
              <Checkbox
                label="HOSPITALITY"
                checked={formData.projectType["HOSPITALITY"]}
                onChange={() =>
                  handleCheckboxChange("projectType", "HOSPITALITY")
                }
              />
              <Checkbox
                label="MIXED USE"
                checked={formData.projectType["MIXED USE"]}
                onChange={() =>
                  handleCheckboxChange("projectType", "MIXED USE")
                }
              />
            </div>
          </div>
          {/* Service Type */}
          <div>
            <div className="flex items-center gap-4 border-b border-gray-300 pb-2">
              <span className="text-sm text-gray-400 tracking-widest">
                SERVICE TYPE
              </span>
              <Checkbox
                label="BUILD"
                checked={formData.serviceType["BUILD"]}
                onChange={() => handleCheckboxChange("serviceType", "BUILD")}
              />
              <Checkbox
                label="DESIGN & BUILD"
                checked={formData.serviceType["DESIGN & BUILD"]}
                onChange={() =>
                  handleCheckboxChange("serviceType", "DESIGN & BUILD")
                }
              />
              <Checkbox
                label="FF&E"
                checked={formData.serviceType["FF&E"]}
                onChange={() => handleCheckboxChange("serviceType", "FF&E")}
              />
              <Checkbox
                label="DESIGN DRAFTING"
                checked={formData.serviceType["DESIGN DRAFTING"]}
                onChange={() =>
                  handleCheckboxChange("serviceType", "DESIGN DRAFTING")
                }
              />
            </div>
          </div>
          {/* Available Design Level */}
          <div>
            <div className="flex items-center gap-4 border-b border-gray-300 pb-2">
              <span className="text-sm text-gray-400 tracking-widest">
                AVAILABLE DESIGN LEVEL (LOD)
              </span>
              <Checkbox
                label="AS-BUILDS"
                checked={formData.designLevel["AS-BUILDS"]}
                onChange={() =>
                  handleCheckboxChange("designLevel", "AS-BUILDS")
                }
              />
              <SelectBox
                options={["PROPOSED", "AS-BUILTS"]}
                value={formData.designLevel}
                onChange={(e) =>
                  handleSelectChange("designLevel", e.target.value)
                }
              />
            </div>
          </div>
          {/* Missing Design Details */}
          <div>
            <div className="text-sm text-gray-400 tracking-widest mb-1">
              MISSING DESIGN DETAILS EXCEPTIONS AND CLARIFICATIONS
            </div>
            <textarea
              name="missingDesignDetails"
              value={formData.missingDesignDetails || ""}
              onChange={handleInputChange}
              className="block w-full border-0 border-b border-gray-300 focus:ring-0 text-sm py-2 bg-transparent min-h-[32px]"
            />
          </div>
          {/* Attachments (right) */}
          <div className="mt-8">
            <div className="flex items-center justify-between border-b border-gray-300 pb-2">
              <div className="flex-1">
                <div className="text-sm text-gray-400 tracking-widest">
                  ATTACHMENTS
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  <b>
                    Note: Upload all relevant documents to help us prepare an
                    accurate quotation, such as:
                  </b>
                  <br />
                  Project requirements, as-built drawings, BOQ (if available),
                  proposed design, mood direction, reference images, preferred
                  materials and equipment lists, branding guidelines,
                  organization matrix, corporate standards, building LOD
                  guidelines, building fit-out manual and any documentation
                  issued by the building management or authorities.
                </div>
                {attachments2.length > 0 && (
                  <div className="text-xs text-gray-600 mt-2">
                    <b>Selected files:</b>
                    {attachments2.map((file, idx) => (
                      <div key={idx}>{file.name}</div>
                    ))}
                  </div>
                )}
              </div>
              <input
                type="file"
                id="file-upload-2"
                multiple
                onChange={(e) => handleFileChange(e, setAttachments2)}
                className="hidden"
              />
              <label htmlFor="file-upload-2" className="cursor-pointer">
                <FaPaperclip className="text-lg text-gray-400 hover:text-gray-600" />
              </label>
            </div>
          </div>
        </div>
        {/* Full width section below columns */}
        <div className="col-span-1 md:col-span-2 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: Company, Project, Location, etc. */}
            <div className="flex flex-col gap-4">
              <div>
                <label className="text-sm text-gray-400 tracking-widest">
                  COMPANY NAME
                </label>
                <input
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="block w-full border-0 border-b border-gray-300 focus:ring-0 text-sm py-2 bg-transparent"
                />
              </div>
              <div>
                <label className="text-sm text-gray-400 tracking-widest">
                  PROJECT NAME
                </label>
                <input
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleInputChange}
                  className="block w-full border-0 border-b border-gray-300 focus:ring-0 text-sm py-2 bg-transparent"
                />
              </div>
              <div>
                <label className="text-sm text-gray-400 tracking-widest">
                  PROJECT AREA
                </label>
                <input
                  name="projectArea"
                  value={formData.projectArea}
                  onChange={handleInputChange}
                  className="block w-full border-0 border-b border-gray-300 focus:ring-0 text-sm py-2 bg-transparent"
                />
              </div>
              <div>
                <label className="text-sm text-gray-400 tracking-widest">
                  PROJECT LOCATION
                </label>
                <input
                  name="projectLocation"
                  value={formData.projectLocation}
                  onChange={handleInputChange}
                  className="block w-full border-0 border-b border-gray-300 focus:ring-0 text-sm py-2 bg-transparent"
                />
              </div>
              {/* Space Condition */}
              <div className="flex items-center gap-4 border-b border-gray-300 pb-2">
                <span className="text-sm text-gray-400 tracking-widest">
                  SPACE CONDITION
                </span>
                <Checkbox
                  label="SHELL & CORE"
                  checked={formData.spaceCond["SHELL & CORE"]}
                  onChange={() =>
                    handleCheckboxChange("spaceCond", "SHELL & CORE")
                  }
                />
                <Checkbox
                  label="CAT A"
                  checked={formData.spaceCond["CAT A"]}
                  onChange={() => handleCheckboxChange("spaceCond", "CAT A")}
                />
                <Checkbox
                  label="FITTED"
                  checked={formData.spaceCond["FITTED"]}
                  onChange={() => handleCheckboxChange("spaceCond", "FITTED")}
                />
                <Checkbox
                  label="IN CONSTRUCTION"
                  checked={formData.spaceCond["IN CONSTRUCTION"]}
                  onChange={() =>
                    handleCheckboxChange("spaceCond", "IN CONSTRUCTION")
                  }
                />
              </div>
              {/* Design Style */}
              <div className="flex items-center gap-4 border-b border-gray-300 pb-2">
                <span className="text-sm text-gray-400 tracking-widest">
                  DESIGN STYLE
                </span>
                <SelectBox
                  options={[
                    "Modern",
                    "Contemporary",
                    "Classic",
                    "Industrial",
                    "Minimalist",
                    "Luxury",
                  ]}
                  value={formData.designStyle}
                  onChange={(e) =>
                    handleSelectChange("designStyle", e.target.value)
                  }
                />
              </div>
              {/* Project Start/End */}
              <div className="flex items-center gap-4 border-b border-gray-300 pb-2">
                <span className="text-sm text-gray-400 tracking-widest">
                  PROJECT START/END
                </span>
                <Checkbox
                  label="STARTING"
                  checked={formData.projectStart["STARTING"]}
                  onChange={() =>
                    handleCheckboxChange("projectStart", "STARTING")
                  }
                />
                <SelectBox
                  options={["COMPLETION", "IN PROGRESS"]}
                  value={formData.projectStart}
                  onChange={(e) =>
                    handleSelectChange("projectStart", e.target.value)
                  }
                />
              </div>
              {/* Phasing */}
              <div className="flex items-center gap-4 border-b border-gray-300 pb-2">
                <span className="text-sm text-gray-400 tracking-widest">
                  PHASING
                </span>
                <SelectBox
                  options={[
                    "Single Phase",
                    "2 Phases",
                    "3 Phases",
                    "4+ Phases",
                  ]}
                  value={formData.phasing}
                  onChange={(e) =>
                    handleSelectChange("phasing", e.target.value)
                  }
                />
              </div>
              {/* Milestones Dates */}
              <div className="border-b border-gray-300 pb-2">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-400 tracking-widest">
                    MILESTONES DATES
                  </span>
                  <span className="text-sm text-gray-400">
                    Note: Completion dates for any specific scope or phase of
                    the project
                  </span>
                </div>
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex items-center gap-2 mt-2">
                    <SelectBox options={["Scope 1", "Scope 2", "Scope 3"]} />
                    <input
                      type="date"
                      className="appearance-none bg-[#d6d3ce] text-sm px-2 py-1 rounded-none border-none focus:outline-none"
                    />
                  </div>
                ))}
              </div>
              {/* Schedule Meeting */}
              <div className="flex items-center gap-4 border-b border-gray-300 pb-2 mt-2">
                <span className="text-sm text-gray-400 tracking-widest">
                  SCHEDULE MEETING
                </span>
                <Checkbox
                  label="ONLINE"
                  checked={formData.schMeeting["ONLINE"]}
                  onChange={() => handleCheckboxChange("schMeeting", "ONLINE")}
                />
                <Checkbox
                  label="IN PERSON"
                  checked={formData.schMeeting["IN PERSON"]}
                  onChange={() =>
                    handleCheckboxChange("schMeeting", "IN PERSON")
                  }
                />
              </div>
              {/* Meeting Schedule */}
              <div className="flex flex-col gap-2 border-b border-gray-300 pb-2 mt-2">
                <span className="text-sm text-gray-400 tracking-widest">
                  MEETING SCHEDULE
                </span>
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <input
                      type="date"
                      className="appearance-none bg-[#d6d3ce] text-sm px-2 py-1 rounded-none border-none focus:outline-none flex-1"
                      placeholder="Proposed Date"
                    />
                    <input
                      type="time"
                      className="appearance-none bg-[#d6d3ce] text-sm px-2 py-1 rounded-none border-none focus:outline-none flex-1"
                      placeholder="Proposed Time"
                    />
                  </div>
                ))}
              </div>
              {/* Proposal Submission */}
              <div className="flex items-center gap-2 border-b border-gray-300 pb-2 mt-2">
                <span className="text-sm text-gray-400 tracking-widest">
                  PROPOSAL SUBMISSION
                </span>
                <input
                  type="date"
                  className="appearance-none bg-[#d6d3ce] text-sm px-2 py-1 rounded-none border-none focus:outline-none min-w-[120px]"
                />
                <input
                  type="time"
                  className="appearance-none bg-[#d6d3ce] text-sm px-2 py-1 rounded-none border-none focus:outline-none min-w-[100px]"
                />
              </div>
            </div>
            {/* Right: SOW, Nominations, etc. */}
            <div className="flex flex-col gap-4">
              {/* SOW (Scope of Works) */}
              <div className="border-b border-gray-300 pb-2">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-sm text-gray-400 tracking-widest">
                    SOW (SCOPE OF WORKS)
                  </span>
                  <Checkbox
                    label="DESIGN"
                    checked={formData.sowType["DESIGN"]}
                    onChange={() => handleCheckboxChange("sowType", "DESIGN")}
                  />
                  <Checkbox
                    label="BUILD (FIT-OUT)"
                    checked={formData.sowType["BUILD (FIT-OUT)"]}
                    onChange={() =>
                      handleCheckboxChange("sowType", "BUILD (FIT-OUT)")
                    }
                  />
                  <Checkbox
                    label="EXCEPTIONS TO BUILD"
                    checked={formData.sowType["EXCEPTIONS TO BUILD"]}
                    onChange={() =>
                      handleCheckboxChange("sowType", "EXCEPTIONS TO BUILD")
                    }
                  />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {[
                    "PRE-CONCEPT",
                    "CONCEPT DESIGN",
                    "SCHEMATIC DESIGN",
                    "DETAIL DESIGN",
                    "IFC",
                    "AS-BUILD",
                    "SOFT REFURBISHMENT",
                    "FULL REFURBISHMENT",
                    "PARTIAL REFURBISHMENT",
                    "AUTHORITY APPROVALS",
                    "FF&E",
                    "DEMOLITION WORKS",
                    "JOINING UNITS",
                    "IT",
                    "AV",
                    "SECURITY",
                    "FLS",
                    "MEP",
                    "CIVIL WORKS",
                    "LIGHTING",
                    "JOINERY",
                    "OTHER_1",
                    "OTHER_2",
                    "OTHER_3",
                    "OTHER_4",
                  ].map((label, i) => (
                    <Checkbox
                      key={i}
                      label={label.startsWith("OTHER") ? "OTHER" : label}
                      checked={formData.sowType[label]}
                      onChange={() => handleCheckboxChange("sowType", label)}
                    />
                  ))}
                </div>
                {/* Sub-consultants */}
                <div className="mt-2">
                  <span className="text-sm text-gray-400 tracking-widest">
                    SUB-CONSULTANTS
                  </span>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-1">
                    {[
                      "ACOUSTIC",
                      "FLS",
                      "LANDSCAPING",
                      "STRUCTURAL",
                      "LEED/WELL",
                      "OTHER_SUB_1",
                      "OTHER_SUB_2",
                      "OTHER_SUB_3",
                      "OTHER_SUB_4",
                    ].map((label, i) => (
                      <Checkbox
                        key={i}
                        label={label.startsWith("OTHER") ? "OTHER" : label}
                        checked={formData.sowType[label]}
                        onChange={() => handleCheckboxChange("sowType", label)}
                      />
                    ))}
                  </div>
                </div>
              </div>
              {/* Nominations */}
              <div className="flex items-center gap-4 border-b border-gray-300 pb-2 mt-2">
                <span className="text-sm text-gray-400 tracking-widest">
                  NOMINATIONS
                </span>
                <Checkbox
                  label="DESIGN"
                  checked={formData.nominations["DESIGN"]}
                  onChange={() => handleCheckboxChange("nominations", "DESIGN")}
                />
                <Checkbox
                  label="BUILD"
                  checked={formData.nominations["BUILD"]}
                  onChange={() => handleCheckboxChange("nominations", "BUILD")}
                />
              </div>
              <div className="text-sm text-gray-500 mt-2">
                <b>Note:</b> Nominated vendors are suppliers, contractors, or
                service providers introduced by the Client or by third parties
                such as the Landlord, Consultant, or Authorities, who are
                required to be considered or appointed for the project.
                <br />
                The Contractor will coordinate and integrate nominated vendors
                into the project where applicable; however, responsibility for
                their selection and performance remains with the nominating
                party.
              </div>
            </div>
          </div>
        </div>
        {/* Send Button */}
        <div className="col-span-1 md:col-span-2 flex flex-col items-center mt-8">
          {submitMessage && (
            <div
              className={`mb-4 text-sm font-medium ${
                submitMessage.startsWith("✓")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {submitMessage}
            </div>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-[#d6d3ce] text-black px-16 py-2 text-base font-medium tracking-widest ${
              isSubmitting
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-[#bdb8b2]"
            }`}
            style={{ letterSpacing: "0.1em" }}
          >
            {isSubmitting ? "SENDING..." : "SEND"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default RFP;
