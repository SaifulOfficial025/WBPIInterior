import config from "./config";

const API_BASE_URL = config.baseURL;

export const getProjects = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}projects/`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
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
