const Stock = require("../models/stockModel");

exports.getStocks = async (req, res) => {
  const stocks = await Stock.find().populate("product");
  res.json(stocks);
};

exports.addStock = async (req, res) => {
  const newStock = new Stock(req.body);
  const saved = await newStock.save();
  res.json(saved);
};
