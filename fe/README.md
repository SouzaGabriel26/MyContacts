# FE (Frontend)

This folder contains the source code for the FE (frontend) component of the MyContacts project. The FE is built using React.js, a popular JavaScript library for building user interfaces.

## Technologies Used

The FE component incorporates the following technologies:

- Create React App: A popular toolchain for creating React applications with pre-configured setup and dependencies.
- React.js: A JavaScript library for building user interfaces, providing a component-based approach to development.
- ESLint (Airbnb configuration): A widely used JavaScript linter that helps maintain code quality and ensures adherence to coding standards.
- PropTypes: A library used to define the types of props expected by components, helping with prop validation.
- React Router DOM: A library that provides routing functionality to the React application, enabling navigation between different components/pages.
- Styled Components: A CSS-in-JS library that allows writing CSS styles directly within JavaScript code, providing scoped and reusable styles.

## Folder Structure

The FE folder follows a structured organization to enhance code maintainability and modularity. Here's an overview of the folder structure:

- `src/`: Contains the main source code for the React application.
  - `components/`: Contains reusable and shared UI components used throughout the application.
  - `pages/`: Contains the main pages/components of the application, representing different views or screens.
  - `services/`: Implements a layer to handle API endpoints and communicate with the backend. For example, the `ContactsService.js` file handles interactions with the contact-related API endpoints.
  - `hooks/`: Contains custom hooks that encapsulate reusable logic and separate concerns.
  - `utils/`: Houses utility functions or helper modules used within the application.
  - `App.js`: The entry point of the React application that defines the routing and structure of the application.
- `public/`: Contains static assets, such as HTML files and images, that are used by the React application.

## Tech Stack and Concepts

The FE component of MyContacts utilizes various technologies and concepts to enhance the efficiency and functionality of the project:

- Development Dependencies: The project incorporates ESLint with the Airbnb configuration, ensuring code quality and adherence to best practices. Additionally, specific plugins are used to enhance the development experience.
- Dependencies: The FE component utilizes dependencies such as PropTypes for prop validation, React Router DOM for routing functionality, and Styled Components for scoped and reusable styles.
- Custom Hooks: Hooks like `useState`, `useEffect`, `useRef`, `useCallback`, `useMemo`, and `useImperativeHandle` are utilized throughout the project to improve efficiency and enhance code organization.
- Custom Error: The project includes a custom error called `ApiError`, which provides a structured way to handle API-related errors.
- EventManager: The `EventManager` is a custom utility module used to listen for, emit, and remove event listeners for various events within the application.
- Separation of Concerns: The project follows a modular approach, separating functionalities into custom hooks and service layers to encapsulate logic and improve code organization.

## Getting Started

To set up the FE component locally, ensure that you have Node.js installed on your machine. Then follow the steps outlined in the main repository's README file to clone the repository and navigate to the `fe` folder. After that, run the following commands:

1. Install the dependencies:

   ```bash
   yarn
   ```
   
    or
   
   ```bash
   npm install
   ```

2. Start the FE development server:

   ```bash
   yarn start
   ```
   
    or
   
   ```bash
   npm start
   ```

   This command will start the development server and open the application in your default browser.

By following these steps, you should have the FE component up and running locally, ready to interact with the API and provide a user-friendly interface for managing contacts.

For more detailed information about each
