import mongoose, { Document, Schema } from "mongoose";
import { Tag } from "../controllers/tag.controller";
import { User } from "../controllers/user.controller";

export interface Note extends Document {
  title: string;
  content: string;
  tags: Tag[];
  color: string;
  username: User;
  isPinned: boolean;
  isDeleted: boolean;
  isArchived: boolean;
  createdOn: Date;
  lastModified: Date;
}

const NotesSchema: Schema<Note> = new Schema({});
