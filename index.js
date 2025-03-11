import express from "express";
import userRoute from "./routes/user_routes.js";
import {connectToMongoDB} from "./connect.js";
import cookieParser from "cookie-parser";

connectToMongoDB("mongodb://127.0.0.1:27017/todoDB").then(console.log("mongodb connected"));
const app = express();
const PORT = 8000;

app.use(express.urlencoded({extended: false}));
app.use(express.raw());
app.use(express.json({extended: false}));
app.use(cookieParser());
app.use("/", userRoute);
app.listen(PORT, ()=> console.log(`Server started at PORT ${PORT}`));
