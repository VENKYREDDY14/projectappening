# Blog Management System API

## Project Description
The Blog Management System API is a RESTful service designed for managing blogs and comments with role-based access control. It supports user authentication, email verification, and the management of blogs and comments by users with specific roles (Admin, Editor, User). The project is built using Express.js and MongoDB and deployed on a cloud platform.

## Features
- User Registration and Login
  - Password hashing with bcrypt.
  - JWT-based authentication.
  - Optional email verification using nodemailer.

- Role-Based Access Control
  - Admin: Full access to manage blogs and assign blogs to editors.
  - Editor: Edit assigned blogs.
  - User: View blogs and manage their own comments.

- Blog Management
  - API endpoints for creating, updating, retrieving, and deleting blogs.
  - Role-based permissions for blog management.

- Comment Management
  - API endpoints for users to add and delete their own comments.

## Technology Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT
- **Email Verification** (optional): nodemailer
- **Deployment**: Render/Heroku/Vercel

---

## Installation and Setup

### Prerequisites
- Node.js and npm installed on your local machine.
- MongoDB instance (local or cloud-based).

### Steps to Set Up Locally
1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory and add the following:
   ```env
  CONNECTION_STRING="mongodb+srv://venky:venkyreddy@cluster0.85int.mongodb.net/appening"
PORT=3300
SECRET_KEY='appening'
EMAIL='venkyreddy2031@gmail.com'
PASSWORD='xlrl lhxl xusg pkxz'
   ```

4. **Run the Application**:
   ```bash
   npm start
   ```
   The server will start on `http://localhost:3300` by default.

---

## API Documentation

### Authentication

#### 1. **User Registration**
- **Endpoint**: `POST /api/auth/register`
- **Request Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "securepassword",
    "role": "User" // Optional, default is User
    "visited":false(default)
  }
  ```
- **Response**:
  ```json
  {
    "message": "User registered successfully. Please verify your email."
    "token":<token for verification>
  }
  ```

#### 2. **User Login**
- **Endpoint**: `POST /api/auth/login`
- **Request Body**:
  ```json
  {
    "email": "john@example.com",
    "password": "securepassword"
  }
  ```
- **Response**:
  ```json
  {
    "token": "<jwt-token>",
    "message": "Login successful."
  }
  ```

### Blog Management

#### 1. **Create Blog** (Admin Only)
- **Endpoint**: `POST /api/blogs`
- **Headers**:
  ```json
  {
    "Authorization": "Bearer <jwt-token>"
  }
  ```
- **Request Body**:
  ```json
  {
    "title": "Blog Title",
    "content": "Blog content here..."
  }
  ```
- **Response**:
  ```json
  {
    "message": "Blog created successfully.",
    "blog": { ... }
  }
  ```

### Comment Management

#### 1. **Add Comment**
- **Endpoint**: `POST /api/blogs/:id/comments`
- **Headers**:
  ```json
  {
    "Authorization": "Bearer <jwt-token>"
  }
  ```
- **Request Body**:
  ```json
  {
    "comment": "This is a comment."
  }
  ```
- **Response**:
  ```json
  {
    "message": "Comment added successfully.",
    "comment": { ... }
  }
  ```

---

## Deployment

### Deployment Steps
1. Choose a deployment platform: Render/Heroku/Vercel.
2. Configure environment variables on the platform.
3. Deploy the application following platform-specific instructions.
4. Test the live API endpoints.

### Live URL
- Deployed Application:https://projectappening.onrender.com/

---

## Testing
Use tools like Postman or curl to test the API endpoints. Ensure the required headers and body data are provided as specified.

---


