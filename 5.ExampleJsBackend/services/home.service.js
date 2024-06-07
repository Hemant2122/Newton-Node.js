const UserModel = require("../database/Models/User.model");
const { UserNotCreated } = require("../exceptions/UserNotValid");



async function createuserservice(body) {

    try {
        const userObj = new UserModel({
            username: username,
            password: password,
            email: email,
        });
        
        await userObj.save();

        return {
            status: 201,
            message: "User created Successfully " + userObj._id
        }
    } catch(error) {
        throw new UserNotCreated("USER NOT CREATED !!! " + error.message);
    }

}

module.exports = {createuserservice};