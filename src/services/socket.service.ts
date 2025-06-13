
import { Server } from 'socket.io';
import { prisma } from '../config/database';
import * as messageService from '../modules/messages/message.cervice';

export const initializeSocket = (io: Server) => {
  io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    socket.on('joinProject', (projectId: string) => {
      socket.join(projectId);
      console.log(`User ${socket.id} joined project ${projectId}`);
    });

    socket.on('projectUpdate', async ({ projectId, update }: { projectId: string; update: any }) => {
      const updatedProject = await prisma.project.update({
        where: { projectId },
        data: update,
      });
      io.to(projectId).emit('projectUpdate', updatedProject);
    });

    socket.on('chatMessage', async ({ projectId, senderId, content }: { projectId: string; senderId: string; content: string }) => {
      const message = await messageService.createMessage({ projectId, senderId, content });
      io.to(projectId).emit('chatMessage', message);
    });

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  });
};