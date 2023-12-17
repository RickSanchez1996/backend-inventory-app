/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
  },
  email: {
    type: String,
    require: [true, 'Please add an email'],
    unique: true,
    trim: true,
    match: [
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      'Please enter a valid email',
    ],
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
    minLength: [6, 'Password must be atleast 6 characters long'],
    maxLength: [23, 'Password cannot be longer then 23 characters'],
  },
  photo: {
    type: String,
    required: [true, 'Please add a photo'],
    default: 'https://i.ibb.co/4pDNDk1/avatar.png',
    phone: {
      type: String,
      default: '+64',
    },
    bio: {
      type: String,
      maxLength: [250, 'Bio must not be more then 250 characters'],
      default: 'bio',

    },
  },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);
module.exports = User;
