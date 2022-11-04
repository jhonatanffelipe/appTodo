interface ICreateTaskDTO {
  id: string;
  userId: string;
  categoryId: string;
  title: string;
  description: string;
  date: Date;
  done: boolean;
}

export { ICreateTaskDTO };
