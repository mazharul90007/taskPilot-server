
import { Request, Response } from 'express';
import * as taskService from '../tasks/task.service';

export const getTasks = async (req: Request, res: Response) => {
  try {
    const { projectId } = req.params;
    const tasks = await taskService.getTasksByProject(projectId);
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
};

export const createTask = async (req: Request, res: Response) => {
  try {
    const task = await taskService.createTask({ ...req.body, projectId: req.params.projectId });
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create task' });
  }
};