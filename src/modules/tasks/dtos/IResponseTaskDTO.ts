import IResponseCategoryDTO from './IResponseCategoryDTO';

export default interface IResponseTaskDTO {
  id: string;
  userId: string;
  categoryId?: string;
  title: string;
  description: string;
  when: Date;
  done: boolean;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
  deletedAt: Date | undefined;
  category: IResponseCategoryDTO;
}
