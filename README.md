# CGIFS Portfolio Management System - Backend

This is the backend of the CGIFS Portfolio Management System, built with Node.js, Express, and MongoDB.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB**: A NoSQL database for storing application data.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **JWT**: JSON Web Token for secure user authentication.

## Installation

1. **Clone the repository**

    ```sh
    git clone <repository-url>
    cd cgifs-portfolio-management-backend
    ```

2. **Install dependencies**

    ```sh
    npm install
    ```

3. **Set up environment variables**

    Create a `.env` file in the root directory with the following variables:

    ```plaintext
    PORT=5000
    MONGO_URL=<your_mongo_db_url>
    JWT_SECRET=<your_jwt_secret>
    ORIGIN=<front_end_url>
    ```

4. **Run the server**

    ```sh
    npm start
    ```

## Usage

1. **Make API requests**

    Use tools like Postman or cURL to make requests to the API endpoints. The base URL will be `http://localhost:5000`.

## Features

- **User Authentication**: Secure authentication using JWT.
- **CRUD Operations**: Create, Read, Update, and Delete operations for customer data.
- **Role-Based Access**: Different access levels for admin and user roles.
- **Data Validation**: Input data validation using Mongoose schemas.

## Project Structure

```plaintext
backend/
├── controllers/
│   └── userController.js
├── models/
│   └── User.js
├── routes/
│   └── userRoutes.js
├── middlewares/
│   └── authMiddleware.js
├── configs/
│   └── config.js
├── .env
├── app.js
├── server.js
├── package.json
└── README.md
