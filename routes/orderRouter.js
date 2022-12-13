const express = require("express");
const router = express.Router();

router.post("/", (req, res) => res.json("add order"));
router.get("/", (req, res) => res.json("get all new order"));
router.get("/:id", (req, res) => res.json("get order"));
router.put("/:id", (req, res) => res.json("update order"));

module.exports = router;