import { BaseRouter } from "../../shared/router/router";
import { VersionController } from "./controllers/version.controller";
import { VersionMiddleware } from "./middlewares/version.middleware";
export class VersionRouter extends BaseRouter<
    VersionController,
    VersionMiddleware
> {
  constructor() {
    super(VersionController, VersionMiddleware);
  }

  routes(): void {
    this.router.get("/versions", (req, res) =>
      this.controller.getVersions(req, res)
    );
    this.router.get("/version/:id", (req, res) =>
      this.controller.getVersionById(req, res)
    );
    this.router.post(
      "/createVersion",
      (req, res, next) => [this.middleware.versionValidator(req, res, next)],
      (req, res) => this.controller.createVersion(req, res)
    );
    this.router.put("/updateVersion/:id", (req, res) =>
      this.controller.updateVersion(req, res)
    );
    this.router.delete("/deleteVersion/:id", (req, res) =>
      this.controller.deleteVersion(req, res)
    );
  }
}