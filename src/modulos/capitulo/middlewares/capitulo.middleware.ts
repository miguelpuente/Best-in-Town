import { validate } from "class-validator";
import { NextFunction, Request, Response } from "express";
import { CapituloDTO } from "../dto/capitulo.dto";
import { HttpResponse } from "../../../shared/response/http.response";

export class CapituloMiddleware {
  constructor(
    private readonly httpResponse: HttpResponse = new HttpResponse()
  ) {}
  capituloValidator(req: Request, res: Response, next: NextFunction) {
    const { numero, nombre, descripcion, activo } =
      req.body;

    const valid = new CapituloDTO();

    valid.numero = numero;
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
