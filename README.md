# 🗂️ Project Manager  

Welcome to **Project Manager**, a full-stack REST API application that allows seamless interaction between **projects** and **categories**.  

## ✨ Features  
- **Create and Manage Projects**: Add new projects and assign them to multiple categories.  
- **Category Management**: Create and edit categories, with visibility of all associated projects.  
- **CRUD Functionality**: Perform Create, Read, Update, and Delete operations for both entities.  

---

## 🛠️ Installation  

### 1. Clone or Download the Project  
- Clone this repository:  
  ```bash  
  git clone https://github.com/your-username/ProjectManager.git  
  ```  
  OR  
- Download the `.zip` file and extract it in the folder of your choice.  

### 2. Install Dependencies  
- Open your terminal and navigate to the **ProjectManager** folder.  
- Make sure **Node.js** is installed on your computer, then install back-end dependencies:  
  ```bash  
  cd api
  npm install  
  ```  
- Navigate to the `client` folder and install front-end dependencies:  
  ```bash  
  cd client  
  npm install  
  ```  

### 3. Set Up the Database  
- Ensure **Docker** is installed (e.g., Docker Desktop).  
- Navigate to the `api/database` folder and start the database container:  
  ```bash  
  docker compose up -d  
  ```  
- Apply Prisma migrations by navigating to the `api/databse/prisma` folder:  
  ```bash  
  npx prisma migrate dev  
  ```  

### 4. Run the Application  
- Start the back-end server:  
  ```bash  
  cd api  
  npm run dev  
  ```  
- Start the front-end server in a separate terminal:  
  ```bash  
  cd client  
  npm run dev  
  ```  

---

## 🧪 Usage  
Once both servers are running, you can:  
1. Access the front-end via your browser.  
2. Create, view, and edit projects and categories interactively.  

---

## 📚 Technologies Used  
- **Back-end**: Node.js, ExpressJS, Prisma, Docker  
- **Front-end**: ReactJS, TypeScript  

```
