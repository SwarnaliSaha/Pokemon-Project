export interface IUser{
    id:string,
    name:string,
    password:string,
    role:string,
    pokemon:[],
}

export type User = IUser[]

export type UserPredicate = (u:IUser)=>boolean

export interface IUser1{
    name:string,
    listOfPokemon:[]
}