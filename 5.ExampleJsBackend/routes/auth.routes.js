const express = require("express");
const { loginUser } = require("../controllers/auth.controller");
const router = express();


router.post("/login", loginUser);

module.exports = router;