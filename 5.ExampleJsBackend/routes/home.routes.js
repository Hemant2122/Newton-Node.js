const express = require("express");
const { getHome, getDetails, createUser, getAllUsers } = require("../controllers/home.controllers");
const { validateUserCreationMiddleware } = require("../middlewares/userValdation/userValidationMiddleware");
const router = express();


router.get("/", getHome);


router.get("/getDetail", getDetails);

router.post("/createuser", validateUserCreationMiddleware, createUser);

router.get("/getallusers", getAllUsers);

// router.get("/getuser/:id", )

module.exports = router;