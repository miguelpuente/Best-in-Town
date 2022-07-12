import { validate } from "class-validator";
import { NextFunction, Request, Response } from "express";
import { PeriodoDTO } from "../dto/periodo.dto";
import { HttpResponse } from "../../../shared/response/http.response";

export class PeriodoMiddleware {
  constructor(
    private readonly httpResponse: HttpResponse = new HttpResponse()
  ) {}
  periodoValidator(req: Request, res: Response, next: NextFunction) {
    const { nombre, descripcion, activo } =
      req.body;

    const valid = new PeriodoDTO();

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
