import mongoose, { Schema } from 'mongoose';

const isEmail = email => {
  const re = '/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/';
  return re.test(email);
};

const emailSchema = new Schema({
  address: {
    type: String,
    lowercase: true,
    required: true,
    unique: true,
    validate: [isEmail, 'Please fill a valid email address'],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
});

const UserSchema = new Schema({
  group: { type: Schema.Types.ObjectId, ref: 'Group' },
  username: {
    type: String,
    unique: true,
  },
  name: {
    first: String,
    last: String,
  },
  email: emailSchema,
  password: {
    type: String,
    required: true,
  },
  active: Boolean,
  accessToken: String,
});

UserSchema.virtual('fullName').get(function() {
  return `${this.name.first} ${this.name.last}`;
});

export default mongoose.model('User', UserSchema);
