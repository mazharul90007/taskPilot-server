"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Path: server/src/routes/projectRoutes.ts
const express_1 = __importDefault(require("express"));
const project_controller_1 = require("../projects/project.controller");
const router = express_1.default.Router();
router.get('/', project_controller_1.getProjects);
router.post('/', project_controller_1.createProject);
router.put('/:projectId', project_controller_1.updateProject);
exports.default = router;
