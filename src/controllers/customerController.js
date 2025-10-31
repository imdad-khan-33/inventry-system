const Customer = require("../models/customerModel");

exports.getCustomers = async (req, res) => {
  const customers = await Customer.find();
  res.json(customers);
};

exports.addCustomer = async (req, res) => {
  const newCustomer = new Customer(req.body);
  const saved = await newCustomer.save();
  res.json(saved);
};
