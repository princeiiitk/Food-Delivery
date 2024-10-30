const express = require('express');
const router = express.Router();

const { signup, login } = require('../Controller/auth.Controller');
const { validationCheckSignup, validationCheckLogin } = require('../Middleware/Auth.Middleware');

router.post('/createuser', validationCheckSignup, signup);
router.post('/Login', validationCheckLogin, login);

module.exports = router;
