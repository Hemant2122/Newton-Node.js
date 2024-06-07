const express = require("express");
const { getHome, getDetails, createUser } = require("../controllers/home.controllers");
const { validateUserCreationMiddleware } = require("../middlewares/userValdation/userValidationMiddleware");
const router = express();


router.get("/", getHome);


router.get("/getDetail", getDetails);

router.post("/createuser", validateUserCreationMiddleware, createUser);

module.exports = router;