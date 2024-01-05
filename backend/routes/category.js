const express = require('express');

const categoryRouter = express.Router();
const {createCategory ,getAllCategory,getCategoryByName} = require("../controllers/category");

categoryRouter.post("/create",createCategory );
categoryRouter.get("/",getAllCategory);
categoryRouter.get("/:name",getCategoryByName)

module.exports=categoryRouter;

