import mongoose from "mongoose";

const ReportSchema = new mongoose.Schema({
  wallId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Wallpaper",
    require: true,
  },
  type: [
    {
      type: String,
      require: true,
    },
  ],
  detail: {
    type: String,
  },
});

const Report = mongoose.model("Report", ReportSchema);

export default Report;
