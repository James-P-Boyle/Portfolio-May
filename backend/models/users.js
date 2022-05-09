const { Schema, model } = require("mongoose");

const usersSchema = new Schema({
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  createdAt: { type: Date, default: Date.now() },
  isActive: { type: Boolean, default: true },
});

usersSchema.pre("save", function (next) {
  this.email = this.email.toLowerCase();
  next();
});

const usersModel = model("User", usersSchema);

module.exports = usersModel;
