require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const productRoutes = require("./routes/productRoutes");
const Product = require("./models/Product");
const products = require("./products.json");

app.use("/api/products", productRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("Conectado a MongoDB");

    const existingProducts = await Product.countDocuments();
    if (existingProducts === 0) {
      await Product.insertMany(products);
      console.log("Productos insertados automáticamente");
    } else {
      console.log("Los productos ya existen en la base de datos.");
    }

    app.listen(process.env.PORT || 5000, () =>
      console.log(`Servidor corriendo en http://localhost:${process.env.PORT || 5000}`)
    );
  })
  .catch(err => console.error("Error al conectar MongoDB:", err));
