/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import { ServerError } from "@/errors/server.error";

/* eslint-disable @typescript-eslint/no-unused-vars */
export const tryCatch = (target: Function) => {
  for (const key of Object.getOwnPropertyNames(target)) {
    const descriptor = Object.getOwnPropertyDescriptor(target.prototype, key);
    const isMethod = descriptor?.value instanceof Function;
    if (isMethod) {
      const original = descriptor.value;
      descriptor.value = (...args: any[]) => {
        try {
          return original.apply(this, args);
        } catch (e: any) {
          throw new ServerError(e.code || 500, e.message);
        }
      };
    }
  }
};
