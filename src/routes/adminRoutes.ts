import express, { Request, Response, NextFunction } from 'express';
import { 
  registerAdmin, 
  loginAdmin, 
  getAdminAssignments,
  handleAssignmentStatus 
} from '../controllers/adminController';
import { authenticateUser } from '../middlewares/authMiddleware';
import { 
  validateUserRegistration, 
  validateUserLogin,
  validateAssignmentStatus,
  checkValidationResults 
} from '../middlewares/validationMiddleware';

const router = express.Router();

// Admin registration route
router.post(
  '/register', 
  validateUserRegistration(), 
  checkValidationResults, 
  registerAdmin
);

// Admin login route
router.post(
  '/login', 
  validateUserLogin(), 
  checkValidationResults, 
  loginAdmin
);

// Get admin assignments route
router.get(
  '/assignments', 
  authenticateUser, 
  getAdminAssignments
);

// Accept assignment route
router.post(
  '/assignments/:id/accept', 
  authenticateUser, 
  validateAssignmentStatus(),
  checkValidationResults,
  async (req: Request, res: Response) => {
    req.body.status = 'accepted';
    await handleAssignmentStatus(req, res);
  }
);

// Reject assignment route
router.post(
  '/assignments/:id/reject', 
  authenticateUser, 
  validateAssignmentStatus(),
  checkValidationResults,
  async (req: Request, res: Response) => {
    req.body.status = 'rejected';
    await handleAssignmentStatus(req, res);
  }
);

export default router;