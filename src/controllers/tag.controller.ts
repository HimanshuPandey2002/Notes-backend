import mongoose, { Document, Schema } from "mongoose";

export interface Tag extends Document {
  title: string;
  color: string;
}

const TagSchema: Schema<Tag> = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  color: {
    type: String,
    default: "grey",
  },
});

