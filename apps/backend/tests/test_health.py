from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)


def test_health_check_root():
    """Verify health endpoint at /health."""
    response = client.get("/health")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "ok"
    assert "service" in data
    assert "environment" in data


def test_health_check_v1():
    """Verify health endpoint at /api/v1/health."""
    response = client.get("/api/v1/health")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "ok"
    assert "service" in data
    assert "environment" in data
