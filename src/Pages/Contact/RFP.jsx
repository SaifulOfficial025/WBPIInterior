import React, { useState } from "react";
import { FaPaperclip } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { submitRFP } from "../../ContextAPI/Contact";

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

function Radio({ label, checked, onChange }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer select-none">
      <span
        className={`inline-block w-4 h-4 border rounded-full mr-1 flex-shrink-0 flex items-center justify-center`}
        style={{
          background: checked ? checkedGray : gray,
          borderColor: checked ? checkedGray : "#d1d5db",
        }}
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

function SelectBox({
  options,
  value,
  onChange,
  className,
  placeholder = "Select...",
}) {
  return (
    <div className={`inline-block relative ${className || ""}`}>
      <select
        value={value || ""}
        onChange={onChange}
        className="appearance-none bg-[#d6d3ce] text-sm px-2 py-1 pr-6 rounded-none border-none focus:outline-none min-w-[90px] w-full"
      >
        <option value="">{placeholder}</option>
        {options.map((opt, i) => (
          <option key={i} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-500">
        ▼
      </span>
    </div>
  );
}

function RFP({ onSuccess, onCancel, contactId }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    projectType: "",
    serviceType: {},
    designLevel: {},
    spaceCond: "",
    designStyle: "",
    projectStartDate: "",
    projectEndDate: "",
    phasing: "",
    schMeeting: "",
    sowType: {},
    nominations: {},
    companyName: "",
    projectName: "",
    projectArea: "",
    projectLocation: "",
  });

  const [attachments, setattachments] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleFileChange = (e, setterFn) => {
    const files = Array.from(e.target.files);
    setterFn(files);
  };

  // Convert file to base64
  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = () => {
        const bytes = new Uint8Array(reader.result);
        let binary = "";
        for (let i = 0; i < bytes.byteLength; i++) {
          binary += String.fromCharCode(bytes[i]);
        }
        const base64 = btoa(binary);
        resolve(base64);
      };
      reader.onerror = reject;
    });
  };

  // Convert attachments to the required format
  const prepareAttachments = async () => {
    const attachmentArray = [];
    for (const file of attachments) {
      try {
        const base64Content = await fileToBase64(file);
        const mimeType = file.type || "application/octet-stream";
        const attachmentJson = {
          name: file.name,
          content: base64Content,
          type: mimeType,
        };
        attachmentArray.push(btoa(JSON.stringify(attachmentJson)));
      } catch (error) {
        console.error(`Error processing file ${file.name}:`, error);
      }
    }
    return attachmentArray;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    if (!contactId) {
      setSubmitMessage(
        "✗ Contact ID not found. Please go back and fill contact details."
      );
      setIsSubmitting(false);
      return;
    }

    try {
      // Prepare attachments in the required format
      const encodedAttachments = await prepareAttachments();

      // Prepare RFP payload
      const rfpPayload = {
        project_type: formData.projectType,
        service_type: formData.serviceType,
        design_level: formData.designLevel,
        space_condition: formData.spaceCond,
        design_style: formData.designStyle,
        project_start_date: formData.projectStartDate,
        project_end_date: formData.projectEndDate,
        phasing: formData.phasing,
        scheduled_meeting: formData.schMeeting,
        scope_of_works: formData.sowType,
        nominations: formData.nominations,
        company_name: formData.companyName,
        project_name: formData.projectName,
        project_area: formData.projectArea,
        project_location: formData.projectLocation,
        attachments: encodedAttachments,
      };

      const result = await submitRFP(contactId, rfpPayload);

      setSubmitMessage("✓ RFP form submitted successfully!");
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          message: "",
          projectType: "",
          serviceType: {},
          designLevel: {},
          spaceCond: "",
          designStyle: "",
          projectStartDate: "",
          projectEndDate: "",
          phasing: "",
          schMeeting: "",
          sowType: {},
          nominations: {},
          companyName: "",
          projectName: "",
          projectArea: "",
          projectLocation: "",
        });
        setattachments([]);
        setSubmitMessage("");

        // Call onSuccess callback if provided
        if (onSuccess) {
          onSuccess();
        }
      }, 2000);
    } catch (error) {
      setSubmitMessage(
        "✗ " +
          (error?.message || "Failed to submit RFP form. Please try again.")
      );
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

  const handleRadioChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // SOW parent-child mapping with unique keys
  const sowParentChildMap = {
    DESIGN: [
      { key: "DESIGN_PRE-CONCEPT", label: "PRE-CONCEPT" },
      { key: "DESIGN_CONCEPT DESIGN", label: "CONCEPT DESIGN" },
      { key: "DESIGN_SCHEMATIC DESIGN", label: "SCHEMATIC DESIGN" },
      { key: "DESIGN_DETAIL DESIGN", label: "DETAIL DESIGN" },
      { key: "DESIGN_IFC", label: "IFC" },
      { key: "DESIGN_AS-BUILD", label: "AS-BUILD" },
    ],
    "BUILD (FIT-OUT)": [
      { key: "BUILD_SOFT REFURBISHMENT", label: "SOFT REFURBISHMENT" },
      { key: "BUILD_FULL REFURBISHMENT", label: "FULL REFURBISHMENT" },
      { key: "BUILD_PARTIAL REFURBISHMENT", label: "PARTIAL REFURBISHMENT" },
      { key: "BUILD_AUTHORITY APPROVALS", label: "AUTHORITY APPROVALS" },
      { key: "BUILD_FF&E", label: "FF&E" },
      { key: "BUILD_DEMOLITION WORKS", label: "DEMOLITION WORKS" },
      { key: "BUILD_JOINING UNITS", label: "JOINING UNITS" },
    ],
    "EXCEPTIONS TO BUILD": [
      { key: "EXCEPTIONS_AUTHORITY APPROVALS", label: "AUTHORITY APPROVALS" },
      { key: "EXCEPTIONS_FF&E", label: "FF&E" },
      { key: "EXCEPTIONS_IT", label: "IT" },
      { key: "EXCEPTIONS_AV", label: "AV" },
      { key: "EXCEPTIONS_SECURITY", label: "SECURITY" },
      { key: "EXCEPTIONS_FLS", label: "FLS" },
      { key: "EXCEPTIONS_MEP", label: "MEP" },
      { key: "EXCEPTIONS_CIVIL WORKS", label: "CIVIL WORKS" },
      { key: "EXCEPTIONS_LIGHTING", label: "LIGHTING" },
      { key: "EXCEPTIONS_JOINERY", label: "JOINERY" },
    ],
  };

  // Get parent for a child option
  const getParentForChild = (childKey) => {
    for (const [parent, children] of Object.entries(sowParentChildMap)) {
      if (children.some((child) => child.key === childKey)) {
        return parent;
      }
    }
    return null;
  };

  // Handle SOW checkbox change with auto-check parent
  const handleSowCheckboxChange = (key) => {
    setFormData((prev) => {
      const newSowType = {
        ...prev.sowType,
        [key]: !prev.sowType[key],
      };

      // If checking a child option, also check the parent
      const parent = getParentForChild(key);
      if (parent && !prev.sowType[key]) {
        // Only auto-check parent when checking (not unchecking) a child
        newSowType[parent] = true;
      }

      return {
        ...prev,
        sowType: newSowType,
      };
    });
  };

  const handleSelectChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="w-full bg-white text-gray-700 p-6 md:p-10 lg:p-12">
      <div className="text-3xl md:text-4xl font-semibold mb-8 text-gray-800">
        RFP
      </div>
      <form
        className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6"
        onSubmit={handleSubmit}
      >
        {/* Left Column */}
        <div className="flex flex-col gap-5">
          {/* Name, Email, Message */}
          <div>
            <label className="text-xs font-medium text-gray-400 tracking-widest uppercase mb-1 block">
              NAME
            </label>
            <input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="block w-full border-0 border-b border-gray-300 focus:border-gray-500 focus:ring-0 text-sm py-2.5 bg-transparent transition-colors"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-gray-400 tracking-widest uppercase mb-1 block">
              EMAIL
            </label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className="block w-full border-0 border-b border-gray-300 focus:border-gray-500 focus:ring-0 text-sm py-2.5 bg-transparent transition-colors"
              placeholder="Enter your email address"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-gray-400 tracking-widest uppercase mb-1 block">
              MESSAGE
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="block w-full border-0 border-b border-gray-300 focus:border-gray-500 focus:ring-0 text-sm py-2.5 bg-transparent min-h-[60px] resize-none transition-colors"
              placeholder="Enter your message or additional details"
            />
          </div>
          {/* Attachments */}
          <div className="mt-4 p-4 bg-gray-50 rounded-sm">
            <div className="text-xs font-medium text-gray-400 tracking-widest uppercase mb-2">
              ATTACHMENTS
            </div>
            <div className="text-xs text-gray-500 leading-relaxed">
              <span className="font-semibold text-gray-600">
                Note: Upload all relevant documents to help us prepare an
                accurate quotation, such as:
              </span>
              <p className="mt-1">
                Project requirements, as-built drawings, BOQ (if available),
                proposed design, mood direction, reference images, preferred
                materials and equipment lists, branding guidelines, organization
                matrix, corporate standards, building LOD guidelines, building
                fit-out manual and any documentation issued by the building
                management or authorities.
              </p>
            </div>
            {/* File Upload */}
            <div className="mt-3">
              <label className="inline-flex items-center gap-2 cursor-pointer bg-[#d6d3ce] hover:bg-[#bdb8b2] px-4 py-2 rounded-sm transition-colors">
                <FaPaperclip className="text-gray-600" />
                <span className="text-sm text-gray-700">Choose Files</span>
                <input
                  type="file"
                  multiple
                  onChange={(e) => {
                    const newFiles = Array.from(e.target.files);
                    setattachments((prev) => [...prev, ...newFiles]);
                    e.target.value = "";
                  }}
                  className="hidden"
                />
              </label>
            </div>
            {/* File List */}
            {attachments.length > 0 && (
              <div className="mt-3 space-y-2">
                {attachments.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-white px-3 py-2 rounded-sm border border-gray-200"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <FaPaperclip className="text-gray-400 flex-shrink-0 text-xs" />
                      <span className="text-sm text-gray-600 truncate">
                        {file.name}
                      </span>
                      <span className="text-xs text-gray-400 flex-shrink-0">
                        ({(file.size / 1024).toFixed(1)} KB)
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        setattachments((prev) =>
                          prev.filter((_, i) => i !== index)
                        )
                      }
                      className="ml-2 text-gray-400 hover:text-red-500 transition-colors flex-shrink-0"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* Right Column */}
        <div className="flex flex-col gap-5">
          {/* Project Type */}
          <div className="border-b border-gray-200 pb-4">
            <span className="text-xs font-medium text-gray-400 tracking-widest uppercase block mb-3">
              PROJECT TYPE
            </span>
            <div className="max-w-xs">
              <SelectBox
                options={[
                  "COMMERCIAL",
                  "RESIDENTIAL",
                  "HOSPITALITY",
                  "MIXED USE",
                ]}
                value={formData.projectType}
                onChange={(e) =>
                  handleSelectChange("projectType", e.target.value)
                }
                placeholder="Select project type"
                className="w-full"
              />
            </div>
          </div>
          {/* Service Type */}
          <div className="border-b border-gray-200 pb-4">
            <span className="text-xs font-medium text-gray-400 tracking-widest uppercase block mb-3">
              SERVICE TYPE
            </span>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
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
          <div className="border-b border-gray-200 pb-4">
            <span className="text-xs font-medium text-gray-400 tracking-widest uppercase block mb-3">
              AVAILABLE DESIGN LEVEL (LOD)
            </span>
            <SelectBox
              options={["PROPOSED", "AS-BUILTS", "AS-BUILDS"]}
              value={formData.designLevel}
              onChange={(e) =>
                handleSelectChange("designLevel", e.target.value)
              }
            />
          </div>
        </div>
        {/* Full width section below columns */}
        <div className="col-span-1 lg:col-span-2 mt-6 pt-6 border-t border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6">
            {/* Left: Company, Project, Location, etc. */}
            <div className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-medium text-gray-400 tracking-widest uppercase mb-1 block">
                    COMPANY NAME
                  </label>
                  <input
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="block w-full border-0 border-b border-gray-300 focus:border-gray-500 focus:ring-0 text-sm py-2.5 bg-transparent transition-colors"
                    placeholder="Enter company name"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-400 tracking-widest uppercase mb-1 block">
                    PROJECT NAME
                  </label>
                  <input
                    name="projectName"
                    value={formData.projectName}
                    onChange={handleInputChange}
                    className="block w-full border-0 border-b border-gray-300 focus:border-gray-500 focus:ring-0 text-sm py-2.5 bg-transparent transition-colors"
                    placeholder="Enter project name"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-medium text-gray-400 tracking-widest uppercase mb-1 block">
                    PROJECT AREA
                  </label>
                  <input
                    name="projectArea"
                    value={formData.projectArea}
                    onChange={handleInputChange}
                    className="block w-full border-0 border-b border-gray-300 focus:border-gray-500 focus:ring-0 text-sm py-2.5 bg-transparent transition-colors"
                    placeholder="e.g., 5000 sqft"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-400 tracking-widest uppercase mb-1 block">
                    PROJECT LOCATION
                  </label>
                  <input
                    name="projectLocation"
                    value={formData.projectLocation}
                    onChange={handleInputChange}
                    className="block w-full border-0 border-b border-gray-300 focus:border-gray-500 focus:ring-0 text-sm py-2.5 bg-transparent transition-colors"
                    placeholder="Enter location"
                  />
                </div>
              </div>
              {/* Space Condition */}
              <div className="border-b border-gray-200 pb-4">
                <span className="text-xs font-medium text-gray-400 tracking-widest uppercase block mb-3">
                  SPACE CONDITION
                </span>
                <SelectBox
                  options={[
                    "SHELL & CORE",
                    "CAT A",
                    "FITTED",
                    "IN CONSTRUCTION",
                  ]}
                  value={formData.spaceCond}
                  onChange={(e) =>
                    handleSelectChange("spaceCond", e.target.value)
                  }
                />
              </div>
              {/* Design Style */}
              <div className="border-b border-gray-200 pb-4">
                <span className="text-xs font-medium text-gray-400 tracking-widest uppercase block mb-3">
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
              <div className="border-b border-gray-200 pb-4">
                <span className="text-xs font-medium text-gray-400 tracking-widest uppercase block mb-3">
                  PROJECT START/END
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs text-gray-500">
                      Estimated Start
                    </label>
                    <input
                      type="date"
                      name="projectStartDate"
                      value={formData.projectStartDate || ""}
                      onChange={handleInputChange}
                      className="appearance-none bg-[#d6d3ce] text-sm px-3 py-2 rounded-sm border-none focus:outline-none focus:ring-1 focus:ring-gray-400"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs text-gray-500">
                      Estimated End
                    </label>
                    <input
                      type="date"
                      name="projectEndDate"
                      value={formData.projectEndDate || ""}
                      onChange={handleInputChange}
                      className="appearance-none bg-[#d6d3ce] text-sm px-3 py-2 rounded-sm border-none focus:outline-none focus:ring-1 focus:ring-gray-400"
                    />
                  </div>
                </div>
              </div>
              {/* Phasing */}
              <div className="border-b border-gray-200 pb-4">
                <span className="text-xs font-medium text-gray-400 tracking-widest uppercase block mb-3">
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
              <div className="border-b border-gray-200 pb-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-gray-400 tracking-widest uppercase">
                    MILESTONES DATES
                  </span>
                  <span className="text-xs text-gray-400 italic">
                    (Completion dates for any specific scope or phase)
                  </span>
                </div>
                <div className="space-y-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <SelectBox
                        options={["Scope 1", "Scope 2", "Scope 3"]}
                        className="flex-1"
                      />
                      <input
                        type="date"
                        className="appearance-none bg-[#d6d3ce] text-sm px-3 py-2 rounded-sm border-none focus:outline-none focus:ring-1 focus:ring-gray-400 flex-1"
                      />
                    </div>
                  ))}
                </div>
              </div>
              {/* Schedule Meeting */}
              <div className="border-b border-gray-200 pb-4">
                <span className="text-xs font-medium text-gray-400 tracking-widest uppercase block mb-3">
                  SCHEDULE MEETING
                </span>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                  <Radio
                    label="ONLINE"
                    checked={formData.schMeeting === "ONLINE"}
                    onChange={() => handleRadioChange("schMeeting", "ONLINE")}
                  />
                  <Radio
                    label="IN PERSON"
                    checked={formData.schMeeting === "IN PERSON"}
                    onChange={() =>
                      handleRadioChange("schMeeting", "IN PERSON")
                    }
                  />
                </div>
              </div>
              {/* Meeting Schedule */}
              <div className="border-b border-gray-200 pb-4">
                <span className="text-xs font-medium text-gray-400 tracking-widest uppercase block mb-3">
                  MEETING SCHEDULE
                </span>
                <div className="space-y-2">
                  {[...Array(2)].map((_, i) => (
                    <div key={i} className="grid grid-cols-2 gap-3">
                      <input
                        type="date"
                        className="appearance-none bg-[#d6d3ce] text-sm px-3 py-2 rounded-sm border-none focus:outline-none focus:ring-1 focus:ring-gray-400"
                        placeholder="Proposed Date"
                      />
                      <input
                        type="time"
                        className="appearance-none bg-[#d6d3ce] text-sm px-3 py-2 rounded-sm border-none focus:outline-none focus:ring-1 focus:ring-gray-400"
                        placeholder="Proposed Time"
                      />
                    </div>
                  ))}
                </div>
              </div>
              {/* Proposal Submission */}
              <div className="border-b border-gray-200 pb-4">
                <span className="text-xs font-medium text-gray-400 tracking-widest uppercase block mb-3">
                  PROPOSAL SUBMISSION
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="date"
                    className="appearance-none bg-[#d6d3ce] text-sm px-3 py-2 rounded-sm border-none focus:outline-none focus:ring-1 focus:ring-gray-400"
                  />
                  <input
                    type="time"
                    className="appearance-none bg-[#d6d3ce] text-sm px-3 py-2 rounded-sm border-none focus:outline-none focus:ring-1 focus:ring-gray-400"
                  />
                </div>
              </div>
            </div>
            {/* Right: SOW, Nominations, etc. */}
            <div className="flex flex-col gap-5">
              {/* SOW (Scope of Works) */}
              <div className="border-b border-gray-200 pb-4">
                <span className="text-xs font-medium text-gray-400 tracking-widest uppercase block mb-4">
                  SOW (SCOPE OF WORKS)
                </span>

                {/* DESIGN Section */}
                <div className="mb-4">
                  <span className="text-xs font-medium text-gray-400 tracking-widest uppercase block mb-3">
                    DESIGN
                  </span>
                  <div className="ml-6 mt-2 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2">
                    {sowParentChildMap["DESIGN"].map((item, i) => (
                      <Checkbox
                        key={item.key}
                        label={item.label}
                        checked={formData.sowType[item.key]}
                        onChange={() => handleSowCheckboxChange(item.key)}
                      />
                    ))}
                  </div>
                </div>

                {/* BUILD (FIT-OUT) Section */}
                <div className="mb-4 pt-3 border-t border-gray-100">
                  <span className="text-xs font-medium text-gray-400 tracking-widest uppercase block mb-3">
                    BUILD (FIT-OUT)
                  </span>
                  <div className="ml-6 mt-2 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2">
                    {sowParentChildMap["BUILD (FIT-OUT)"].map((item, i) => (
                      <Checkbox
                        key={item.key}
                        label={item.label}
                        checked={formData.sowType[item.key]}
                        onChange={() => handleSowCheckboxChange(item.key)}
                      />
                    ))}
                  </div>
                </div>

                {/* EXCEPTIONS TO BUILD Section */}
                <div className="mb-4 pt-3 border-t border-gray-100">
                  <span className="text-xs font-medium text-gray-400 tracking-widest uppercase block mb-3">
                    EXCEPTIONS TO BUILD
                  </span>
                  <div className="ml-6 mt-2 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2">
                    {sowParentChildMap["EXCEPTIONS TO BUILD"].map((item, i) => (
                      <Checkbox
                        key={item.key}
                        label={item.label}
                        checked={formData.sowType[item.key]}
                        onChange={() => handleSowCheckboxChange(item.key)}
                      />
                    ))}
                    <div className="col-span-2 sm:col-span-3 grid grid-cols-3 gap-x-4 gap-y-2">
                      {[
                        "OTHER_1",
                        "OTHER_2",
                        "OTHER_3",
                        "OTHER_4",
                        "OTHER_5",
                        "OTHER_6",
                      ].map((key, i) => (
                        <SelectBox
                          key={key}
                          placeholder="OTHER"
                          options={[
                            "Signage",
                            "Branding",
                            "Furniture Assembly",
                            "Cleaning",
                            "Landscaping",
                          ]}
                          value={formData.sowType[key] || ""}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              sowType: {
                                ...prev.sowType,
                                [key]: e.target.value,
                              },
                            }))
                          }
                          className="w-full"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* SUB-CONSULTANTS Section */}
                <div className="pt-3 border-t border-gray-100">
                  <span className="text-xs font-medium text-gray-400 tracking-widest uppercase block mb-3">
                    SUB-CONSULTANTS
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2">
                    {[
                      { key: "SUB_ACOUSTIC", label: "ACOUSTIC" },
                      { key: "SUB_FLS", label: "FLS" },
                      { key: "SUB_LANDSCAPING", label: "LANDSCAPING" },
                      { key: "SUB_STRUCTURAL", label: "STRUCTURAL" },
                      { key: "SUB_LEED/WELL", label: "LEED/WELL" },
                    ].map((item, i) => (
                      <Checkbox
                        key={item.key}
                        label={item.label}
                        checked={formData.sowType[item.key]}
                        onChange={() =>
                          handleCheckboxChange("sowType", item.key)
                        }
                      />
                    ))}
                    {[
                      "OTHER_SUB_1",
                      "OTHER_SUB_2",
                      "OTHER_SUB_3",
                      "OTHER_SUB_4",
                    ].map((key) => (
                      <SelectBox
                        key={key}
                        placeholder="OTHER"
                        options={[
                          "MEP Consultant",
                          "Lighting Designer",
                          "AV Specialist",
                          "Kitchen Consultant",
                          "Wayfinding",
                        ]}
                        value={formData.sowType[key] || ""}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            sowType: { ...prev.sowType, [key]: e.target.value },
                          }))
                        }
                        className="w-full"
                      />
                    ))}
                  </div>
                </div>
              </div>
              {/* Nominations */}
              <div className="border-b border-gray-200 pb-4">
                <span className="text-xs font-medium text-gray-400 tracking-widest uppercase block mb-3">
                  NOMINATIONS
                </span>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                  <Checkbox
                    label="DESIGN"
                    checked={formData.nominations["DESIGN"]}
                    onChange={() =>
                      handleCheckboxChange("nominations", "DESIGN")
                    }
                  />
                  <Checkbox
                    label="BUILD"
                    checked={formData.nominations["BUILD"]}
                    onChange={() =>
                      handleCheckboxChange("nominations", "BUILD")
                    }
                  />
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-sm">
                <p className="text-xs text-gray-500 leading-relaxed">
                  <span className="font-semibold text-gray-600">Note:</span>{" "}
                  Nominated vendors are suppliers, contractors, or service
                  providers introduced by the Client or by third parties such as
                  the Landlord, Consultant, or Authorities, who are required to
                  be considered or appointed for the project.
                </p>
                <p className="text-xs text-gray-500 leading-relaxed mt-2">
                  The Contractor will coordinate and integrate nominated vendors
                  into the project where applicable; however, responsibility for
                  their selection and performance remains with the nominating
                  party.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Send Button */}
        <div className="col-span-1 lg:col-span-2 flex flex-col items-center mt-10 pt-8 border-t border-gray-200">
          {submitMessage && (
            <div
              className={`mb-4 text-sm font-medium px-4 py-2 rounded ${
                submitMessage.startsWith("✓")
                  ? "text-green-700 bg-green-50"
                  : "text-red-700 bg-red-50"
              }`}
            >
              {submitMessage}
            </div>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-[#d6d3ce] text-black px-20 py-3 text-sm font-semibold tracking-widest uppercase transition-all ${
              isSubmitting
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-[#bdb8b2] hover:shadow-md"
            }`}
          >
            {isSubmitting ? "SENDING..." : "SEND"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default RFP;
