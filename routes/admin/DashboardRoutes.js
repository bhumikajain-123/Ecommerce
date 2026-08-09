const express = require("express");
const route = express.Router();
const {dashboard} = require("../../controllers/admin/dashboardController");
const {adminMiddleware} = require("../../middleware/adminMiddleware");
route.get("/",adminMiddleware,dashboard);

module.exports = route;
