import { Controller, UseInterceptors } from '@nestjs/common';
import { GrpcMethod, Payload } from '@nestjs/microservices';
import {
  PublishJobResult,
  WorkersHealthCheckResult,
} from '../../proto/interfaces';
import { MqService } from '@appstack-io/mq';
import { RpcAuthAssertInternalInterceptor } from '@appstack-io/authnz';

@Controller()
export class WorkersController {
  constructor(private mq: MqService) {}

  private inferJobType(input: Record<string, any>) {
    const keys = Object.keys(input);
    const payloadKey = keys.find((key) => key.indexOf('JobPayload') > -1);
    const jobType = payloadKey.replace('JobPayload', '');
    if (jobType?.length > 0) {
      return jobType;
    }
    throw new Error(`no valid payload key in any of ${keys.join(',')}`);
  }

  @GrpcMethod('WorkersService', 'HealthCheck')
  async healthCheck(): Promise<WorkersHealthCheckResult> {
    return { ok: true };
  }

  @UseInterceptors(RpcAuthAssertInternalInterceptor)
  @GrpcMethod('WorkersService', 'PublishJob')
  async publishJob(
    @Payload() input: PublishJobInput,
  ): Promise<PublishJobResult> {
    const jobType = this.inferJobType(input);
    const payload = input[`${jobType}JobPayload`];
    if (!payload) {
      throw new Error(`no payload for type ${jobType}`);
    }
    const jobId = await this.mq.publish({ queue: jobType, message: payload });
    return { jobId };
  }
}
