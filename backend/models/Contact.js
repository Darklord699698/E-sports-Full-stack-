import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    Name: String,
    Number: String,
    Email: String,
    Message: String
});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
