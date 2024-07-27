import mongoose from 'mongoose';

// Define the schema for Contact1
const contact1Schema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Message: {
    type: String,
    required: true,
  },
});

// Create the model based on the schema
const Contact1 = mongoose.model('Contact1', contact1Schema);

export default Contact1;
