import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import dataRoutes from './routes/dataRoutes.js';
import contactRoutes from './routes/contactRoutes.js'; // Import the contact routes

// app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

// routes
app.use('/api', dataRoutes);
app.use('/api/contact', contactRoutes); // Use the contact routes

app.get('/', (req, res) => {
  res.send('API WORKING');
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
