const express = require("express");
const router = express.Router();

router.post("/", (req, res) => res.json("add product"));
router.get("/", (req, res) => res.json("get all products"));
router.get("/:id", (req, res) => res.json("get product"));
router.put("/:id", (req, res) => res.json("update product"));
router.delete("/:id", (req, res) => res.json("delete product"));

module.exports = router;