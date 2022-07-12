import { BaseRouter } from "../../shared/router/router";
import { SubcapituloController } from "./controllers/subcapitulo.controller";
import { SubcapituloMiddleware } from "./middlewares/subcapitulo.middleware";
export class SubcapituloRouter extends BaseRouter<
    SubcapituloController,
    SubcapituloMiddleware
> {
  constructor() {
    super(SubcapituloController, SubcapituloMiddleware);
  }

  routes(): void {
    this.router.get("/subcapitulos", (req, res) =>
      this.controller.getSubcapitulos(req, res)
    );
    this.router.get("/subcapitulo/:id", (req, res) =>
      this.controller.getSubcapituloById(req, res)
    );
    this.router.post(
      "/createSubcapitulo",
      (req, res, next) => [this.middleware.subcapituloValidator(req, res, next)],
      (req, res) => this.controller.createSubcapitulo(req, res)
    );
    this.router.put("/updateSubcapitulo/:id", (req, res) =>
      this.controller.updateSubcapitulo(req, res)
    );
    this.router.delete("/deleteSubcapitulo/:id", (req, res) =>
      this.controller.deleteSubcapitulo(req, res)
    );
  }
}