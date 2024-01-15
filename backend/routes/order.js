const express = require('express');
const { createOrder, updateOrderForCheckout, deleteOrder, getOrders } = require('../controllers/order');
const authentication = require('../middleware/authentication');

const orderRouter = express.Router();


orderRouter.post('/create/:id',authentication,createOrder);
orderRouter.put('/checkout/:id',authentication,updateOrderForCheckout)
orderRouter.delete('/delete/:id',authentication,deleteOrder);
orderRouter.get('/user/:id',authentication,getOrders);


module.exports=orderRouter;