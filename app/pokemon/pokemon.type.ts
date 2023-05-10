export interface IPokemon{
    id:string,
    name:string
}

export type Pokemon = IPokemon[];

export type PokemonPredicate = (p:IPokemon)=>boolean