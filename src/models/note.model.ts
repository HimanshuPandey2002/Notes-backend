import mongoose, { Document, Schema } from "mongoose";
import TagModel, { Tag } from "./tag.model";

export interface Note extends Document {
  title: string;
  content: string;
  tags: Tag[];
  color: string;
  username: string;
  isPinned: boolean;
  isDeleted: boolean;
  isArchived: boolean;
  createdOn: Date;
  lastModified: Date;
}

const NotesSchema: Schema<Note> = new Schema({
  title: {
    type: String,
    maxlength: 100,
    default: "Untitled",
  },
  content: {
    type: String,
  },
  tags: [TagModel],
  color: {
    type: String,
    default: "grey",
  },
  username: {
    type: String,
    required: true,
  },
  isArchived: {
    type: Boolean,
    default: false,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  isPinned: {
    type: Boolean,
    default: false,
  },
  createdOn: {
    type: Date,
    default: Date.now(),
  },
  lastModified: {
    type: Date,
    default: Date.now(),
  },
});

const NoteModel =
  (mongoose.models.Note as mongoose.Model<Note>) ||
  mongoose.model("Note", NotesSchema);

export default NoteModel;
