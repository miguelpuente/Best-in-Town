import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../../config/base.service";
import { VersionDTO } from "../dto/version.dto";
import { VersionEntity } from "../entities/version.entity";

export class VersionService extends BaseService<VersionEntity> {
  constructor() {
    super(VersionEntity);
  }

  async findAllVersions(): Promise<VersionEntity[]> {
    return (await this.execRepository).find();
  }
  async findVersionById(id: string): Promise<VersionEntity | null> {
    return (await this.execRepository).findOneBy({ id });
  }
  async createVersion(body: VersionDTO): Promise<VersionEntity> {
    return (await this.execRepository).save(body);
  }
  async deleteVersion(id: string): Promise<DeleteResult> {
    return (await this.execRepository).delete({ id });
  }
  async updateVersion(
    id: string,
    infoUpdate: VersionDTO
  ): Promise<UpdateResult> {
    return (await this.execRepository).update(id, infoUpdate);
  }
}