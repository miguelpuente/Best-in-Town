import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "../../../config/base.entity";
import { AcuEntity } from "../../acu/entities/acu.entity"

@Entity({ name: "versions" })
export class VersionEntity extends BaseEntity {
  @Column()
  numero!: string;

  @Column()
  fecha!: Date;

  @Column()
  nombre!: string;

  @Column()
  descripcion!: string;

  @Column()
  activo!: boolean;

  @OneToMany(()=> AcuEntity, (acu)=> acu.version)
  acu!: AcuEntity[];

}