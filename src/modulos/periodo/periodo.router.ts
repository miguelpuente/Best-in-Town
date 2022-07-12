import { BaseRouter } from "../../shared/router/router";
import { PeriodoController } from "./controllers/periodo.controller";
import { PeriodoMiddleware } from "./middlewares/periodo.middleware";
export class PeriodoRouter extends BaseRouter<
  PeriodoController,
  PeriodoMiddleware
> {
  constructor() {
    super(PeriodoController, PeriodoMiddleware);
  }

  routes(): void {
    this.router.get("/periodos", (req, res) =>
      this.controller.getPeriodos(req, res)
    );
    this.router.get("/periodo/:id", (req, res) =>
      this.controller.getPeriodoById(req, res)
    );
    this.router.post(
      "/createPeriodo",
      (req, res, next) => [this.middleware.periodoValidator(req, res, next)],
      (req, res) => this.controller.createPeriodo(req, res)
    );
    this.router.put("/updatePeriodo/:id", (req, res) =>
      this.controller.updatePeriodo(req, res)
    );
    this.router.delete("/deletePeriodo/:id", (req, res) =>
      this.controller.deletePeriodo(req, res)
    );
  }
}