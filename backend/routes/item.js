const express = require('express');
const {createItemByUser,updateItemByUser, deleteItemByUser} = require("../controllers/item");

const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')

const itemRouter = express.Router();

itemRouter.post("/create/:name",authentication,authorization("ADD"),createItemByUser);

itemRouter.put('/update/:id',authentication,authorization("UPDATE"),updateItemByUser);

itemRouter.delete('/delete/:id',authentication,authorization("DELETE"),deleteItemByUser)


module.exports=itemRouter;

