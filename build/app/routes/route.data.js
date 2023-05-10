"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const route_type_1 = require("./route.type");
const auth_router_1 = __importDefault(require("../auth/auth.router"));
exports.routes = [
    new route_type_1.Route('/auth', auth_router_1.default)
];
