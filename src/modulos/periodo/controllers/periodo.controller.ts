import { Request, Response } from "express";
import { PeriodoService } from "../services/periodo.service";

export class PeriodoController {
  constructor(
    private readonly periodoService: PeriodoService = new PeriodoService()
  ) {}
  async getPeriodos(req: Request, res: Response) {
    try {
      const data = await this.periodoService.findAllPeriodos();
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async getPeriodoById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.periodoService.findPeriodoById(id);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async createPeriodo(req: Request, res: Response) {
    try {
      const data = await this.periodoService.createPeriodo(req.body);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async updatePeriodo(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.periodoService.updatePeriodo(id, req.body);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async deletePeriodo(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.periodoService.deletePeriodo(id);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
}