import { Module, DynamicModule } from '@nestjs/common';
import { PublisherService } from 'src/publisher/publisher.service';

@Module({
  providers: [PublisherService],
})
export class RabbitMqModule {
  static forRoot(config: string): DynamicModule {
    return {
      module: RabbitMqModule,
      imports: [],
      providers: [
        {
          provide: 'CONFIG',
          useValue: config,
        },
        PublisherService,
      ],
      exports: [PublisherService],
    };
  }
}
