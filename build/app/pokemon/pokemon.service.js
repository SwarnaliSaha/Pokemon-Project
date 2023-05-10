"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pokemon_repo_1 = __importDefault(require("./pokemon.repo"));
const create = (pokemon) => pokemon_repo_1.default.create(pokemon);
const findOne = (cb) => pokemon_repo_1.default.findOne(cb);
const findAll = () => pokemon_repo_1.default.findAll();
exports.default = { create, findOne, findAll };
