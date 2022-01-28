import "reflect-metadata";
import "./ioc";
import { App } from "./server";
import dotenv from "dotenv";
import indexController from "./controllers/index.controller";
dotenv.config();
const app = new App(indexController);
app.listen(Number(process.env.PORT) || 3000);
