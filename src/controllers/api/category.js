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
    return res.send({ data: newCategory, status: 200 });
  } catch (error) {
    console.log(`[ERROR]: Failed to get categories by id | ${error.message}`);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// update category fn
const updateCategoryById = async (req, res) => {
  try {
    // get id from req params
    const category = req.params.id;

    // update a category using category model
    const updateCategory = await Category.update(req.body, {
      where: { id: category },
    });

    // return response
    return res.json({ data: updateCategory, status: 200 });
  } catch (error) {
    console.log(`[ERROR]: Failed to get categories by id | ${error.message}`);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// delete category fn
const deleteCategoryById = async (req, res) => {
  try {
    // get id from req params
    const category = req.params.id;

    // delete a category using category model
    const deleteCategory = await Category.destroy({
      where: { id: category },
    });

    return res.json({ data: deleteCategory, status: 200 });
  } catch (error) {
    console.log(`[ERROR]: Failed to delete | ${error.message}`);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategoryById,
  deleteCategoryById,
};
