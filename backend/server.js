import express from 'express';
import cors from 'cors';
import contactRoute from './routes/contactRoute.js';
import { connectDB } from "./config/db.js";
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
 import contactRoutes from './routes/contactRoutes.js';



const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

dotenv.config();
connectDB();

// Use the contact route
app.use('/api', contactRoute);
app.use('/api/contacts', contactRoutes);





// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
