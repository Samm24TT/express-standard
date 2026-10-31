import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
  {
    title: {
      type: Boolean,
      requried: true,
      index: true,
    },
    description: {
      type: String,
      requried: true,
    },
    comment: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true },
);

export const Post = mongoose.model("Post", userSchema);
