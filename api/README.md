# API

This folder contains the source code for the API component of the MyContacts project. The API is built with Node.js and utilizes various technologies and patterns for efficient development.

## Technologies Used

The API component incorporates the following technologies:

- Node.js: A JavaScript runtime environment that enables server-side development using JavaScript.
- Express.js: A fast and minimalist web application framework for Node.js, used to build the RESTful API endpoints.
- ESLint (Airbnb configuration): A popular JavaScript linter that helps maintain code quality and adherence to coding standards.
- Nodemon: A utility tool that monitors file changes and automatically restarts the server during development, improving the development workflow.
- PostgreSQL: A powerful open-source relational database management system used as the backend database for storing contact information.

## Folder Structure

The API folder follows a structured organization to enhance code maintainability and modularity. Here's an overview of the folder structure:

Into `src` folder:

- `index.js`: The entry point file for the API server. It creates an Express server and sets up the routes defined in `routes.js`.
- `routes.js`: Defines the API routes and their corresponding controller methods.
- `controllers/`: Contains the controller classes responsible for handling the API logic and business rules. Each route in `routes.js` maps to a method in the corresponding controller.
- `repositories/`: Implements the repository pattern, which handles database operations and interacts with the PostgreSQL database. The repositories make use of the `database/index.js` file to establish the database connection and execute queries.
- `database/index.js`: A configuration file that sets up the connection to the PostgreSQL database using the `pg` library. It exports a `query` function that can be used to execute SQL queries against the database.

## Development Process

During development, the API codebase follows the ESLint Airbnb configuration, ensuring code quality and adherence to best practices. Nodemon is used to automatically restart the server whenever a file change is detected, allowing for a smoother development experience.

The API utilizes the repository pattern, separating the responsibility of handling business logic from database operations. Controllers are implemented as singleton classes, exporting a single instance for use throughout the API. The controllers primarily handle request validations and delegate the actual database operations to the corresponding repositories.

## Getting Started

To set up the API component locally, make sure you have Node.js installed on your machine. Then follow the steps outlined in the main repository's README file to clone the repository and navigate to the `api` folder. After that, run the following commands:

1. Install the dependencies:

   ```shell
   npm install
   ```

2. Start the API server:

   ```shell
   npm run dev
   ```

   This command will start the server using Nodemon, which will automatically restart the server whenever changes are made to the code.

By following these steps, you should have the API component up and running locally, ready to handle API requests and interact with the PostgreSQL database.

For more detailed information about each component and its functionality, please refer to the corresponding files in this folder.

Happy coding!
