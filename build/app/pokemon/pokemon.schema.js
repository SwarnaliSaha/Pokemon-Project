"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonSchema = void 0;
const uuid_1 = require("uuid");
class PokemonSchema {
    static create(pokemon) {
        const id = (0, uuid_1.v4)();
        const newPokemon = Object.assign(Object.assign({}, pokemon), { id });
        PokemonSchema.pokemons.push(newPokemon);
        return newPokemon;
    }
    static findOne(cb) {
        PokemonSchema.pokemons.find(cb);
    }
    static findAllPokemons() {
        return PokemonSchema.pokemons;
    }
}
exports.PokemonSchema = PokemonSchema;
PokemonSchema.pokemons = [];
