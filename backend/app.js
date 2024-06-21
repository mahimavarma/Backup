import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import { dbConnection } from "./database/dbConnection.js";

const app = express();
dotenv.config({ path: "./config/config.env" });

// CORS options
const corsOptions = {
  origin: 'http://localhost:5173', // The origin you want to allow
  credentials: true,               // Allow credentials
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Handle preflight requests
app.options('*', cors(corsOptions));

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Example endpoint to test CORS
app.get("/", (req, res, next) => {
  return res.status(200).json({
    success: true,
    message: "HELLO WORLD AGAIN"
  });
});

// Apply routes
app.use("/api/reservation", reservationRouter);

// Apply error middleware
app.use(errorMiddleware);

// Connect to the database
dbConnection();

export default app;
