import { singleton } from "tsyringe";
import { controller } from "../decorators/controllers/controller.decorator";
import { get } from "../decorators/methods/get.decorator";
import { HelloService } from "../services/hello.service";
import { BaseController } from "./base.controller";

@singleton()
@controller("/")
export class HelloController extends BaseController {
  constructor(private helloService: HelloService) {
    super();
  }

  @get("")
  public async hello(): Promise<string> {
    return this.helloService.healthCheck();
  }
}
