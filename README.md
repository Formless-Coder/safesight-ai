# SafeSight AI

SafeSight AI is a real-time workplace safety monitoring application designed to detect personal protective equipment (PPE)—specifically hard hats and high-visibility safety vests—using computer vision.

---

## 1. Approved Architecture

- **Frontend**: Next.js 15 App Router, TypeScript, Tailwind CSS, shadcn/ui token conventions, TanStack Query, Axios, Lucide icons.
- **Backend**: Python 3.10+, FastAPI, Pydantic v2, SQLAlchemy 2.0, Alembic, PostgreSQL.
- **Machine Learning**: PyTorch and Ultralytics YOLO (baseline pretrained weights and fine-tuning).
- **Live Video Transport**: WebSocket between the browser client and FastAPI backend.
- **Camera Capture**: Browser `navigator.mediaDevices.getUserMedia`.
- **Training Environments**: Local development workstation and Google Colab GPU when required.
- **Testing**: `pytest` for backend unit/integration tests; TypeScript type checking, ESLint, and Next.js production builds for the frontend.

---

## 2. Repository Layout

```
safesight-ai/
├── apps/
│   ├── backend/               # FastAPI application
│   │   ├── app/
│   │   │   ├── api/routes/    # API endpoints (health check)
│   │   │   ├── core/          # Centralized configuration (Pydantic settings)
│   │   │   ├── db/            # SQLAlchemy session and Base declarative model
│   │   │   ├── models/        # Database entity models (future)
│   │   │   ├── schemas/       # Pydantic schemas (future)
│   │   │   ├── services/      # Business logic services (future)
│   │   │   ├── inference/     # YOLO inference wrapper (future)
│   │   │   └── websocket/     # Live video WebSocket handlers (future)
│   │   ├── migrations/        # Alembic database migrations
│   │   ├── tests/             # Backend test suite (pytest)
│   │   ├── alembic.ini        # Alembic configuration
│   │   ├── pyproject.toml     # Python package definitions
│   │   └── .env.example       # Backend environment template
│   └── frontend/              # Next.js 15 application
│       ├── app/
│       │   ├── (dashboard)/   # Dashboard route group
│       │   │   ├── dashboard/ # Overview page
│       │   │   ├── monitoring/# Live camera monitoring page
│       │   │   ├── incidents/ # Violation incident log page
│       │   │   └── settings/  # Settings page
│       │   ├── globals.css    # Tailwind CSS directives
│       │   ├── layout.tsx     # Root HTML layout and Query providers
│       │   └── page.tsx       # Root entry redirecting to /dashboard
│       ├── components/
│       │   ├── layout/        # Sidebar, TopNav, and Shell components
│       │   ├── monitoring/    # Video player & detection overlays (future)
│       │   ├── incidents/     # Incident logs and alerts (future)
│       │   └── ui/            # UI components and cn utility
│       ├── hooks/             # Custom React hooks
│       │   └── services/      # API services (Axios client)
│       ├── types/             # TypeScript type definitions
│       ├── public/            # Static assets
│       ├── package.json       # Frontend dependencies and scripts
│       ├── tsconfig.json      # TypeScript configuration
│       └── .env.example       # Frontend environment template
├── ml/                        # Machine learning pipeline
│   ├── configs/               # Training YAML configurations
│   ├── scripts/               # Preprocessing and training scripts
│   ├── notebooks/             # Exploratory analysis & Colab notebooks
│   ├── evaluation/            # Benchmarking and metrics scripts
│   └── README.md
├── data/                      # Dataset storage (ignored by git)
│   ├── raw/                   # Unprocessed raw dataset files
│   ├── processed/             # Cleaned YOLO-formatted data
│   └── README.md
├── models/                    # Model weights storage (ignored by git)
│   └── README.md
├── docs/                      # Architectural & ML documentation
│   ├── architecture.md        # System architecture and data flow
│   ├── requirements.md        # Prerequisites and project roadmap
│   ├── dataset-card.md        # Dataset protocol and class conventions
│   └── model-evaluation.md    # Evaluation metrics and procedures
├── .gitignore                 # Monorepo git ignore rules
└── README.md                  # Project overview and setup guide
```

---

## 3. Prerequisites

- **Node.js**: `v20.x` or `v22.x` (`v22.19.0` tested)
- **npm**: `10.x+` (`10.9.3` tested)
- **Python**: `3.10+` (`3.13.9` tested)
- **PostgreSQL**: PostgreSQL 14+ instance (local or remote)
- **Git**: `2.30+`

---

## 4. Environment Configuration

### Backend Environment Setup
1. Copy the example configuration file:
   ```bash
   cp apps/backend/.env.example apps/backend/.env
   ```
2. Adjust variables inside `apps/backend/.env`:
   - `POSTGRES_SERVER`: Hostname of your PostgreSQL server (default: `localhost`)
   - `POSTGRES_PORT`: Database port (default: `5432`)
   - `POSTGRES_USER`: Database username
   - `POSTGRES_PASSWORD`: Database password
   - `POSTGRES_DB`: Target database name

### Frontend Environment Setup
1. Copy the example configuration file:
   ```bash
   cp apps/frontend/.env.example apps/frontend/.env.local
   ```
2. Verify settings:
   - `NEXT_PUBLIC_API_URL`: Backend HTTP base URL (default: `http://localhost:8000`)
   - `NEXT_PUBLIC_WS_URL`: Backend WebSocket URL (default: `ws://localhost:8000`)

---

## 5. Running the Application

### Backend
From the repository root:
```bash
# Navigate to backend directory
cd apps/backend

# Run development server
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```
- API Docs: `http://localhost:8000/api/v1/docs`
- Health check: `http://localhost:8000/health` or `http://localhost:8000/api/v1/health`

### Frontend
From the repository root:
```bash
# Navigate to frontend directory
cd apps/frontend

# Install dependencies (if not already installed)
npm install

# Start development server
npm run dev
```
Open `http://localhost:3000` in your browser.

---

## 6. Verification and Testing

### Backend Verification
```bash
# Run backend test suite
PYTHONPATH=apps/backend pytest apps/backend/tests

# Verify Python syntax compilation
python3 -m compileall apps/backend
```

### Frontend Verification
```bash
cd apps/frontend

# TypeScript type checking
npm run type-check

# ESLint check
npm run lint

# Production build
npm run build
```

---

## 7. Current Implementation Status & Non-Implemented Features

The current codebase represents **Phase 1 (Repository Scaffold & Environment Setup)**:
- **Implemented**: Monorepo directory skeleton, health check API, centralized configuration, basic SQLAlchemy/Alembic setup, Next.js 15 navigation shell, placeholder views, Axios client, TanStack Query provider, and comprehensive documentation.
- **Not Implemented Yet**:
  - Live webcam capture via `getUserMedia` (Phase 3).
  - WebSocket video streaming and frame transport (Phase 3).
  - YOLO model loading, inference execution, and detection bounding boxes (Phase 2 & 3).
  - PPE violation rules and alert logic (Phase 3).
  - Database entities, migrations, and incident storage (Phase 4).
  - User authentication and access controls (deferred).
  - Docker, Redis, Celery, or cloud infrastructure (deferred).

---

## 8. License

*License selection is explicitly unresolved and pending project owner approval.*
