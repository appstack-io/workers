import { Empty } from './google/protobuf/empty';

import { Observable } from 'rxjs';

export interface PublishJobInput {
  sender: string;
}

export interface PublishJobResult {
  jobId: string;
}

export interface WorkersHealthCheckResult {
  ok: boolean;
}

export interface WorkersService {
  PublishJob(request: PublishJobInput): Promise<PublishJobResult>;
  HealthCheck(request: Empty): Promise<WorkersHealthCheckResult>;
}