import { Request, Response, NextFunction } from "express";
export type MiddlewareDescriptor = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void> | void;
