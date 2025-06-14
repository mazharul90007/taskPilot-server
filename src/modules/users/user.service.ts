
import { userModel } from './user.model';
import bcrypt from 'bcrypt';

export const createUser = async (data: {
  email: string;
  password: string;
  username: string;
  role?: string;
}) => {
  const existingUser = await userModel.findByEmailOrUsername(data.email, data.username);
  if (existingUser) {
    throw new Error('User already exists with this email or username');
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);
  return userModel.createUser({
    email: data.email,
    password: hashedPassword,
    username: data.username,
    role: data.role,
  });
};
