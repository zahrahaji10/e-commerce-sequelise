const { Category, Product } = require("../../models");
const seedCategories = require("../../seeds/category-seeds");

// The `/api/categories` endpoint

// get all categories fn
const getAllCategories = async (req, res) => {
  try {
    // find all categories
    const categories = await Category.findAll({
      include: [
        {
          model: Product,
          attributes: ["id", `product_name`, "price", "stock", "category_id"],
        },
      ],
    });

    // be sure to include its associated Products
    return res.json({ data: categories });
  } catch (error) {
    console.log(`[ERROR]: Failed to get categories | ${error.message}`);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// get one category fn
const getCategoryById = async (req, res) => {
  try {
    // get id from req params
    const { id } = req.params;

    // find one category by its `id` value
    const category = await Category.findByPk(id, {
      include: [
        {
          model: Product,
          attributes: [`product_name`, "price", "stock", "category_id"],
        },
      ],
    });

    // return response
    return res.send({ data: category });
  } catch (error) {
    console.log(`[ERROR]: Failed to get categories by id | ${error.message}`);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// create new category fn
const createCategory = async (req, res) => {
  try {
    // get the payload from req body
    const { category_name } = req.body;

    // create a new category using category model
    const newCategory = await Category.create(req.body);

    // return response
    return res.send({ data: newCategory });
  } catch (error) {
    console.log(`[ERROR]: Failed to get categories by id | ${error.message}`);
    return res.status(500).json({ error: "Internal server error" });
  }
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
