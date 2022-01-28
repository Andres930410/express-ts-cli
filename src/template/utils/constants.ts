export enum Metadata {
  Prefix = "Prefix",
  Routes = "Routes",
  Middlewares = "Middlewares",
  Paramters = "Parameters",
  Code = "Code",
}

export enum DI {
  GenericClient = "GenericClient",
}

export enum StatusCode {
  Ok = 200,
  Created = 201,
  NoContent = 204,
  BadRequest = 400,
  UnAuthorized = 401,
  Forbiden = 403,
  NotFound = 404,
  InternalServerError = 500,
}

export const PORT = 3000;

export enum Method {
  Get = "get",
  Post = "post",
  Put = "put",
  Delete = "delete",
  Patch = "patch",
  Options = "options",
}

export enum Param {
  Request = "request",
  Response = "response",
  Next = "next",
  RequestParam = "request_param",
  QueryParam = "query_param",
  RequestBody = "request_body",
  RequestHeader = "request_header",
}
