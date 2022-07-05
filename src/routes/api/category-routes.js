const { Router } = require("express");

const {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategoryById,
  deleteCategoryById,
} = require("../../controllers/api/category");

const router = Router();

// The `/api/categories` endpoint

router.get("/", getAllCategories);
router.get("/:id", getCategoryById);
router.post("/", createCategory);
router.put("/:id", updateCategoryById);
router.delete("/:id", deleteCategoryById);

module.exports = router;
