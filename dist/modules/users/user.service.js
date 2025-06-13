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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = exports.createUser = void 0;
// Path: server/src/services/userService.ts
const database_1 = require("../../config/database");
const bcrypt_1 = __importDefault(require("bcrypt"));
const createUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const hashedPassword = yield bcrypt_1.default.hash(data.password, 10);
    return database_1.prisma.user.create({
        data: {
            username: data.username,
            email: data.email,
            password: hashedPassword,
            role: data.role,
        },
    });
});
exports.createUser = createUser;
const validateUser = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield database_1.prisma.user.findUnique({ where: { email } });
    if (!user)
        return null;
    const isValid = yield bcrypt_1.default.compare(password, user.password);
    return isValid ? user : null;
});
exports.validateUser = validateUser;
