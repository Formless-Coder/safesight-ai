import apiClient from "./api-client";
import { HealthStatus } from "@/types/api";

/**
 * Service to query backend health check endpoint.
 */
export async function getBackendHealth(): Promise<HealthStatus> {
  const response = await apiClient.get<HealthStatus>("/api/v1/health");
  return response.data;
}
