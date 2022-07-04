const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

const getAllCategories = (req, res) => {
  // find all categories
  // be sure to include its associated Products
  return res.send("getAllCategories");
};

const getCategoryById = (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  return res.send("getCategoryById");
};

const createCategory = (req, res) => {
  // create a new category
  return res.send("createCategory");
};

const updateCategoryById = (req, res) => {
  // update a category by its `id` value
  return res.send("updateCategoryById");
};

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
