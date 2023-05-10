"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pokemon_schema_1 = require("./pokemon.schema");
const create = (pokemon) => pokemon_schema_1.PokemonSchema.create(pokemon);
const findOne = (cb) => pokemon_schema_1.PokemonSchema.findOne(cb);
const findAll = () => pokemon_schema_1.PokemonSchema.findAllPokemons();
exports.default = { create, findOne, findAll };
