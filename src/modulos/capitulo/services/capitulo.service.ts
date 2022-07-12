import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../../config/base.service";
import { CapituloDTO } from "../dto/capitulo.dto";
import { CapituloEntity } from "../entities/capitulo.entity";

export class CapituloService extends BaseService<CapituloEntity> {
  constructor() {
    super(CapituloEntity);
  }
  async findAllCapitulos(): Promise<CapituloEntity[]> {
    return (await this.execRepository).find();
  }
  async findCapituloById(id: string): Promise<CapituloEntity | null> {
    return (await this.execRepository).findOneBy({ id });
  }
  async createCapitulo(body: CapituloDTO): Promise<CapituloEntity> {
    return (await this.execRepository).save(body);
  }
  async deleteCapitulo(id: string): Promise<DeleteResult> {
    return (await this.execRepository).delete({ id });
  }
  async updateCapitulo(
    id: string,
    infoUpdate: CapituloDTO
  ): Promise<UpdateResult> {
    return (await this.execRepository).update(id, infoUpdate);
  }
}