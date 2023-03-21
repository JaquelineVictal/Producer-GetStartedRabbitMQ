import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { Channel, connect } from 'amqplib';
import { QueueEnum } from './queue.enum';

@Injectable()
export class PublisherService implements OnModuleInit {
  private channel: Channel;
  async onModuleInit() {
    const connection = await connect(process.env.HOST);
    this.channel = await connection.createChannel();
    await this.createAllQueues();
  }
  private async createAllQueues() {
    for (const queueName of Object.values(QueueEnum)) {
      await this.channel.assertQueue(queueName, {
        arguments: {
          'x-message-deduplication': true,
        },
      });
    }
  }
}
