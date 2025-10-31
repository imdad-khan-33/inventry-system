const express = require("express");
const { getStocks, addStock } = require("../controllers/stockController");
const router = express.Router();

router.get("/", getStocks);
router.post("/", addStock);

module.exports = router;
