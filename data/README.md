# SafeSight AI — Dataset Storage

This directory holds dataset files for PPE detection training and validation.

## Layout

- `raw/`: Unprocessed, original dataset downloads, annotations, and media files as acquired from source repositories.
- `processed/`: Validated, cleaned, normalized, and split datasets formatted according to YOLO specification (`train/`, `val/`, `test/` splits with paired image and `.txt` label files).

## Workflow Guidelines

1. Raw archives and unpacked datasets are strictly ignored by `.gitignore` to prevent committing large binary assets.
2. Dataset preprocessing scripts in `ml/scripts/` will parse raw data into `processed/`.
3. Dataset provenance, annotation conventions, and class schemas are documented in `docs/dataset-card.md`.

> **Status Notice**: No datasets have been downloaded in this scaffolding phase.
