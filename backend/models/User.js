import { Schema, model } from 'mongoose';

const userScehma = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  }
}, {
  timestamps: true,
})

const User = model('User', userScehma);

export default User;