import { IsNotEmpty } from "class-validator";
import { BaseDTO } from "../../../config/base.dto";
import { PeriodoEntity } from "../../periodo/entities/periodo.entity"

export class ItemDTO extends BaseDTO {
    @IsNotEmpty() 
    numero!: string;
  
    @IsNotEmpty()
    nombre!: string;
  
    @IsNotEmpty()
    descripcion!: string;
  
    @IsNotEmpty()
    evidenciaImplementacion!: string;
  
    @IsNotEmpty()
    puntajeMaximo!: number;
  
    @IsNotEmpty()
    puntajeMedio!: number;
  
    @IsNotEmpty()
    puntajeMinimo!: number;
  
    @IsNotEmpty()
    activo!: boolean;

    @IsNotEmpty()
    periodo!: PeriodoEntity;
}