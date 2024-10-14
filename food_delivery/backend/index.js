require('dotenv').config()
const express = require('express')
require('./db/connection')
const app = express();
const cors = require('cors')
app.use(cors())
const port = process.env.PORT || 4000;
app.use(express.urlencoded({ extended: false }));
app.use(express.json()
);

//routes 1 for get all data from mongoDB and display on home page
const foodItems = require('./model/food-items')
const food_cat = require('./model/food_cat')
app.get('/foodItems', async (req, res) => {
  const data = await foodItems.find({})
  const food = await food_cat.find({})
  return res.send([data, food])
})


//routes 2 for craete user or sginup page and store in database

const { body, validationResult } = require('express-validator');
const users = require('./model/users')
//bcrpt use for encrypt password and store database  
const bcrypt = require('bcryptjs')



//middleware use for validation of email and password
const validationcheck = [
  body('email').isEmail().withMessage('Invalid email address'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  body('password').isLength({ min: 5 }).withMessage('Invalid password'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },

];


app.post('/createuser', validationcheck, async (req, res) => {
  const salt = await bcrypt.genSalt(10)
  const sequirepassword = await bcrypt.hash(req.body.password, salt)
  try {
    const data = {
      name: req.body.name,
      email: req.body.email,
      password: sequirepassword,
      location: req.body.location
    }
    await users.create(data).then(res.send({ succuss: true }))

  }
  catch (err) {
    console.log(err);
    res.json({ success: false })
  }
})


//routes 3 for login use after matching email or password req. sending from fronted 
//jwt module use for genrate for authtoken and give authorasation
 const jwt = require('jsonwebtoken')



 //middleware use for validation of email and password
const validationcheckL = [
  body('email').isEmail().withMessage('Invalid email address'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.send({ success: false });
    }
    next();
  },
  body('password').isLength({ min: 5 }).withMessage('Invalid password'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.send({ success: false });
    }
    next();
  },

];
app.post('/Login', validationcheckL, async (req, res) => {

  try {

    let email = req.body.email;
    let password = req.body.password

    let login = await users.findOne({ email });
    const comppassword = await bcrypt.compare(password, login.password);

    if (!login) {
      return res.send({ success: false });
    }

    if (!comppassword) {
      return res.send({ success: false })
    }
    const sign = {
      data: {
        id: login.id
      }
    }
    const seckey = "mynameisprinceiamfastleraner#_"
    //sgin of user 
    const authToken = jwt.sign(sign, seckey)

    return res.send({ success: true, authToken })
  }
  catch (err) {
    res.send({ success: false })
  }
})







//routs 4 for store  order data from sending req. from fronted
const order = require('./model/Order');
app.post('/OrderData', async (req, res) => {
  console.log("hii")
  let data = req.body.order_data



 
  let eId = await order.findOne({ 'email': req.body.email })

  if (eId === null) {
    try {


      await order.create({
        email: req.body.email,
        order_data: data

      })

        .then(() => {
          res.send({ success: true })
        })

    } catch (error) {
      console.log(error.message)
      res.send("Server Error", error.message)

    }
  }

  else {
    try {
      await order.findOneAndUpdate({ email: req.body.email },
        { $push: { order_data: data } })

        .then(() => {
          res.send({ success: true })
        })
    } catch (error) {

      res.send("Server Error", error.message)
    }
  }
})




//routs--5 first cheking email in database present or not 
//then send data your order
const Orders = require('./model/Order');
app.post('/myOrder', async (req, res) => {
  let eId = await Orders.findOne({ 'email': req.body.email })
  // console.log(eId)
  res.send(eId.order_data)
});





app.get('/', (req, res) => {
 
  return res.send("hello");
})


app.listen(port, () => {
  console.log(`port is running at ${port}`)
})