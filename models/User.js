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
  mobile: {
    countryCode: String,
    number: String,
  },
  address1: {
    type: String,
    required: true,
  },
  address2: String,
  state: String,
  city: String,
  country: String,
  zipCode: Number,
});

export default mongoose.model("User", userSchema);
