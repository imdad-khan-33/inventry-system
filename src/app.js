const dotenv = require("dotenv");
const connectDB = require("./config/db");
const express = require("express")
const app = express();
const productRoutes = require("./routes/productRoutes");
const cors = require("cors")


dotenv.config();
// Connect MongoDB
connectDB();

app.use(cors());
app.use(express.json());




const PORT = process.env.PORT || 5000;

  




app.use("/api/products", productRoutes);


// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
