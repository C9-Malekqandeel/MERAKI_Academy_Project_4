const express = require('express');

const categoryRouter = express.Router();
const {createCategory ,getAllCategory,getCategoryByName, getCategoryByUser, getAllCategoryForUser} = require("../controllers/category");
const authentication = require('../middleware/authentication');
const authorization = require('../middleware/authorization');

categoryRouter.post("/create",createCategory );
categoryRouter.get("/",getAllCategory);
categoryRouter.get("/:name",getCategoryByName);
categoryRouter.get("/userId",getCategoryByUser);

categoryRouter.get('/:id',authentication,authorization("READ"),getAllCategoryForUser)

module.exports=categoryRouter;

