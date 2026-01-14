import config from "./config";

const API_BASE_URL = config.baseURL;

export const getProjects = async () => {
  try {
    const token = localStorage.getItem("accessToken");
    const csrfToken = localStorage.getItem("csrf_token");

    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    if (csrfToken) {
      headers["X-CSRFTOKEN"] = csrfToken;
    }

    const response = await fetch(`${API_BASE_URL}projects/`, {
      method: "GET",
      mode: "cors",
      headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    if (result.success) {
      return result.data;
    } else {
      throw new Error(result.message || "Failed to fetch projects");
    }
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};
