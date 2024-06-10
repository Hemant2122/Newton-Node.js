const UserModel = require("../database/Models/User.model");
const jwt = require("jsonwebtoken");

// const secret = process.env.JWT_SECRET;
// const secret = "hemantkumar";

async function loginUserService(body, secret){
    // const secret = "hemantkumar";
    try {
        const { username, password } = body;
        const foundUser = await UserModel.find({ username });

        // console.log(username, foundUser[0].username === username, "foundUser Name");
        // console.log(password, foundUser[0].password === password, "foundUser");

        if(foundUser && foundUser[0].password  === password){
            const payload = {
                user: { id: foundUser[0]._id.toString(), name: foundUser[0].username },
            }
            const authToken = jwt.sign(payload, secret);

            return {status: 200, token: authToken,}
        } else {
            throw new Error();
        }

    } catch(error) {
        throw new Error("Cant Login Give Good credentials " + error.message);
    }
}

module.exports = { loginUserService }