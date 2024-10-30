const foodItems = require('../Model/food-items');
const food_cat = require('../Model/food_cat');

exports.getFoodItems = async (req, res) => {
    try {
        const data = await foodItems.find({});
        const foodCategories = await food_cat.find({});
        return res.send([data, foodCategories]);
    } catch (error) {
        console.error(error.message);
        return res.status(500).send("Server Error");
    }
};
