import Repository from '../common/base-repository';

export default class CrudResolver<T> {
  constructor(protected repository: Repository<T>) {}

  public async save(data: T,model:any): Promise<T> {
    return await this.repository.save(data,model);
  }

  public async getOneById(id: string,model:any): Promise<T> {
    return await this.repository.getById(id,model);
  }

  public async updateOneById(id: string, update: any,model:any): Promise<T> {
    return await this.repository.updateById(id, update,model);
  }

  public async deleteOneById(id: string,model:any): Promise<any> {
    return await this.repository.deleteById(id,model);
  }

  public async getAll(model:any): Promise<T[]> {
    return await this.repository.getAll(model);
  }

  public async bulkUpdate(
    ids: string[],
    field: string,
    value: string,
    model:any
  ): Promise<T[]> {
    return await Promise.all(
      ids.map(async id => await this.updateOneById(id, { [field]: value },model))
    );
  }

  public async bulkDelete(ids: string[],model:any): Promise<T[]> {
    return await Promise.all(ids.map(async id => await this.deleteOneById(id,model)));
  }
}
