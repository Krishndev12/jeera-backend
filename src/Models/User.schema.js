const mongoose = require("mongoose");
const validator = require("validator");
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minLength: 2,
      maxLength: 20,
      immutable: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      validate: {
        validator: (VALUE) => {
          return validator.isEmail(VALUE);
        },
        message: "{VALUE} is not a valid email",
      },
      required: true,
      immutable: true,
      unique: true,
      trim: true,
    },
    role: {
      type: String,
      enum: {
        values: ["owner", "admin", "employee"],
        message: "{VALUE} is not a valid role",
      },
      required: true,
      trim: true,
    },
    organizationId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    teamId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

const User = mongoose.model("User", UserSchema);

module.exports = {
  User,
};
