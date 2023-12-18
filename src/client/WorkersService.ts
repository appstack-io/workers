import { Empty } from './google/protobuf/empty';
import { postToUnary } from './utils';
import { Metadata } from 'nice-grpc';

export interface PublishJobInput {
  sender: string;
}

export interface PublishJobResult {
  jobId: string;
}

export interface WorkersHealthCheckResult {
  ok: boolean;
}

export class WorkersService {
  private readonly serviceName: string = 'WorkersService';

  constructor(private opts?: { port?: string; host?: string }) {}

  async publishJob(
    data: Partial<PublishJobInput>,
    metadata: Metadata = new Metadata(),
  ): Promise<PublishJobResult> {
    return postToUnary<PublishJobResult>(
      this.serviceName,
      'publishJob',
      data,
      metadata,
      this.opts,
    );
  }

  async healthCheck(
    data: Partial<Empty>,
    metadata: Metadata = new Metadata(),
  ): Promise<WorkersHealthCheckResult> {
    return postToUnary<WorkersHealthCheckResult>(
      this.serviceName,
      'healthCheck',
      data,
      metadata,
      this.opts,
    );
  }
}
