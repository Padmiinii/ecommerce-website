E-Commerce Website Project Report
This repository contains the full-stack implementation of a basic E-Commerce website, designed to showcase product exploration and shopping cart management using a modern JavaScript stack.

Task: E-Commerce Website Development

The core objective was to create a clean and responsive site enabling users to:

  * Explore products listed on the homepage.
  * View specific product details.
  * Manage basic shopping cart functionality (state management).

-----

## 🛠️ Technology Stack

The project adheres to the recommended technology stack for building a robust web application:

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | **React.js** | Component-based library for building a fast, dynamic UI. |
| **Routing** | **React Router** | Manages client-side navigation paths. |
| **Backend** | **Node.js** & **Express.js** | A lightweight server for handling API requests and data operations. |
| **Database** | **MongoDB Atlas** | Cloud-hosted NoSQL database for flexible data storage. |

-----

## ✅ Artifacts Delivered

1.  **Technical Architecture Documentation:** Provided by this README file.
2.  **Code Base:** Available in the `/client` and `/server` directories.
3.  **Prompts Used:** Documentation of any AI/LLM prompts is in the `PROMPTS.md` file (to be added if external generation tools were used).

-----

## 🚀 Setup and Installation Guide

### Prerequisites

  * Node.js (LTS version)
  * npm or yarn
  * Git

### Step 1: Clone and Navigate

If you haven't uploaded yet, skip this and use the local files. If cloning from GitHub:

```bash
git clone [YOUR_GITHUB_REPO_URL]
cd [your-repo-name]
```

### Step 2: Configure the Backend (`/server`)

1.  Navigate: `cd server`
2.  Install dependencies: `npm install express cors`
3.  **Note:** Create a `.env` file for your `MONGO_URI` here.
4.  Run the server: `node server.js` (The server will run on `http://localhost:3001`)

### Step 3: Configure the Frontend (`/client`)

1.  Navigate: `cd ../client`
2.  Install dependencies: `npm install`
3.  Start the app: `npm start` (The application will open on `http://localhost:3000`)
