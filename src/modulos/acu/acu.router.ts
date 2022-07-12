import { BaseRouter } from "../../shared/router/router";
import { AcuController } from "./controllers/acu.controller";
import { AcuMiddleware } from "./middlewares/acu.middleware";
export class AcuRouter extends BaseRouter<
    AcuController,
    AcuMiddleware
> {
  constructor() {
    super(AcuController, AcuMiddleware);
  }

  routes(): void {
    this.router.get("/acus", (req, res) =>
      this.controller.getAcus(req, res)
    );
    this.router.get("/acu/:id", (req, res) =>
      this.controller.getAcuById(req, res)
    );
    this.router.post(
      "/createAcu",
      (req, res, next) => [this.middleware.acuValidator(req, res, next)],
      (req, res) => this.controller.createAcu(req, res)
    );
    this.router.put("/updateAcu/:id", (req, res) =>
      this.controller.updateAcu(req, res)
    );
    this.router.delete("/deleteAcu/:id", (req, res) =>
      this.controller.deleteAcu(req, res)
    );
  }
}