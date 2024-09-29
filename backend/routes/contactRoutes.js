// routes/contactRoutes.js
import express from 'express';
import { createContact } from '../controllers/contactController.js';

const router = express.Router();

// Assuming you have this endpoint set up in your backend for demo schedule requests
router.post('/', createContact);

export default router;
