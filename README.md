# Leaflet - Task & Notes Management App

## Overview
Leaflet is a task management and note-taking application built with Node.js, Express, MongoDB, and JWT authentication. It provides a secure and efficient way for users to manage their tasks and notes.

## Features
- User Authentication: Secure signup and login with JWT-based authentication.
- Task & Notes Management: Create, update, delete, and retrieve tasks and notes.
- Checklist Support: Maintain to-do lists with individual item completion tracking.
- Express Validator: Enforces strong password policies and input validation.
- MongoDB with Mongoose: Optimized schema design with indexes for faster query performance.
- Role-Based Access Control: Ensures secure API endpoint access.

## Tech Stack
- Backend: Node.js, Express.js, JWT Authentication
- Database: MongoDB with Mongoose ORM
- Validation: express-validator
- Middleware: Authentication and authorization handlers

## Installation & Setup
1. Clone the repository:
   
   git clone https://github.com/mokshsaini/leaflet.git
   cd leaflet
   
2. Install dependencies:
   
   npm install
   
3. Set up environment variables:
   - Create a .env file and define MONGO_URI, JWT_SECRET, and PORT.
4. Run the server:
   
   npm start
   

## API Endpoints
| Method | Endpoint       | Description |
|--------|--------------|-------------|
| POST   | /signup      | User registration |
| POST   | /login       | User login |
| GET    | /todo        | Fetch user tasks & notes |
| POST   | /note        | Create a new note |
| PATCH  | /note/:id    | Update a note |
| DELETE | /note/:id    | Delete a note |
| POST   | /clist       | Create a checklist |
| PATCH  | /clist/:id   | Update a checklist |
| DELETE | /clist/:id   | Delete a checklist |

## Future Enhancements
- Frontend Integration: React-based UI for seamless interaction.
- Task Reminders: Email & push notifications for task deadlines.
- Collaboration Features: Share tasks and notes with others.

## License
This project is licensed under the MIT License.
