import express from 'express';
import contactMessageModel from '../models/contactMessageModel.js';

const router = express.Router();

router.post('/contact', async (req, res) => {
    const { fullname, email, message } = req.body;

    try {
        // Create a new contact message entry
        const newMessage = new contactMessageModel({ fullname, email, message });

        // Save the message to the database
        await newMessage.save();

        res.status(201).json({ success: true, message: 'Your message has been received!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
    }
});

export default router;



