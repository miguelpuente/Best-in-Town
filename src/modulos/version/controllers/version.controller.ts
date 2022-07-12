import { Request, Response } from "express";
import { VersionService } from "../services/version.service";

export class VersionController {
  constructor(
    private readonly versionService: VersionService = new VersionService()
  ) {}
  async getVersions(req: Request, res: Response) {
    try {
      const data = await this.versionService.findAllVersions();
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async getVersionById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.versionService.findVersionById(id);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async createVersion(req: Request, res: Response) {
    try {
      const data = await this.versionService.createVersion(req.body);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async updateVersion(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.versionService.updateVersion(id, req.body);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async deleteVersion(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.versionService.deleteVersion(id);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
}