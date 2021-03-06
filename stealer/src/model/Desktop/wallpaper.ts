import mongoose from 'mongoose';

interface IAccessStatsSchema {
    type: string;
    views: number;
    paginate: ()=>{};
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
        lowercase: true,
        index: true,
        trim: true
    }],
    author: {
        type: String
    },
    authorLink: {
        type: String
    },
    categoly: [{
        type: String,
        lowercase: true,
        index: true,
        trim: true
    }],
    type : {
        type: Number,
        index: true,
    }
})


const Wallpaper = mongoose.model('Wallpaper', WallpaperSchema);

export default Wallpaper;