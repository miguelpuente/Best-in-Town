import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../../config/base.service";
import { SucursalDTO } from "../dto/sucursal.dto";
import { SucursalEntity } from "../entities/sucursal.entity";

export class SucursalService extends BaseService<SucursalEntity> {
  constructor() {
    super(SucursalEntity);
  }
  async findAllSucursals(): Promise<SucursalEntity[]> {
    return (await this.execRepository).find();
  }
  async findSucursalById(id: string): Promise<SucursalEntity | null> {
    return (await this.execRepository).findOneBy({ id });
  }
  async createSucursal(body: SucursalDTO): Promise<SucursalEntity> {
    return (await this.execRepository).save(body);
  }
  async deleteSucursal(id: string): Promise<DeleteResult> {
    return (await this.execRepository).delete({ id });
  }
  async updateSucursal(
    id: string,
    infoUpdate: SucursalDTO
  ): Promise<UpdateResult> {
    return (await this.execRepository).update(id, infoUpdate);
  }
}