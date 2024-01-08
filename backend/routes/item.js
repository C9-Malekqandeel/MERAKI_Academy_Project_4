const express = require('express');
const {createItemByUser,updateItemByUser, deleteItemByUser, getAllItemRandom, getItemsByName, getItemByUser, createNewComment, updateComment, deleteComment} = require("../controllers/item");

const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')

const itemRouter = express.Router();

itemRouter.post("/create/:id",authentication,authorization("UPDATE"),createItemByUser);

itemRouter.put('/update/:id',authentication,authorization("UPDATE"),updateItemByUser);

itemRouter.delete('/delete/:id',authentication,authorization("DELETE"),deleteItemByUser);

itemRouter.get('/random',getAllItemRandom);

itemRouter.get('/item/:name',getItemsByName);

itemRouter.get('/user/:id',getItemByUser);

itemRouter.post('/:item/comments',authentication,createNewComment);

itemRouter.put('/:item/comments/:id/update',authentication,updateComment);
itemRouter.delete("/:item/comments/:id/delete",authentication,deleteComment);




module.exports=itemRouter;

