import userRepo from "./user.repo";
import { IUser, IUser1, UserPredicate } from "./user.type";
import pokemonService from "../pokemon/pokemon.service";
import { IPokemon } from "../pokemon/pokemon.type";
import authService from "../auth/auth.service";

const create = (user:IUser) => userRepo.create(user);
const findOne = (cb:UserPredicate) => userRepo.findOne(cb);
const update = (trainer:IUser1) => userRepo.update(trainer);
const showPokemon = (data:string) =>userRepo.showPokemon(data);

export default {create,findOne,update,showPokemon}