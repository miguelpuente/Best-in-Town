import { IsNotEmpty } from "class-validator";
import { BaseDTO } from "../../../config/base.dto";

export class PeriodoDTO extends BaseDTO {
  @IsNotEmpty()
  nombre!: string;

  @IsNotEmpty()
  descripcion!: string;

  @IsNotEmpty()
  activo!:boolean;

}