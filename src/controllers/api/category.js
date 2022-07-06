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
    return res.status(500).json({ message: "Internal server error" });
  }
};

// get one category fn
const getCategoryById = (req, res) => {
  try {
    // find one category by its `id` value using req params
    const { id } = req.params;

    // be sure to include its associated Products
    // get books from file
    const books = getDataFromFile("books");

    // find book by id
    const singleCategories = Category.find((category) => category.id === id);

    // return response
    return res.json({ data: categories });

    return res.send("getCategoryById");
  } catch (error) {
    console.log(`[ERROR]: Failed to get categories by id | ${error.message}`);
    return res.status(500).json({ message: "Internal server error" });
  }
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
