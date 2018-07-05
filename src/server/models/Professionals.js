import mongoose from 'mongoose';
import User from './Users';
import Location from './Location';

const ProfessionalSchema = new mongoose.Schema({
  user: {
    type: User,
  },
  location: {
    type: Location,
  },
  services: {
    type: Array,
  },
});

export default mongoose.model('Professional', ProfessionalSchema);
