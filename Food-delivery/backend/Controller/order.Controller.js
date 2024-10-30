const order = require('../Model/Order');

exports.createOrder = async (req, res) => {
    const data = req.body.order_data;
    const email = req.body.email;

    try {
        let existingOrder = await order.findOne({ email });

        if (!existingOrder) {
            await order.create({ email, order_data: data });
        } else {
            await order.findOneAndUpdate(
                { email },
                { $push: { order_data: data } }
            );
        }
        return res.send({ success: true });
    } catch (error) {
        console.error(error.message);
        return res.status(500).send("Server Error");
    }
};

exports.getMyOrders = async (req, res) => {
    try {
        const email = req.body.email;
        const existingOrder = await order.findOne({ email });

        if (existingOrder) {
            return res.send(existingOrder.order_data);
        } else {
            return res.send([]);
        }
    } catch (error) {
        console.error(error.message);
        return res.status(500).send("Server Error");
    }
};
