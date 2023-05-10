"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_schema_1 = require("./user.schema");
const create = (user) => user_schema_1.UserSchema.create(user);
const findOne = (cb) => user_schema_1.UserSchema.findOne(cb);
const update = (trainer) => user_schema_1.UserSchema.update(trainer);
const showPokemon = (data) => user_schema_1.UserSchema.showPokemon(data);
exports.default = { create, findOne, update, showPokemon };
