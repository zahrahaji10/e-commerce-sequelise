const { Tag, Product, Category, ProductTag } = require("../../models");

// get all tags fn
const getAllTags = async (req, res) => {
  try {
    // find all tags
    const tags = await Tag.findAll({
      include: [
        {
          model: Product,
          attributes: ["id", `product_name`, "price", "stock", "category_id"],
        },
      ],
    });

    // return response
    return res.json({ data: tags, status: 200 });
  } catch (error) {
    console.log(`[ERROR]: Failed to get tags | ${error.message}`);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// get one tag fn
const getTagById = async (req, res) => {
  try {
    // get id from req params
    const tagId = req.params.id;

    // find one tag by id
    const tag = await Tag.findByPk(tagId, {
      include: [
        {
          model: Product,
          attributes: [`product_name`, "price", "stock", "category_id"],
        },
      ],
    });

    // return response
    return res.json({ data: tag, status: 200 });
  } catch (error) {
    console.log(`[ERROR]: Failed to get tag by id | ${error.message}`);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// create new tag fn
const createTag = async (req, res) => {
  try {
    // create the body for to create tag
    const { id, tag_name } = req.body;

    //  create a new category using category model
    const newTag = await Tag.create(req.body);

    // return response
    return res.json({ data: newTag, status: 200 });
  } catch (error) {
    console.log(`[ERROR]: Failed to create a tag | ${error.message}`);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// update tag fn
const updateTagById = async (req, res) => {
  try {
    // get id from req params
    const tag = req.params.id;

    //  update tag using category model
    const updateTag = await Tag.update(req.body, {
      where: { id: tag },
    });

    // return response
    return res.json({ data: updateTag, status: 200 });
  } catch (error) {
    console.log(`[ERROR]: Failed to update a tag | ${error.message}`);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// delete product fn
const deleteTagById = async (req, res) => {
  try {
    // get tag by id
    const tag = req.params.id;

    // delete a tag using tag model
    const deleteTag = await Tag.destroy({
      where: { id: tag },
    });
    // return response
    return res.json({ data: deleteTag, status: 200 });
  } catch (error) {
    console.log(`[ERROR]: Failed to delete a tag | ${error.message}`);
    return res.status(500).json({ error: "Internal server error" });
  }
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
