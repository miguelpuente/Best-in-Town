import { Request, Response } from "express";
import { SubcapituloService } from "../services/subcapitulo.service";

export class SubcapituloController {
  constructor(
    private readonly subcapituloService: SubcapituloService = new SubcapituloService()
  ) {}
  async getSubcapitulos(req: Request, res: Response) {
    try {
      const data = await this.subcapituloService.findAllSubcapitulos();
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async getSubcapituloById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.subcapituloService.findSubcapituloById(id);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async createSubcapitulo(req: Request, res: Response) {
    try {
      const data = await this.subcapituloService.createSubcapitulo(req.body);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async updateSubcapitulo(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.subcapituloService.updateSubcapitulo(id, req.body);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async deleteSubcapitulo(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.subcapituloService.deleteSubcapitulo(id);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
}