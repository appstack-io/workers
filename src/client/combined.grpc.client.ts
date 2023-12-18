/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { Empty } from "./google//protobuf/empty";

export const protobufPackage = "main";

export interface PublishJobInput {
  sender: string;
}

export interface PublishJobResult {
  jobId: string;
}

export interface WorkersHealthCheckResult {
  ok: boolean;
}

function createBasePublishJobInput(): PublishJobInput {
  return { sender: "" };
}

export const PublishJobInput = {
  encode(message: PublishJobInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(8002).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublishJobInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublishJobInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1000:
          if (tag !== 8002) {
            break;
          }

          message.sender = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PublishJobInput {
    return { sender: isSet(object.sender) ? globalThis.String(object.sender) : "" };
  },

  toJSON(message: PublishJobInput): unknown {
    const obj: any = {};
    if (message.sender !== "") {
      obj.sender = message.sender;
    }
    return obj;
  },

  create(base?: DeepPartial<PublishJobInput>): PublishJobInput {
    return PublishJobInput.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PublishJobInput>): PublishJobInput {
    const message = createBasePublishJobInput();
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBasePublishJobResult(): PublishJobResult {
  return { jobId: "" };
}

export const PublishJobResult = {
  encode(message: PublishJobResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.jobId !== "") {
      writer.uint32(10).string(message.jobId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublishJobResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublishJobResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.jobId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PublishJobResult {
    return { jobId: isSet(object.jobId) ? globalThis.String(object.jobId) : "" };
  },

  toJSON(message: PublishJobResult): unknown {
    const obj: any = {};
    if (message.jobId !== "") {
      obj.jobId = message.jobId;
    }
    return obj;
  },

  create(base?: DeepPartial<PublishJobResult>): PublishJobResult {
    return PublishJobResult.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PublishJobResult>): PublishJobResult {
    const message = createBasePublishJobResult();
    message.jobId = object.jobId ?? "";
    return message;
  },
};

function createBaseWorkersHealthCheckResult(): WorkersHealthCheckResult {
  return { ok: false };
}

export const WorkersHealthCheckResult = {
  encode(message: WorkersHealthCheckResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ok === true) {
      writer.uint32(8).bool(message.ok);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WorkersHealthCheckResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWorkersHealthCheckResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.ok = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WorkersHealthCheckResult {
    return { ok: isSet(object.ok) ? globalThis.Boolean(object.ok) : false };
  },

  toJSON(message: WorkersHealthCheckResult): unknown {
    const obj: any = {};
    if (message.ok === true) {
      obj.ok = message.ok;
    }
    return obj;
  },

  create(base?: DeepPartial<WorkersHealthCheckResult>): WorkersHealthCheckResult {
    return WorkersHealthCheckResult.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<WorkersHealthCheckResult>): WorkersHealthCheckResult {
    const message = createBaseWorkersHealthCheckResult();
    message.ok = object.ok ?? false;
    return message;
  },
};

export type WorkersServiceDefinition = typeof WorkersServiceDefinition;
export const WorkersServiceDefinition = {
  name: "WorkersService",
  fullName: "main.WorkersService",
  methods: {
    publishJob: {
      name: "PublishJob",
      requestType: PublishJobInput,
      requestStream: false,
      responseType: PublishJobResult,
      responseStream: false,
      options: {},
    },
    healthCheck: {
      name: "HealthCheck",
      requestType: Empty,
      requestStream: false,
      responseType: WorkersHealthCheckResult,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface WorkersServiceImplementation<CallContextExt = {}> {
  publishJob(request: PublishJobInput, context: CallContext & CallContextExt): Promise<DeepPartial<PublishJobResult>>;
  healthCheck(request: Empty, context: CallContext & CallContextExt): Promise<DeepPartial<WorkersHealthCheckResult>>;
}

export interface WorkersServiceClient<CallOptionsExt = {}> {
  publishJob(request: DeepPartial<PublishJobInput>, options?: CallOptions & CallOptionsExt): Promise<PublishJobResult>;
  healthCheck(request: DeepPartial<Empty>, options?: CallOptions & CallOptionsExt): Promise<WorkersHealthCheckResult>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
