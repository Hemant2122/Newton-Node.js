const express = require("express");
const { createBlog } = require("../controllers/blog.controller");
const { createBlogValidateMiddleware } = require("../middlewares/blog/createBlogValidationMiddleware");
const { fetchUser } = require("../middlewares/fetchUserMiddleware");
const router = express();

router.post("/create", fetchUser, createBlogValidateMiddleware, createBlog);

module.exports = router;