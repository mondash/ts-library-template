# Project Structure

> TODO make this a lot better

## Folder Structure

A brief description of each folder's contents and/or purpose

| file/folder name | description                              |
| ---------------- | ---------------------------------------- |
|  .changeset     | Configuration for changeset tool         |
|  .git           | Data for your local git repo             |
|  .github        | GitHub Integrations - actions, apps, etc |
|  .vscode        | Visual Studio Code editor config         |
|  bin            | Scripts for non-production environments  |
|  build          | Compiled code and build info             |
|  config         | Configuration for devtools               |
|  coverage       | Jest coverage report                     |
|  dist           | Code to distributed in package           |
|  docs           | Project documentation                    |
|  node_modules   | Dependencies                             |
|  src            | Source code                              |
|  test           | Test utilities                           |
|  .gitignore     | Version control ignored paths            |
|  CHANGELOG.md   | Package version changelog                |
|  package.json   | NodeJS package manifest                  |
|  README.md      | Project README                           |
|  tsconfig.json  | Project TypeScript config                |
|  yarn.lock      | Dependency lock file                     |

## TypeScript

TypeScript compilation is handled using the [_Project References_](project-references-link)

### `tsconfig.base.json`

Base compiler options for all other configs

### `tsconfig.src.json`

Source code compiler config

### `tsconfig.tests.json`

Test and testing utility TS config

### `tsconfig.tools.json`

Devtools and config files, NOT tests

### `tsconfig.json`

Root project file. Only handles linking project references.

## Package bin scripts

Scripts to be set as `bin` entry points in package

- The code must be in src folder
- Entry point file must have the shebang as the first line of file (see below)

```shell
#!/usr/bin/env node
```

- Entry point must be declared in `package.json` (see below)

```json
"bin": {
  "example": "dist/bin/example.js"
}
```

> A work in progress...

[project-references-link]: https://www.typescriptlang.org/docs/handbook/project-references.html
