import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import { logger } from "./config/logger.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Base route
app.get("/", (req, res) => {
  res.json({
    message: "Adaptive Learning Platform API is running 🚀",
    status: "OK",
  });
});

// Export app for server.js
export default app;
