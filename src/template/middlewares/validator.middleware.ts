import { StatusCode } from "@/utils/constants";
import { validate } from "class-validator";
import { Request, Response, NextFunction } from "express";
import _ from "lodash";
import { ServerError } from "@/errors/server.error";
export default <T>(value: { new (): T }, keys: Array<keyof T>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const body = _.pick(req.body, keys);
    const object = Object.assign(new value(), body);
    const result = await validate(object);
    if (result.length > 0) {
      next(
        new ServerError(
          StatusCode.BadRequest,
          `Validation failed with ${result.length} errors`,
          result.map((x) => {
            return {
              property: x.property,
              messages:
                x.constraints
                  ? Object.keys(x.constraints ?? []).map((y) => {
                      return {
                        constraint: y,
                        message:
                          x.constraints ? x.constraints[y] : "",
                      };
                    })
                  : [],
            };
          })
        )
      );
    }
    next();
  };
};
