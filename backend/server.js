import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import dataRoutes from './routes/dataRoutes.js';
import contactRoutes from './routes/contactRoutes.js'; // Existing contact routes
import contact1Routes from './routes/Contact1Routes.js'; // New contact1 routes

// App configuration
const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Database connection
connectDB();

// Routes
app.use('/api', dataRoutes);
app.use('/api/contact', contactRoutes); // Existing contact routes
app.use('/api/contact1', contact1Routes); // New contact1 routes

// Test route
app.get('/', (req, res) => {
  res.send('API WORKING');
});

// Server start
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
