import { Request, Response } from "express";
import { SucursalService } from "../services/sucursal.service";

export class SucursalController {
  constructor(
    private readonly sucursalService: SucursalService = new SucursalService()
  ) {}
  async getSucursals(req: Request, res: Response) {
    try {
      const data = await this.sucursalService.findAllSucursals();
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async getSucursalById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.sucursalService.findSucursalById(id);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async createSucursal(req: Request, res: Response) {
    try {
      const data = await this.sucursalService.createSucursal(req.body);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async updateSucursal(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.sucursalService.updateSucursal(id, req.body);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async deleteSucursal(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.sucursalService.deleteSucursal(id);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
}