# SafeSight AI — System Architecture Specification

## 1. System Overview

SafeSight AI is an intelligent workplace safety monitoring application designed to detect personal protective equipment (PPE) compliance—specifically hard hats and high-visibility safety vests—in real time using computer vision.

```
+------------------------------------------------------------------+
|                            Browser UI                            |
|             (Next.js 15 App Router, TypeScript, Tailwind)       |
|                                                                  |
|   +-------------------+    getUserMedia    +------------------+  |
|   | Dashboard / Views | <----------------- | Live Video Feed  |  |
|   +-------------------+                    +------------------+  |
+--------------------|---------------------------------|-----------+
                     | REST API (Axios)                | WebSocket (Frames)
                     v                                 v
+------------------------------------------------------------------+
|                       FastAPI Backend                            |
|                                                                  |
|   +-------------------+                     +------------------+  |
|   | API Routes & Auth |                     | WebSocket Stream |  |
|   | (Pydantic models) |                     | Consumer         |  |
|   +-------------------+                     +--------|---------+  |
|             |                                        |            |
|             v                                        v            |
|   +-------------------+                     +------------------+  |
|   | SQLAlchemy ORM    |                     | Ultralytics YOLO |  |
|   | & Alembic Migr.   |                     | PyTorch Engine   |  |
|   +---------|---------+                     +--------|---------+  |
+-------------|----------------------------------------|-----------+
              v                                        v
+-----------------------+              +---------------------------+
| PostgreSQL Database   |              | Detections & Violations   |
| (Events & Settings)   |              | (Overlaid / Streamed back)|
+-----------------------+              +---------------------------+
```

## 2. Component Specifications

### 2.1 Frontend
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS with shadcn token conventions
- **State & Data Fetching**: TanStack Query (React Query)
- **HTTP Client**: Axios with centralized configuration
- **Icons**: Lucide React
- **Video Capture**: Browser `navigator.mediaDevices.getUserMedia`
- **Streaming**: Native WebSocket client streaming video frames to the backend

### 2.2 Backend
- **Runtime**: Python 3.10+
- **Framework**: FastAPI
- **Data Validation & Settings**: Pydantic v2 and `pydantic-settings`
- **Database ORM**: SQLAlchemy 2.0 (async via `asyncpg`, sync for migrations via `psycopg2`)
- **Database Migrations**: Alembic
- **Database Engine**: PostgreSQL
- **Video & Transport**: WebSocket endpoints receiving frame buffers, processing detections, and returning bounding boxes/violation events

### 2.3 Machine Learning
- **Frameworks**: PyTorch, Ultralytics YOLO (YOLOv8 / YOLO11)
- **Target Classes**:
  - Worker / Person
  - Hard Hat / Safety Helmet (compliant vs. non-compliant / missing)
  - High-Visibility Safety Vest (compliant vs. non-compliant / missing)
- **Training Environments**: Local VS Code workstation; Google Colab GPU when required for accelerated training.

## 3. Explicit Constraints & Boundaries

- **No Unauthorized Technologies**: No Docker, Redis, Celery, Kubernetes, cloud platforms, or additional frameworks in this phase.
- **Independence**: Completely self-contained project, independent of all other repositories.
- **Database**: PostgreSQL only (no silent SQLite fallback).
- **Phased Implementation**: Real-time video processing, detection models, database persistence, and authentication will be added in subsequent phases.
