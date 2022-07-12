import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../../config/base.service";
import { AcuDTO } from "../dto/acu.dto";
import { AcuEntity } from "../entities/acu.entity";

export class AcuService extends BaseService<AcuEntity> {
  constructor() {
    super(AcuEntity);
  }

  async findAllAcus(): Promise<AcuEntity[]> {
    return (await this.execRepository).find();
  }
  async findAcuById(id: string): Promise<AcuEntity | null> {
    return (await this.execRepository).findOneBy({ id });
  }
  async createAcu(body: AcuDTO): Promise<AcuEntity> {
    return (await this.execRepository).save(body);
  }
  async deleteAcu(id: string): Promise<DeleteResult> {
    return (await this.execRepository).delete({ id });
  }
  async updateAcu(
    id: string,
    infoUpdate: AcuDTO
  ): Promise<UpdateResult> {
    return (await this.execRepository).update(id, infoUpdate);
  }
}