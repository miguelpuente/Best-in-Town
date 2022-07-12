import { validate } from "class-validator";
import { NextFunction, Request, Response } from "express";
import { SucursalDTO } from "../dto/sucursal.dto";
import { HttpResponse } from "../../../shared/response/http.response";

export class SucursalMiddleware {
  constructor(
    private readonly httpResponse: HttpResponse = new HttpResponse()
  ) {}
  sucursalValidator(req: Request, res: Response, next: NextFunction) {
    const { nombre} =
      req.body;

    const valid = new SucursalDTO();

    valid.nombre = nombre;

    validate(valid).then((err) => {
      if (err.length > 0) {
        return this.httpResponse.Error(res, err);
      } else {
        next();
      }
    });
  }
}
