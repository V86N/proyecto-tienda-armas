const express = require("express")
const ProductController = require("../controllers/ProductController")
const router = express.Router()
const {authentication, isAdmin} = require('../middleware/authentication')



router.post("/create", authentication, ProductController.create)
router.put("/id/:id", authentication, isAdmin, ProductController.update)
router.delete('/id/:id',authentication, isAdmin, ProductController.delete)
router.get("/getAll", ProductController.getAll)
router.get("/id/:id", ProductController.getById)
router.get("/name/:name", ProductController.getByName)
router.get("/price", ProductController.getByPrice)
router.get("/order/price", ProductController.getOrderedByPrice)


module.exports = router