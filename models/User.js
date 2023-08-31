import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 5,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 5,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // You can add email validation here
  },
  number: {
    type: String,
    required: true,
    unique: true,
  },
  countryCode: {
    type: String,
    required: true,
  },

  address1: {
    type: String,
    required: true,
  },
  address2: {
    type: String,
    required: false,
  },
  state: String,
  country: String,
  zipCode: Number,
});

export default mongoose.model("User", userSchema);
