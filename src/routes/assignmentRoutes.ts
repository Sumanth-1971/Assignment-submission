import express from 'express';
import { authenticateUser } from '../middlewares/authMiddleware';
import { validateAssignmentUpload } from '../middlewares/validationMiddleware';

const router = express.Router();

// Currently no specific assignment routes needed
// Can be expanded for future functionality

export default router;