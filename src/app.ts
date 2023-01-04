import express, { Express, Request, Response } from "express";
const app: Express = express();

// Set up body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up a route for the API
const profiler = require("./routes/profiler.route");
app.use("/profiler", profiler);

export default app;
