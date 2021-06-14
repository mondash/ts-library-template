# Project Structure

> TODO make this a lot better

## Folder Structure

A brief description of each folder's contents and/or purpose

| file/folder name | description                                                  |
| ---------------- | ------------------------------------------------------------ |
|  .changeset     | Configuration for changeset tool                             |
|  .git           | Data for your local git repo                                 |
|  .github        | Actions and workflows to be used by GitHub Actions           |
|  .vscode        | Visual Studio Code editor config                             |
|  bin            | Scripts meant to be used in non-production environments only |
|  build          | Compiled code and build info                                 |
|  config         | Configuration for devtools                                   |
|  coverage       | Jest coverage report                                         |
|  dist           | Code to be included in package                               |
|  docs           | Project documentation                                        |
|  node_modules   | Dependencies                                                 |
|  src            | Source code                                                  |
|  test           | Test utilities                                               |
|  .gitignore     | A list of patterns to ignore in version control              |
|  codecov.yml    | Configuration for codecov tool                               |
|  CHANGELOG.md   | Package version changelog                                    |
|  package.json   | NodeJS package manifest                                      |
|  README.md      | Project README (use Nerd Font for glyphs)                    |
|  tsconfig.json  | Project TypeScript config                                    |
|  yarn.lock      | Dependency lock file                                         |

## TypeScript

TypeScript compilation is handled using the [_Project References_](project-references-link)

### `tsconfig.base.json`

Base compiler options for all other configs.

### `tsconfig.src.json`

Source code compiler config

### `tsconfig.tests.json`

Test and testing utility TS config

### `tsconfig.tools.json`

Handles compilation of other devtools and config files. Does NOT handle tests

### `tsconfig.json`

Root project file. Only handles linking project references.

[project-references-link]: https://www.typescriptlang.org/docs/handbook/project-references.html
