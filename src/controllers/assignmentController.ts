import { Request, Response } from 'express';
import Assignment from '../models/Assignment';

export const getAssignmentById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    const assignment = await Assignment.findById(id)
      .populate('userId', 'username')
      .populate('admin', 'username');

    if (!assignment) {
      return res.status(404).json({ message: 'Assignment not found' });
    }

    res.json(assignment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error: (error as Error).message });
  }
};