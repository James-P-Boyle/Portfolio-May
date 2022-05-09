const { Schema, model } = require("mongoose");

const projectsSchema = new Schema({
  title: { type: String, require: true },
  tech: [{ type: String, require: true }],
  description: { type: String, require: true },
  imageUrl: { type: String, require: false },
  createdAt: { type: Date, default: Date.now() },
  isActive: { type: Boolean, default: true },
});

const projectsModel = model("Project", projectsSchema);

module.exports = projectsModel;
