# SafeSight AI — Machine Learning Pipeline

This directory manages dataset preparation, model exploration, training scripts, and evaluation pipelines for workplace safety PPE detection (specifically hard hats and high-visibility vests).

## Directory Structure

- `configs/`: Training hyperparameters, dataset YAML definitions, and model architecture configs.
- `scripts/`: Modular Python scripts for dataset conversion, training execution, and checkpoint export.
- `notebooks/`: Jupyter/Colab notebooks for exploratory data analysis (EDA), prototype training on Colab GPUs, and error analysis.
- `evaluation/`: Benchmark evaluation scripts, confusion matrix generators, and metric report utilities.

## Intended ML Workflow

1. **Inspect and Select a Compatible PPE Dataset**:
   Identify candidates containing well-annotated instances of persons, hard hats / safety helmets, and safety vests (e.g., Pictor PPE, SHWD, CHV, or Roboflow PPE benchmarks).
2. **Verify Dataset Licensing and Annotation Conventions**:
   Examine license permissions for development and deployment. Verify bounding box formats (YOLO format `[class, x_center, y_center, width, height]`), normalize coordinate scales, and audit class balance.
3. **Establish a Pretrained-Model Baseline**:
   Benchmark baseline Ultralytics YOLO models (e.g., YOLOv8n/s or YOLO11n/s) with pretrained weights on target test sets before fine-tuning.
4. **Fine-Tune If Evaluation Justifies It**:
   Execute transfer learning on validated PPE datasets if baseline detection on construction/industrial gear requires adaptation.
5. **Evaluate Per-Class Detection Metrics**:
   Calculate standard object detection metrics:
   - Precision, Recall, F1-Score
   - Mean Average Precision at IoU 0.50 ($mAP_{50}$)
   - Mean Average Precision across IoU thresholds 0.50:0.95 ($mAP_{50-95}$)
   - Analyze false positives and false negatives specifically for hard hat and vest classes.
6. **Export or Package Checkpoint for Backend Inference**:
   Export final selected model weights (PyTorch `.pt` or ONNX format) for real-time inference in the FastAPI backend service.

> **Status Notice**: No datasets or pretrained model weights have been downloaded in this scaffolding phase. No benchmark metrics are fabricated.
