import { ParameterFactory } from "./../../utils/parameter.factory";
import { paramDecoratorFactory } from "../../utils/functions";
import { Param } from "../../utils/constants";

export const body: ParameterFactory = paramDecoratorFactory(Param.RequestBody);
