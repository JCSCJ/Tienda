const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los productos", error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el producto", error });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, price, image, stock } = req.body;
    if (!name || !price || !image || !stock) {
      return res.status(400).json({ message: "Todos los campos son obligatorios." });
    }

    const newProduct = new Product({ name, price, image, stock });
    await newProduct.save();
    res.status(201).json({ message: "Producto agregado exitosamente", product: newProduct });
  } catch (error) {
    res.status(500).json({ message: "Error al agregar el producto", error });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { name, price, image, stock } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { name, price, image, stock },
      { new: true, runValidators: true } // Retorna el nuevo producto actualizado
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    res.json({ message: "Producto actualizado exitosamente", product: updatedProduct });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el producto", error });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    res.json({ message: "Producto eliminado exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el producto", error });
  }
});

module.exports = router;
