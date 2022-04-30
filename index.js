#! /usr/bin/env node
const yargs = require("yargs");
const fs = require('fs')
const App = require("./src/app");
const colors = require("colors");
const options = yargs
  .scriptName("express-ts")
  .usage("$0 [args]")
  .option("n", {
    alias: "name",
    describe: "Project name",
    description:
      "The option would create a folder inside the root directory where all the files would be stored",
    type: "string",
    demandOption: true,
  })
  .option("a", {
    alias: "author",
    describe: "Author project name",
    description: "The name of the autor",
    type: "string",
    demandOption: true,
  })
  .option("d", {
    alias: "description",
    describe: "Project description",
    description: "Description about the project",
    type: "string",
    default: "",
  })
  .option("k", {
    alias: "keywords",
    describe: "Project keywords",
    description: "A set of keywords that define the project",
    type: "array",
    default: [],
  }).argv;

const app = new App(options.n, options.a, options.d, options.k);
try {
  app.init();
} catch (e) {
  app.delete()
  console.error(`${e.message}...............................[FAIL]`.red);
}
