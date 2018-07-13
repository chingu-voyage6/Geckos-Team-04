import mongoose from 'mongoose';

const LocationSchema = new mongoose.Schema({
  name: String,
  zipCode: Number,
});

export default mongoose.model('Location', LocationSchema);
