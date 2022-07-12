import { BaseRouter } from "../../shared/router/router";
import { ItemController } from "./controllers/item.controller";
import { ItemMiddleware } from "./middlewares/item.middleware";
export class ItemRouter extends BaseRouter<
  ItemController,
  ItemMiddleware
> {
  constructor() {
    super(ItemController, ItemMiddleware);
  }

  routes(): void {
    this.router.get("/items", (req, res) =>
      this.controller.getItems(req, res)
    );
    this.router.get("/item/:id", (req, res) =>
      this.controller.getItemById(req, res)
    );
    this.router.post(
      "/createItem",
      (req, res, next) => [this.middleware.itemValidator(req, res, next)],
      (req, res) => this.controller.createItem(req, res)
    );
    this.router.put("/updateItem/:id", (req, res) =>
      this.controller.updateItem(req, res)
    );
    this.router.delete("/deleteItem/:id", (req, res) =>
      this.controller.deleteItem(req, res)
    );
  }
}