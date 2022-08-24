import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const schema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: function genUUID() {
        return uuidv4();
      },
    },
    phoneNumber: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    createdAt: {
      type: String,
      default: function getCreatedAt() {
        return new Date().toLocaleString("id-ID", { timeZone: "UTC" });
      },
    },
    updatedAt: {
      type: String,
      default: function getCreatedAt() {
        return new Date().toLocaleString("id-ID", { timeZone: "UTC" });
      },
    },
  },
  {
    versionKey: false,
  }
);

const user = new mongoose.model("User", schema);

export default user;
