const express = require("express");
const Thing = require("../../db/models/Thing");

const router = express.Router();

router.get("/", async (req, res) => {
  const things = await Thing.find();
  res.json({ things });
});

router.get("/id", async (req, res) => {
  const things = await Thing.find();
  res.json({ things });
});

router.delete("/id", async (req, res) => {
  const things = await Thing.deleteOne();
  res.json({ things });
});

router.post("/", async (req, res) => {
  const newThing = req.body;
  const createdThing = await Thing.create(newThing);
  res.status(201);
  res.json(createdThing);
});

router.put("/update", async (req, res) => {
  const toUpdateThing = req.body;
  const updatedThing = await Thing.updateOne(toUpdateThing);
  res.status(201);
  res.json(updatedThing);
});

module.exports = router;
