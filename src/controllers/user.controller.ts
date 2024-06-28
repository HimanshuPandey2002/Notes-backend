import mongoose, { Document, Schema } from "mongoose";

export interface User extends Document {
  userName: string;
  email: string;
  password: string;
  fullname: string;
  refreshToken: string;
  verifyCode: string;
  verifyCodeExpiry: Date;
  isVerified: boolean;
}

const UserSchema: Schema<User> = new Schema({
  userName: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
    maxlength: [20, "Username cannot exceed 20 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [/+/, "please use a valid email address"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  fullname: {
    type: String,
    required: [true, "Full name is required"],
  },
  verifyCode: {
    type: String,
    required: [true, "verify code is required"],
  },
  verifyCodeExpiry: {
    type: Date,
    required: [true, "verify code expiry is required"],
  },
  isVerified: {
    type: Boolean,
    required: true,
  },
});
