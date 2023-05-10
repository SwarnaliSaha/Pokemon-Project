"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = void 0;
const express_1 = require("express");
const route_data_1 = require("./route.data");
const registerRoutes = (app) => {
    app.use((0, express_1.json)());
    for (let route of route_data_1.routes)
        app.use(route.path, route.router);
};
exports.registerRoutes = registerRoutes;
