
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { connectDB } from './config/database';
import projectRoutes from './modules/projects/project.route';
import userRoutes from './modules/users/user.routes';
import taskRoutes from './modules/tasks/task.routes';
import messageRoutes from './modules/messages/message.routes';
import cors from 'cors';
import { initializeSocket } from './services/socket.service';

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

app.use(cors());
app.use(express.json());

app.use('/api/projects', projectRoutes);
app.use('/api/users', userRoutes);
app.use('/api/projects/:projectId/tasks', taskRoutes);
app.use('/api/projects/:projectId/messages', messageRoutes);

initializeSocket(io);

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});


app.get("/", (req, res) => {
  const data = {
    success: true,
    status: 200,
    data: "task pilot running...."
  }
  res.send(data)
})
