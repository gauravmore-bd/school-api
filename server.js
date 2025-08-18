const express = require("express");
const dotenv = require("dotenv");
const routes = require("./routes/school_routes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/", routes);
app.get("/", (req, res) => {
  res.send("Welcome to School Management API");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
