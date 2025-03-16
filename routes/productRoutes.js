const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

router.get("/", async (req, res) => {
    try {
      console.log("📢 Se recibió una solicitud GET a /api/products");
      const products = await Product.find();
      console.log("📦 Productos encontrados:", products);
      res.json(products);
    } catch (error) {
      console.error("❌ Error obteniendo productos:", error);
      res.status(500).json({ message: "Error obteniendo productos" });
    }
  });
  

module.exports = router;
