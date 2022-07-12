import { Request, Response } from "express";
import { CapituloService } from "../services/capitulo.service";

export class CapituloController {
  constructor(
    private readonly capituloService: CapituloService = new CapituloService()
  ) {}
  async getCapitulos(req: Request, res: Response) {
    try {
      const data = await this.capituloService.findAllCapitulos();
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async getCapituloById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.capituloService.findCapituloById(id);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async createCapitulo(req: Request, res: Response) {
    try {
      const data = await this.capituloService.createCapitulo(req.body);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async updateCapitulo(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.capituloService.updateCapitulo(id, req.body);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async deleteCapitulo(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.capituloService.deleteCapitulo(id);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
}