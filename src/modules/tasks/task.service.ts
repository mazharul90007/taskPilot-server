// Path: server/src/services/taskService.ts
import { prisma } from '../../config/database';
import { Task } from '../../types';

export const getTasksByProject = async (projectId: string) => {
  return prisma.task.findMany({ where: { projectId }, include: { assignedTo: true } });
};

export const createTask = async (data: Task) => {
  return prisma.task.create({
    data: {
      projectId: data.projectId,
      title: data.title,
      assignedToId: data.assignedToId,
      status: data.status,
      deadline: data.deadline,
    },
  });
};