export class Timestamp extends Date {
  constructor(time: number, nano: number);
  getNanos(): number;
  setNanos(): this;
}
export namespace IgniteClient {
  enum STATE {
    DISCONNECTED,
    CONNECTING,
    CONNECTED
  }
}
