# 📚 School Management API

A simple Node.js + Express + MySQL API to manage schools and fetch them sorted by distance from a given location.

---

## 🚀 Features
- Add new schools with **name, address, latitude, longitude**.  
- Retrieve all schools sorted by **distance** from provided coordinates.  
- Uses **MySQL** as the database.  
- Built with **Express** and **async/await** for clean error handling.  

---

## ⚙️ Tech Stack
- **Node.js** (Express.js)  
- **MySQL (mysql2)**  
- **dotenv** for environment variables  

---

## 📂 Project Structure
```bash
school-api/
│── config/ # Database connection
│── controllers/ # Request handlers
│── models/ # DB queries
│── routes/ # API routes
│── .env # Environment variables
│── server.js # App entry point
```

---

## 🛠️ Setup & Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/school-api.git
   cd school-api
```

Install dependencies:

npm install


Configure environment variables in .env:

PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=school_api
DB_PORT=3306


Start the server:

npm start


Server will run at:
👉 http://localhost:3000

📌 API Endpoints
1️⃣ Add a School

POST /addschool
Request body (JSON):

{
  "name": "Delhi Public School",
  "address": "Delhi, India",
  "latitude": 28.7041,
  "longitude": 77.1025
}


Response:

{
  "success": true,
  "data": {
    "id": 1,
    "name": "Delhi Public School",
    "address": "Delhi, India",
    "latitude": 28.7041,
    "longitude": 77.1025
  }
}

2️⃣ Get Schools Sorted by Distance

GET /getschools?latitude=28.7041&longitude=77.1025

Response:

{
  "success": true,
  "count": 2,
  "data": [
    {
      "id": 1,
      "name": "Delhi Public School",
      "address": "Delhi, India",
      "latitude": 28.7041,
      "longitude": 77.1025,
      "distance_km": 0
    },
    {
      "id": 2,
      "name": "Jaipur School",
      "address": "Jaipur, India",
      "latitude": 26.9124,
      "longitude": 75.7873,
      "distance_km": 241.33
    }
  ]
}

📦 Deliverables

- Source code repository (this repo).
- Live API endpoints (deployed version on Render/Heroku/Vercel).
- Postman collection (exported JSON file / shared link).