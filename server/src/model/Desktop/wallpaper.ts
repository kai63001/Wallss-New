import mongoose, { PaginateModel, Document, Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

interface IAccessStatsSchema extends Document {
  download: number;
}
const WallpaperSchema = new mongoose.Schema({
  resolution: {
    type: String,
  },
  name: {
    type: String,
  },
  image: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    require: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  tags: [
    {
      type: String,
      lowercase: true,
      index: true,
      trim: true,
    },
  ],
  author: {
    type: String,
  },
  authorLink: {
    type: String,
  },
  categoly: [
    {
      type: String,
      lowercase: true,
      index: true,
      trim: true,
    },
  ],
  type: {
    type: Number,
    index: true,
    default: 0,
  },
  download: {
    type: Number,
    default: 0,
  },
});

WallpaperSchema.plugin(mongoosePaginate);

//  extend PaginateModel
interface WallpaperModel<T extends Document> extends PaginateModel<T> {}

const Wallpaper: WallpaperModel<IAccessStatsSchema> =
  mongoose.model<IAccessStatsSchema>(
    "Wallpaper",
    WallpaperSchema
  ) as WallpaperModel<IAccessStatsSchema>;

export default Wallpaper;
