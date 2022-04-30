/* eslint-disable @typescript-eslint/no-unused-vars */
import { Method } from "@/utils/constants";
import { createRoute } from "@/utils/functions";
export const options = (path = "/"): MethodDecorator => {
  return (
    // eslint-disable-next-line @typescript-eslint/ban-types
    target: Object,
    propertyKey: string | symbol,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    descriptor: PropertyDescriptor
  ) => {
    createRoute(
      target.constructor,
      path,
      Method.Options,
      propertyKey.toString()
    );
  };
};
