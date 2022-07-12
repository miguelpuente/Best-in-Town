import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "../../../config/base.entity";
import { ItemEntity } from "../../item/entities/item.entity";

@Entity({ name: "periodos" })
export class PeriodoEntity extends BaseEntity {
  
  @Column()
  nombre!: string;

  @Column()
  descripcion!: string;

  @Column()
  activo!: boolean;

  @OneToMany(()=> ItemEntity, (item)=> item.periodo)
  item!: ItemEntity[];

}