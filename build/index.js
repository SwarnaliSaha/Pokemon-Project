"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const app_1 = require("./app/app");
const role_service_1 = __importDefault(require("./app/role/role.service"));
const constants_1 = require("./app/utility/constants");
const auth_service_1 = __importDefault(require("./app/auth/auth.service"));
(0, dotenv_1.config)();
(0, app_1.startServer)();
const populateDb = () => {
    role_service_1.default.create({ id: constants_1.ROLES.ADMIN, name: "ADMIN" });
    role_service_1.default.create({ id: constants_1.ROLES.USER, name: "USER" });
    const admin = {
        id: "",
        name: "Swarnali",
        password: "1234",
        role: constants_1.ROLES.ADMIN,
        pokemon: []
    };
    //@ts-ignore
    auth_service_1.default.register(admin);
};
populateDb();
