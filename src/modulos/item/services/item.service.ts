import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../../config/base.service";
import { ItemDTO } from "../dto/item.dto";
import { ItemEntity } from "../entities/item.entity";

export class ItemService extends BaseService<ItemEntity> {
  constructor() {
    super(ItemEntity);
  }

  async findAllItems(): Promise<ItemEntity[]> {
    return (await this.execRepository).find();
  }
  async findItemById(id: string): Promise<ItemEntity | null> {
    return (await this.execRepository).findOneBy({ id });
  }
  async createItem(body: ItemDTO): Promise<ItemEntity> {
    return (await this.execRepository).save(body);
  }
  async deleteItem(id: string): Promise<DeleteResult> {
    return (await this.execRepository).delete({ id });
  }
  async updateItem(
    id: string,
    infoUpdate: ItemDTO
  ): Promise<UpdateResult> {
    return (await this.execRepository).update(id, infoUpdate);
  }
}