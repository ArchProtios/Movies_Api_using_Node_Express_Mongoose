const express = require("express");
const { ConnectDB } = require("./db/ConnectDB.js");
const { createDoc } = require("./models/Movies.js");
const app = express();
const port = process.env.PORT || 8000;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017/Movies";

ConnectDB(DATABASE_URL);

// Create & Save Document
createDoc();

app.listen(port, () => console.log(`Server running on port ${port}`));