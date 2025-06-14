// user.controller.ts
import { Request, Response } from 'express';
import { createUser } from '../users/user.service';
import catchAsync from '../../shared/catchAsync';


const registerUser = catchAsync(async (req: Request, res: Response) => {
  const { email, password, username, role } = req.body;

  if (!email || !password || !username) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const user = await createUser({ email, password, username, role });
    return res.status(201).json(user);
  } catch (error: any) {
    if (error.message.includes('User already exists')) {
      return res.status(409).json({ error: error.message });
    }
    throw error; 
  }
});


export const UserController = { registerUser };
