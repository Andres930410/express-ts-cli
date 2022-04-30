import { Param } from "@/utils/constants";

export interface ParameterDescriptor {
  index: number;
  injectRoot: boolean;
  name?: string;
  type: Param;
}
