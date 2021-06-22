import mongoose from 'mongoose';
import mongoosePaginate from "mongoose-paginate-v2";

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        index: true,
        required: true,
        lowercase: true
    },
})

CategorySchema.plugin(mongoosePaginate);

const Category = mongoose.model('Category', CategorySchema);

export default Category;