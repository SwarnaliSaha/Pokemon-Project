import { UserSchema } from "./user.schema";
import userService from "./user.service";
import { IUser, IUser1, UserPredicate } from "./user.type";

const create = (user:IUser) => UserSchema.create(user);

const findOne = (cb:UserPredicate) => UserSchema.findOne(cb);

const update = (trainer:IUser1) => UserSchema.update(trainer);

const showPokemon = (data:string) =>UserSchema.showPokemon(data);

export default {create,findOne,update,showPokemon}