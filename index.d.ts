export declare class Timestamp extends Date {
  constructor(time: number, nano: number);
  getNanos(): number;
  setNanos(): this;
}