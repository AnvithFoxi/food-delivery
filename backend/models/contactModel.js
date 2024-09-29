import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  workEmail: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  companyName: { type: String, required: true },
  designation: { type: String, required: true },
  createdDate: { type: Date, default: Date.now }, // Auto-set creation date
});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
