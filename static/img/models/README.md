## Model Files (`.pt`)

This folder contains trained PyTorch models for **Deepfake Face Detection** based on varying:

* Accuracy levels (`acc_84` to `acc_97`, i.e, 84% to 97%) 
* Input video frame counts (`10` to `100` frames)
* Datasets (FF++ and CelebDF)
* Folder Location : `DeepfakeDetection/static/img/models/` *(excluded from GitHub due to size constraints)*

---

### Available Models (9 total)

| File Name                                  | Accuracy | Frames | Dataset      |
| ------------------------------------------ | -------- | ------ | ------------ |
| `model_84_acc_10_frames_final_data.pt`     | 84%      | 10     | Final        |
| `model_87_acc_20_frames_final_data.pt`     | 87%      | 20     | Final        |
| `model_89_acc_20_frames_final_data.pt`     | 89%      | 20     | Final        |
| `model_90_acc_60_frames_final_data.pt`     | 90%      | 60     | Final        |
| `model_90_acc_60_frames_FF_data.pt`        | 90%      | 60     | FF++         |
| `model_93_acc_100_frames_celeb_FF_data.pt` | 93%      | 100    | CelebDF+FF++ |
| `model_95_acc_40_frames_FF_data.pt`        | 95%      | 40     | FF++         |
| `model_97_acc_60_frames_FF_data.pt`        | 97%      | 60     | FF++         |
| `model_97_acc_100_frames_FF_data.pt`       | 97%      | 100    | FF++         |

---

### How to Download and Use 

- You can download all models from this [link](https://drive.google.com/drive/folders/1cPd5iYyPtB_B2J3sJgnZ0GmcLjdbpr5W?usp=sharing).
- After downloading, **place all `.pt` files inside**:
  ```
  DeepfakeDetection/static/img/models/
  ```
- In your Python code (inside `app.py`), load any model like this:
  ```python
  path_to_model = './models/model_97_acc_60_frames_FF_data.pt'
  ```
- Make sure the selected model matches the input video processing (frame count, format).

---

