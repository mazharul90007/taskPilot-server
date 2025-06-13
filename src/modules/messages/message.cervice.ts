
import { prisma } from '../../config/database';

export const getMessagesByProject = async (projectId: string) => {
  return prisma.message.findMany({ where: { projectId }, include: { sender: true }, orderBy: { timestamp: 'asc' } });
};

export const createMessage = async (data: { projectId: string; senderId: string; content: string }) => {
  return prisma.message.create({
    data: {
      projectId: data.projectId,
      senderId: data.senderId,
      content: data.content,
    },
  });
};