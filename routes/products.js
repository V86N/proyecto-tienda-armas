const express = require("express")
const ProductController = require("../controllers/ProductController")
const router = express.Router()
const {authentication, isAdmin} = require('../middleware/authentication')



router.post("/create", ProductController.create)
router.put("/id/:id", authentication, isAdmin, ProductController.update)
router.delete('id/:id',authentication, isAdmin, ProductController.delete)


module.exports = router