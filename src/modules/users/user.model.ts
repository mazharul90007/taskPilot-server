
import { prisma } from '../../config/database';

interface CreateUserParams {
  email: string;
  password: string;
  username: string;
  role?: string;
}

export const userModel = {
  async createUser(data: CreateUserParams) {
    return prisma.user.create({
      data: {
        email: data.email,
        password: data.password,
        username: data.username,
        role: data.role ?? 'Member', 
      },
    });
  },
 
  async findByEmail(email: string) {
    return prisma.user.findUnique({ where: { email } });
  },

  async findById(id: string) {
    return prisma.user.findUnique({ where: { id } });
  },

  async getAllUsers() {
    return prisma.user.findMany();
  },
   async findByEmailOrUsername(email: string, username: string) {
    return prisma.user.findFirst({
      where: {
        OR: [{ email }, { username }],
      },
    });
  },
};
