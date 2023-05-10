import { v4 } from "uuid";
import { IUser, IUser1, User, UserPredicate } from "./user.type";

export class UserSchema{
    private static users : User = [];
    public static pokemonWithTrainers: Record<string, []> = {};

    static create(user:IUser){
        const id = v4();
        const userRecord = ({...user,id})
        UserSchema.users.push(userRecord)

        return userRecord;
    }

    static findOne(cb:UserPredicate){
        return UserSchema.users.find(cb);
    }

    static update(trainer:IUser1){
        const trainerName = trainer.name;
        const trainerPokemonList = trainer.listOfPokemon;
        
        UserSchema.pokemonWithTrainers[trainerName] = trainerPokemonList;
        const count = UserSchema.pokemonWithTrainers[trainerName].length;

        return [UserSchema.pokemonWithTrainers,count]
    }

    static showPokemon = (data:string)=>{
        const details = UserSchema.pokemonWithTrainers;
        const currentPokemonList = [];
    
        for(let key in details){
            if(key===data) {
                currentPokemonList.push(details[key])
                currentPokemonList.push(details[data].length);
            }
        }
        return currentPokemonList;
    }
}