// Path: server/src/services/userService.ts
import { prisma } from '../../config/database';
import { User } from '../../types';
import bcrypt from 'bcrypt';

export const createUser = async (data: User) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  return prisma.user.create({
    data: {
      username: data.username,
      email: data.email,
      password: hashedPassword,
      role: data.role,
    },
  });
};

export const validateUser = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return null;
  const isValid = await bcrypt.compare(password, user.password);
  return isValid ? user : null;
};