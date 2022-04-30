import { Metadata, StatusCode } from "@/utils/constants";

/* eslint-disable @typescript-eslint/no-unused-vars */
export const statusCode = (code = StatusCode.Ok): MethodDecorator => {
  return (
    // eslint-disable-next-line @typescript-eslint/ban-types
    target: Object,
    propertyKey: string | symbol,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    descriptor: PropertyDescriptor
  ) => {
    Reflect.defineMetadata(
      Metadata.Code,
      code,
      target.constructor,
      propertyKey.toString()
    );
  };
};
