import { DI } from "./utils/constants";
import { container } from "tsyringe";
import { GenericClient } from "./clients/generic.http";

container.register<GenericClient>(DI.GenericClient, {
  useValue: new GenericClient(""),
});
