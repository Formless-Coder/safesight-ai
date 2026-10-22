# SafeSight AI — Model Weights and Checkpoints

This directory stores exported model weights and checkpoints for the SafeSight AI detection engine.

## Checkpoint Standards

- Model weights (`*.pt`, `*.onnx`, `*.engine`) are excluded by `.gitignore` to prevent committing binary artifacts into Git version control.
- Checkpoints intended for backend inference will be loaded by the backend inference module (`apps/backend/app/inference/`).
- Standard models to evaluate include:
  - Baseline: Ultralytics YOLO models (e.g., YOLOv8n / YOLO11n).
  - Fine-tuned checkpoints: Saved with naming convention `safesight_yolo_{version}_{date}.pt`.

> **Status Notice**: No model weights have been downloaded, loaded, or generated in this scaffolding phase.
