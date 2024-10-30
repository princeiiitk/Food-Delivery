const users = require('../Model/users.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const securePassword = await bcrypt.hash(req.body.password, salt);

    try {
        const data = {
            name: req.body.name,
            email: req.body.email,
            password: securePassword,
            location: req.body.location,
        };
        await users.create(data);
        return res.send({ success: true });
    } catch (err) {
        console.error(err);
        return res.json({ success: false });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const login = await users.findOne({ email });
       
        if (!login) {
            
            return res.send({ success: false });
        }

        const isPasswordMatch = await bcrypt.compare(password, login.password);
        if (!isPasswordMatch) {
            return res.send({ success: false });
        }

        const authToken = jwt.sign({ id: login._id }, process.env.SECRET_KEY);
        return res.send({ success: true, authToken });
    } catch (err) {
        return res.send({ success: false });
    }
};
