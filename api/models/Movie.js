const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    title: { type: String, unique: true, required: true },
    desc: { type: String },
    img: { type: String },
    imgTitle: { type: String },
    imgSm: { type: String },
    trailer: { type: String },
    video: { type: String },
    genre: { type: String },
    year: { type: String },
    limit: { type: Number },
    isSeries: { type: Boolean, default: false },
    duration: { type: String, default: "2 hour 34 mins" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Movie", MovieSchema);
