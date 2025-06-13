
export interface Project {
  projectId: string;
  station: string;
  deadline?: Date;
  value: number;
  team: string;
  uiUx?: string;
  frontend?: string;
  backend?: string;
  lastUpdate?: Date;
  lastMeeting?: Date;
  projectStatus: string;
  esteemedDelivery?: string;
  clientStatus?: string;
  rating?: number;
  figmaLink?: string;
  liveLink?: string;
  deliveredDate?: Date;
  requirements?: string;
  note?: string;
}

export interface User {
  username: string;
  email: string;
  password: string;
  role: 'Leader' | 'Co-Leader' | 'Member' | 'Client';
}

export interface Task {
  projectId: string;
  title: string;
  assignedToId?: string;
  status: 'To-Do' | 'In Progress' | 'Done';
  deadline?: Date;
}

export interface Message {
  projectId: string;
  senderId: string;
  content: string;
  timestamp: Date;
}

export interface ActivityLog {
  projectId: string;
  action: string;
  performedById: string;
  timestamp: Date;
}