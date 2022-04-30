import "reflect-metadata";
import "@/ioc";
import { App } from "@/server";
import 'dotenv/config'
import indexController from "@/controllers/index.controller";
const app = new App(indexController);
app.listen(Number(process.env.PORT) || 3000);
