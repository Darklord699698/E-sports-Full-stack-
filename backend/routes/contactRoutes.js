import express from 'express';
import Contact from '../models/Contact.js';

const router = express.Router();

// POST route to handle contact form submissions
router.post('/', async (req, res) => {
    const { Name, Number, Email, Message } = req.body;

    // Log the received data for debugging
    console.log('Received data:', req.body);

    // Validate required fields
    if (!Name || !Number || !Email || !Message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        // Create a new contact document
        const newContact = new Contact({
            Name, Number, Email, Message
        });

        // Save the document to the database
        await newContact.save();

        // Log the saved data
        console.log('Data saved:', newContact);

        // Send success response
        res.status(201).json({ message: 'Message sent successfully' });
    } catch (error) {
        // Log any errors that occur
        console.error('Error saving data:', error);

        // Send error response
        res.status(500).json({ error: 'Failed to send message', details: error.message });
    }
});

export default router;
