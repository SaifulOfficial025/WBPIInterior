export const passwordResetRequest = async (payload) => {
  // payload: { email }
  try {
    const response = await axiosInstance.post(
      "/auth/password-reset-request/",
      payload
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Password reset request failed" };
  }
};
export const resendSignupOTP = async (payload) => {
  // payload: { email }
  try {
    const response = await axiosInstance.post(
      "/auth/resend-otp-signup/",
      payload
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Resend OTP failed" };
  }
};
import axios from "axios";
import config from "./config";

const axiosInstance = axios.create({
  baseURL: config.baseURL,
});

export const verifySignup = async (payload) => {
  // payload: { email, otp_code }
  try {
    const response = await axiosInstance.post("/auth/verify-signup/", payload);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "OTP verification failed" };
  }
};

export const login = async (payload) => {
  // payload: { email, password }
  try {
    const response = await axiosInstance.post("/auth/login/", payload);
    return response.data;
  } catch (error) {
    // You can customize error handling as needed
    throw error.response?.data || { message: "Login failed" };
  }
};

export const signup = async (payload) => {
  // payload: { email, password, password_confirm, name, phone_number, gender, address }
  try {
    const response = await axiosInstance.post("/auth/signup/", payload);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Signup failed" };
  }
};

export const verifyPasswordResetOTP = async (payload) => {
  // payload: { email, otp_code }
  try {
    const response = await axiosInstance.post(
      "auth/verify-otp-password-reset/",
      payload
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "OTP verification failed" };
  }
};

export const resendPasswordResetOTP = async (payload) => {
  // payload: { email }
  try {
    const response = await axiosInstance.post(
      "/auth/password-reset-request/",
      payload
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Resend OTP failed" };
  }
};

export const resetPassword = async (payload) => {
  // payload: { access_token, new_password, confirm_password }
  try {
    const response = await axiosInstance.post(
      "/auth/password-reset/",
      payload
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Password reset failed" };
  }
};
