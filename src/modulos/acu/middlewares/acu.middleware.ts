import { validate } from "class-validator";
import { NextFunction, Request, Response } from "express";
import { AcuDTO } from "../dto/acu.dto";
import { HttpResponse } from "../../../shared/response/http.response";

export class AcuMiddleware {
  constructor(
    private readonly httpResponse: HttpResponse = new HttpResponse()
  ) {}
  acuValidator(req: Request, res: Response, next: NextFunction) {
    const { codigo, nombre, equipoDireccion, equipo, materialSoporte, evidenciaImplementacion, activo, capitulo, item, subcapitulo, sucursal, version } =
      req.body;

    const valid = new AcuDTO();

    valid.codigo = codigo;
    valid.nombre = nombre;
    valid.equipoDireccion = equipoDireccion;
    valid.equipo = equipo;
    valid.materialSoporte = materialSoporte;
    valid.evidenciaImplementacion = evidenciaImplementacion;
    valid.activo = activo;
    valid.capitulo = capitulo;
    valid.item = item;
    valid.subcapitulo = subcapitulo;
    valid.sucursal = sucursal;
    valid.version = version;

    validate(valid).then((err) => {
      if (err.length > 0) {
        return this.httpResponse.Error(res, err);
      } else {
        next();
      }
    });
  }
}
