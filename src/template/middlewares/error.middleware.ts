/* eslint-disable @typescript-eslint/no-unused-vars */
import { next } from "./../decorators/parameters/next.decorator";
import { ServerError } from "../errors/server.error.js";
import { Request, Response, NextFunction } from "express";
export default (
  err: ServerError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(err.code || 500).send({
    error: {
      message: err.message,
      details: err.errors,
    },
  });
};
