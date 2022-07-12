import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../../config/base.service";
import { PeriodoDTO } from "../dto/periodo.dto";
import { PeriodoEntity } from "../entities/periodo.entity";

export class PeriodoService extends BaseService<PeriodoEntity> {
  constructor() {
    super(PeriodoEntity);
  }
  async findAllPeriodos(): Promise<PeriodoEntity[]> {
    return (await this.execRepository).find();
  }
  async findPeriodoById(id: string): Promise<PeriodoEntity | null> {
    return (await this.execRepository).findOneBy({ id });
  }
  async createPeriodo(body: PeriodoDTO): Promise<PeriodoEntity> {
    return (await this.execRepository).save(body);
  }
  async deletePeriodo(id: string): Promise<DeleteResult> {
    return (await this.execRepository).delete({ id });
  }
  async updatePeriodo(
    id: string,
    infoUpdate: PeriodoDTO
  ): Promise<UpdateResult> {
    return (await this.execRepository).update(id, infoUpdate);
  }
}