/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Empty } from "./google/protobuf/empty";

export const protobufPackage = "";

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

  create<I extends Exact<DeepPartial<PublishJobInput>, I>>(base?: I): PublishJobInput {
    return PublishJobInput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PublishJobInput>, I>>(object: I): PublishJobInput {
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

  create<I extends Exact<DeepPartial<PublishJobResult>, I>>(base?: I): PublishJobResult {
    return PublishJobResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PublishJobResult>, I>>(object: I): PublishJobResult {
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

  create<I extends Exact<DeepPartial<WorkersHealthCheckResult>, I>>(base?: I): WorkersHealthCheckResult {
    return WorkersHealthCheckResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<WorkersHealthCheckResult>, I>>(object: I): WorkersHealthCheckResult {
    const message = createBaseWorkersHealthCheckResult();
    message.ok = object.ok ?? false;
    return message;
  },
};

export interface WorkersService {
  PublishJob(request: PublishJobInput): Promise<PublishJobResult>;
  HealthCheck(request: Empty): Promise<WorkersHealthCheckResult>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
