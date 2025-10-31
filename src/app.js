const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();



/////.... Routes
const productRoutes = require("./routes/productRoutes");
const customerRoutes = require("./routes/customerRoutes");
const stockRoutes = require("./routes/stockRoutes");

const app = express();
app.use(cors());
app.use(express.json());



app.use("/api/products", productRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/stocks", stockRoutes);



app.get("/", (req, res) => {
  res.send("Inventory Management System API is running...");
});



mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => console.error(" MongoDB Connection Failed:", err.message));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
