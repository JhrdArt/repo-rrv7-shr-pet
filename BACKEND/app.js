import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import productsRouter from "./src/controllers/products.controller.js";
import { products } from "./products.js";
import ProductModel from "./src/schema/product-schema.js";

export const app = express();

app.use(express.json());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || " http://localhost:3001",
  })
);

const MONGODB_URI = process.env.MONGODB_URI;
console.log("🚀 ~ MONGODB_URI:", MONGODB_URI);

async function bootstrap() {
  try {
    await mongoose.connect(MONGODB_URI, { dbName: "Products" });
    console.log("Connected to MongoDB successfully!");

    const productCount = await ProductModel.countDocuments();
    if (productCount === 0) {
      console.log("Seeding products...");
      await ProductModel.insertMany(products);
      console.log("Products seeded successfully!");
    } else {
      console.log("Products already exist. Skipping seeding.");
    }
  } catch (error) {
    console.error(`Error initializing server: ${error}`);
    process.exit(1);
  }
}

bootstrap();

app.use("/hola", (req, res) => res.send("Mundo"));
app.use("/products", productsRouter);
