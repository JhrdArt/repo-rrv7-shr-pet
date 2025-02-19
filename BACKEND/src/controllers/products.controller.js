import express from "express";
import ProductModel from "../schema/product-schema.js";
import { products } from "../../products.js";

const Router = express.Router();

Router.post("/", async (req, res) => {
  try {
    await ProductModel.deleteMany({});

    const insertProducts = ProductModel.insertMany(products);
    res
      .status(201)
      .json({ message: "Productos agregados con éxito", insertProducts });
  } catch (error) {
    console.error(error);
    res.status(500).send(`Internal server error: ${error}`);
  }
});

Router.get("/", async (req, res) => {
  try {
    const products = await ProductModel.find({});
    res.status(200).send(products);
  } catch (error) {
    console.error(error);
  }
});

Router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductModel.findById(id);
    res.status(200).send(product);
  } catch (error) {
    console.error(error);
  }
});

export default Router;
