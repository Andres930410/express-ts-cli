import { ParameterDescriptor } from "./parameter.descriptor";
import { ParameterFactory } from "./parameter.factory";
import { Metadata, Method, Param } from "./constants";
import { MiddlewareDescriptor } from "./middlware.descriptor";
import { RouteDescripor } from "./routes.descriptor";
export const saveMiddleware = (
  // eslint-disable-next-line @typescript-eslint/ban-types
  target: Function,
  key: string,
  isController: boolean,
  ...args: MiddlewareDescriptor[]
) => {
  if (!Reflect.hasMetadata(Metadata.Middlewares, target)) {
    Reflect.defineMetadata(
      Metadata.Middlewares,
      new Map<string, MiddlewareDescriptor[]>(),
      target
    );
  }
  const mw = Reflect.getMetadata(Metadata.Middlewares, target) as Map<
    string,
    MiddlewareDescriptor[]
  >;
  if (!mw.has(key)) {
    mw.set(key, []);
  }
  if (isController) {
    mw.get(key)?.unshift(...args);
  } else {
    mw.get(key)?.push(...args);
  }
  Reflect.defineMetadata(Metadata.Middlewares, mw, target);
};

export const createRoute = (
  // eslint-disable-next-line @typescript-eslint/ban-types
  target: Function,
  path: string,
  method: Method,
  methodName: string
) => {
  if (!Reflect.hasMetadata(Metadata.Routes, target)) {
    Reflect.defineMetadata(Metadata.Routes, [], target);
  }
  const routes = Reflect.getMetadata(
    Metadata.Routes,
    target
  ) as Array<RouteDescripor>;
  routes.push({
    method,
    path,
    methodName,
  });
  Reflect.defineMetadata(Metadata.Routes, routes, target);
};

export const paramDecoratorFactory = (type: Param): ParameterFactory => {
  return (name?: string): ParameterDecorator => {
    return (
      // eslint-disable-next-line @typescript-eslint/ban-types
      target: Object,
      propertyKey: string | symbol,
      parameterIndex: number
    ) => {
      if (!Reflect.hasMetadata(Metadata.Paramters, target.constructor)) {
        Reflect.defineMetadata(
          Metadata.Paramters,
          new Map<string, ParameterDescriptor[]>(),
          target.constructor
        );
      }
      const paramMetadata: ParameterDescriptor = {
        index: parameterIndex,
        injectRoot: name === undefined,
        type,
        name,
      };
      const parameterList = Reflect.getMetadata(
        Metadata.Paramters,
        target.constructor
      ) as Map<string, ParameterDescriptor[]>;

      if (parameterList.has(propertyKey.toString())) {
        parameterList.get(propertyKey.toString())?.push(paramMetadata);
      } else {
        parameterList.set(propertyKey.toString(), [paramMetadata]);
      }
      Reflect.defineMetadata(
        Metadata.Paramters,
        parameterList,
        target.constructor
      );
    };
  };
};
