const express = require("express");
const Thing = require("../../db/models/Thing");

const router = express.Router();

router.get("/list", async (req, res) => {
  const things = await Thing.find();
  res.json({ things });
});

router.post("/add", async (req, res) => {
  const newThing = req.body;
  const createdThing = await Thing.create(newThing);
  res.status(201);
  res.json(createdThing);
});

module.exports = router;
