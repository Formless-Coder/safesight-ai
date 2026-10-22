# SafeSight AI — System Requirements and Prerequisites

## 1. Environment Prerequisites

- **Node.js**: v20.x or v22.x LTS (`v22.19.0` verified)
- **Package Manager**: npm (`10.9.3` verified)
- **Python**: 3.10 to 3.13 (`Python 3.13.9` verified)
- **Database**: PostgreSQL 14+ (local instance or managed service)
- **Operating System**: macOS, Linux, or Windows WSL2
- **Git**: 2.30+

## 2. Functional Requirements (Roadmap)

### Phase 1: Repository Scaffold and Environment Setup (Current)
- [x] Monorepo structure creation
- [x] Backend FastAPI application skeleton with health check
- [x] Centralized configuration and SQLAlchemy/Alembic setup
- [x] Frontend Next.js 15 App Router skeleton with navigation shell
- [x] TypeScript, Tailwind CSS, Lucide icons, Axios, and TanStack Query integration
- [x] Documentation, test suite skeleton, and `.gitignore`

### Phase 2: ML Pipeline & Pretrained Model Evaluation
- [ ] PPE Dataset selection and verification
- [ ] Baseline model evaluation (Ultralytics YOLO)
- [ ] Model fine-tuning for hard hat and high-visibility vest detection
- [ ] Metric evaluation ($mAP_{50}$, $mAP_{50-95}$, precision, recall)
- [ ] Checkpoint export for production inference

### Phase 3: Real-Time Video Streaming & Inference Engine
- [ ] Browser `getUserMedia` video capture component
- [ ] WebSocket connection between Next.js and FastAPI
- [ ] Real-time frame processing and bounding box overlay
- [ ] PPE violation detection logic

### Phase 4: Event Persistence & Dashboard
- [ ] PostgreSQL database migration for incident records
- [ ] Violation logging service and notification dispatch
- [ ] Interactive dashboard with historical incident filtering

## 3. Non-Functional Requirements

- **Inference Latency**: Real-time throughput targeting >= 15 FPS on standard hardware.
- **Modularity**: Strict separation between frontend, backend, and machine learning components.
- **Safety**: No hardcoded secrets, no unauthorized database fallbacks, and honest status reporting.
