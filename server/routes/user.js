const express = require("express");
const router = express.Router();

const { login, register, dashboard, getAllUsers } = require("../controllers/user");
const authMiddleware = require('../middleware/auth');
const { AddDevice } = require("../controllers/device.controller");
const AddEntity = require("../controllers/entity.controller");

router.route("/login").post(login);
router.route("/register").post(register);
router.route("/dashboard").get(authMiddleware, dashboard);
router.route("/users").get(getAllUsers);

module.exports = router;