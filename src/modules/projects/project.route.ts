// Path: server/src/routes/projectRoutes.ts
import express from 'express';
import { getProjects, createProject, updateProject } from '../projects/project.controller';
import { authMiddleware } from '../../middleware/authMiddleware';

const router = express.Router();

router.get('/', getProjects);
router.post('/', createProject);
router.put('/:projectId', updateProject);

export default router;