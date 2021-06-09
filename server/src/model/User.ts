import mongoose, { Schema } from 'mongoose';

const UserSchema: Schema = new Schema(
  {
    email: { type: String, trim: true, require: true },
    phone: { type: String, trim: true, require: true },

    name: String,
    description: [String],
    hobbies: [String],
    age: Number,
    gender: Number,
    image_id: [String],

    address_id: { type: String, ref: 'Address', require: true },
  },
  {
    timestamps: true,
  },
);

// const ProfileSchema: Schema = new Schema({
//   name: String,
//   description: [String],
//   hobbies: [String],
//   age: Number,
//   gender: Number,
//   image_id: [String],
// });

const User = mongoose.model('User', UserSchema);

export default User;
