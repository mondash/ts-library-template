# Project Structure

> TODO make this a lot better

## TypeScript

TypeScript compilation is handled using the [_Project References_](https://www.typescriptlang.org/docs/handbook/project-references.html)

### `tsconfig.base.json`

Base compiler options. Should be extended by other configs.

### `tsconfig.eslint.json`

Used to handle type-aware linting by eslint.

### `tsconfig.src.json`

Should handle compilation of just the code that is run directly by the app.

### `tsconfig.tests.json`

Handles compilation of unit tests and helper utils used in unit tests.

### `tsconfig.tools.json`

Handles compilation of other devtools and config files.

### `tsconfig.json`

Root project file. Only handles linking project references.
