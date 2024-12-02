import express, { Request, Response, NextFunction } from 'express';
import { 
  registerUser, 
  uploadAssignment, 
  loginUser, 
  getAllAdmins 
} from '../controllers/userController';
import { authenticateUser } from '../middlewares/authMiddleware';
import { 
  validateUserRegistration, 
  validateUserLogin,
  validateAssignmentUpload,
  checkValidationResults 
} from '../middlewares/validationMiddleware';

const router = express.Router();

// User registration route
router.post(
  '/register', 
  validateUserRegistration(), 
  checkValidationResults, 
  registerUser
);

// User login route
router.post(
  '/login', 
  validateUserLogin(), 
  checkValidationResults, 
  loginUser
);

// Assignment upload route
router.post(
  '/upload', 
  authenticateUser, 
  validateAssignmentUpload(), 
  checkValidationResults,
  uploadAssignment
);

// Get all admins route
router.get(
  '/admins', 
  authenticateUser, 
  getAllAdmins
);

export default router;
