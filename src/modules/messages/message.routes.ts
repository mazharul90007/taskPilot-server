
import express from 'express';
import { getMessages } from '../messages/message.controller';

const router = express.Router({ mergeParams: true });

router.get('/',  getMessages);

export default router;