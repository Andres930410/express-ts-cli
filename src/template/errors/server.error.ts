export class ServerError extends Error {
  private _code: number;
  private _errors: string[] | undefined;
  constructor(
    code: number,
    message: string,
    errors: string[] | undefined = undefined
  ) {
    super(message);
    this._code = code;
    this._errors = errors;
  }

  get code(): number {
    return this._code;
  }

  get errors(): string[] | undefined {
    return this._errors;
  }
}
