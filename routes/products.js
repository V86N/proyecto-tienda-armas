const express = require("express")
const ProductController = require("../controllers/ProductController")
const router = express.Router()


router.post("/create", ProductController.create)
router.put("/id/:id", ProductController.update)
router.delete("/id/:id", ProductController.delete)

module.exports = router