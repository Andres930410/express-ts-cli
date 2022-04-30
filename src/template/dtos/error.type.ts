type ErrorInfo =
  | { property: string; messages: { constraint: string; message: string }[] }[]
  | string[]
  | undefined;

export { ErrorInfo };
