// controllers/contactController.js
import Contact from '../models/contactModel.js';

export const createContact = async (req, res) => {
  // Log the incoming request data to check what the backend is receiving
  console.log('Request body:', req.body);

  try {
    const { firstName, lastName, workEmail, phoneNumber, companyName, designation } = req.body;

    // Check if all fields are present
    if (!firstName || !lastName || !workEmail || !phoneNumber || !companyName || !designation) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Create and save the new contact in the database
    const newContact = new Contact({
      firstName,
      lastName,
      workEmail,
      phoneNumber,
      companyName,
      designation,
    });

    await newContact.save();

    // Respond with success message
    res.status(201).json({ message: 'Contact created successfully' });
  } catch (error) {
    // Log the error and send a 500 status
    console.error('Error creating contact:', error.message);
    res.status(500).json({ message: 'Error creating contact', error: error.message });
  }
};
