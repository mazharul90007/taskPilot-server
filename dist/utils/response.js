"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendSuccessResponse = void 0;
const sendSuccessResponse = (res, statusCode, message, data) => {
    return res.status(statusCode).json({
        success: true,
        statusCode,
        message,
        data
    });
};
exports.sendSuccessResponse = sendSuccessResponse;
