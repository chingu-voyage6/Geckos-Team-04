const mongoose = require('mongoose');
// const moment = require('moment-timezone');
const crypto = require('crypto');

const { Schema } = mongoose;

const UserSchema = new Schema({
  group: { type: Schema.Types.ObjectId, ref: 'Group' },
  name: {
    first: {
      type: String,
      trim: true,
      required: 'First Name is required',
    },
    last: {
      type: String,
      trim: true,
      required: 'Last Name is required',
    },
  },
  email: {
    type: String,
    trim: true,
    unique: 'Email already exists',
    match: [/.+@.+\..+/, 'Please fill a valid email address'],
    required: 'Email is required',
  },
  hashed_password: {
    type: String,
    required: 'Password is required',
  },
  salt: String,
  created: {
    type: Date,
    default: Date.now,
  },
  updated: Date,
  timezone: {
    type: String,
    default: 'US/Eastern',
  },
  phone: {
    type: String,
    maxlength: 80,
    trim: true,
  },
  // active: Boolean,
  // accessToken: String,
});

UserSchema.virtual('fullName').get(function() {
  return `${this.name.first} ${this.name.last}`;
});

UserSchema.virtual('password')
  .set(function(password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function() {
    return this._password;
  });

UserSchema.methods = {
  authenticate(plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },
  encryptPassword(password) {
    if (!password) return '';
    try {
      return crypto
        .createHmac('sha256', this.salt)
        .update(password)
        .digest('hex');
    } catch (err) {
      return '';
    }
  },
  makeSalt() {
    const buf = crypto.randomBytes(16);
    return buf.toString('hex');
  },
};

UserSchema.path('hashed_password').validate(function() {
  if (this._password && this._password.length < 6) {
    this.invalidate('password', 'Password must be at least 6 characters.');
  }
  if (this.isNew && !this._password) {
    this.invalidate('password', 'Password is required');
  }
}, null);

module.exports = mongoose.model('User', UserSchema);
