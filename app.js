import express from "express"
import cookieParser from "cookie-parser"
import dotenv from "dotenv";
import cors from "cors"
import UserRouter from "./routes/student.routes.js"
import connectDb from "./config/database.js"
dotenv.config();
connectDb();
const app = express();
app.use(cors({
    origin: 'https://resume-builder-theta-ten.vercel.app/',
  }));
app.get("/",(req,res)=>{
  res.send("<H1>Backend Server is Running<H1\>")
})
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use("/api/v1/user",UserRouter);
export default app;