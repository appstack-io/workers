import { Module } from '@nestjs/common';
import { MqModule, MqService } from '@appstack-io/mq';
import { WorkersController } from './workers.controller';

// TODO: support flows
@Module({
  imports: [MqModule],
  providers: [MqService],
  controllers: [WorkersController],
})
export class WorkersModule {
  static getDirname() {
    return __dirname;
  }
}
