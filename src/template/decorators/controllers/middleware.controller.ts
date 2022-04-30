import { saveMiddleware } from "@/utils/functions";
import { MiddlewareDescriptor } from "@/utils/middlware.descriptor";

export const middleware = (...args: MiddlewareDescriptor[]): ClassDecorator => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return (target: Function) => {
    for (const key of Object.getOwnPropertyNames(target)) {
      const descriptor = Object.getOwnPropertyDescriptor(target.prototype, key);
      const isMethod = descriptor?.value instanceof Function;
      if (!isMethod) continue;
      saveMiddleware(target, key, true, ...args);
    }
  };
};
