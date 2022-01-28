# express-ts-cli

Library to generate a template of an express aplication using **Typescript** and dependency injection with **tsyringe**, the express app follows a n-tier architecture.

## Table of Contents

- [Installing](#installing)
- [How to use](#how-to-use)
- [Folder structure](#folder-structure)
- [Example](#example)
- [Credits](#credits)
- [License](#license)

## Installing

Using npm:

```bash
$ npm install @agutierrezt9410/express-ts-cli -g
```

## How to use

From your terminal or cmd you can use the command **express-ts** to create a new project based from the template, the cli can receive some parameters to customize the application generated.

- **-n --name**: Required, the name of project, cli will create a folder inside the directory with the name supplied in the parameter, the name also would be used in the **package.json**.
- **-a, --author**: Required, the name of the author of the project, this parameter would be used in the **package.json**.
- **-d, --description**: Optional, the description of the project, this parameter would be used in the **package.json**.
- **-k, --keywords**: Optional, array of keywords to be used in the **package.json**.
- **--help**: Command that you the options of the cli.

# Folder structure

Once the command is succesful a new folder with the name parameter would be generated, this folder constains the following content:

- **src**: Folder where all the **typescript** content would be stored.
- **src/clients**: Folder where the http clients should be created, the folder has a generic http client using **axios**.
- **src/controllers**: Folder where the routes handlers of expres would be created through the use of decorators, a **healthCheck controller** is created with the generator.
- **src/db**: Folder where the connections to the different data sources should be created.
- **src/db/models**: Folder where the different models of the different datasources should be stored.
- **src/decorators**: Folder where custom decorators are created, the template has some decorators to built-in, which ease the implementation of express.
- **src/dtos**: Folder where the request and response DTOs should be created.
- **src/errors**: Folder where the custom errors are stored.
- **src/middlewares**: Folder where the **express** middleware should stored, an error middleware is created with the template.
- **src/services**: Folder where the services should be stored, this services hold the bussiness rules of project, an example service is shipped with the template.
- **src/types**: Folder wheree the **typescript** types should be created.
- **src/utils**: Folder where the constants and utility methods should be created.
- **src/ioc.ts**: File where thee IoC contiainer would be configured.
- **src/server.ts**: File where the express application is created.
- **src/index.ts**: This file is the starting point of the project.

## Example

```bash
$ express-ts -n example -a Andres Gutierrez
$ cd example
$ npm i
$ npm start
```

## Credits

This library is created for free use and with the goal of optimazing the setup proccess of project using express.

## License

[MIT](LICENSE)
