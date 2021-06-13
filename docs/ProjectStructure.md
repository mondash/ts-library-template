# Project Structure

> TODO make this a lot better

## Folder Structure

A brief description of each folder's contents and/or purpose

###  .git

Data for your local git repo

###  .github

Actions and workflows to be used by GitHub Actions

###  .vscode

Visual Studio Code editor config

###  bin

Scripts not meant to be included in distribution\
Only used in non-production environments

###  build

Compiled code

###  config

Configuration for devtools

###  coverage

Jest coverage report

###  docs

Project documentation

###  node_modules

Dependencies

###  src

Source code

###  test

Test utilities

###  .gitignore

A list of patterns to ignore in version control

###  package.json

NodeJS package manifest

###  README.md

Project README (use Nerd Font for glyphs)

###  tsconfig.json

Project TypeScript config

###  yarn.lock

Dependency lock file

## TypeScript

TypeScript compilation is handled using the [_Project References_](project-references-link)

### `tsconfig.base.json`

Base compiler options for all other configs.

### `tsconfig.src.json`

Source code compiler config

### `tsconfig.tests.json`

Test and testing utility TS config

### `tsconfig.tools.json`

Handles compilation of other devtools and config files. Does NOT handle tests.

### `tsconfig.json`

Root project file. Only handles linking project references.

[project-references-link]: https://www.typescriptlang.org/docs/handbook/project-references.html
