import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true, // no duplicate users
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

// Prevent model overwrite in Next.js (IMPORTANT)
export default mongoose.models.User || mongoose.model("User", UserSchema);
