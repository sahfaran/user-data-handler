const express = require('express');
const User = require("../models/user");

const {getUserByUserId, updateUserByUserId, deleteUserByUserId, getAllUsers, addUser} = require("../controllers/userController");

const router = express.Router();

router.get("/", getAllUsers);
router.post("/add", addUser)

router
.route("/:id")
.get(getUserByUserId)
.patch(updateUserByUserId)
.delete(deleteUserByUserId)

module.exports = router;