const { Tag, Product, ProductTag } = require("../../models");

// get all tags fn
const getAllTags = (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  return res.send("getAllTags");
};

// get one tag fn
const getTagById = (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  return res.send("getTagById");
};

// create new tag fn
const createTag = (req, res) => {
  // create a new tag
  return res.send("createTag");
};

// update tag fn
const updateTagById = (req, res) => {
  // update a tag's name by its `id` value
  return res.send("updateTagById");
};

// delete product fn
const deleteTagById = (req, res) => {
  // update a tag's name by its `id` value
  return res.send(" deleteTagById");
};

module.exports = {
  getAllTags,
  getTagById,
  createTag,
  updateTagById,
  deleteTagById,
};
