interface IUpdateTaskDTO {
  id: string;
  userId: string;
  categoryId: string;
  title: string;
  description: string;
  when: Date;
  done: boolean;
}

export { IUpdateTaskDTO };
