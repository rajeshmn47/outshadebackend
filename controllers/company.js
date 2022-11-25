const Client = require("../models/product");
const Category = require("../models/category");
const bodyParser = require("body-parser");
var express = require("express");
const router = express.Router();

router.get("/getallproducts", async function (req, res) {
  console.log(req.query.page);
  const page = req.query.page ? req.query.page : 1;
  console.log("rajesh");
  const clients = await Client.find();
  res.status(200).json({
    clients: clients,
    pagecount: clients.length,
    rajesh: "mn",
  });
});

router.get("/getallcategories", async function (req, res) {
  console.log(req.query.page);
  const page = req.query.page ? req.query.page : 1;
  console.log("rajesh");
  const categories = await Category.find();
  res.status(200).json({
    clients: categories,
    pagecount: categories.length,
    rajesh: "mn",
  });
});

router.post("/createproduct", async function (req, res) {
  console.log("i am rajesh");
  console.log(req.body, "rajesh is crazy");
  const { name, price, category } = req.body;
  const user = Client({
    name: name,
    price: price,
    categoryId: category,
  });
  await user.save();

  res.status(200).json({
    clients: "useddr",
  });
});

router.post("/createcategory", async function (req, res) {
  console.log("i am rajesh");
  console.log(req.body, "rajesh is crazy");
  const { name } = req.body;
  const category = Category({
    name: name,
  });
  await category.save();

  res.status(200).json({
    clients: "useddr",
  });
});

router.get("/deleteproduct/:id", async function (req, res) {
  console.log(req.params.id, "rajeshhgffddasddfg");
  const user = await Client.findById(req.params.id);
  await user.remove();
  res.status(200).json({
    deleted: "ok",
    id: req.params.id,
  });
});

router.get("/deletecategory/:id", async function (req, res) {
  console.log(req.params.id, "rajeshhgffddasddfg");
  const user = await Category.findById(req.params.id);
  await user.remove();
  res.status(200).json({
    deleted: "ok",
    id: req.params.id,
  });
});

router.post("/editproduct/:id", async function (req, res) {
  const { id, name, price, category } = req.body;
  const client = await Client.findById(req.body.id);
  (client.name = name),
    (client.price = price),
    (client.categoryId = category),
    await client.save();
  res.status(200).json({
    users: "user",
    id: req.body,
  });
});

router.post("/editcategory/:id", async function (req, res) {
  console.log(req.params.id, "rajeshhgffddasddfg");
  const { name } = req.body;
  const category = await Category.findById(req.params.id);
  (category.name = name), await category.save();
  res.status(200).json({
    deleted: "ok",
    id: req.params.id,
  });
});

router.get("/getonequestion/:id", async (req, res, next) => {
  console.log(req.params.d);
  res.status(200).json({
    success: true,
    id: req.params.id,
  });
});

module.exports = router;
