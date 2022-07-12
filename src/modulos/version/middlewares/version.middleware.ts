import { validate } from "class-validator";
import { NextFunction, Request, Response } from "express";
import { VersionDTO } from "../dto/version.dto";
import { HttpResponse } from "../../../shared/response/http.response";

export class VersionMiddleware {
  constructor(
    private readonly httpResponse: HttpResponse = new HttpResponse()
  ) {}
  versionValidator(req: Request, res: Response, next: NextFunction) {
    const { numero, fecha, nombre, descripcion, activo} =
      req.body;

    const valid = new VersionDTO();

    valid.numero = numero;
    valid.fecha = fecha;
    valid.nombre = nombre;
    valid.descripcion = descripcion;
    valid.activo = activo;

    validate(valid).then((err) => {
      if (err.length > 0) {
        return this.httpResponse.Error(res, err);
      } else {
        next();
      }
    });
  }
}
