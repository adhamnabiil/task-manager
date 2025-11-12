import { toast } from "react-toastify";

const apiRequest = async (request, ...params) => {
  try {
    const response = await request(...params);

    if (response.status < 200 || response.status > 304) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return response.data;
  } catch (error) {
    const status = error?.response?.status;
    const message =
      error?.response?.data?.message || error?.message || "An error occured";
    toast.error(message);
    console.error(`API Error [${status}]:`, message);
    throw new Error(message);
  }
};

export const handlePromiseError = (error) => {
  console.error("An error occured:", error);
};

export default apiRequest;
