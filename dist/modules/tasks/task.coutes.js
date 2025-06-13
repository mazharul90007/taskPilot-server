"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const task_controller_1 = require("../tasks/task.controller");
const router = express_1.default.Router({ mergeParams: true });
router.get('/', task_controller_1.getTasks);
router.post('/', task_controller_1.createTask);
exports.default = router;
