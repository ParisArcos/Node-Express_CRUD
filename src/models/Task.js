// const Schema = require("mongose").Schema;
// const model = require("mongose").model;
const { model, Schema } = require("mongoose");
const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Task", taskSchema);
