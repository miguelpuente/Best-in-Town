import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "../../../config/base.entity";
import { AcuEntity } from "../../acu/entities/acu.entity";

@Entity({ name: "sucursals" })
export class SucursalEntity extends BaseEntity {
  @Column()
  nombre!: string;

  @OneToMany(()=> AcuEntity, (acu)=> acu.sucursal)
  acu!: AcuEntity[];

}