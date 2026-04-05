import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, required: true, unique: true },
    image: String,
    role: { type: String, enum: ["user", "admin"], default: "user" },
    provider: { type: String, enum: ["google"], default: "google" },
  },
  { timestamps: true },
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
