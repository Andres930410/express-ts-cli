import { Param } from "./constants";

export interface ParameterDescriptor {
  index: number;
  injectRoot: boolean;
  name?: string;
  type: Param;
}
