import { validate } from "class-validator";
import { NextFunction, Request, Response } from "express";
import { ItemDTO } from "../dto/item.dto";
import { HttpResponse } from "../../../shared/response/http.response";

export class ItemMiddleware {
  constructor(
    private readonly httpResponse: HttpResponse = new HttpResponse()
  ) {}
  itemValidator(req: Request, res: Response, next: NextFunction) {
    const { numero, nombre, descripcion, evidenciaImplementacion, puntajeMaximo, puntajeMedio, puntajeMinimo, activo, periodo} =
      req.body;

    const valid = new ItemDTO();

    valid.numero = numero;
    valid.nombre = nombre;
    valid.descripcion = descripcion;
    valid.evidenciaImplementacion = evidenciaImplementacion;
    valid.puntajeMaximo = puntajeMaximo;
    valid.puntajeMedio = puntajeMedio;
    valid.puntajeMinimo = puntajeMinimo;
    valid.activo = activo;
    valid.periodo = periodo;

    validate(valid).then((err) => {
      if (err.length > 0) {
        return this.httpResponse.Error(res, err);
      } else {
        next();
      }
    });
  }
}
