import userService from "../user/user.service";
import { IUser,IUser1,User } from "../user/user.type";
import { genSalt,hash,compare } from "bcryptjs";
import { AUTH_RESPONSE } from "./auth.responses";
import { ROLES } from "../utility/constants";
import { ICredential } from "./auth.type";
import { IPokemon } from "../pokemon/pokemon.type";

const encryptedPassword = async (user:IUser)=>{
    const salt = await genSalt(10);
    const hashedPassword = await hash(user.password,salt);
    user.password = hashedPassword;
    return user;
}

const register = async (user:IUser)=>{
    const existingUser = userService.findOne(u=>u.name===user.name)
    if(existingUser) throw AUTH_RESPONSE.INVALID_CREDENTIAL;

    user = await encryptedPassword(user);
    if(!user.role) user.role=ROLES.USER
    user.pokemon = [];
    return userService.create(user);
}

const login = async (credential:ICredential)=>{
    const data = credential.data;

    const user = userService.findOne(u=>u.name===credential.name)
    if(!user) throw AUTH_RESPONSE.INVALID_CREDENTIAL;
    const isPasswordValid = await compare(credential.password,user.password)
    if(!isPasswordValid) throw AUTH_RESPONSE.INVALID_CREDENTIAL;

    if(user.role===ROLES.ADMIN) return userService.showPokemon(data||"")

    const {password,...userClone} = user;
    return userClone;
}

const assignTrainer = (user:IUser1)=>{
    return userService.update(user);
}

export default {register,login,assignTrainer}