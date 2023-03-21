import { Controller, Get } from '@nestjs/common';
import { PublisherService } from './publisher.service';

@Controller()
export class AppController {
  constructor(private readonly appService: PublisherService) {}
}
