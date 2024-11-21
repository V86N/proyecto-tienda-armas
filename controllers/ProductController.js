const { Product } = require("../models/index")

const ProductController = {
    async create(req, res) {
      try {
        const product = await Product.create(req.body)
        res.status(201).send({ message: "Product created", category });
      } catch (error) {
        console.error(error);
        res.status(500).send({ message: "There was a problem", error });
      }
    },

    async update(req, res) {
        try {
          await Product.update(req.body, {
            where: {
              id: req.params.id,
            },
          })
          res.send({ message: "Product successfully updated" })
        } catch (error) {
          console.error(error);
          res.status(500).send({ message: "There was a problem", error });
        }
      },

      async delete(req, res) {
        try {
          await Product.destroy(
            {
              where: {
                id: req.params.id
              }
            })
          res.send({ message: `Product with id ${req.params.id} deleted` })
        } catch (error) {
          console.error(error);
          res.status(500).send({ message: "There was a problem", error });
        }
      },
}
module.exports = ProductController