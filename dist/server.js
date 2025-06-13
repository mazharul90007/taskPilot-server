"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const database_1 = require("./config/database");
const project_route_1 = __importDefault(require("./modules/projects/project.route"));
const user_routes_1 = __importDefault(require("./modules/users/user.routes"));
const task_routes_1 = __importDefault(require("./modules/tasks/task.routes"));
const message_routes_1 = __importDefault(require("./modules/messages/message.routes"));
const cors_1 = __importDefault(require("cors"));
const socket_service_1 = require("./services/socket.service");
const app = (0, express_1.default)();
const server = (0, http_1.createServer)(app);
const io = new socket_io_1.Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
    },
});
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api/projects', project_route_1.default);
app.use('/api/users', user_routes_1.default);
app.use('/api/projects/:projectId/tasks', task_routes_1.default);
app.use('/api/projects/:projectId/messages', message_routes_1.default);
(0, socket_service_1.initializeSocket)(io);
const PORT = process.env.PORT || 5000;
(0, database_1.connectDB)().then(() => {
    server.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
app.get("/", (req, res) => {
    const data = {
        success: true,
        status: 200,
        data: "task pilot running...."
    };
    res.send(data);
});
