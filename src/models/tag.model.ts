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

const TagModel =
  (mongoose.models.Tag as mongoose.Model<Tag>) ||
  mongoose.model("Tag", TagSchema);

export default TagModel;
