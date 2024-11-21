
const { Category, Product, Sequelize } = require("../models/index")
const {Op} = Sequelize

const CategoryController = {
  async create(req, res) {
    try {
      const category = await Category.create(req.body)
      res.status(201).send({ message: "Category created", category });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "There was a problem", error });
    }
  },

  async update(req, res) {
    try {
      await Category.update(req.body, {
        where: {
          id: req.params.id,
        },
      })
      res.send({ message: "Category successfully updated" })
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "There was a problem", error });
    }
  },

  async delete(req, res) {
    try {
      await Category.destroy(
        {
          where: {
            id: req.params.id
          }
        })
      res.send({ message: `Category with id ${req.params.id} deleted` })
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "There was a problem", error });
    }
  },

  async getAll(req, res) {
    try {
      const categories = await Category.findAll({
        include: [Product]
      })
      res.status(200).send(categories)
    }
    catch (error) {
      console.error(error);
      res.status(500).send({ message: "There was a problem", error });
    }
  },

  async getById(req,res) {
    try {
      const category = await Category.findByPk(req.params.id,{
        include: [Product]
      })
      res.send (category)
    } catch (error) {
      console.error(error);
      res.status(500).send({message: "There was a problem", error})
    }
  },

  async getByName(req,res){
    try {
      const category = await Category.findAll({
        where:{
          type:{
            [Op.like]:`%${req.params.type}%`
          }
        }
      })
      res.send(category)
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "There was a problem", error });
    }
  },

}


module.exports = CategoryController