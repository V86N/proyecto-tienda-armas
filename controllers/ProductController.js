const { Product, Category, Sequelize } = require("../models/index")
const {Op} = Sequelize

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

      async getAll(req, res) {
        try {
          const products = await Product.findAll({
            include: [Category]
          })
          res.status(200).send(products)
        }
        catch (error) {
          console.error(error);
          res.status(500).send({ message: "There was a problem", error });
        }
      },

      async getById(req,res) {
        try {
          const product = await Product.findByPk(req.params.id,{
            include: [Category]
          })
          res.send (product)
        } catch (error) {
          console.error(error);
          res.status(500).send({message: "There was a problem", error})
        }
      },

      async getByName(req,res){
        try {
          const product = await Product.findAll({
            where:{
              name:{
                [Op.like]:`%${req.params.name}%`
              }
            }
          })
          res.send(product)
        } catch (error) {
          console.error(error);
          res.status(500).send({ message: "There was a problem", error });
        }
      },

      async getByPrice(req, res) {
        try {
          const { minPrice, maxPrice } = req.query; // Se obtienen los parámetros minPrice y maxPrice de la consulta
          
          // Si no se proporciona un precio mínimo o máximo, se obtiene todos los productos
          const products = await Product.findAll({
            where: {
              price: {
                [Op.gte]: minPrice || 0,  // Filtra productos con precio mayor o igual a minPrice
                [Op.lte]: maxPrice || 10000,  // Filtra productos con precio menor o igual a maxPrice
              },
            },
            include: [Category],
          });

          res.status(200).send(products);
        } catch (error) {
          console.error(error);
          res.status(500).send({ message: "There was a problem", error });
        }
    }, 

    async getOrderedByPrice(req, res) {
      try {
        const products = await Product.findAll({
          include: [Category],
          order: [['price', 'DESC']],  
        });

        res.status(200).send(products);
      } catch (error) {
        console.error(error);
        res.status(500).send({ message: "There was a problem", error });
      }
  },
}
module.exports = ProductController