import { IsNotEmpty } from "class-validator";
import { BaseDTO } from "../../../config/base.dto";

export class VersionDTO extends BaseDTO {
  @IsNotEmpty()
  numero!: string;

  @IsNotEmpty()
  fecha!: Date;

  @IsNotEmpty()
  nombre!: string;

  @IsNotEmpty()
  descripcion!: string;

  @IsNotEmpty()
  activo!: boolean;

}