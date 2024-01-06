const express = require('express');
const { createOrder, updateOrderForCheckout, deleteOrder } = require('../controllers/order');
const authentication = require('../middleware/authentication');

const orderRouter = express.Router();


orderRouter.post('/create/:id',authentication,createOrder);
orderRouter.put('/checkout/:id',authentication,updateOrderForCheckout)
orderRouter.delete('/delete/:id',authentication,deleteOrder)


module.exports=orderRouter;