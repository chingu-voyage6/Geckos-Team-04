import mongoose, { Schema } from 'mongoose';

const CategorySchema = new Schema({
  name: String,
});

export default mongoose.model('Category', CategorySchema);
