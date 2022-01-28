import { injectable } from "tsyringe";

@injectable()
export class HelloService {
  healthCheck(): string {
    return "OK";
  }
}
