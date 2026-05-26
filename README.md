The User Management Application is the capstone project of the training curriculum. It represents a complete full-stack implementation combining:

Backend: Node.js, Express, MongoDB (REST API)
Frontend: React, Vite, Tailwind CSS

The project demonstrates seamless integration between client and server with scalable architecture and real-time data handling.

Repository Architecture

The project is divided into two independent runtime environments: backend and frontend.

user-management-app/
│
├── backend/   # Server Runtime (Express, Mongoose, REST API)
│   ├── APIs/                # Controller routes
│   ├── middlewares/         # Request preprocessing & error handling
│   ├── models/              # Mongoose schemas & collections
│   └── server.js            # Entry point & DB connection
│
├── frontend/                # Client Interface (React, Tailwind CSS)
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── App.jsx          # Root component
│   │   └── main.jsx         # Application bootstrap
│   ├── tailwind.config.js   # Styling configuration
│   └── vite.config.js       # Build and proxy configuration
│
└── README.md                # Project documentation
Full-Stack Operational Flow

The application follows a structured communication pipeline between frontend, backend, and database:

The React frontend sends an asynchronous HTTP request to the backend.
The Express server processes the request using middleware.
The backend interacts with MongoDB using Mongoose queries.
The database returns data in BSON format.
The server converts it into JSON and sends it back to the frontend.
React updates the UI using state changes.
Setup and Execution Guide

To run the application locally, both backend and frontend must be executed separately.

Step 1: Backend Setup

Open a terminal and navigate to the backend directory:

cd backend

Install dependencies:

npm install

Start the server:

node server.js

The backend will run on:

http://localhost:5000
Step 2: Frontend Setup

Open another terminal and navigate to the frontend directory:

cd frontend

Install dependencies:

npm install

Start the development server:

npm run dev

Access the application at:

http://localhost:5173
Key Learning Outcomes
1. Full-Stack Integration

Learned how frontend and backend communicate using REST APIs and handle cross-origin requests (CORS).

2. CRUD Operations

Implemented complete Create, Read, Update, Delete functionality with real-time UI updates.

3. State Management

Used React state to dynamically update the user interface based on backend responses.

4. Error Handling

Built robust error-handling mechanisms on both client and server sides to ensure stability.

5. Scalable Architecture

Designed a modular structure separating concerns for better maintainability and scalability.


Deployment link : https://agent-6a1564b26bc11800bfcb--regal-custard-e769a1.netlify.app/
