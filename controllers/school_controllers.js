const models = require("../models/school_model");

// Add a new school
exports.addSchool = async (req, res) => {
  try {
    const { name, address, latitude, longitude } = req.body;

    if (!name || !address || !latitude || !longitude) {
      return res.status(400).json({
        success: false,
        message: "Please provide name, address, latitude and longitude"
      });
    }

    const saved = await models.addSchool({
      name,
      address,
      latitude,
      longitude,
    });

    return res.status(201).json({
      success: true,
      message: "School added successfully",
      school: saved
    });

  } catch (err) {
    console.log("addSchool error:", err); 
    return res.status(500).json({
      success: false,
      message: "Something went wrong while adding school"
    });
  }
};


// Get list of schools sorted by distance
exports.getSchools = async (req, res) => {
  try {
    const { latitude, longitude } = req.query;

    if (!latitude || !longitude) {
      return res.status(400).json({
        success: false,
        message: "Latitude and longitude are required query params"
      });
    }

    const schools = await models.getSchools({ latitude, longitude });

    return res.json({
      success: true,
      total: schools.length,
      data: schools
    });

  } catch (err) {
    console.log("getSchools error:", err);
    return res.status(500).json({
      success: false,
      message: "Could not fetch schools"
    });
  }
};
