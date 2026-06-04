# Pro-Tasker

A full-stack MERN project management application that allows users to create projects, manage tasks, and securely organize their work. The application includes authentication, authorization, project ownership, and task management features.

---

## Live Demo

### Frontend

Add your Render frontend URL here

### Backend

Add your Render backend URL here

---

## Features

### User Management

* User Registration
* User Login
* JWT Authentication
* Secure Password Hashing with bcrypt
* Logout Functionality
* Protected Routes

### Project Management

* Create Projects
* View All Owned Projects
* View Single Project Details
* Update Projects
* Delete Projects
* Ownership-Based Authorization

### Task Management

* Create Tasks
* View Tasks by Project
* Update Task Title
* Update Task Description
* Update Task Status
* Delete Tasks
* Authorization Checks Based on Project Ownership

### Responsive UI

* Mobile Friendly Design
* Dashboard Layout
* Task Status Indicators
* Modern Card-Based Interface

---

## Tech Stack

### Frontend

* React
* React Router DOM
* Axios
* Context API
* Vite

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT
* bcrypt

### Deployment

* Render (Frontend)
* Render (Backend)
* MongoDB Atlas

---

## Folder Structure

```text
root
│
├── backend
│   ├── config
│   ├── models
│   ├── routes
│   ├── utils
│   ├── .env
│   └── server.js
│
└── frontend
    ├── src
    │   ├── api
    │   ├── components
    │   ├── context
    │   ├── pages
    │   ├── routes
    │   └── App.jsx
    └── package.json
```

---

## Database Models

### User

```javascript
{
  username: String,
  email: String,
  password: String
}
```

### Project

```javascript
{
  name: String,
  description: String,
  user: ObjectId
}
```

### Task

```javascript
{
  title: String,
  description: String,
  status: String,
  project: ObjectId
}
```

---

## API Endpoints

### Authentication

#### Register User

```http
POST /api/auth/register
```

Request Body

```json
{
  "username":"John",
  "email":"john@example.com",
  "password":"123456"
}
```

---

#### Login User

```http
POST /api/auth/login
```

Request Body

```json
{
  "email":"john@example.com",
  "password":"123456"
}
```

---

### Projects

#### Create Project

```http
POST /api/projects
```

#### Get All Projects

```http
GET /api/projects
```

#### Get Single Project

```http
GET /api/projects/:id
```

#### Update Project

```http
PUT /api/projects/:id
```

#### Delete Project

```http
DELETE /api/projects/:id
```

---

### Tasks

#### Create Task

```http
POST /api/projects/:projectId/tasks
```

#### Get Tasks

```http
GET /api/projects/:projectId/tasks
```

#### Update Task

```http
PUT /api/tasks/:taskId
```

#### Delete Task

```http
DELETE /api/tasks/:taskId
```

---

## Security Features

### Authentication

* JWT Token Authentication
* Protected API Routes
* Protected React Routes

### Authorization

* Users can only access their own projects
* Users can only modify their own projects
* Users can only manage tasks belonging to projects they own

### Password Security

* Passwords hashed using bcrypt
* Password comparison performed securely

---

## Installation

### Clone Repository

```bash
git clone <your-repository-url>
```

---

## Backend Setup

Navigate to backend folder

```bash
cd backend
```

Install dependencies

```bash
npm install
```

Create .env file

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run backend

```bash
npm run dev
```

or

```bash
node server.js
```

---

## Frontend Setup

Navigate to frontend folder

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Run frontend

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

Backend runs on:

```text
http://localhost:3000
```

---

## Challenges Faced

* Implementing ownership-based authorization
* Managing JWT authentication
* Connecting React frontend with Express backend
* Handling CORS issues during development
* Creating reusable React components

---

## Future Improvements

* Team Collaboration
* User Invitations
* Task Due Dates
* Task Priorities
* Search and Filtering
* Drag and Drop Task Management
* Email Notifications

---

## Author

Priyanka Pandey

Software Developer

---


