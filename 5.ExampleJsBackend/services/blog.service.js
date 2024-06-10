const { BlogsModel } = require("../database/Models/Blogs.model");


async function createBlogService(body){
    try {
        const { title, description, tag } = body;
        const newBlog = new BlogsModel({
            title,
            description,
            tag,
        });

        await newBlog.save();

        return {
            status: 201,
            message: "Blog Created Succesfully " + newBlog._id,
        }

    } catch(error) {
        throw new Error("Blog Creation failed !!! Some error Occured " + error.message);
    }
}

module.exports = { createBlogService };