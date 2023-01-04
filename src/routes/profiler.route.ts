import express from "express";
const router = express.Router();
const profilerController = require("../controllers/profiler.controller");

router.route("/balance").post(profilerController.balance);

module.exports = router;
