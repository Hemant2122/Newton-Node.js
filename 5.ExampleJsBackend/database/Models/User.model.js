const mongoose = require("mongoose");
const { CONSTANTS_CREATE_USER } = require("../../util/constants");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            minLength: [CONSTANTS_CREATE_USER.min, "need min criteria fulfilled"],
            maxLength: CONSTANTS_CREATE_USER.max,
            unique: [true, "Username Should be Unique"],
        },

        email: {
            type: String,
            required: true,
            unique: [true, "Email Should be Unique"],
            minLength: 5,
            maxLength: 55,
        },

        password: {
            type: String,
            required: [true, "Password is required buddy!!"],
            minLength: 8,
        },

        contact: {
            type: Number,
            minLength: 10,
            maxLength: 10,
        },
    },

    { timestamps: true }

);


const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
