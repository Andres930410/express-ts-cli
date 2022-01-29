const fs = require("fs");
const path = require("path");
const { copyRecursiveSync } = require("./util");
const colors = require("colors");
const { NAMES, pack, gitignore, eslintrc } = require("./constants");

class App {
  constructor(name, author, description, keywords) {
    this.name = name;
    this.pack = pack;
    this.pack.name = name;
    this.pack.author = author;
    this.pack.keywords = keywords;
    this.pack.description = description;
  }

  init() {
    this.create();
    this.copy();
    console.log(
      "Intializated project....................................[OK]".green
    );
  }

  copy() {
    this.copyUtils();
    this.copyDecorators();
    this.copyControllers();
    this.copyFiles();
    this.copyTypes();
    this.copyServices();
    this.copyMiddlewares();
    this.copyErrors();
    this.copyDTOs();
    this.copyDb();
    this.copyClients();
  }

  copyClients() {
    copyRecursiveSync(
      path.resolve(__dirname, NAMES.path, NAMES.clients),
      path.join("./", this.name, NAMES.pathDest, NAMES.clients)
    );
  }

  copyDb() {
    copyRecursiveSync(
      path.resolve(__dirname, NAMES.path, NAMES.db),
      path.join("./", this.name, NAMES.pathDest, NAMES.db)
    );
  }

  copyDTOs() {
    copyRecursiveSync(
      path.resolve(__dirname, NAMES.path, NAMES.dtos),
      path.join("./", this.name, NAMES.pathDest, NAMES.dtos)
    );
  }

  copyErrors() {
    copyRecursiveSync(
      path.resolve(__dirname, NAMES.path, NAMES.errors),
      path.join("./", this.name, NAMES.pathDest, NAMES.errors)
    );
  }

  copyMiddlewares() {
    copyRecursiveSync(
      path.resolve(__dirname, NAMES.path, NAMES.middlewares),
      path.join("./", this.name, NAMES.pathDest, NAMES.middlewares)
    );
  }

  copyServices() {
    copyRecursiveSync(
      path.resolve(__dirname, NAMES.path, NAMES.services),
      path.join("./", this.name, NAMES.pathDest, NAMES.services)
    );
  }

  copyTypes() {
    copyRecursiveSync(
      path.resolve(__dirname, NAMES.path, NAMES.types),
      path.join("./", this.name, NAMES.pathDest, NAMES.types)
    );
  }

  copyFiles() {
    fs.writeFileSync(
      path.join("./", this.name, NAMES.pack),
      JSON.stringify(this.pack)
    );
    fs.writeFileSync(
      path.join("./", this.name, NAMES.eslintrc),
      JSON.stringify(eslintrc)
    );
    fs.writeFileSync(path.join("./", this.name, NAMES.gitignore), gitignore);
    copyRecursiveSync(
      path.resolve(__dirname, NAMES.path, NAMES.server),
      path.join("./", this.name, NAMES.pathDest, NAMES.server)
    );
    copyRecursiveSync(
      path.resolve(__dirname, NAMES.path, NAMES.ioc),
      path.join("./", this.name, NAMES.pathDest, NAMES.ioc)
    );
    copyRecursiveSync(
      path.resolve(__dirname, NAMES.path, NAMES.index),
      path.join("./", this.name, NAMES.pathDest, NAMES.index)
    );
    copyRecursiveSync(
      path.resolve(__dirname, NAMES.path, NAMES.tsconfig),
      path.join("./", this.name, NAMES.tsconfig)
    );
    copyRecursiveSync(
      path.resolve(__dirname, NAMES.path, NAMES.nodemon),
      path.join("./", this.name, NAMES.nodemon)
    );
  }

  copyControllers() {
    copyRecursiveSync(
      path.resolve(__dirname, NAMES.path, NAMES.controllres),
      path.join("./", this.name, NAMES.pathDest, NAMES.controllres)
    );
  }

  copyUtils() {
    copyRecursiveSync(
      path.resolve(__dirname, NAMES.path, NAMES.utils),
      path.join("./", this.name, NAMES.pathDest, NAMES.utils)
    );
  }

  copyDecorators() {
    copyRecursiveSync(
      path.resolve(__dirname, NAMES.path, NAMES.decorators),
      path.join("./", this.name, NAMES.pathDest, NAMES.decorators)
    );
  }

  create() {
    if (!fs.existsSync(this.name)) {
      fs.mkdirSync(this.name, { recursive: true });
      fs.mkdirSync(path.join(this.name, NAMES.pathDest));
    }
  }
}

module.exports = App;
