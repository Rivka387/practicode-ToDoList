# Task Management App

A Fullstack Task Management application with a client and server. The app allows users to:

- Add a new task  
- Remove a task  
- Mark a task as completed  

## Technologies Used  

- **Frontend:** [Specify frontend framework/library, e.g., React, Vue, Angular]  
- **Backend:** [Specify backend framework, e.g., ASP.NET Core, Node.js, Express]  
- **Database:** [If applicable, specify the database, e.g., PostgreSQL, MongoDB, SQLite]  

## Getting Started  

### Prerequisites  
- [List any required installations, e.g., .NET SDK, Node.js, database setup]  

### Installation  

1. Clone the repository:  
   ```sh
   git clone https://github.com/yourusername/task-management-app.git
   cd task-management-app
   ```

2. Install dependencies for the frontend and backend (if applicable):  
   ```sh
   cd client
   npm install
   cd ../server
   dotnet restore
   ```

3. Run the backend:  
   ```sh
   cd server
   dotnet run
   ```

4. Run the frontend:  
   ```sh
   cd client
   npm start
   ```

## API Endpoints  

- `GET /tasks` - Retrieve all tasks  
- `POST /tasks` - Add a new task  
- `PUT /tasks/{id}` - Update a task (mark as completed)  
- `DELETE /tasks/{id}` - Remove a task  

## Contributing  

Feel free to submit pull requests or report issues.  
