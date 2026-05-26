
---

## 📄 2. Backend Directory README (`/backend/README.md`)
*Place this inside your `/backend` folder to document your API logic and database schema constraints.*

```markdown
# User Management Engine - API Backend Documentation

This directory houses the secure, production-grade REST API backend layer for the User Management Application. Built with **Node.js**, **Express**, and **Mongoose (MongoDB)**, this system follows a strict **Layered Architecture Pattern** to ensure absolute separation of concerns.

---

## 📂 Internal Directory Framework

```text
backend/
├── APIs/               # Routing Interface Layer (Exposes REST Resources)
│   └── user.api.js     # Endpoint routes handling User account data pipelines
├── middlewares/        # Interceptor Layer (Security, Formatting & Guarding)
│   ├── bodyParser.js   # Payload parsers mapping incoming JSON objects
│   └── errorHandler.js # Centralized catch-all global error interceptor
├── models/             # Data Layer (Object Modeling & Collection Blueprints)
│   └── user.model.js   # Mongoose document schema validation rules
├── .env                # Controlled environment parameters (DB URIs, Secrets)
└── server.js           # Core Bootstrapper (Initializes app, middleware, & DB)

⚙️ Core API Endpoints & CRUD ArchitectureThe server exposes semantic, resource-oriented endpoints that accept and return uniform application/json payloads:HTTP VerbAPI Endpoint RouteInternal Operations executed on MongoDBGET/api/usersIndexes and retrieves the complete catalog array of documents.


GET/api/users/:idTargets and fetches a singular user record profile matching the URL param.
POST/api/usersValidates, sanitizes, and instantiates a brand new document into the database.
PUT/api/users/:idLocates an active record by ID and executes an full property override write.
DELETE/api/users/:idPurges a target document permanently out of the cloud collection index.


🧠 What We Learned & Implemented
1. Schema Constraints & Data Safety (models/)Enforced strict document formatting rules using Mongoose schemas (e.g., verifying String and Number data types, ensuring fields are marked as required, and verifying key unique constraints).
2. Centralized Interceptor Middlewares (middlewares/)Payload Parsing: Integrated custom express.json() routing controls to seamlessly unpack and format incoming incoming transaction payloads.Global Error Catch Wrapper: Programmed an asynchronous global exception handler middleware. If a database query fails or a network constraint drops, this component logs the error and responds with an structured JSON status payload, preventing any server crashes.
3. Asynchronous Database Query Pipelines (APIs/)Implemented modern asynchronous JavaScript logic (async/await) along with structural try/catch validation loops to cleanly manage database queries without falling into callback hell.
