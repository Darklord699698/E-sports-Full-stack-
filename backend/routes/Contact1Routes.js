import express from 'express';
import Contact1 from '../models/Contact1.js';

const router = express.Router();

// POST request to add a new contact entry
router.post('/', async (req, res) => {
  try {
    const { Name, Email, Message } = req.body;

    if (!Name || !Email || !Message) {
      return res.status(400).json({ message: 'Name, Email, and Message are required' });
    }

    const newContact1 = new Contact1({
      Name,
      Email,
      Message,
    });

    await newContact1.save();
    res.status(201).json({ message: 'Contact message received successfully!' });
  } catch (error) {
    console.error('Error saving contact message:', error);
    res.status(500).json({ message: 'Failed to save contact message. Please try again later.' });
  }
});

export default router;
