# 🚀 YOLO 实战：模型训练指南

> **摘要**：本模块将指导您如何使用自定义数据集训练一个高精度的目标检测模型。我们将涵盖环境搭建、数据配置、超参数调整及训练监控。

---

## 📋 目录 (Table of Contents)

1.  [🛠️ 环境准备 (Environment Setup)](#1-环境准备)
2.  [📂 数据集构建 (Data Preparation)](#2-数据集构建)
3.  [⚙️ 配置文件编写 (Configuration)](#3-配置文件编写)
4.  [🔥 开始训练 (Start Training)](#4-开始训练)
5.  [📊 监控与评估 (Monitoring & Evaluation)](#5-监控与评估)
6.  [💾 模型导出与推理 (Export & Inference)](#6-模型导出与推理)

---

## 1. 🛠️ 环境准备

在开始之前，我们需要搭建一个稳固的地基。推荐使用 **Python 3.8+** 和 **PyTorch** 环境。

### 1.1 安装核心库
我们使用 Ultralytics 官方库，它集成了 YOLOv8/v9/v10/v11 等多个版本。

```bash
# 建议在虚拟环境中执行
pip install ultralytics

# 验证安装及检查GPU状态
yolo checks
```

### 1.2 硬件建议
*   **GPU**: 推荐 NVIDIA RTX 3060 或更高 (训练速度快 10-100 倍)。
*   **CPU**: 仅用于调试，不建议用于完整训练。

 <div style="background-color: #fff5f5; border-left: 4px solid #dc2626; padding: 1rem; border-radius: 4px; margin: 1rem 0; box-shadow: 0 1px 2px rgba(0,0,0,0.05);">
   <span style="color: #dc2626; font-weight: bold; text-transform: uppercase; margin-right: 0.5rem;">⚠️ WARNING</span>
   必须确保：
   <ul style="margin: 0.5rem 0 0 1.5rem; padding: 0;">
     <li>CUDA 11.8 / 12.1</li>
     <li>PyTorch ≥ 2.0 + CUDA 支持</li>
     <li>ultralytics ≥ 8.2.0</li>
   </ul>
 </div>
 
---

## 2. 📂 数据集构建

YOLO 对数据格式有严格要求。一个规范的文件结构是成功的关键。

### 2.1 目录结构标准
请务必按照以下结构组织您的文件夹：

```text
MyDataset/
├── data.yaml          # 数据集配置文件 (核心)
├── train/             # 训练集
│   ├── images/        # .jpg, .png 图片
│   └── labels/        # .txt 标签文件
├── val/               # 验证集 (边训练边评估)
│   ├── images/
│   └── labels/
└── test/              # 测试集 (可选，用于最终测试)
    ├── images/
    └── labels/
```

### 2.2 标签格式 (YOLO Format)
每个图片对应一个同名的 `.txt` 文件。内容格式如下：

$$ \text{<class\_id>} \quad x_{center} \quad y_{center} \quad width \quad height $$

*   **数值范围**: 所有坐标和宽高必须归一化到 **0 ~ 1** 之间。
*   **示例**: `0 0.45 0.67 0.3 0.5` (类别0，中心点在图片中间偏下，宽高适中)。

---

## 3. ⚙️ 配置文件编写

我们需要告诉 YOLO 数据在哪里，以及有哪些类别。创建一个 `data.yaml` 文件。

### `data.yaml` 模板

```yaml
# 数据集路径 (建议使用绝对路径，或者相对于运行目录的路径)
path: /path/to/MyDataset 

# 训练和验证图像目录 (相对于 path)
train: train/images
val: val/images
test: test/images  # 可选

# 类别数量
nc: 3

# 类别名称 (必须与标注时的ID对应)
names:
  0: 'person'    # id 0
  1: 'bicycle'   # id 1
  2: 'car'       # id 2
```
 <div style="background-color: #ecfdf5; border-left: 4px solid #059669; padding: 1rem; border-radius: 4px; margin: 1rem 0; box-shadow: 0 1px 2px rgba(0,0,0,0.05);">
   <span style="color: #059669; font-weight: bold; text-transform: uppercase; margin-right: 0.5rem;">📌 NOTE</span>
   补充说明：
   <ul style="margin: 0.5rem 0 0 1.5rem; padding: 0;">
     <li>建议直接写绝对路径</li>
   </ul>
 </div>

---

## 4. 🔥 开始训练

这是最激动人心的部分。我们可以通过 **命令行 (CLI)** 或 **Python 脚本** 启动训练。推荐使用 Python 脚本，因为它更灵活。

### 方式 A: Python 脚本训练 (推荐 ✨)

创建一个 `train.py` 文件：

```python
from ultralytics import YOLO

def main():
    # 1. 加载模型
    # 'yolov8n.pt' 是预训练权重 (Nano版本: 速度快，精度一般)
    # 可选: yolov8s.pt, yolov8m.pt, yolov8l.pt, yolov8x.pt (X版本: 最准但最慢)
    model = YOLO('yolov8n.pt')  

    # 2. 启动训练
    results = model.train(
        data='data.yaml',   # 数据集配置文件路径
        epochs=100,         # 训练轮数 (建议 100-300)
        imgsz=640,          # 输入图片大小 (必须是32的倍数)
        batch=16,           # 批次大小 (根据显存调整，显存爆了就调小)
        device=0,           # GPU设备ID (0, 1, ... 或 'cpu')
        workers=4,          # 数据加载线程数
        project='YOLO_Train', # 项目名称 (保存路径)
        name='exp01',       # 实验名称
        patience=50,        # 早停机制 (50轮不提升则停止)
        save=True           # 保存检查点
    )

if __name__ == '__main__':
    main()
```

### 方式 B: 命令行训练 (CLI)

```bash
yolo detect train data=data.yaml model=yolov8n.pt epochs=100 imgsz=640 device=0
```

### 💡 关键超参数解析

| 参数 | 说明 | 建议 |
| :--- | :--- | :--- |
| `epochs` | 遍历整个数据集的次数 | 数据少时设大(300+)，数据多时设小(100) |
| `batch` | 一次塞入模型的图片数 | 显存允许的情况下越大越好，通常 16 或 32 |
| `imgsz` | 图片尺寸 | 默认 640。小目标检测可设为 1280 |
| `lr0` | 初始学习率 | 默认 0.01，通常不需要改动 |

---

## 5. 📊 监控与评估

训练开始后，YOLO 会自动在 `YOLO_Train/exp01/` 目录下生成日志。

### 5.1 核心指标解读
在控制台输出或 `results.csv` 中，关注以下指标：

*   **Box Loss**: 预测框与真实框的误差（越低越好）。
*   **Cls Loss**: 类别分类的误差（越低越好）。
*   **mAP@50**: IoU阈值为0.5时的平均精度（**最重要的指标**，越接近 1.0 越好）。
*   **mAP@50-95**: 不同阈值下的综合精度（反映模型的鲁棒性）。

### 5.2 可视化监控 (TensorBoard)
在终端运行以下命令，查看实时训练曲线：

```bash
tensorboard --logdir YOLO_Train
```
*打开浏览器访问 `http://localhost:6006` 即可看到损失函数下降曲线和 mAP 上升曲线。*

### 5.3 验证结果
训练结束后，查看 `runs/detect/exp01/val_batch0_pred.jpg`。这是模型在验证集上的实际预测效果图，直观判断模型是否“学会”了。

---

## 6. 💾 模型导出与推理

训练完成后，最好的模型权重保存在 `runs/detect/exp01/weights/best.pt`。

### 6.1 模型推理 (测试)

```python
from ultralytics import YOLO

# 加载刚才训练好的模型
model = YOLO('runs/detect/exp01/weights/best.pt')

# 对新图片进行预测
results = model.predict(source='path/to/your/image.jpg', save=True, conf=0.5)

# source也可以是:
# 'screen' (屏幕截图)
# '0' (摄像头实时)
# 'video.mp4' (视频文件)
```

### 6.2 模型导出 (部署)
如果您需要将模型部署到 C++、Android 或 TensorRT：

```python
success = model.export(format='onnx')  # 导出为通用的 ONNX 格式
# success = model.export(format='engine
```
