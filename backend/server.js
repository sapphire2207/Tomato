import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config.js'
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRouter.js";


// App Config
const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json())
app.use(cors())

// DB Connection
connectDB();

// API Endpoint
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)

app.get("/", (req, res) => {
    res.send("API Working")
})

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port} `)
})

// mongodb+srv://sreem7808:uiZc7CuQRmBf5CEN@cluster0.1q2ty.mongodb.net/?