
import { Request, Response } from 'express';
import * as messageService from '../services/messageService';

export const getMessages = async (req: Request, res: Response) => {
  try {
    const { projectId } = req.params;
    const messages = await messageService.getMessagesByProject(projectId);
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
};