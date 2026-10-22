# SafeSight AI — Dataset Card (Specification & Evaluation Plan)

## 1. Dataset Scope

The target model for SafeSight AI must detect personal protective equipment (PPE) compliance in real-time industrial and construction settings, with primary focus on:
1. **Hard Hat** (Safety helmet / head protection)
2. **High-Visibility Safety Vest** (Reflective / safety vest)
3. **Person / Worker** (To associate PPE with specific individuals)

## 2. Selection Criteria & Candidate Datasets

Candidate public datasets under consideration:
- **Pictor PPE Dataset**: Construction worker PPE annotations covering helmets and safety vests.
- **SHWD (Safety Helmet Wearing Dataset)**: Focused on helmet compliance and non-compliance.
- **CHV (Construction Hardhat & Vest Dataset)**: Paired helmet and vest detections.
- **Roboflow PPE Universe Datasets**: Curated industrial PPE benchmarks with bounding box annotations.

## 3. Dataset Verification Protocol

Before adopting any candidate dataset, the following verification protocol will be executed:

1. **Licensing Audit**: Verify commercial and research licensing compatibility (e.g., CC BY 4.0, MIT, or Apache 2.0).
2. **Annotation Format & Quality**:
   - Verify YOLO format coordinates: `[class_id, x_center, y_center, width, height]` normalized to $[0, 1]$.
   - Check bounding box tight-fit quality on occluded, distant, and partial subjects.
   - Standardize class IDs across datasets:
     - `0`: Person
     - `1`: Hardhat
     - `2`: NO-Hardhat
     - `3`: Vest
     - `4`: NO-Vest
3. **Distribution Audit**:
   - Calculate image resolution statistics.
   - Audit split balance (Train: 70%, Validation: 20%, Test: 10%).
   - Inspect environmental diversity (lighting variations, indoor/outdoor scenarios, distance angles).

## 4. Current Status

> **Notice**: In accordance with Phase 1 project constraints, no datasets have been downloaded, ingested, or processed. Dataset statistics, sample images, and benchmark values will be documented upon dataset verification in Phase 2.
