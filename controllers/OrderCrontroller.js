const {Order, Product } = require("../models/index")


const OrderController = {
   async create(req,res){
    try {
      const order = await Order.create({...req.body,UserId:req.user.id})
      order.addProduct(req.body.ProductId)
      res.status(201).send({message: "Order successfully created"})
    } catch (error){
      console.error(error)
      res.status(500).send({message: "There was a problem", error})
    }
}  ,
    async getAll(req,res){
      try {
          const orders = await Order.findAll({
              attributes:["date"],
              include:{
                  model:Product,
                  attributes: ["name", "price"],
                  through: { attributes: [] }
              }
          }) 
          res.send({message:"Here are all the orders",orders})
      } catch (error) {
          console.error(error);
          res.status(500).send({ message: "There was a problem", error });
      }
    
  },
}
module.exports = OrderController