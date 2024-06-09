const { required } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 100,
    },

    description: {
        type: String,
        required: true,
        minLength: 100,
    },

    tag: {
        type: [String],
        required: true,
        default: ['general'],
    },

    imageUrl: {
        type: String,
        default: "",
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: "users"
    }
}, { timestamps: true });

const BlogsModel = mongoose.model("Blogs", blogSchema)


module.exports = {BlogsModel};