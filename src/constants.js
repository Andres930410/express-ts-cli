const NAMES = {
  ioc: "ioc.ts",
  path: "template",
  pathDest: "src",
  utils: "utils",
  decorators: "decorators",
  controllres: "controllers",
  eslintrc: ".eslintrc",
  tsconfig: "tsconfig.json",
  nodemon: "nodemon.json",
  jest: "jest.config.ts",
  gitignore: ".gitignore",
  services: "services",
  middlewares: "middlewares",
  errors: "errors",
  dtos: "dtos",
  db: "db",
  clients: "clients",
  tests: "tests",
  server: "server.ts",
  index: "index.ts",
  pack: "package.json",
};

const pack = {
  name: "name",
  version: "1.0.0",
  description: "",
  main: "dist/index.js",
  scripts: {
    "prebuild": "eslint src --ext .ts --fix",
    "build": "tsc && tsc-alias",
    "prestart": "npm run build",
    "start": "node dist/index.js",
    "watch": "./node_modules/nodemon/bin/nodemon.js",
    "test": "jest --coverage"
  },
  keywords: [],
  author: "",
  license: "MIT",
  devDependencies: {
    "@types/jest": "27.4.1",
    "@types/express": "4.17.13",
    "@types/node": "17.0.10",
    "@typescript-eslint/eslint-plugin": "5.10.0",
    "@typescript-eslint/parser": "5.10.0",
    "@types/cors": "2.8.12",
    "@types/helmet": "4.0.0",
    "@types/lodash": "4.14.178",
    eslint: "8.7.0",
    nodemon: "2.0.15",
    typescript: "4.5.4",
    "jest": "27.5.1",
    "ts-jest": "27.1.4",
    "tsc-alias": "1.6.4",
    "ts-node": "^10.7.0"
  },
  dependencies: {
    axios: "0.25.0",
    cors: "2.8.5",
    dotenv: "14.2.0",
    express: "4.17.2",
    helmet: "5.0.1",
    lodash: "4.17.21",
    reflect: "0.1.3",
    "reflect-metadata": "0.1.13",
    tsyringe: "4.6.0",
    "class-validator": "0.13.2"
  },
};

const eslintrc = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
};

const gitignore = `
lib-cov
*.seed
*.log
*.csv
*.dat
*.out
*.pid
*.gz
*.swp

pids
logs
results
tmp

# Build
public/css/main.css

# Coverage reports
coverage

# API keys and secrets
.env

# Dependency directory
node_modules
bower_components

# Editors
.idea
*.iml

# OS metadata
.DS_Store
Thumbs.db

# Ignore built ts files
dist/**/*

# ignore yarn.lock
yarn.lock`;

module.exports = {
  NAMES,
  pack,
  eslintrc,
  gitignore,
};
