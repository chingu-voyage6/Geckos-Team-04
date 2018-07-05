import mongoose from 'mongoose';
import Group from './Groups';

const UserSchema = new mongoose.Schema({
  group: {
    type: Group,
  },
  username: {
    type: String,
  },
  name: {
    first: {
      type: String,
    },
    last: {
      type: String,
    },
  },
});

UserSchema.virtual('fullName').get(function() {
  return `${this.name.first} ${this.name.last}`;
});

export default mongoose.model('User', UserSchema);
