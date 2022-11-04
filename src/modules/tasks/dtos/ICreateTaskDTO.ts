interface ICreateTaskDTO {
  userId: string;
  categoryId: string;
  title: string;
  description: string;
  when: Date;
}

export { ICreateTaskDTO };
