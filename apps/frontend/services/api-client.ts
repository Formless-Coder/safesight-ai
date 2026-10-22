import axios, { AxiosInstance } from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

/**
 * Centralized Axios HTTP client instance.
 * Reads the backend base URL from environment variable NEXT_PUBLIC_API_URL.
 */
export const apiClient: AxiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Standard error logging; no fabricated fallback responses
    return Promise.reject(error);
  }
);

export default apiClient;
