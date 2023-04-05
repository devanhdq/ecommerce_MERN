import express from "express";
import * as dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import cors from 'cors'
dotenv.config();
connectDB();

const app = express();

// middleware
app.use(cors())
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/auth", authRoutes);

app.get("/", (req, res) => {
    res.send({
        message: "wellcome to app",
    });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on ${process.env.DEV_MODE} mode on port ${PORT}`.blue);
});
