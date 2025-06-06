// We use express to create our servers endpoints, and listen for & respond to requests from the frontend

// We use dotenv so that we can access our environment variables
import "dotenv/config";
// We import our index.js so that we can query our database
import * as db from "./db/index.js";

import express from "express";
import "dotenv/config";
const requestHandler = express();
const port = process.env.PORT || 3000;
requestHandler.use(express.json());
import "dotenv/config"


// Starting our http server and listening for requests!
requestHandler.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });

  requestHandler.get("/api/v1/tech-professions", async (req, res) => {
    try {
      const dbResponse = await db.query("SELECT * FROM tech_professions");
      res.json(dbResponse.rows); // Send only the data rows
    } catch (error) {
      console.error("Error fetching tech professions:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  