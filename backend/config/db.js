import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://sreem7808:uiZc7CuQRmBf5CEN@cluster0.1q2ty.mongodb.net/tomato').then(() => console.log("DB Connected."));
}