
import express from 'express';
import { getTasks, createTask } from '../tasks/task.controller';

const router = express.Router({ mergeParams: true });

router.get('/', getTasks);
router.post('/', createTask);

export default router;