
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
      fullname: {
        type: String,
        required: true,
        unique: true,
      },
      phoneNumber: {
        type: Number,
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
      profilePicture: {
        type: Buffer,
        default:
          'https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg',
      },
    },
    { timestamps: true }
  );
  

const User = mongoose.model('users',userSchema);

module.exports = User;
