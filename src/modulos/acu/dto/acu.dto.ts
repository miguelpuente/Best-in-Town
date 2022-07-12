import { IsNotEmpty } from "class-validator";
import { BaseDTO } from "../../../config/base.dto";
import { CapituloEntity } from "../../capitulo/entities/capitulo.entity";
import { ItemEntity } from "../../item/entities/item.entity";
import { SubcapituloEntity } from "../../subcapitulo/entities/subcapitulo.entity";
import { SucursalEntity } from "../../sucursal/entities/sucursal.entity";
import { VersionEntity } from "../../version/entities/version.entity";

export class AcuDTO extends BaseDTO {
    @IsNotEmpty()
    codigo!: string;
  
    @IsNotEmpty()
    nombre!: string;
  
    @IsNotEmpty()
    equipoDireccion!: string;
  
    @IsNotEmpty()
    equipo!: string;
  
    @IsNotEmpty()
    materialSoporte!: string;
  
    @IsNotEmpty()
    evidenciaImplementacion!: string;
  
    @IsNotEmpty()
    activo!: boolean;

    @IsNotEmpty()
    capitulo!: CapituloEntity;
  
    @IsNotEmpty()
    item!: ItemEntity;
  
    @IsNotEmpty()
    subcapitulo!: SubcapituloEntity;
  
    @IsNotEmpty()
    sucursal!: SucursalEntity;
  
    @IsNotEmpty()
    version!: VersionEntity;

}