import { configDotenv } from "dotenv";
import express from "express";
import userRoute from "./routes/user_routes.js";
import { connectToMongoDB } from "./connect.js";
import cookieParser from "cookie-parser";
import cors from "cors";

configDotenv();
connectToMongoDB(process.env.MONGO_URL).then(console.log("mongodb connected"));
const app = express();
const PORT = process.env.PORT;

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(express.urlencoded({ extended: false }));
app.use(express.raw());
app.use(express.json({ extended: false }));
app.use(cookieParser());
app.use("/", userRoute);
app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`));
