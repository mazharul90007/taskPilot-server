"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTask = exports.getTasksByProject = void 0;
// Path: server/src/services/taskService.ts
const database_1 = require("../../config/database");
const getTasksByProject = (projectId) => __awaiter(void 0, void 0, void 0, function* () {
    return database_1.prisma.task.findMany({ where: { projectId }, include: { assignedTo: true } });
});
exports.getTasksByProject = getTasksByProject;
const createTask = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return database_1.prisma.task.create({
        data: {
            projectId: data.projectId,
            title: data.title,
            assignedToId: data.assignedToId,
            status: data.status,
            deadline: data.deadline,
        },
    });
});
exports.createTask = createTask;
