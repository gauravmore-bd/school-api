const db = require("../config/db");

// Save a new school in DB
exports.addSchool = async ({ name, address, latitude, longitude }) => {
  try {
    const sql = `
      INSERT INTO schools (name, address, latitude, longitude)
      VALUES (?, ?, ?, ?)
    `;
    const [res] = await db.query(sql, [name, address, latitude, longitude]);

    return {
      id: res.insertId,
      name,
      address,
      latitude,
      longitude
    };

  } catch (err) {
    console.error("addSchool DB error:", err);
    throw err; 
  }
};

// Fetch schools and sort them by distance
exports.getSchools = async ({ latitude, longitude }) => {
  try {
    const sql = `
      SELECT id, name, address, latitude, longitude,
        (6371 * ACOS(
          LEAST(1,
            COS(RADIANS(?)) * COS(RADIANS(latitude)) * COS(RADIANS(longitude) - RADIANS(?))
            + SIN(RADIANS(?)) * SIN(RADIANS(latitude))
          )
        )) AS distance_km
      FROM schools
      ORDER BY distance_km ASC
    `;

    const [rows] = await db.query(sql, [latitude, longitude, latitude]);
    return rows;

  } catch (err) {
    console.error("getSchools DB error:", err);
    throw err;
  }
};
