/* eslint-disable no-unused-vars */
const express = require("express");
const { registerUser, loginUser, logout, getUser } = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logout);
router.get("/getUser", getUser);

module.exports = router;
