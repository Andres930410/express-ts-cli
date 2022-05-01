import { Method } from "@/utils/constants";

export interface RouteDescriptor {
  path: string;
  method: Method;
  methodName: string;
}
