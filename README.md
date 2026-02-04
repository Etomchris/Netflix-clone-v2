# 🎬 Netflix Clone - React & Firebase

A fully responsive Netflix clone built with React and integrated with Firebase for user authentication. This project demonstrates modern web development practices, including secure API management and automated deployment via GitHub Actions.

## 🚀 Live Demo
[View the Live Project Here](https://etomchris.github.io/Netflix-clone-v2/)

## ✨ Features
* **User Authentication:** Secure Sign Up and Log In using Firebase Auth.
* **Dynamic Content:** Fetches movie data and displays categories (Trending, Top Rated, etc.).
* **Responsive Design:** Optimized for mobile, tablet, and desktop viewing.
* **CI/CD Pipeline:** Automatic deployment to GitHub Pages on every push.

## 🛠️ Tech Stack
* **Frontend:** React.js, Vite
* **Backend/Auth:** Firebase (Authentication & Security)
* **Deployment:** GitHub Actions

## 🔒 Security & Project Reflection
During the development of this project, I encountered and successfully resolved a critical security challenge regarding API key exposure. This provided a deep dive into:

* **Environment Variable Management:** Implemented `.env` locally and used `import.meta.env` to keep credentials out of the source code.
* **Credential Rotation:** After a legacy key was detected, I revoked the compromised credentials in the Firebase/Google Cloud Console and generated new, secure keys.
* **Git History Sanitization:** Cleaned the entire repository history using `git init` and force-pushed a sanitized version to ensure no sensitive data remained in previous commits.
* **GitHub Secrets:** Configured repository-level secrets to securely inject environment variables into the production build without exposing them publicly.

## 📦 Installation & Setup
1. **Clone the repository:**
   ```bash
   git clone [https://github.com/etomchris/Netflix-clone-v2.git](https://github.com/etomchris/Netflix-clone-v2.git)