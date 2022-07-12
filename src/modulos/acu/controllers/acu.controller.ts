import { Request, Response } from "express";
import { AcuService } from "../services/acu.service";

export class AcuController {
  constructor(
    private readonly acuService: AcuService = new AcuService()
  ) {}
  async getAcus(req: Request, res: Response) {
    try {
      const data = await this.acuService.findAllAcus();
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async getAcuById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.acuService.findAcuById(id);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async createAcu(req: Request, res: Response) {
    try {
      const data = await this.acuService.createAcu(req.body);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async updateAcu(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.acuService.updateAcu(id, req.body);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async deleteAcu(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.acuService.deleteAcu(id);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
}