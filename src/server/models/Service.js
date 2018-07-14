import mongoose, { Schema } from 'mongoose';

const ServiceSchema = new mongoose.Schema({
  name: {
    type: Number,
    default: 0,
  },
  image: String,
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
});

export default mongoose.model('Service', ServiceSchema);
