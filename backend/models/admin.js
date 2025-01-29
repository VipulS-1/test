const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
require("mongoose-type-email");

const adminSchema = mongoose.Schema(
  {
    userId: { type: String, required: true, unique: true },
    email: { type: mongoose.SchemaTypes.Email, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

adminSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Admin", adminSchema);
