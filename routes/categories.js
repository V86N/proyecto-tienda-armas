const express = require("express")
const CategoryController = require("../controllers/CategoryController")
const router = express.Router()

router.post("/create", CategoryController.create)
router.put("/id/:id", CategoryController.update)
router.delete("/id/:id", CategoryController.delete)
router.get("/getAll", CategoryController.getAll)
router.get("/getById", CategoryController.getById)


module.exports = router