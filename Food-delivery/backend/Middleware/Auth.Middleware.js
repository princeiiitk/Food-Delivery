const { body } = require('express-validator');

const validationCheckSignup = [
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({ min: 5 }).withMessage('Invalid password'),
];

const validationCheckLogin = [
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({ min: 5 }).withMessage('Invalid password'),
];

module.exports = { validationCheckSignup, validationCheckLogin };
