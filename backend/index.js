import express from "express";
import dotenv from "dotenv"
import { connectDB } from "./cofing/db.js";
import authRoutes from "./routes/auth.route.js"

dotenv.config()
const app = express();
const port = process.env.PORT || 5000

app.use(express.json());

app.get("/" , (req , res) =>{
    res.send("server is starded")
})

app.use("/api/auth" , authRoutes)

app.listen(port , async() =>{
    await connectDB()
    console.log(`server is running in port ${port}`)
})
