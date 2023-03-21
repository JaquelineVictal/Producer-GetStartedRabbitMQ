export class Publisher {}

export type PublishConfig<T = any> = {
  data: T;
  queueName: string;
};
