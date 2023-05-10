import { RoleSchema } from "./role.schema";
import { IRole } from "./role.type";

const create = (role:IRole) => RoleSchema.create(role)

export default {create}