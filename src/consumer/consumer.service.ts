import { Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Channel, connect, ConsumeMessage } from 'amqplib';
import { PublisherService } from 'src/publisher/publisher.service';
import { QueueEnum } from 'src/queue.enum';
import { Items, OrderEntity } from './cosumer.interface';
import { setTimeout } from 'timers/promises';
import { PublishConfig } from 'src/publisher/entities/publisher.entity';
@Injectable()
export class ConsumerService implements OnModuleInit {
  queueName: QueueEnum = QueueEnum.NOTIFICATION;
  logger: Logger = new Logger();

  constructor(
    @Inject('CONFIG') private config: string,
    private readonly publisherService: PublisherService,
  ) {}

  onModuleInit() {
    this.onNewMessage(this.queueName);
  }

  public async onNewMessage(
    queueName: QueueEnum,
    prefetchQuantity = 1,
  ): Promise<any> {
    const connection = await connect(this.config);
    const channel: Channel = await connection.createChannel();
    channel.prefetch(prefetchQuantity);

    this.logger.log(`Listening to messages on queue ${queueName}`);
    channel.consume(queueName, (msg) => this.tryConsume(msg, channel), {
      noAck: false,
    });
  }

  private async tryConsume(msg: ConsumeMessage, channel: Channel) {
    try {
      await this.consume(msg, channel);
    } catch (err) {
      this.logger.log(`Something went wrong, call The Batman`);
    }
  }

  private async consume(msg: ConsumeMessage, channel: Channel) {
    const parsedData: OrderEntity = JSON.parse(msg.content.toString());
    console.log(parsedData);
    this.ack(msg, channel);
  }

  private ack(msg: ConsumeMessage, channel: Channel) {
    channel.ack(msg);
  }
}
