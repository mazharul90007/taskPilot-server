
import { prisma } from '../../config/database';
import { Project } from '../../types';


export const getAllProjects = async () => {
  return prisma.project.findMany({ include: { tasks: true, client: true, messages: true } });
};

export const createProject = async (data: Project) => {
  return prisma.project.create({
    data: {
      projectId: data.projectId,
      station: data.station,
      deadline: data.deadline,
      value: data.value,
      team: data.team,
      uiUx: data.uiUx,
      frontend: data.frontend,
      backend: data.backend,
      lastUpdate: data.lastUpdate,
      lastMeeting: data.lastMeeting,
      projectStatus: data.projectStatus,
      esteemedDelivery: data.esteemedDelivery,
      clientStatus: data.clientStatus,
      rating: data.rating,
      figmaLink: data.figmaLink,
      liveLink: data.liveLink,
      deliveredDate: data.deliveredDate,
      requirements: data.requirements,
      note: data.note,
    },
  });
};

export const updateProject = async (projectId: string, data: Partial<Project>) => {
  return prisma.project.update({
    where: { projectId },
    data,
  });
};