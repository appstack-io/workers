import { Empty } from './google/protobuf/empty';

import { Observable } from 'rxjs';

import type { CallContext, CallOptions } from "nice-grpc-common";

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
      : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
      : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
      : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
      : Partial<T>;
    

export interface PublishJobInput {
  sender: string;
}

export interface PublishJobResult {
  jobId: string;
}

export interface WorkersHealthCheckResult {
  ok: boolean;
}

export interface WorkersServiceImplementation<CallContextExt = {}> {
  publishJob(request: PublishJobInput, context: CallContext & CallContextExt): Promise<DeepPartial<PublishJobResult>>;
  healthCheck(request: Empty, context: CallContext & CallContextExt): Promise<DeepPartial<WorkersHealthCheckResult>>;
}

export interface WorkersServiceClient<CallOptionsExt = {}> {
  publishJob(request: DeepPartial<PublishJobInput>, options?: CallOptions & CallOptionsExt): Promise<PublishJobResult>;
  healthCheck(request: DeepPartial<Empty>, options?: CallOptions & CallOptionsExt): Promise<WorkersHealthCheckResult>;
}