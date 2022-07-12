import { Column, Entity, OneToOne } from "typeorm";
import { BaseEntity } from "../../../config/base.entity";
import { RoleType } from "../dto/user.dto";

@Entity({ name: "users" })
export class UserEntity extends BaseEntity {
  @Column()
  name!: string;

  @Column()
  lastname!: string;

  @Column()
  username!: string;

  @Column()
  phonenumber!: number;

  @Column()
  email!: string;

  @Column({ select: false })
  password!: string;

  @Column({ type: "enum", enum: RoleType, nullable: false })
  role!: RoleType;
}
