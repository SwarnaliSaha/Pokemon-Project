import { v4 } from "uuid";
import { IPokemon, Pokemon, PokemonPredicate } from "./pokemon.type";

export class PokemonSchema{
    private static pokemons : Pokemon = [];

    static create(pokemon:IPokemon){
        const id = v4();
        const newPokemon = {...pokemon,id}
        PokemonSchema.pokemons.push(newPokemon);
        return newPokemon
    }

    static findOne(cb:PokemonPredicate){
        PokemonSchema.pokemons.find(cb);
    }

    static findAllPokemons(){
        return PokemonSchema.pokemons;
    }
}