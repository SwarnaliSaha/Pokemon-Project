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
const express_1 = require("express");
const response_handler_1 = require("../utility/response-handler");
const auth_service_1 = __importDefault(require("./auth.service"));
const router = (0, express_1.Router)();
router.post('/Register', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        const result = yield auth_service_1.default.register(user);
        res.send(new response_handler_1.RESPONSE_HANDLER(result));
    }
    catch (e) {
        next(e);
    }
}));
router.post('/Login', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const credentials = req.body;
        console.log(credentials);
        const result = yield auth_service_1.default.login(credentials);
        res.send(new response_handler_1.RESPONSE_HANDLER(result));
    }
    catch (e) {
        next(e);
    }
}));
router.post('/AssignTrainer', (req, res, next) => {
    try {
        const user = req.body;
        const result = auth_service_1.default.assignTrainer(user);
        res.send(new response_handler_1.RESPONSE_HANDLER(result));
    }
    catch (e) {
        next(e);
    }
});
exports.default = router;
