import mongoose from 'mongoose';

const LocationSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  zipCode: {
    type: Number,
  },
});

export default mongoose.model('Location', LocationSchema);
