# Employee Admin App (Full Stack)

## Description

**Employee Admin App** is a simple full-stack web application for managing employee records, built as a learning project. It demonstrates a basic Employee Management System with a Java Spring Boot backend and a React (TypeScript) frontend. The application allows an admin user to perform common CRUD operations on employee data – viewing a list of employees, adding new employees, editing existing employee details, and deleting employees. This project was created to practice building a complete application from scratch using Spring Boot for the RESTful API and React for the user interface.

## Features

* **List Employees:** View all employees in a tabular format with key details (e.g. name, email, role, etc.).
* **Add Employee:** Create a new employee record via a form on the frontend. The backend validates input (e.g. ensuring no duplicate email) and stores the new employee.
* **Edit Employee:** Update an existing employee’s details. Selecting an employee allows editing their information and saving changes, which are persisted on the backend.
* **Delete Employee:** Remove an employee from the system. From the employee list, an admin can delete a record, and the change is reflected in both the UI and backend.
* **View Employee Details:** (Optional) Navigate to or display a detailed view for a single employee’s information.
* **Validation:** Basic validation rules are enforced (for example, preventing creation of duplicate employees with the same email).
* **REST API:** The backend exposes RESTful endpoints under `/api/employees` for integrating with the frontend or other clients. A sample HTTP request collection is provided for testing these endpoints.

## Technologies Used

**Backend:**

* **Java 17+** – Programming language for the backend.
* **Spring Boot** – Provides the framework for building the REST API (using Spring Web). The application runs an embedded server (Tomcat by default) on port 8080.
* **Spring MVC & REST** – For designing RESTful endpoints to manage employee data.
* **In-Memory Data Store** – Employee data is stored in-memory (using a simple repository backed by a Java `HashMap`) for simplicity. No external database setup is required.
* **JUnit & Spring Boot Test** – Used for unit tests (e.g. for the service layer) and integration tests of the REST controllers.
* (No SQL database or JPA is used in this project, to keep the stack simple and focus on the full-stack integration.)

**Frontend:**

* **React** (with **TypeScript**) – Frontend library for building the user interface as a single-page application.
* **Axios** – HTTP client library used to make requests from the React frontend to the Spring Boot API.
* **HTML5/CSS3** – Markup and basic styling for the React components. *(You can enhance or restyle using any CSS framework as needed; this project keeps styling minimal.)*
* **Node.js & npm** – Used for managing frontend dependencies and running the development server (create-react-app setup).
* **Create React App** – The project structure was bootstrapped with Create React App (TypeScript template), which provides the development server on port 3000 and build configuration.
* *(Optional)* **React Router** – For navigating between pages (e.g. from the employee list to an individual employee’s detail/edit page). *(If the project has multiple views, React Router is used to handle client-side routing.)*

## Getting Started

Follow these steps to run the Employee Admin App locally on your machine:

### Prerequisites

* **Java Development Kit (JDK)** – Install JDK 17 or newer to build and run the Spring Boot backend.
* **Maven** – (Optional if using the Maven wrapper) Install Maven 3.x, or use the provided Maven wrapper scripts.
* **Node.js and npm** – Install Node.js (which includes npm) to run and build the React frontend. Ensure npm is up to date.

### Installation & Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/mpagels/employee-admin-app-fullstack.git
   cd employee-admin-app-fullstack
   ```

2. **Backend Setup:**

   * Navigate to the `backend` directory:

     ```bash
     cd backend
     ```
   * If this is a Maven project, you can run it with Maven:

     ```bash
     # Optionally, install dependencies (also builds the project)
     mvn clean install
     # Run the Spring Boot application
     mvn spring-boot:run
     ```

     This will start the Spring Boot server on **`http://localhost:8080`** by default. The API endpoints (e.g. `GET /api/employees`) will be available once the server is running.
   * *Alternatively:* Import the `backend` as a Maven project in your IDE (IntelliJ, Eclipse, VS Code) and run the application from the main class (which contains the `public static void main` method with Spring Boot startup).

3. **Frontend Setup:**
   Open a new terminal and navigate to the `frontend` directory:

   ```bash
   cd ../frontend   # from the project root (employee-admin-app-fullstack)
   ```

   Install dependencies and start the development server:

   ```bash
   npm install
   npm start
   ```

   This will launch the React development server (usually on **`http://localhost:3000`**). The app will open in your web browser automatically or you can navigate to that URL. The React app is configured to communicate with the backend API (on port 8080) for data. Ensure the backend is running so that API calls from the React app succeed.

4. **Access the Application:**

   * With both backend and frontend running, open your browser to **`http://localhost:3000`** (if it didn’t open automatically). You should see the Employee Admin App interface.
   * The frontend will fetch the list of employees from the backend. Initially, this list might be empty (if no employees are in memory). Use the UI to add a new employee and see it appear in the list. You can then try editing or deleting employees to verify everything is working end-to-end.

5. **Testing the API (Optional):**
   If you want to test the backend API directly, you can use the provided **`rest-api.http`** file located in the project root. This is a collection of example HTTP requests (suitable for VS Code REST Client or IntelliJ HTTP Client). You can also use curl or Postman to send requests:

   * GET all employees: `GET http://localhost:8080/api/employees`
   * GET one employee by ID: `GET http://localhost:8080/api/employees/{id}`
   * Create new employee: `POST http://localhost:8080/api/employees` with a JSON body
   * Update employee: `PUT http://localhost:8080/api/employees/{id}` with JSON body
   * Delete employee: `DELETE http://localhost:8080/api/employees/{id}`
     (The exact request formats and sample data are provided in the `rest-api.http` file.)

### Usage

* After starting both servers, use the React frontend to manage employees. For example:

  * Click "Add Employee" (or a similar button) to open the form for a new employee. Fill in the details (e.g., name, email, position) and submit. The frontend will send a POST request to the backend, and on success the new employee will appear in the list.
  * The list of employees is fetched from the backend (GET request) each time the app loads (or after changes). Each row typically has options to edit or delete.
  * To edit an employee, use the edit option (this might navigate to an edit page or open an edit form). Modify the fields and save; the frontend will send a PUT request to update the employee on the server.
  * To delete an employee, use the delete option (a button or icon on each row). This triggers a DELETE request to the server, and upon success the employee is removed from the list in the UI.
