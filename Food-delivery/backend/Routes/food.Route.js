const express = require('express');
const router = express.Router();
const { getFoodItems } = require('../Controller/food.Controller');

router.get('/foodItems', getFoodItems);

module.exports = router;
