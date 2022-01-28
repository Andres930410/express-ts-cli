import { Method } from "./constants";

export interface RouteDescripor {
  path: string;
  method: Method;
  methodName: string;
}
