import axios from "axios";
import config from "./config";

const axiosInstance = axios.create({
  baseURL: config.baseURL,
});

// Get user profile
export const getProfile = async () => {
  try {
    const token = localStorage.getItem("accessToken");
    const response = await axiosInstance.get("/auth/profile/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to fetch profile" };
  }
};

// Update user profile
export const updateProfile = async (payload) => {
  // payload: { name, phone_number, gender, address }
  try {
    const token = localStorage.getItem("accessToken");
    const response = await axiosInstance.patch(
      "/auth/profile/update/",
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to update profile" };
  }
};

// Change user password
export const changePassword = async (payload) => {
  // payload: { old_password, new_password, confirm_password }
  try {
    const token = localStorage.getItem("accessToken");
    const response = await axiosInstance.post(
      "/auth/change-password/",
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to change password" };
  }
};
