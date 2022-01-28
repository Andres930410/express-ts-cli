import { PORT, StatusCode } from "./utils/constants";
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-extra-non-null-assertion */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { RouteDescripor } from "./utils/routes.descriptor";
/* eslint-disable @typescript-eslint/ban-types */
import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import errorMiddleware from "./middlewares/error.middleware";
import { BaseController } from "./controllers/base.controller";
import { Metadata, Param } from "./utils/constants";
import { MiddlewareDescriptor } from "./utils/middlware.descriptor";
import { ParameterDescriptor } from "./utils/parameter.descriptor";
import { container } from "tsyringe";

export class App {
  private _app: Application;
  private _wrapper: boolean;

  constructor(controllers: Function[], wrapper = true) {
    this._wrapper = wrapper;
    this._app = express();
    this.initMiddlewares();
    if (controllers) this.initRoutes(controllers);
    this.errorHandler();
  }

  public listen(port = PORT) {
    this._app.listen(port, () => {
      console.log(`Server is running on PORT: ${port}`);
    });
  }

  private initRoutes(controllers: Function[]) {
    controllers.forEach((c) => {
      const instance = container.resolve(
        c.prototype.constructor
      ) as BaseController;
      const prefix: string = Reflect.getMetadata(Metadata.Prefix, c);
      const routes: RouteDescripor[] = Reflect.getMetadata(Metadata.Routes, c);
      const middlewares: Map<string, MiddlewareDescriptor[]> =
        Reflect.getMetadata(Metadata.Middlewares, c) ||
        new Map<string, MiddlewareDescriptor[]>();
      const parameters: Map<string, ParameterDescriptor[]> =
        Reflect.getMetadata(Metadata.Paramters, c) ||
        new Map<string, ParameterDescriptor[]>();

      routes.forEach((r) => {
        let code = StatusCode.Ok;
        if (Reflect.hasMetadata(Metadata.Code, c, r.methodName)) {
          code = Reflect.getMetadata(Metadata.Code, c, r.methodName);
        }
        const handlers: MiddlewareDescriptor[] = [];
        if (
          middlewares.has(r.methodName) &&
          middlewares.get(r.methodName) !== undefined &&
          middlewares.get(r.methodName)!!.length > 0
        ) {
          handlers.push(...middlewares.get(r.methodName)!!);
        }
        handlers.push(
          async (req: Request, res: Response, next?: NextFunction) => {
            try {
              const args = this.getArgs(
                parameters.get(r.methodName),
                req,
                res,
                next
              );
              const result = await instance[r.methodName](...args);
              if (result === undefined) {
                res.status(StatusCode.NoContent).send();
              } else {
                const data = this._wrapper ? { data: result } : result;
                res.status(code).send(data);
              }
            } catch (err: any) {
              next!!(err);
            }
          }
        );
        this._app[r.method](
          `${prefix}${r.path}`.replace("//", "/"),
          ...handlers
        );
      });
    });
  }

  private getArgs(
    parameters: ParameterDescriptor[] | undefined,
    req: Request,
    res: Response,
    next?: NextFunction
  ): any[] {
    let args: any[] = new Array(parameters?.length);
    parameters?.forEach((param) => {
      switch (param.type) {
        case Param.Request:
          args[param.index] = req;
          break;
        case Param.Response:
          args[param.index] = res;
          break;
        case Param.Next:
          args[param.index] = next;
          break;
        case Param.RequestBody:
          args[param.index] = req.body;
          break;
        case Param.RequestParam:
          if (!param.injectRoot) args[param.index] = req.params[param.name!!];
          break;
        case Param.QueryParam:
          if (!param.injectRoot) args[param.index] = req.query[param.name!!];
          break;
        case Param.RequestHeader:
          if (!param.injectRoot) args[param.index] = req.headers[param.name!!];
          break;
        default:
          break;
      }
    });
    return args;
  }

  private initMiddlewares() {
    this._app.use(cors());
    this._app.use(helmet());
    this._app.use(express.json());
    this._app.use(express.urlencoded({ extended: true }));
  }

  private errorHandler() {
    this._app.use(errorMiddleware);
  }
}
