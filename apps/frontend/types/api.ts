export interface HealthStatus {
  status: string;
  service: string;
  environment: string;
}

export interface ApiError {
  message: string;
  statusCode?: number;
}
