# School Management API

This is a Node.js + Express API to manage schools and calculate
distances between a given location and stored schools using MySQL.

## Features

-   Add a new school with name, address, latitude, and longitude
-   Fetch all schools sorted by distance from a given location
-   Uses MySQL database for storage
-   Built with MVC structure for clean separation of concerns

## Project Structure

    ├── config
    │   └── db.js            # Database connection setup
    ├── controllers
    │   └── school_controllers.js
    ├── models
    │   └── school_model.js
    ├── routes
    │   └── school_routes.js
    ├── server.js            # Entry point
    ├── .env                 # Environment variables
    └── README.md

## Installation & Setup

1.  Clone the repository:

    ``` bash
    git clone <your_repo_url>
    cd school_api
    ```

2.  Install dependencies:

    ``` bash
    npm install
    ```

3.  Create a `.env` file in the root directory and add the following:

    ``` env
    PORT=3000
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=your_password
    DB_NAME=school_api
    DB_PORT=3306
    ```

4.  Create MySQL database and table:

    ``` sql
    CREATE DATABASE school_api;
    USE school_api;
    CREATE TABLE schools (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100),
      address VARCHAR(255),
      latitude DECIMAL(10, 6),
      longitude DECIMAL(10, 6)
    );
    ```

5.  Start the server:

    ``` bash
    npm start
    ```

Server will run on: `http://localhost:3000`

## API Endpoints

### 1. Add School

-   **URL:** `POST /addschool`

-   **Body:**

    ``` json
    {
      "name": "Delhi Public School",
      "address": "Delhi",
      "latitude": 28.7041,
      "longitude": 77.1025
    }
    ```

-   **Response:**

    ``` json
    {
      "success": true,
      "data": {
        "id": 1,
        "name": "Delhi Public School",
        "address": "Delhi",
        "latitude": 28.7041,
        "longitude": 77.1025
      }
    }
    ```

### 2. Get Schools by Distance

-   **URL:** `GET /getschools?latitude=28.7041&longitude=77.1025`

-   **Response Example:**

    ``` json
    {
        "success": true,
        "count": 3,
        "data": [
            {
                "id": 3,
                "name": "Delhi Public School",
                "address": "Delhi",
                "latitude": 28.7041,
                "longitude": 77.1025,
                "distance_km": 0.00009493529796600342
            },
            {
                "id": 1,
                "name": "Green Valley School",
                "address": "123 Main Street",
                "latitude": 28.6139,
                "longitude": 77.209,
                "distance_km": 14.442295137429786
            },
            {
                "id": 2,
                "name": "St. Xavier's",
                "address": "Mumbai",
                "latitude": 19.0761,
                "longitude": 72.8777,
                "distance_km": 1153.2309450290616
            }
        ]
    }
    ```

## Deliverables

1.  Source code repository with complete API implementation.
2.  Live API endpoints accessible for testing (if deployed).
3.  Postman collection shared via email or link.

------------------------------------------------------------------------

