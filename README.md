Project Description
The Assignment Submission Portal enables the following functionalities:

User Management: Users and admins can register and log in securely. JWT-based authentication is used for authorization.
Assignment Submission:
Users can upload assignments and link them to specific admins.
Admins can view, accept, or reject submitted assignments.
Admin Management:
Admins can register, log in, and manage assignments assigned to them.
Admins can review and update the status of submissions.
Validation and Middleware:
Middleware for authentication and validation ensures secure and accurate data handling.
Error Handling: Comprehensive error handling for robust API responses.

Project Structure
The directory structure is clean, with a clear separation of concerns for controllers, routes, models, middleware, and utility functions.


This is the project structure:
assignment-submission-portal/
│
├── src/
│   ├── models/                 # Database schemas and ORM logic
│   │   ├── User.ts             # User model (student)
│   │   ├── Admin.ts            # Admin model
│   │   └── Assignment.ts       # Assignment model
│   │
│   ├── routes/                 # API route definitions
│   │   ├── userRoutes.ts       # Routes for user operations
│   │   ├── adminRoutes.ts      # Routes for admin operations
│   │   └── assignmentRoutes.ts # Routes for assignment operations
│   │
│   ├── controllers/            # Business logic for routes
│   │   ├── userController.ts   # User-related operations
│   │   ├── adminController.ts  # Admin-related operations
│   │   └── assignmentController.ts # Assignment-specific logic
│   │
│   ├── middlewares/            # Middleware for authentication & validation
│   │   ├── authMiddleware.ts   # Authentication logic
│   │   └── validationMiddleware.ts # Input validation logic
│   │
│   ├── utils/                  # Reusable utility functions
│   │   └── validation.ts       # Validation utilities
│   │
│   └── app.ts                  # Main application setup
│
├── .env                        # Environment variables (e.g., DB_URI, JWT_SECRET)
├── tsconfig.json               # TypeScript configuration
├── package.json                # Node.js dependencies and scripts
└── README.md                   # Project documentation


Key Components
1. Models
User.ts: Defines the schema for student users, including fields like username, email, password.
Admin.ts: Represents admin data for assignment management.
Assignment.ts: Captures details about assignments, including:
Task description.
Links to User and Admin.
Submission status (e.g., pending, accepted, rejected).
2. Routes
userRoutes.ts: Handles user-related endpoints (e.g., registration, login, fetch admin list).
adminRoutes.ts: Manages admin functionalities like reviewing assignments.
assignmentRoutes.ts: APIs for uploading, fetching, and managing assignments.
3. Controllers
userController.ts: Manages user actions like registration, login, and assignment uploads.
adminController.ts: Admin functionalities for assignment review and status updates.
assignmentController.ts: General assignment-related operations (e.g., fetching by ID).
4. Middlewares
authMiddleware.ts: Verifies JWT tokens and ensures authorized access.
validationMiddleware.ts: Validates input fields (e.g., email format, password strength) and request parameters.
5. Utilities
validation.ts: Common validation logic shared across the application.
6. Main File (app.ts)
Sets up the Express server, connects to MongoDB, and integrates routes and middleware.

Key Functionalities
User Operations:
Register: /api/users/register
Login: /api/users/login
Upload assignment: /api/assignments/upload
Admin Operations:
Register: /api/admin/register
Login: /api/admin/login
Manage assignments: /api/admin/assignments
Assignment Operations:
Get assignment by ID: /api/assignments/:id
Environment Variables (.env)
Example of required environment variables:

plaintext
Copy code
PORT=5000
DB_URI=mongodb://localhost:27017/assignment-portal
JWT_SECRET=your_jwt_secret
Dependencies
Core: express, mongoose, dotenv
Validation: express-validator
Security: jsonwebtoken, bcrypt
Development: typescript, ts-node-dev
This setup ensures a scalable and maintainable backend for the Assignment Submission Portal, facilitating secure and efficient assignment management for users and admins.

