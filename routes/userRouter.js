const express = require("express");
const router = express.Router();

router.post("/", (req, res) => res.json("add user"));
router.get("/", (req, res) => res.json("get all users"));
router.get("/:id", (req, res) => res.json("get user"));
router.put("/:id", (req, res) => res.json("update user"));
router.delete("/:id", (req, res) => res.json("delete user"));

module.exports = router;