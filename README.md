# ts-app-template

TypeScript Application Template

[![codecov][codecov-icon-link]][codecov-repo-overview-link]

## Purpose

A template for an application-agnostic framework for writing consumable applications written in TypeScript. Built with special consideration for TS libraries, microservices and web & cli apps.

## Runbook

> Todo

## Scripts

| Script              | Description                                                      |
| ------------------- | ---------------------------------------------------------------- |
| `build`             | Builds the entire project using `TypeScript`                     |
| `build:dist`        | Builds the project for distrubution using `TypeScript`           |
| `changeset:add`     | Adds a new changeset file                                        |
| `changeset:version` | Increments the package version according to current changesets   |
| `changeset:publish` | Publishes a new package version                                  |
| `check:lint`        | Checks code quality across entire codebase using `eslint`.       |
| `check:style`       | Checks code style across entire codebase using `prettier`.       |
| `check:types`       | Checks `TypeScript` types across entire codebase.                |
| `clean:build`       | Deletes the `build` folder using `rimraf`.                       |
| `dev`               | Invokes the project using `ts-node` and `dotenv`.                |
| `fix:style`         | Formats the project using `prettier`.                            |
| `start`             | Starts a reload-on-save development server using `nodemon`.      |
| `test`              | Runs the test suite using `jest`.                                |
| `test:ci`           | Runs the test suite using `jest` in `--ci` mode.                 |
| `test:watch`        | Runs the test suite using `jest` and watches for file changes.   |
| `lint`              | Default config for `eslint`. Not meant to be invoked directly.   |
| `style`             | Default config for `prettier`. Not meant to be invoked directly. |

## 12 Factor App Considerations

> <https://12factor.net/>

### 1. Codebase

### 2. Dependencies

### 3. Config

### 4. Backing Services

### 5. Build, release, run

### 6. Processes

### 7. Port Binding

### 8. Concurrency

### 9. Disposability

### 10. Dev/prod parity

### 11. Logs

### 12. Admin Processes

[codecov-icon-link]: https://codecov.io/gh/matthew-gh-org/ts-app-template/branch/initial-setup/graph/badge.svg?token=NQZANEY90O
[codecov-repo-overview-link]: https://codecov.io/gh/matthew-gh-org/ts-app-template
