# Runbook

Project Runbook

## Scripts

<!-- TODO These will probably end up as scripts in the bin folder if they get any more complex -->

| Script            | Description                                 |
| ----------------- | ------------------------------------------- |
| `build`           | Builds the project using `typescript`.      |
| `changeset`       | Adds a new changeset file.                  |
| `check:lint`      | Checks project code quality using `eslint`. |
| `check:style`     | Checks project code style using `prettier`. |
| `check:types`     | Checks project types using `typescript`.    |
| `clean`           | Cleans project files using`rimraf`.         |
| `fix:style`       | Formats project using `prettier`.           |
| `package:publish` | Publishes package using `changesets`.       |
| `package:version` | Versions package using `changesets`.        |
| `test`            | Runs tests using `jest`.                    |
| `test:ci`         | Runs tests using `jest` in `--ci` mode.     |
| `test:watch`      | Runs tests using `jest` in `--watch` mode.  |
| `lint`            | Default config for `eslint`.                |
| `style`           | Default config for `prettier`.              |

## Prereleases

This project supports prereleases via `changesets`. The process for this is as follows:

### Creating a prerelease

1. Merge your changes (with changesets) to a prerelease branch (`prerelease/[TAG]`).
2. Checkout your prerelease branch locally and run `yarn changeset pre enter [TAG]`.
3. Push changes to prerelease branch.
4. Merge auto-generated PR to publish new prerelease version.
5. Repeat steps 1-4 to publish additional versions.

### Converting to a release

1. Checkout prerelease branch locally and run `yarn changeset pre exit`.
2. Push changes to prerelease branch.
3. Merge prerelease branch to main.
4. Merge auto-generated PR to publish new release version.

## Important notes

- `main` should **never** be in _pre_ mode.
- Only enter _pre_ mode in a prerelease branch.
- Make sure to exit _pre_ mode before merging to `main`.

[Changesets docs on prereleases][changesets-prereleases-docs-link]

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

[changesets-prereleases-docs-link]: https://github.com/atlassian/changesets/blob/c426035565cfac518238c8bf32f3c496c66c0657/docs/prereleases.md
