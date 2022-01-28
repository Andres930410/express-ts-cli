/* eslint-disable @typescript-eslint/no-explicit-any */
export abstract class BaseController {
  [key: string]: any | ((...args: any) => Promise<any> | any);
}
