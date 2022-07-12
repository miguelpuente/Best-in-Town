import { validate } from "class-validator";
import { NextFunction, Request, Response } from "express";
import { SubcapituloDTO } from "../dto/subcapitulo.dto";
import { HttpResponse } from "../../../shared/response/http.response";

export class SubcapituloMiddleware {
  constructor(
    private readonly httpResponse: HttpResponse = new HttpResponse()
  ) {}
  subcapituloValidator(req: Request, res: Response, next: NextFunction) {
    const { numero, nombre, descripcion, activo } =
      req.body;

    const valid = new SubcapituloDTO();

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
