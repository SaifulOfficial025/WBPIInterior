import axios from "axios";
import config from "./config";

const axiosInstance = axios.create({
  baseURL: config.baseURL,
});

// Create contact and send half mail simultaneously
export const createContact = async (payload) => {
  try {
    const [contactResponse, mailResponse] = await Promise.all([
      axiosInstance.post("/contact-mail/contact/", payload),
      axiosInstance.post("/contact-mail/send-half-mail/", payload),
    ]);
    // Return contact response as it contains the id
    return contactResponse.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to create contact" };
  }
};

// Update contact with patch request
export const updateContact = async (id, payload) => {
  try {
    const response = await axiosInstance.patch(
      `/contact-mail/contact/${id}/`,
      payload
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to update contact" };
  }
};

// Submit RFP form
export const submitRFP = async (id, payload) => {
  try {
    const response = await axiosInstance.post(
      `/contact-mail/rfp/${id}/`,
      payload
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to submit RFP" };
  }
};
