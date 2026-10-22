from fastapi import APIRouter
from pydantic import BaseModel
from app.core.config import settings


class HealthCheckResponse(BaseModel):
    status: str
    service: str
    environment: str


router = APIRouter(tags=["Health"])


@router.get("/health", response_model=HealthCheckResponse)
async def health_check() -> HealthCheckResponse:
    """Basic health-check endpoint verifying that the service is running."""
    return HealthCheckResponse(
        status="ok",
        service=settings.PROJECT_NAME,
        environment=settings.ENVIRONMENT,
    )
