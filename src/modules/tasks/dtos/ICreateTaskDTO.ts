interface ICreateTaskDTO {
  userId: string;
  categoryId: string;
  title: string;
  description: string;
  when: Date;
  done: boolean;
}

export { ICreateTaskDTO };
