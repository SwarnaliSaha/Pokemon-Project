"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_repo_1 = __importDefault(require("./user.repo"));
const create = (user) => user_repo_1.default.create(user);
const findOne = (cb) => user_repo_1.default.findOne(cb);
const update = (trainer) => user_repo_1.default.update(trainer);
const showPokemon = (data) => user_repo_1.default.showPokemon(data);
exports.default = { create, findOne, update, showPokemon };
