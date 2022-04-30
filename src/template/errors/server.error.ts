import { ErrorInfo } from "@/dtos/error.type";
export class ServerError extends Error {
  public readonly code: number;
  public readonly errors?: ErrorInfo;
  constructor(code: number, message: string, errors?: ErrorInfo) {
    super(message);
    this.code = code;
    this.errors = errors;
  }
}
