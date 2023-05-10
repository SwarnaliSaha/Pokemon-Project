import pokemonRepo from "./pokemon.repo";
import { IPokemon,Pokemon, PokemonPredicate } from "./pokemon.type";

const create = (pokemon:IPokemon) => pokemonRepo.create(pokemon);
const findOne = (cb:PokemonPredicate) => pokemonRepo.findOne(cb);
const findAll = ()=>pokemonRepo.findAll();

export default {create,findOne,findAll}