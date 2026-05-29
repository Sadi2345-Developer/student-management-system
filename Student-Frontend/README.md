# 🎓 Student Management System

A full-stack **Student Management System** built with the **MERN stack** (MongoDB, Express, React, Node.js). It allows you to add, view, edit, and delete student records through a clean and responsive web interface.

🔗 **Live Demo:** [student-management-system-kappa-dun.vercel.app](https://student-management-system-kappa-dun.vercel.app/)  
🔗 **Backend API:** [student-management-system-production-161c.up.railway.app](https://student-management-system-production-161c.up.railway.app/)

---

## 📸 Screenshots

> Add Student Page — Edit Student Page — All Students View

---

## ✨ Features

- 📋 **View All Students** — Displays all registered students in a responsive card grid
- ➕ **Add Student** — Register a new student with name, email, course, city, and marks
- ✏️ **Edit Student** — Update any existing student record with pre-filled form data
- 🗑️ **Delete Student** — Remove a student record instantly
- 📱 **Fully Responsive** — Works on mobile, tablet, and desktop
- 🎨 **Modern UI** — Clean purple-themed design with smooth animations and hover effects
- 🌙 **Dark Mode Support** — Automatically adapts to system dark/light preference

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| **React.js** | UI Framework |
| **React Router DOM** | Client-side Routing |
| **React Bootstrap** | UI Components & Layout |
| **CSS3 (Custom)** | Styling, Animations, Dark Mode |
| **Vercel** | Frontend Deployment |

### Backend
| Technology | Purpose |
|---|---|
| **Node.js** | Runtime Environment |
| **Express.js** | REST API Framework |
| **MongoDB** | Database |
| **Mongoose** | ODM for MongoDB |
| **Railway** | Backend Deployment |

---

## 📁 Project Structure

```
student-management-system/
│
├── frontend/                   # React frontend
│   ├── public/
│   ├── src/
│   │   ├── Api/
│   │   │   └── studentapi.js   # Axios API calls
│   │   ├── Pages/
│   │   │   ├── AddStudentPage.jsx
│   │   │   ├── EditStudentPage.jsx
│   │   │   └── AllStudentsPage.jsx
│   │   ├── Components/
│   │   │   └── Navbar.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   └── package.json
│
├── backend/                    # Node/Express backend
│   ├── models/
│   │   └── Student.js          # Mongoose schema
│   ├── routes/
│   │   └── studentRoutes.js    # API routes
│   ├── controllers/
│   │   └── studentController.js
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)
- [Git](https://git-scm.com/)

---

### 1. Clone the Repository

```bash
git clone https://github.com/Sadi2345-Developer/student-management-system.git
cd student-management-system
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Start the backend server:

```bash
npm start
```

The API will run at `http://localhost:5000`

---

### 3. Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file in the `frontend` folder:

```env
VITE_API_URL=http://localhost:5000
```

Start the React development server:

```bash
npm run dev
```

The app will run at `http://localhost:5173`

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/students` | Get all students |
| `GET` | `/api/students/:id` | Get single student by ID |
| `POST` | `/api/students` | Add a new student |
| `PUT` | `/api/students/:id` | Update student by ID |
| `DELETE` | `/api/students/:id` | Delete student by ID |

---

## 📦 Student Data Model

```json
{
  "name":   "string",
  "email":  "string",
  "course": "string",
  "city":   "string",
  "marks":  "number"
}
```

### Available Courses
- Mern Stack
- React
- AI
- Web
- Graphic

---

## ☁️ Deployment

### Frontend — Vercel
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Set the root directory to `frontend`
4. Add environment variable `VITE_API_URL` pointing to your Railway backend URL
5. Deploy ✅

### Backend — Railway
1. Go to [railway.app](https://railway.app) and create a new project
2. Connect your GitHub repository
3. Set the root directory to `backend`
4. Add environment variables: `MONGO_URI` and `PORT`
5. Deploy ✅

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Developer

**Sadi** — [@Sadi2345-Developer](https://github.com/Sadi2345-Developer)

---

> ⭐ If you found this project helpful, please give it a **star** on GitHub!
