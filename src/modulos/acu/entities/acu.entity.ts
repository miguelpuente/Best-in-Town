import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { CapituloEntity } from "../../capitulo/entities/capitulo.entity";
import { ItemEntity } from "../../item/entities/item.entity";
import { SubcapituloEntity } from "../../subcapitulo/entities/subcapitulo.entity";
import { SucursalEntity } from "../../sucursal/entities/sucursal.entity";
import { VersionEntity } from "../../version/entities/version.entity";

import { BaseEntity } from "../../../config/base.entity";

@Entity({ name: "acus" })
export class AcuEntity extends BaseEntity {
  @Column()
  codigo!: string;

  @Column()
  nombre!: string;

  @Column()
  equipoDireccion!: string;

  @Column()
  equipo!: string;

  @Column()
  materialSoporte!: string;

  @Column()
  evidenciaImplementacion!: string;

  @Column()
  activo!: boolean;

  @ManyToOne( ()=> CapituloEntity, (capitulo) => capitulo.acu)
  @JoinColumn({ name: "capitulo_id" })
  capitulo!: CapituloEntity;

  @ManyToOne( ()=> ItemEntity, (item) => item.acu)
  @JoinColumn({ name: "item_id" })
  item!: ItemEntity;

  @ManyToOne( ()=> SubcapituloEntity, (subcapitulo) => subcapitulo.acu)
  @JoinColumn({ name: "subcapitulo_id" })
  subcapitulo!: SubcapituloEntity;

  @ManyToOne( ()=> SucursalEntity, (sucursal) => sucursal.acu)
  @JoinColumn({ name: "sucursal_id" })
  sucursal!: SucursalEntity;

  @ManyToOne( ()=> VersionEntity, (version) => version.acu)
  @JoinColumn({ name: "version_id" })
  version!: VersionEntity;

}