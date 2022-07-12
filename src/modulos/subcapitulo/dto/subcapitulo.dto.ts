import { IsNotEmpty } from "class-validator";
import { BaseDTO } from "../../../config/base.dto";

export class SubcapituloDTO extends BaseDTO {
  @IsNotEmpty()
  numero!: string;

  @IsNotEmpty()
  nombre!: string;

  @IsNotEmpty()
  descripcion!: string;

  @IsNotEmpty()
  activo!: boolean;

}