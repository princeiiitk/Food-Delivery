require('dotenv').config();
const express = require('express');
require('./db/connection');

const app = express();
const cors = require('cors');
const port = process.env.PORT || 4000;


app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
const authRoutes = require('./Routes/auth.Route');
const orderRoutes = require('./Routes/order.Route');
const foodRoutes = require('./Routes/food.Route');

app.use('/', foodRoutes);
app.use('/', authRoutes);
app.use('/', orderRoutes);

app.get('/', (req, res) => {
  return res.send("hello");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
