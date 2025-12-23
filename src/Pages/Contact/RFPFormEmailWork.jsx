import emailjs from "@emailjs/browser";

// Initialize EmailJS with your public key
// You need to sign up at https://www.emailjs.com/ and get these credentials
const EMAILJS_SERVICE_ID = "service_tww7pfg"; // Your EmailJS service ID
const EMAILJS_TEMPLATE_ID = "template_s79cv1u"; // Replace with your EmailJS template ID (see instructions below)
const EMAILJS_PUBLIC_KEY = "e5QAkSEjM1DRwfJsF"; // Your EmailJS public key

// Convert file to base64
const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

// Format checkbox data for email
const formatCheckboxData = (data) => {
  if (!data || typeof data !== "object") return "None selected";
  const selected = Object.entries(data)
    .filter(([_, value]) => value)
    .map(([key]) => key);
  return selected.length > 0 ? selected.join(", ") : "None selected";
};

// Format file list for email
const formatFiles = (files) => {
  if (!files || files.length === 0) return "No files attached";
  return files.map((file) => file.name).join(", ");
};

// Main function to send RFP form data via email
export const sendRFPEmail = async (formData, attachments1, attachments2) => {
  try {
    // Convert files to base64
    const attachments = [];

    // Process attachments1
    for (const file of attachments1) {
      try {
        const base64 = await fileToBase64(file);
        attachments.push({
          name: file.name,
          data: base64.split(",")[1], // Remove data:mime prefix
          type: file.type,
        });
      } catch (error) {
        console.error("Error converting file:", file.name, error);
      }
    }

    // Process attachments2
    for (const file of attachments2) {
      try {
        const base64 = await fileToBase64(file);
        attachments.push({
          name: file.name,
          data: base64.split(",")[1], // Remove data:mime prefix
          type: file.type,
        });
      } catch (error) {
        console.error("Error converting file:", file.name, error);
      }
    }
    // Format the email content
    const emailContent = `
=== RFP FORM SUBMISSION ===

--- BASIC INFORMATION ---
Name: ${formData.name || "Not provided"}
Email: ${formData.email || "Not provided"}
Message: ${formData.message || "Not provided"}

--- PROJECT INFORMATION ---
Company Name: ${formData.companyName || "Not provided"}
Project Name: ${formData.projectName || "Not provided"}
Project Area: ${formData.projectArea || "Not provided"}
Project Location: ${formData.projectLocation || "Not provided"}

--- PROJECT TYPE ---
${formatCheckboxData(formData.projectType)}

--- SERVICE TYPE ---
${formatCheckboxData(formData.serviceType)}

--- DESIGN LEVEL ---
Design Level: ${formatCheckboxData(formData.designLevel)}
Design Style: ${formData.designStyle || "Not selected"}

--- SPACE CONDITION ---
${formatCheckboxData(formData.spaceCond)}

--- PROJECT TIMELINE ---
Project Start/End: ${formatCheckboxData(formData.projectStart)}
Phasing: ${formData.phasing || "Not selected"}

--- MEETING SCHEDULE ---
${formatCheckboxData(formData.schMeeting)}

--- SCOPE OF WORKS ---
${formatCheckboxData(formData.sowType)}

--- NOMINATIONS ---
${formatCheckboxData(formData.nominations)}

--- MISSING DESIGN DETAILS ---
${formData.missingDesignDetails || "Not provided"}

--- ATTACHMENTS ---
Attachment Set 1: ${formatFiles(attachments1)}
Attachment Set 2: ${formatFiles(attachments2)}

Total Files: ${attachments.length}

===============================
    `;

    // Prepare email parameters with attachments
    const templateParams = {
      to_email: "saifulofficial025@gmail.com",
      from_name: formData.name || "Anonymous",
      from_email: formData.email || "noreply@example.com",
      subject: `RFP Form Submission - ${formData.projectName || "New Project"}`,
      message: emailContent,
      reply_to: formData.email || "noreply@example.com",
      // Include attachments in the template params
      attachments: JSON.stringify(attachments),
    };

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    console.log("Email sent successfully:", response);
    return { success: true, message: "RFP form submitted successfully!" };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "Failed to send RFP form. Please try again.",
    };
  }
};

// Alternative: Using Fetch API to send to a backend endpoint
export const sendRFPEmailViaBackend = async (
  formData,
  attachments1,
  attachments2
) => {
  try {
    const formDataToSend = new FormData();

    // Append form data
    formDataToSend.append("formData", JSON.stringify(formData));

    // Append files
    attachments1.forEach((file, index) => {
      formDataToSend.append(`attachment1_${index}`, file);
    });

    attachments2.forEach((file, index) => {
      formDataToSend.append(`attachment2_${index}`, file);
    });

    // Send to your backend endpoint
    const response = await fetch("/api/send-rfp-email", {
      method: "POST",
      body: formDataToSend,
    });

    if (response.ok) {
      return { success: true, message: "RFP form submitted successfully!" };
    } else {
      throw new Error("Failed to send email");
    }
  } catch (error) {
    console.error("Error sending email via backend:", error);
    return {
      success: false,
      message: "Failed to send RFP form. Please try again.",
    };
  }
};

// Export default function
export default sendRFPEmail;
