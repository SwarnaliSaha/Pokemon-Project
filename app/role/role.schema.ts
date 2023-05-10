import { IRole, Role } from "./role.type";

export class RoleSchema{
    private static roles : Role = [];

    static create(role:IRole){
        RoleSchema.roles.push(role)
    }

}