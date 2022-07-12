import { RoleType } from "../../modulos/user/dto/user.dto";

export interface PayloadToken {
  role: RoleType;
  sub: string;
}
