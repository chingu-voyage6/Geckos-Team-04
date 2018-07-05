import mongoose from 'mongoose';

const ServiceSchema = new mongoose.Schema({
  name: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
  },
  serviceCount: {
    type: Number,
    default: 0,
  },
  category: {
    type: Array,
  },
});

export default mongoose.model('Service', ServiceSchema);
