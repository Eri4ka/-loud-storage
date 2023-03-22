const { Schema, model, ObjectId } = require("mongoose");
const date = require("date-and-time");

const File = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  accessLink: { type: String },
  size: { type: Number, default: 0 },
  path: { type: String, default: "" },
  date: { type: String, default: date.format(new Date(), "YYYY/MM/DD hh:mm") },
  user: { type: ObjectId, ref: "User" },
  parent: { type: ObjectId, ref: "File" },
  childs: [{ type: ObjectId, ref: "File" }],
});

module.exports = model("File", File);
