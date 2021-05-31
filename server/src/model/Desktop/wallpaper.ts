import mongoose from 'mongoose';
interface IAccessStatsSchema {
    type: string;
    views: number;
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
        required: true
    },
    date: {
        type: String,
        require: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    tags: [{
        type: String,
    }],
    author: {
        type: String
    },
    categoly: [{
        type: String
    }],
    uuid : {
        type: String
    },
    views:{
        type: Number,
        default: 0 
    }
})

const Wallpaper = mongoose.model<IAccessStatsSchema>('Wallpaper', WallpaperSchema);

export default Wallpaper;