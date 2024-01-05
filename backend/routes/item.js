const express = require('express');
const {createItemByUser} = require("../controllers/item");

const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')

const itemRouter = express.Router();

itemRouter.post("/create",authentication,authorization("ADD"),createItemByUser);


module.exports=itemRouter;

