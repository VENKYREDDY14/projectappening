Blog Management System API

Project Description

This repository implements a RESTful API for a blog management system using Node.js, Express.js, and MongoDB. It offers functionalities for user management (signup, login, role-based access control), blog creation, editing, deletion, and comment management.

Features

  - User Management:
      - User registration and login with secure password hashing
      - Role-based access control (Admin, Editor, User)
      - Email verification 
  - Blog Management:
      - Create, read, update, and delete blog posts
      - Assign blogs to editors 
  - Comment Management:
      - Add and delete comments with user authorization
  - Authentication:
      - JWT-based authentication for secure access control

Installation and Setup

1.  Clone the repository:
    
    git clone https://github.com/VENKYREDDY14/projectappening.git

2.  Install dependencies:
    
    npm install

3.  Create a .env file in the project root directory and add the following environment variables:
    
    CONNECTION_STRING=<your_mongodb_connection_string>
    PORT=<port_number>
    SECRET_KEY=<your_jwt_secret_key>
    # EMAIL=<your_email_verification_secret>
    # PASSWORD=<password>

      - Replace <your_mongodb_connection_string> with your MongoDB connection URI.
      - Replace <your_jwt_secret_key> with a strong secret key for JWT signing.
      - to implement email verification , provide secrets and link templates accordingly.

4.  Start the server:
    
    npm start

    This will start the server, typically listening on port 3300.

API Documentation

Base URL: http://localhost:3300/

User Management:

  - POST /users/signup
      - Request Body:
          - username (string, required)
          - email (string, required)
          - password (string, required)
          - created at(Date,default)
          - verified (Boolean,default:false)
      - Response:
          - 201 Created - Success (with user details)
          - 400 Bad Request - Invalid input or user already exists
  - POST /users/login
      - Request Body:
          - email (string, required)
          - password (string, required)
      - Response:
          - 200 OK - Success (with JWT in the Authorization header)
          - 401 Unauthorized - Invalid credentials
  - GET /users/me
      - Authorization: Bearer  (required)
      - Response:
          - 200 OK - User information
          - 401 Unauthorized - Invalid JWT

Blog Management:

  - POST /blogs
      - Authorization: Bearer  (Admin role required)
      - Request Body:
          - title (string, required)
          - content (string, required)
      - Response:
          - 201 Created - Created blog post (with details)
          - 400 Bad Request - Missing required fields
          - 401 Unauthorized - Unauthorized access
  - GET /blogs
      - Response:
          - 200 OK - Array of blog posts (with details)

  - PUT /blogs/:id
      - Authorization: Bearer  (Admin or Editor role required for the blog)
      - Path Parameter:
          - id (string) - Blog post ID
      - Request Body:
          - title (string, optional)
          - content (string, optional)
      - Response:
          - 200 OK - Updated blog post
          - 400 Bad Request - Missing required fields
          - 401 Unauthorized - Unauthorized access
          - 404 Not Found - Blog post not found
  - DELETE /blogs/:id
      - Authorization: Bearer  (Admin role required)
      - Path Parameter:
          - id (string) - Blog post ID
      - Response:
          - 204 No Content - Blog post deleted
          - 401 Unauthorized - Unauthorized access
          - 404 Not Found - Blog post not found

Comment Management:

  - POST /blogs/:id/comments
      - Authorization: Bearer 
      - Request Body:
          - content (string)
      - Response:
          - 201 Created - Created comment
          - 400 Bad Request - Missing required fields
          - 401 Unauthorized - Unauthorized access
          - 404 Not Found - Blog post not found
  - GET /blogs/:id/comments
      - Response:
          - 200 OK - Array of comments
          - 404 Not Found - Blog post not found
  - DELETE /blogs/:id/comments/:commentId
      - Authorization: Bearer  (Admin or comment author required)
      - Response:
          - 204 No Content - Comment deleted
          - 401 Unauthorized - Unauthorized access
          - 404 Not Found - Comment not found

Error Handling:

  - All API endpoints return a consistent error response format with an error code, message, and details.


Deployment

  - This API can be deployed on platforms like Heroku, Vercel, or AWS.
  - Configure environment variables for production deployment.

I hope this README file is helpful!
