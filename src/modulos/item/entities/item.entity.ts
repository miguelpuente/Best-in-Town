import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "../../../config/base.entity";
import { PeriodoEntity } from "../../periodo/entities/periodo.entity"
import { AcuEntity } from "../../acu/entities/acu.entity"

@Entity({ name: "items" })
export class ItemEntity extends BaseEntity {
  @Column() 
  numero!: string;

  @Column()
  nombre!: string;

  @Column()
  descripcion!: string;

  @Column()
  evidenciaImplementacion!: string;

  @Column()
  puntajeMaximo!: number;

  @Column()
  puntajeMedio!: number;

  @Column()
  puntajeMinimo!: number;

  @Column()
  activo!: boolean;

  @ManyToOne( ()=> PeriodoEntity, (periodo) => periodo.item)
  @JoinColumn({ name: "periodo_id" })
  periodo!: PeriodoEntity;

  @OneToMany(()=> AcuEntity, (acu)=> acu.item)
  acu!: AcuEntity[];

}