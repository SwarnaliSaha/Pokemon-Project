"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const uuid_1 = require("uuid");
class UserSchema {
    static create(user) {
        const id = (0, uuid_1.v4)();
        const userRecord = (Object.assign(Object.assign({}, user), { id }));
        UserSchema.users.push(userRecord);
        return userRecord;
    }
    static findOne(cb) {
        return UserSchema.users.find(cb);
    }
    static update(trainer) {
        const trainerName = trainer.name;
        const trainerPokemonList = trainer.listOfPokemon;
        UserSchema.pokemonWithTrainers[trainerName] = trainerPokemonList;
        const count = UserSchema.pokemonWithTrainers[trainerName].length;
        return [UserSchema.pokemonWithTrainers, count];
    }
}
exports.UserSchema = UserSchema;
UserSchema.users = [];
UserSchema.pokemonWithTrainers = {};
UserSchema.showPokemon = (data) => {
    const details = UserSchema.pokemonWithTrainers;
    const currentPokemonList = [];
    for (let key in details) {
        if (key === data) {
            currentPokemonList.push(details[key]);
            currentPokemonList.push(details[data].length);
        }
    }
    return currentPokemonList;
};
