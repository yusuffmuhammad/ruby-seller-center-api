import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const schema = new mongoose.Schema({
  _id: {
    type: String,
    default: function genUUID() {
      return uuidv4();
    },
  },
  userId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  provinceId: {
    type: Number,
    required: true,
  },
  cityId: {
    type: Number,
    required: true,
  },
  districtId: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "inactive",
  },
  image: {
    type: String,
    required: false,
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
});

const store = new mongoose.model("Store", schema);

export default store;
