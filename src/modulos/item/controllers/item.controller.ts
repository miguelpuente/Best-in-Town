import { Request, Response } from "express";
import { ItemService } from "../services/item.service";

export class ItemController {
  constructor(
    private readonly itemService: ItemService = new ItemService()
  ) {}
  async getItems(req: Request, res: Response) {
    try {
      const data = await this.itemService.findAllItems();
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async getItemById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.itemService.findItemById(id);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async createItem(req: Request, res: Response) {
    try {
      const data = await this.itemService.createItem(req.body);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async updateItem(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.itemService.updateItem(id, req.body);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async deleteItem(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.itemService.deleteItem(id);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
}