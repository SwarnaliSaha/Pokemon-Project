import {config} from 'dotenv'
import { startServer } from './app/app'
import roleService from './app/role/role.service';
import { ROLES } from './app/utility/constants';
import authService from './app/auth/auth.service';

config();
startServer();

const populateDb = ()=>{
    roleService.create({id:ROLES.ADMIN,name:"ADMIN"});
    roleService.create({id:ROLES.USER,name:"USER"});

    const admin = {
        id:"",
        name:"Swarnali",
        password:"1234",
        role:ROLES.ADMIN,
        pokemon:[] 
    }
    //@ts-ignore
    authService.register(admin)
}

populateDb();