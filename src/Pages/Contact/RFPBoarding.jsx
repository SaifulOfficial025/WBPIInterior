import React, { useState } from "react";
import RFP from "./RFP";
import { createContact, updateContact } from "../../ContextAPI/Contact";

function RFPBoarding({ onClose }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [showRFPForm, setShowRFPForm] = useState(false);
  const [contactId, setContactId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [formData, setFormData] = useState({
    projectType: "",
    serviceType: "",
    areaUnit: "ft2",
    areaRange: "",
    customArea: "",
    budgetRange: "",
    customBudget: "",
    message: "",
    attachments: [],
    name: "",
    companyName: "",
    mobile: "",
    email: "",
    meetingType: "",
    proposedDates: ["", ""],
    heardFrom: "",
    heardFromOther: "",
  });

  // Save form data to localStorage
  const saveToLocalStorage = () => {
    localStorage.setItem("rfpFormData", JSON.stringify(formData));
  };

  // Load form data from localStorage
  const loadFromLocalStorage = () => {
    const saved = localStorage.getItem("rfpFormData");
    if (saved) {
      setFormData(JSON.parse(saved));
    }
  };

  // Prepare payload for contact APIs
  const prepareContactPayload = (encodedAttachments = []) => {
    return {
      project_type: formData.projectType,
      type_of_service: formData.serviceType,
      area_range_unit: formData.areaUnit,
      area_range_value: formData.customArea || formData.areaRange,
      budget_range: formData.customBudget || formData.budgetRange,
      name: formData.name,
      company_name: formData.companyName,
      mobile_number: formData.mobile,
      email: formData.email,
      meeting_type: formData.meetingType,
      meeting_date_1: formData.proposedDates[0],
      meeting_date_2: formData.proposedDates[1],
      project_message: formData.message,
      heard_about:
        formData.heardFrom === "Other"
          ? formData.heardFromOther
          : formData.heardFrom,
      is_completed: false,
      project_attachments:
        encodedAttachments.length > 0
          ? encodedAttachments
          : formData.attachments.map((f) => f.name) || [],
    };
  };

  const handleNext = () => {
    saveToLocalStorage();
    setCurrentPage((prev) => prev + 1);
  };

  const handleSkip = () => {
    saveToLocalStorage();
    setCurrentPage((prev) => prev + 1);
  };

  const handleBack = () => {
    saveToLocalStorage();
    setCurrentPage((prev) => prev - 1);
  };

  const handleContactDetailsSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError("");
    try {
      saveToLocalStorage();

      // Prepare encoded attachments
      const encodedAttachments = await prepareAttachments();

      const payload = prepareContactPayload(encodedAttachments);
      const response = await createContact(payload);

      if (response.data?.id) {
        setContactId(response.data.id);
        localStorage.setItem("contactId", response.data.id.toString());
        setCurrentPage(6); // Move to project details
      }
    } catch (error) {
      setSubmitError(error?.message || "Failed to submit contact details");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError("");
    try {
      const id = contactId || localStorage.getItem("contactId");
      if (!id) {
        throw new Error("Contact ID not found");
      }

      // Prepare encoded attachments
      const encodedAttachments = await prepareAttachments();

      const payload = {
        project_type: formData.projectType,
        type_of_service: formData.serviceType,
        area_range_unit: formData.areaUnit,
        area_range_value: formData.customArea || formData.areaRange,
        budget_range: formData.customBudget || formData.budgetRange,
        name: formData.name,
        company_name: formData.companyName,
        mobile_number: formData.mobile,
        email: formData.email,
        meeting_type: formData.meetingType,
        meeting_date_1: formData.proposedDates[0],
        meeting_date_2: formData.proposedDates[1],
        project_message: formData.message,
        heard_about:
          formData.heardFrom === "Other"
            ? formData.heardFromOther
            : formData.heardFrom,
        is_completed: true,
        project_attachments: encodedAttachments,
      };

      await updateContact(id, payload);
      setCurrentPage(8); // Show thank you message

      // Clear localStorage
      localStorage.removeItem("rfpFormData");
      localStorage.removeItem("contactId");
    } catch (error) {
      setSubmitError(error?.message || "Failed to submit form");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileAttachment = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, attachments: files });
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
    for (const file of formData.attachments) {
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

  // Page 1: Welcome
  if (currentPage === 1) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="max-w-5xl w-full text-center">
          <h1 className="text-4xl md:text-5xl font-light text-black mb-8 leading-tight">
            Get a quote today and let's create something exceptional.
          </h1>
          <button
            onClick={handleNext}
            className="px-12 py-4 bg-black text-white text-lg font-medium hover:bg-[#bdb8b2] hover:text-black transition-colors"
          >
            Start
          </button>
        </div>
      </div>
    );
  }

  // Page 2: Project Type and Service Type
  if (currentPage === 2) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="max-w-5xl w-full">
          <button
            onClick={handleBack}
            className="mb-6 px-6 py-2 border-2 border-[#bdb8b2] text-black hover:border-black transition-colors"
          >
            ← Back
          </button>
          <h2 className="text-3xl font-light text-black mb-8">
            Select project type:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {["Commercial", "Residential", "Hospitality", "Mixed Use"].map(
              (type) => (
                <button
                  key={type}
                  onClick={() =>
                    setFormData({ ...formData, projectType: type })
                  }
                  className={`p-6 border-2 text-lg font-medium transition-colors ${
                    formData.projectType === type
                      ? "border-black bg-black text-white"
                      : "border-[#bdb8b2] bg-white text-black hover:border-black"
                  }`}
                >
                  {type}
                </button>
              )
            )}
          </div>

          <h2 className="text-3xl font-light text-black mb-8">
            Select type of the service:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {["Design", "Design & Fit-Out", "Fit-Out"].map((service) => (
              <button
                key={service}
                onClick={() =>
                  setFormData({ ...formData, serviceType: service })
                }
                className={`p-6 border-2 text-lg font-medium transition-colors ${
                  formData.serviceType === service
                    ? "border-black bg-black text-white"
                    : "border-[#bdb8b2] bg-white text-black hover:border-black"
                }`}
              >
                {service}
              </button>
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={!formData.projectType || !formData.serviceType}
            className="w-full md:w-auto px-12 py-4 bg-black text-white text-lg font-medium hover:bg-[#bdb8b2] hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Ok
          </button>
        </div>
      </div>
    );
  }

  // Page 3: Area Range
  if (currentPage === 3) {
    const ft2Options = [
      "0-1,000",
      "1,000-5,000",
      "5,000-10,000",
      "10,000-30,000",
    ];
    const m2Options = ["0-100", "101-500", "501-1,000", "1,001-3,000"];
    const options = formData.areaUnit === "ft2" ? ft2Options : m2Options;

    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="max-w-5xl w-full">
          <button
            onClick={handleBack}
            className="mb-6 px-6 py-2 border-2 border-[#bdb8b2] text-black hover:border-black transition-colors"
          >
            ← Back
          </button>
          <h2 className="text-3xl font-light text-black mb-8">
            Enter area range in m² or ft²:
          </h2>

          <div className="flex gap-4 mb-8">
            <button
              onClick={() =>
                setFormData({ ...formData, areaUnit: "ft2", areaRange: "" })
              }
              className={`px-8 py-3 border-2 text-lg font-medium transition-colors ${
                formData.areaUnit === "ft2"
                  ? "border-black bg-black text-white"
                  : "border-[#bdb8b2] bg-white text-black hover:border-black"
              }`}
            >
              ft²
            </button>
            <button
              onClick={() =>
                setFormData({ ...formData, areaUnit: "m2", areaRange: "" })
              }
              className={`px-8 py-3 border-2 text-lg font-medium transition-colors ${
                formData.areaUnit === "m2"
                  ? "border-black bg-black text-white"
                  : "border-[#bdb8b2] bg-white text-black hover:border-black"
              }`}
            >
              m²
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {options.map((range) => (
              <button
                key={range}
                onClick={() =>
                  setFormData({ ...formData, areaRange: range, customArea: "" })
                }
                className={`p-6 border-2 text-lg font-medium transition-colors ${
                  formData.areaRange === range
                    ? "border-black bg-black text-white"
                    : "border-[#bdb8b2] bg-white text-black hover:border-black"
                }`}
              >
                {range}
              </button>
            ))}
          </div>

          <div className="mb-8">
            <label className="block text-lg font-medium text-black mb-3">
              Custom:
            </label>
            <input
              type="number"
              placeholder={`Enter exact value in ${formData.areaUnit}`}
              value={formData.customArea}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  customArea: e.target.value,
                  areaRange: "",
                })
              }
              className="w-full p-4 border-2 border-[#bdb8b2] focus:border-black outline-none text-lg"
            />
          </div>

          <button
            onClick={handleNext}
            disabled={!formData.areaRange && !formData.customArea}
            className="w-full md:w-auto px-12 py-4 bg-black text-white text-lg font-medium hover:bg-[#bdb8b2] hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Ok
          </button>
        </div>
      </div>
    );
  }

  // Page 4: Budget Range
  if (currentPage === 4) {
    const budgetOptions = [
      "Below 1,000,000",
      "1,000,001 – 5,000,000",
      "5,000,001 – 10,000,000",
      "10,000,001 – 30,000,000",
      "Other",
      "I'm not sure. We need an estimate.",
    ];

    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="max-w-5xl w-full">
          <button
            onClick={handleBack}
            className="mb-6 px-6 py-2 border-2 border-[#bdb8b2] text-black hover:border-black transition-colors"
          >
            ← Back
          </button>
          <h2 className="text-3xl font-light text-black mb-8">
            Select budget range:
          </h2>

          <div className="grid grid-cols-1 gap-4 mb-8">
            {budgetOptions.map((budget) => (
              <button
                key={budget}
                onClick={() =>
                  setFormData({
                    ...formData,
                    budgetRange: budget,
                    customBudget:
                      budget === "Other" ? formData.customBudget : "",
                  })
                }
                className={`p-6 border-2 text-lg font-medium transition-colors text-left ${
                  formData.budgetRange === budget
                    ? "border-black bg-black text-white"
                    : "border-[#bdb8b2] bg-white text-black hover:border-black"
                }`}
              >
                {budget}
              </button>
            ))}
          </div>

          {formData.budgetRange === "Other" && (
            <div className="mb-8">
              <label className="block text-lg font-medium text-black mb-3">
                Enter amount:
              </label>
              <input
                type="number"
                placeholder="Enter budget amount"
                value={formData.customBudget}
                onChange={(e) =>
                  setFormData({ ...formData, customBudget: e.target.value })
                }
                className="w-full p-4 border-2 border-[#bdb8b2] focus:border-black outline-none text-lg"
              />
            </div>
          )}

          <button
            onClick={handleNext}
            disabled={
              !formData.budgetRange ||
              (formData.budgetRange === "Other" && !formData.customBudget)
            }
            className="w-full md:w-auto px-12 py-4 bg-black text-white text-lg font-medium hover:bg-[#bdb8b2] hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Ok
          </button>
        </div>
      </div>
    );
  }

  // Page 5: Project Details
  if (currentPage === 6) {
    // If RFP Form is open, show it
    if (showRFPForm) {
      return (
        <div className="min-h-screen bg-white p-6">
          <div className="max-w-7xl mx-auto">
            <button
              onClick={() => setShowRFPForm(false)}
              className="mb-4 px-6 py-2 border-2 border-black text-black hover:bg-black hover:text-white transition-colors"
            >
              ← Back to Widget
            </button>
            <RFP
              contactId={contactId || localStorage.getItem("contactId")}
              onSuccess={() => {
                setShowRFPForm(false);
                setCurrentPage(7); // Move to "Where did you hear about us" page
              }}
              onCancel={() => setShowRFPForm(false)}
            />
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="max-w-5xl w-full">
          <button
            onClick={handleBack}
            className="mb-6 px-6 py-2 border-2 border-[#bdb8b2] text-black hover:border-black transition-colors"
          >
            ← Back
          </button>
          <h2 className="text-3xl font-light text-black mb-8">
            Let us know more about your project:
          </h2>

          <div className="mb-8">
            <label className="block text-lg font-medium text-black mb-3">
              Message:
            </label>
            <textarea
              rows={6}
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full p-4 border-2 border-[#bdb8b2] focus:border-black outline-none text-lg resize-none"
            />
          </div>

          <div className="mb-8">
            <label className="block text-lg font-medium text-black mb-3">
              Attach:
            </label>
            <input
              type="file"
              multiple
              onChange={handleFileAttachment}
              className="w-full p-4 border-2 border-[#bdb8b2] focus:border-black outline-none text-lg"
            />
            {formData.attachments.length > 0 && (
              <p className="mt-2 text-sm text-black">
                {formData.attachments.length} file(s) attached
              </p>
            )}
          </div>

          <div className="mb-8 p-6  bg-opacity-20 text-right">
            <p className="text-black mb-4">
              If you can provide more details, please open our detail{" "}
              <button
                onClick={() => setShowRFPForm(true)}
                className="underline font-medium hover:text-[#bdb8b2]"
              >
                RFP Form
              </button>
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleNext}
              disabled={!formData.message && formData.attachments.length === 0}
              className="px-12 py-4 bg-black text-white text-lg font-medium hover:bg-[#bdb8b2] hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Send
            </button>
            <button
              onClick={handleSkip}
              className="px-12 py-4 border-2 border-black text-black text-lg font-medium hover:bg-black hover:text-white transition-colors"
            >
              Skip
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Page 6: Contact Details
  if (currentPage === 5) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="max-w-5xl w-full">
          <button
            onClick={handleBack}
            className="mb-6 px-6 py-2 border-2 border-[#bdb8b2] text-black hover:border-black transition-colors"
          >
            ← Back
          </button>
          <h2 className="text-3xl font-light text-black mb-4">
            Contact details:
          </h2>
          <p className="text-sm text-black mb-8 opacity-75">
            We respect your privacy, your contact details will never be shared,
            and we will contact you only in regards to this proposal.
          </p>

          <div className="space-y-6 mb-8">
            <div>
              <label className="block text-lg font-medium text-black mb-2">
                Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full p-4 border-2 border-[#bdb8b2] focus:border-black outline-none text-lg"
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-black mb-2">
                Company Name
              </label>
              <input
                type="text"
                value={formData.companyName}
                onChange={(e) =>
                  setFormData({ ...formData, companyName: e.target.value })
                }
                className="w-full p-4 border-2 border-[#bdb8b2] focus:border-black outline-none text-lg"
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-black mb-2">
                Mobile Number <span className="text-red-600">*</span>
              </label>
              <input
                type="tel"
                value={formData.mobile}
                onChange={(e) => {
                  const value = e.target.value;
                  // Allow only digits, +, -, (), and spaces
                  const phoneRegex = /^[0-9+\-().\s]*$/;
                  if (phoneRegex.test(value)) {
                    setFormData({ ...formData, mobile: value });
                  }
                }}
                placeholder="e.g., +1 (555) 123-4567"
                className="w-full p-4 border-2 border-[#bdb8b2] focus:border-black outline-none text-lg"
              />
              {formData.mobile &&
                !/^[0-9+\-().\s]{10,}$/.test(formData.mobile) && (
                  <p className="mt-2 text-sm text-red-600">
                    Please enter a valid phone number (minimum 10 digits)
                  </p>
                )}
            </div>

            <div>
              <label className="block text-lg font-medium text-black mb-2">
                Email Address <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => {
                  const value = e.target.value;
                  setFormData({ ...formData, email: value });
                }}
                placeholder="e.g., user@example.com"
                className="w-full p-4 border-2 border-[#bdb8b2] focus:border-black outline-none text-lg"
              />
              {formData.email &&
                !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && (
                  <p className="mt-2 text-sm text-red-600">
                    Please enter a valid email address
                  </p>
                )}
            </div>

            <div>
              <label className="block text-lg font-medium text-black mb-3">
                Propose available timing for the meeting:
              </label>
              <div className="flex gap-4 mb-4">
                <button
                  onClick={() =>
                    setFormData({ ...formData, meetingType: "online" })
                  }
                  className={`flex-1 p-4 border-2 text-lg font-medium transition-colors ${
                    formData.meetingType === "online"
                      ? "border-black bg-black text-white"
                      : "border-[#bdb8b2] bg-white text-black hover:border-black"
                  }`}
                >
                  Online
                </button>
                <button
                  onClick={() =>
                    setFormData({ ...formData, meetingType: "in-person" })
                  }
                  className={`flex-1 p-4 border-2 text-lg font-medium transition-colors ${
                    formData.meetingType === "in-person"
                      ? "border-black bg-black text-white"
                      : "border-[#bdb8b2] bg-white text-black hover:border-black"
                  }`}
                >
                  In Person
                </button>
              </div>

              <div className="space-y-3">
                <input
                  type="datetime-local"
                  value={formData.proposedDates[0]}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      proposedDates: [
                        e.target.value,
                        formData.proposedDates[1],
                      ],
                    })
                  }
                  className="w-full p-4 border-2 border-[#bdb8b2] focus:border-black outline-none text-lg"
                />
                <input
                  type="datetime-local"
                  value={formData.proposedDates[1]}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      proposedDates: [
                        formData.proposedDates[0],
                        e.target.value,
                      ],
                    })
                  }
                  className="w-full p-4 border-2 border-[#bdb8b2] focus:border-black outline-none text-lg"
                />
              </div>
            </div>
          </div>

          <button
            onClick={handleContactDetailsSubmit}
            disabled={
              !formData.name ||
              !formData.mobile ||
              !formData.email ||
              isSubmitting
            }
            className="w-full md:w-auto px-12 py-4 bg-black text-white text-lg font-medium hover:bg-[#bdb8b2] hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Ok"}
          </button>
          {submitError && (
            <p className="mt-4 text-red-600 font-semibold">{submitError}</p>
          )}
        </div>
      </div>
    );
  }

  // Page 7: Where did you hear about us
  if (currentPage === 7) {
    const sources = [
      "Instagram",
      "LinkedIn",
      "Word Of Mouth",
      "Recommendation from any of our previous Clients",
      "Google Search: (Website)",
      "Event",
      "Direct Contact with our Team",
      "Other",
    ];

    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="max-w-5xl w-full">
          <button
            onClick={handleBack}
            className="mb-6 px-6 py-2 border-2 border-[#bdb8b2] text-black hover:border-black transition-colors"
          >
            ← Back
          </button>
          <h2 className="text-3xl font-light text-black mb-8">
            Where did you hear about us:
          </h2>

          <div className="mb-8">
            <select
              value={formData.heardFrom}
              onChange={(e) =>
                setFormData({ ...formData, heardFrom: e.target.value })
              }
              className="w-full p-4 border-2 border-[#bdb8b2] focus:border-black outline-none text-lg bg-white"
            >
              <option value="">Select an option...</option>
              {sources.map((source) => (
                <option key={source} value={source}>
                  {source}
                </option>
              ))}
            </select>
          </div>

          {formData.heardFrom === "Other" && (
            <div className="mb-8">
              <label className="block text-lg font-medium text-black mb-3">
                Other:
              </label>
              <input
                type="text"
                placeholder="Please elaborate..."
                value={formData.heardFromOther}
                onChange={(e) =>
                  setFormData({ ...formData, heardFromOther: e.target.value })
                }
                className="w-full p-4 border-2 border-[#bdb8b2] focus:border-black outline-none text-lg"
              />
            </div>
          )}

          <button
            onClick={handleSubmit}
            disabled={!formData.heardFrom || isSubmitting}
            className="w-full md:w-auto px-12 py-4 bg-black text-white text-lg font-medium hover:bg-[#bdb8b2] hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Ok"}
          </button>
          {submitError && (
            <p className="mt-4 text-red-600 font-semibold">{submitError}</p>
          )}
        </div>
      </div>
    );
  }

  // Page 8: Thank You
  if (currentPage === 8) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="max-w-5xl w-full text-center">
          <h1 className="text-4xl md:text-5xl font-light text-black mb-8 leading-tight">
            Thank you for your time. Our team will get in touch with you soon!
          </h1>
          {onClose && (
            <button
              onClick={onClose}
              className="px-12 py-4 bg-black text-white text-lg font-medium hover:bg-[#bdb8b2] hover:text-black transition-colors"
            >
              Close
            </button>
          )}
        </div>
      </div>
    );
  }

  return null;
}

export default RFPBoarding;
