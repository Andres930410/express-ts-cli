/* eslint-disable @typescript-eslint/no-unused-vars */
import { saveMiddleware } from "@/utils/functions";
import { MiddlewareDescriptor } from "@/utils/middleware.descriptor";

export const middleware = (...args: MiddlewareDescriptor[]) => {
  return (
    // eslint-disable-next-line @typescript-eslint/ban-types
    target: Object,
    propertyKey: string | symbol,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    descriptor: PropertyDescriptor
  ) => {
    saveMiddleware(target.constructor, propertyKey.toString(), false, ...args);
  };
};
