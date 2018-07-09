import mongoose, { Schema } from 'mongoose';

const ProfessionalSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  location: { type: Schema.Types.ObjectId, ref: 'Location' },
  services: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Service' }],
  },
  serviceCount: { type: Number, default: 0 },
  description: String,
  rating: Number,
  contracts: [{ type: Schema.Types.ObjectId, ref: 'Contract' }],
});

export default mongoose.model('Professional', ProfessionalSchema);
