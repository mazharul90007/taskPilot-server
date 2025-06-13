import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function connectDB() {
  try {
    await prisma.$connect();
    console.log('MongoDB connected via Prisma');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
}

export { prisma };