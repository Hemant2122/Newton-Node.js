const express = require("express");
const { getHome, getDetails } = require("../controllers/home.controllers");
const router = express();


router.get("/", getHome);


router.get("/getDetail", getDetails);

module.exports = router;