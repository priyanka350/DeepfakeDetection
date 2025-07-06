# 🎭 DEEPFAKE DETECTION

![IMG-20250701-WA0001](https://github.com/user-attachments/assets/efea0da3-cd1f-4f34-9a88-4d275d7e9772)

A Flask-powered web application that uses PyTorch, OpenCV, and a custom ResNeXt + LSTM deep learning model to detect face-swap deepfake videos. Users can upload a video, select the number of frames to analyze, and receive real-time predictions labeled “REAL” or “FAKE”, along with confidence scores and visual heatmaps for interpretability. The underlying model, designed by combining RNN and LSTM architectures, achieved 92% accuracy on benchmark test datasets.

---

## 🚀 Live Demo & Resources

- **YouTube Walkthrough:**  
  [🎞️ Youtube Video Link](https://youtu.be/R1fA0nIxjiU?si=HsTiNq072VvD1aO5)
- **Hackathon Report (PDF):**  
  [📑 SMART INDIA HACKATHON 2024 – Team Wolfenstein](./Wolfenstein.pdf)

---

## Features 🌟

* 🎥 **Smart Video Processing** : Upload a video, pick the number of frames, and let OpenCV + `face_recognition` handle face extraction.

* 🧠 **Dual-Stage Prediction: Deepfake + Mask Detection** : A pre-trained mask classifier filters masked faces before deepfake detection for better accuracy.

* 🔍 **Custom Deepfake Detection Model** : A hybrid ResNeXt-50 + LSTM model trained on **FF++**, **CelebDF**, and custom datasets with 84–97% accuracy.

* 🧪 **Confidence & Calibration** : Uses softmax-based prediction scores with Grad-CAM–like heatmaps to highlight manipulated regions.

* 🖼️ **Visual & Interactive Results** : Displays prediction labels, confidence, cropped faces, and highlighted frames — all in-browser.

* 🌐 **User-Friendly Web App (Flask)** : Smooth flow from landing → login → model overview → upload → result page — no technical setup needed.

---

## Tech Stack 🛠

| Category                  | Tools / Technologies                                     |
| ------------------------- | -------------------------------------------------------- |
| **Frontend**              | HTML5, CSS3, JavaScript, Jinja2 (Flask Templates)        |
| **Backend**               | Flask (session handling, routing)                        |
| **Deep Learning**         | PyTorch, Torchvision, Autograd                           |
| **Model Architecture**    | ResNeXt50\_32x4d (CNN) + LSTM (RNN)                      |
| **Face & Mask Detection** | `face_recognition`, Custom Mask Classifier               |
| **Video Processing**      | OpenCV (frame extraction, manipulation)                  |
| **Visualization**         | Grad-CAM-style overlays, NumPy, Matplotlib               |
| **Prediction Logic**      | Softmax (probability conversion), Confidence Calibration |
| **Deployment Ready**      | Docker (containerization), Cloud support (AWS/GCP/Azure) |

---

## Installation ⚙️

1. **Clone the repository**  
   ```bash
   git clone https://github.com/priyanka350/DeepfakeDetection.git
   cd DeepfakeDetection
     ```

2. **Install Python dependencies**

   ```bash
   pip install -r requirements.txt
   ```

3. **Download Trained Models**
   
   - Each model (`*.pt`, \~2.1 GB) is hosted on Google Drive.
    [Download all models here](https://drive.google.com/drive/folders/1cPd5iYyPtB_B2J3sJgnZ0GmcLjdbpr5W?usp=sharing)<br>
   - Place the `.pt` files into `DeepfakeDetection/static/img/models/` and `DeepfakeDetection/models`.

4. **Run the Web App**

   ```bash
   python app.py
   ```
   Open your browser at `http://127.0.0.1:5000`.

---

## Usage ✔️

1. Open the **Deepfake Detection website** at `http://127.0.0.1:5000`.
2. Click **Login** to access the system.
3. View the model description and project overview.
4. Click **Get Started** to go to the upload page.
5. Upload a video and choose the number of frames to analyze.
6. Click **Submit**.
7. View the prediction, confidence score, extracted frames, and detected faces.

📺 *Check out the [YouTube video](https://youtu.be/R1fA0nIxjiU?si=HsTiNq072VvD1aO5) for a full demonstration of the project in action.*

---

## Show Your Support ❤️
If you find this project useful, please give it a ⭐ on GitHub and share it with fellow developers!

---

## Contact ✉
Email : priyanka.tmsl2022@gmail.com

---

<p align="center">
Made with ❤️ by Priyanka Kumari 
</p>

---
