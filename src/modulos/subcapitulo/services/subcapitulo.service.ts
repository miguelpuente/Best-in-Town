import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../../config/base.service";
import { SubcapituloDTO } from "../dto/subcapitulo.dto";
import { SubcapituloEntity } from "../entities/subcapitulo.entity";

export class SubcapituloService extends BaseService<SubcapituloEntity> {
  constructor() {
    super(SubcapituloEntity);
  }

  async findAllSubcapitulos(): Promise<SubcapituloEntity[]> {
    return (await this.execRepository).find();
  }
  async findSubcapituloById(id: string): Promise<SubcapituloEntity | null> {
    return (await this.execRepository).findOneBy({ id });
  }
  async createSubcapitulo(body: SubcapituloDTO): Promise<SubcapituloEntity> {
    return (await this.execRepository).save(body);
  }
  async deleteSubcapitulo(id: string): Promise<DeleteResult> {
    return (await this.execRepository).delete({ id });
  }
  async updateSubcapitulo(
    id: string,
    infoUpdate: SubcapituloDTO
  ): Promise<UpdateResult> {
    return (await this.execRepository).update(id, infoUpdate);
  }
}