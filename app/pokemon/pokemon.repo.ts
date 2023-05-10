import { PokemonSchema } from "./pokemon.schema";
import { IPokemon,Pokemon, PokemonPredicate } from "./pokemon.type";

const create = (pokemon:IPokemon) => PokemonSchema.create(pokemon);

const findOne = (cb:PokemonPredicate) => PokemonSchema.findOne(cb);

const findAll = ()=>PokemonSchema.findAllPokemons();

export default {create,findOne,findAll}