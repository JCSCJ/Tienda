require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const productRoutes = require("./routes/productRoutes");

app.use("/api/products", productRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Conectado a MongoDB");
    app.listen(process.env.PORT || 5000, () =>
      console.log(`🚀 Servidor corriendo en http://localhost:${process.env.PORT || 5000}`)
    );
  })
  .catch(err => console.error("❌ Error al conectar MongoDB:", err));

