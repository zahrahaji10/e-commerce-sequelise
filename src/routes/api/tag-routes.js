const { Router } = require("express");

const {
  getAllTags,
  getTagById,
  createTag,
  updateTagById,
  deleteTagById,
} = require("../../controllers/api/tag");

const router = Router();

// The `/api/tags` endpoint

router.get("/", getAllTags);
router.get("/:id", getTagById);
router.post("/", createTag);
router.put("/:id", updateTagById);
router.delete("/:id", deleteTagById);

module.exports = router;
