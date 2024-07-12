import cors from "cors";
import express from "express";
import booksRoute from "./routes/booksRoute.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const DATABASE_URL =
  "mongodb+srv://whelantionne:VrIJKh8wEk7f7m0@books-store-mern.mf5exqa.mongodb.net/?retryWrites=true&w=majority&appName=Books-Store-MERN";
const PORT = 5555;

console.log(PORT);
console.log(DATABASE_URL);

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(
  cors({
    origin: ["https://mern-stack-bookstore-2.onrender.com/"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json()); //formats jason data
app.use("/books", booksRoute);

app.get("/", (req, res) => {
  res.send({ success: "Backend is success" });
});
mongoose
  .connect(DATABASE_URL)
  .then(() => {
    console.log("Mongo db is connected");
    app.listen(PORT, () => {
      console.log("Server is running in port", PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
