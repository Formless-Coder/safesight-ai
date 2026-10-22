# SafeSight AI — Model Evaluation Framework

## 1. Objectives

The SafeSight AI evaluation framework establishes standardized procedures for evaluating object detection models for PPE compliance.

## 2. Evaluation Metrics

Model performance will be evaluated against test sets using the following standard metrics:

1. **Mean Average Precision (mAP)**:
   - $mAP_{50}$: Mean Average Precision calculated at Intersection-over-Union (IoU) threshold of 0.50.
   - $mAP_{50-95}$: Mean Average Precision averaged over IoU thresholds from 0.50 to 0.95 (in increments of 0.05).
2. **Per-Class Precision and Recall**:
   $$\text{Precision} = \frac{TP}{TP + FP}$$
   $$\text{Recall} = \frac{TP}{TP + FN}$$
3. **F1-Score**: Harmonic mean of Precision and Recall.
4. **Inference Latency**:
   - Preprocessing time (ms)
   - Inference forward pass time (ms)
   - Non-Maximum Suppression (NMS) time (ms)
   - Total latency per frame across CPU and GPU hardware

## 3. Evaluation Workflow

1. **Pretrained Baseline Evaluation**:
   Evaluate standard Ultralytics checkpoints (e.g., `yolov8n.pt`, `yolov8s.pt`, `yolo11n.pt`) on the validated validation/test splits.
2. **Fine-Tuning Comparison**:
   Compare fine-tuned weights against the baseline to ensure measurable performance improvement on PPE classes.
3. **Confusion Matrix Analysis**:
   Inspect misclassifications between background objects, ordinary hats, and safety helmets.
4. **Export Readiness**:
   Verify exported models (PyTorch / ONNX) match the precision and output format expected by the FastAPI backend inference service.

## 4. Current Status

> **Notice**: No model evaluation has been executed in this scaffolding phase. Benchmark numbers and metric tables will be populated upon baseline and fine-tuning runs in subsequent phases.
