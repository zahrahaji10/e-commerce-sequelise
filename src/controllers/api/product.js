const { Product, Category, Tag, ProductTag } = require("../../models");

// The `/api/products` endpoint

// get all products fn
const getAllProducts = async (req, res) => {
  try {
    // find all categories
    const products = await Product.findAll({
      include: [
        {
          model: Category,
          attributes: ["id", `category_name`],
        },
        {
          model: Tag,
          attributes: ["id", `tag_name`],
        },
      ],
    });
    // return response
    return res.json({ data: products, status: 200 });
  } catch (error) {
    console.log(`[ERROR]: Failed to get products | ${error.message}`);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// get one product fn
const getProductById = async (req, res) => {
  try {
    // get id from req params
    const productId = req.params.id;

    // find one product by id
    const product = await Product.findByPk(productId, {
      include: [
        {
          model: Category,
          attributes: ["id", `category_name`],
        },
        {
          model: Tag,
          attributes: ["id", `tag_name`],
        },
      ],
    });

    // be sure to include its associated Category and Tag data
    return res.json({ data: product, status: 200 });
  } catch (error) {
    console.log(`[ERROR]: Failed to get product by id | ${error.message}`);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// create new product fn
const createProduct = (req, res) => {
  /* req.body should look like this...
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */
  Product.create(req.body)
    .then((product) => {
      // if there's product tags, we need to create pairings to bulk create in the ProductTag model
      if (req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }
      // if no product tags, just respond
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
};

// update product fn
const updateProductById = (req, res) => {
  {
    // update product data
    Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
      .then((product) => {
        // find all associated tags from ProductTag
        return ProductTag.findAll({ where: { product_id: req.params.id } });
      })
      .then((productTags) => {
        // get list of current tag_ids
        const productTagIds = productTags.map(({ tag_id }) => tag_id);
        // create filtered list of new tag_ids
        const newProductTags = req.body.tagIds
          .filter((tag_id) => !productTagIds.includes(tag_id))
          .map((tag_id) => {
            return {
              product_id: req.params.id,
              tag_id,
            };
          });
        // figure out which ones to remove
        const productTagsToRemove = productTags
          .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
          .map(({ id }) => id);

        // run both actions
        return Promise.all([
          ProductTag.destroy({ where: { id: productTagsToRemove } }),
          ProductTag.bulkCreate(newProductTags),
        ]);
      })
      .then((updatedProductTags) => res.json(updatedProductTags))
      .catch((err) => {
        // console.log(err);
        res.status(400).json(err);
      });
  }
};

// delete product fn
const deleteProductById = async (req, res) => {
  try {
    // get id from req params
    const productId = req.params.id;

    // delete a category using category model
    const deleteProduct = await Product.destroy({
      where: { id: productId },
    });
    // return response
    return res.json({ data: deleteProduct, status: 200 });
  } catch (error) {
    console.log(`[ERROR]: Failed to delete product | ${error.message}`);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProductById,
  deleteProductById,
};
