import { ParameterFactory } from "./../../utils/parameter.factory";
import { paramDecoratorFactory } from "../../utils/functions";
import { Param } from "../../utils/constants";

export const query: ParameterFactory = paramDecoratorFactory(Param.QueryParam);
