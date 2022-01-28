import { ParameterFactory } from "./../../utils/parameter.factory";
import { paramDecoratorFactory } from "../../utils/functions";
import { Param } from "../../utils/constants";

export const param: ParameterFactory = paramDecoratorFactory(
  Param.RequestParam
);
