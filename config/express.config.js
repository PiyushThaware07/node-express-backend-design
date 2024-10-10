const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const configureRoutes = require("../routes/index");

// Middlewares
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Routes
configureRoutes(app);


module.exports = app;