const express = require('express');
const router = express.Router();
const { createOrder, getMyOrders } = require('../Controller/order.Controller');

router.post('/OrderData', createOrder);
router.post('/myOrder', getMyOrders);

module.exports = router;
