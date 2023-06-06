# MyContacts

This repository contains the source code for the API (backend) and FE (frontend) components of MyContacts, an application that allows users to manage their contacts. The API is written in Node.js and the FE is built using React.js.

## Installation and Setup

To get started with the project, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/SouzaGabriel26/MyContacts.git
   ```

2. Navigate to the `api` folder:

   ```bash
   cd api
   ```

3. Install the dependencies:

   ```bash
   yarn
   or
   npm install
   ```

4. Create a PostgreSQL Docker container named `pg` with the username `root` and password `root`:

   ```bash
   docker run --name pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres
   ```

5. Once the container is running, you can start the API application:

   ```bash
   yarn dev
   or
   npm run dev
   ```

6. Open another CLI window and navigate to the `fe` folder:

   ```bash
   cd fe
   ```

7. Install the FE dependencies:

   ```bash
   yarn
   or
   npm install
   ```

8. Start the FE project:

   ```bash
   yarn start
   or
   npm run start
   ```

By following these steps, you should have both the API and FE components up and running locally.

## About MyContacts

MyContacts is an application designed to help users manage their contacts efficiently. The app allows users to store and organize contact information such as names, email addresses, phone numbers, and categories.

The API component, built with Node.js, provides the backend functionality for handling contact data and interacting with a PostgreSQL database.

The FE component, built with React.js, offers a user-friendly interface for managing contacts, including features such as adding, editing, and deleting contacts, as well as filtering contacts based on their names.

Please refer to the respective `api` and `fe` folders for more detailed information about each component.

Happy managing your contacts!
