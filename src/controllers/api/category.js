const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

// get all categories fn
const getAllCategories = async (req, res) => {
  // find all categories
  const categories = await Category.findAll();

  // be sure to include its associated Products
  return res.json({ data: categories });
};

// get one category fn
const getCategoryById = (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  return res.send("getCategoryById");
};

// create new category fn
const createCategory = (req, res) => {
  // create a new category
  // create the payload structure
  // use the .create field for model
  return res.send("createCategory");
};

// update category fn
const updateCategoryById = (req, res) => {
  // update a category by its `id` value
  return res.send("updateCategoryById");
};

// delete category fn
const deleteCategoryById = (req, res) => {
  // delete a category by its `id` value
  return res.send("updateCategoryById");
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategoryById,
  deleteCategoryById,
};
