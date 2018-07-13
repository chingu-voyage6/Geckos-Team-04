import mongoose, { Schema } from 'mongoose';

const ProfessionalSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  rating: Number,
  contracts: [{ type: Schema.Types.ObjectId, ref: 'Contract' }],
});

export default mongoose.model('Professional', ProfessionalSchema);
