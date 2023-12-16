import { Empty } from './google/protobuf/empty';

  export interface PublishJobInput {
  sender: string;
}

export interface PublishJobResult {
  jobId: string;
}

export interface WorkersHealthCheckResult {
  ok: boolean;
}
  import { postToUnary, postToUnaryPublic } from './utils';
  import { Metadata } from 'nice-grpc';
 
  export class WorkersService {
    private readonly serviceName: string = "WorkersService";
    
    
    async publishJob(data: Partial<PublishJobInput>, metadata: Metadata=new Metadata()): Promise<PublishJobResult> {
      return postToUnary<PublishJobResult>(this.serviceName, 'publishJob', data, metadata);
    }
    
    async publishJobPublic(data: Partial<PublishJobInput>, metadata: Metadata=new Metadata()): Promise<PublishJobResult> {
      return postToUnaryPublic<PublishJobResult>(this.serviceName, 'publishJob', data, metadata);
    }
  
    async healthCheck(data: Partial<Empty>, metadata: Metadata=new Metadata()): Promise<WorkersHealthCheckResult> {
      return postToUnary<WorkersHealthCheckResult>(this.serviceName, 'healthCheck', data, metadata);
    }
    
    async healthCheckPublic(data: Partial<Empty>, metadata: Metadata=new Metadata()): Promise<WorkersHealthCheckResult> {
      return postToUnaryPublic<WorkersHealthCheckResult>(this.serviceName, 'healthCheck', data, metadata);
    }
  
  }
