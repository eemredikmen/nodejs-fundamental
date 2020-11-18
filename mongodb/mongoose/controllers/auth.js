const User = require('../models/User');
const register = async (req, res, next) => {
    //* POST DATA

    const name = "Emre Dikmen";
    const email = 'yunus.dikmen@hotmail.com';
    const password = "123456";

    //* async,await

    const user = await User.create({
        name,
        email,
        password,
    })

    res
        .status(200)
        .json({
            success: true,
            data: user
        })

}

module.exports = {
    register
};