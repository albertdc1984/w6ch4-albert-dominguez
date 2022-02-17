const { model, Schema } = require("mongoose");

const ThingSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    known: Boolean,
  },
});

const Thing = model("Thing", ThingSchema, "things_");

module.exports = Thing;
