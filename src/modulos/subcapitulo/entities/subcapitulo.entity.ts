import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "../../../config/base.entity";
import { AcuEntity } from "../../acu/entities/acu.entity"
//import { RoleType } from "../dto/user.dto";

@Entity({ name: "subcapitulos" })
export class SubcapituloEntity extends BaseEntity {
  @Column()
  numero!: string;

  @Column()
  nombre!: string;

  @Column()
  descripcion!: string;

  @Column()
  activo!: boolean;

  @OneToMany(()=> AcuEntity, (acu)=> acu.subcapitulo)
  acu!: AcuEntity[];

}