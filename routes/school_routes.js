const express = require("express");
const router = express.Router();
const schoolController = require("../controllers/school_controllers");

//add schools routes
router.post("/addschool", schoolController.addSchool);

//get schools routes
router.get("/getschools", schoolController.getSchools);

module.exports = router;
