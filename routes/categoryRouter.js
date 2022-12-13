const express = require("express");
const router = express.Router();

router.post("/", (req, res) => res.json("add category"));
router.get("/", (req, res) => res.json("get all categories"));
router.get("/:id", (req, res) => res.json("get category"));
router.put("/:id", (req, res) => res.json("update category"));
router.delete("/:id", (req, res) => res.json("delete category"));

module.exports = router;