import { BaseRouter } from "../../shared/router/router";
import { CapituloController } from "./controllers/capitulo.controller";
import { CapituloMiddleware } from "./middlewares/capitulo.middleware";
export class CapituloRouter extends BaseRouter<
    CapituloController,
    CapituloMiddleware
> {
  constructor() {
    super(CapituloController, CapituloMiddleware);
  }

  routes(): void {
    this.router.get("/capitulos", (req, res) =>
      this.controller.getCapitulos(req, res)
    );
    this.router.get("/capitulo/:id", (req, res) =>
      this.controller.getCapituloById(req, res)
    );
    this.router.post(
      "/createCapitulo",
      (req, res, next) => [this.middleware.capituloValidator(req, res, next)],
      (req, res) => this.controller.createCapitulo(req, res)
    );
    this.router.put("/updateCapitulo/:id", (req, res) =>
      this.controller.updateCapitulo(req, res)
    );
    this.router.delete("/deleteCapitulo/:id", (req, res) =>
      this.controller.deleteCapitulo(req, res)
    );
  }
}