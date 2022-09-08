import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const schema = mongoose.Schema(
  {
    _id: {
      type: String,
      default: function genUUID() {
        return uuidv4();
      },
    },
    name: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  { versionKey: false }
);

const category = mongoose.model("categories", schema);

export default category;
