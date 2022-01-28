import { Metadata } from "../../utils/constants";

export const controller = (prefix = "/"): ClassDecorator => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return (target: Function): void => {
    Reflect.defineMetadata(Metadata.Prefix, prefix, target);
    if (!Reflect.hasMetadata(Metadata.Routes, target)) {
      Reflect.defineMetadata(Metadata.Routes, [], target);
    }
  };
};
