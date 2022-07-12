import { BaseRouter } from "../../shared/router/router";
import { SucursalController } from "./controllers/sucursal.controller";
import { SucursalMiddleware } from "./middlewares/sucursal.middleware";
export class SucursalRouter extends BaseRouter<
  SucursalController,
  SucursalMiddleware
> {
  constructor() {
    super(SucursalController, SucursalMiddleware);
  }

  routes(): void {
    this.router.get("/sucursals", (req, res) =>
      this.controller.getSucursals(req, res)
    );
    this.router.get("/sucursal/:id", (req, res) =>
      this.controller.getSucursalById(req, res)
    );
    this.router.post(
      "/createSucursal",
      (req, res, next) => [this.middleware.sucursalValidator(req, res, next)],
      (req, res) => this.controller.createSucursal(req, res)
    );
    this.router.put("/updateSucursal/:id", (req, res) =>
      this.controller.updateSucursal(req, res)
    );
    this.router.delete("/deleteSucursal/:id", (req, res) =>
      this.controller.deleteSucursal(req, res)
    );
  }
}