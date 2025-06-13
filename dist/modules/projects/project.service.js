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
exports.updateProject = exports.createProject = exports.getAllProjects = void 0;
const database_1 = require("../../config/database");
const getAllProjects = () => __awaiter(void 0, void 0, void 0, function* () {
    return database_1.prisma.project.findMany({ include: { tasks: true, client: true, messages: true } });
});
exports.getAllProjects = getAllProjects;
const createProject = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return database_1.prisma.project.create({
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
});
exports.createProject = createProject;
const updateProject = (projectId, data) => __awaiter(void 0, void 0, void 0, function* () {
    return database_1.prisma.project.update({
        where: { projectId },
        data,
    });
});
exports.updateProject = updateProject;
