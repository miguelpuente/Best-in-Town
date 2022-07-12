import { IsNotEmpty } from "class-validator";
import { BaseDTO } from "../../../config/base.dto";

export class SucursalDTO extends BaseDTO {
  @IsNotEmpty()
  nombre!: string;

}