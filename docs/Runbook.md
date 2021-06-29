# Runbook

Project Runbook

## Scripts

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

## Development process

<!-- TODO This should be a separate doc -->

The development process outlined here is meant to be both strict and efficient. This process was designed to enable coordinating quick, painless, and reliable project contributions among many developers.

### Issues

All contributions to this project _must_ start with a GitHub issue.

> TODO Add link to doc on issue creation
> TODO Priority, projects, milestones

### Branch or Fork

To begin working on an issue, create a new branch or fork the repo in GitHub.

### Local Dev

To start dev work, clone the repo and run `yarn install`.

<!-- TODO act cli docs
To run the `tests` job using the large image:

```shell
act -j tests -P ubuntu-latest=nektos/act-environments-ubuntu:18.04
```
-->

> _"Structure your commits and commit messages with purpose."_
>
> _"Include quality changesets when appropriate."_
>
> _"Run the checks and tests before pushing."_

### Push

<!-- TODO talk about commit structure (especially with changesets) -->

### PR

### Merge

<!-- TODO maybe not separate from PR -->

### (Pre)Release

### PROFIT

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

> A work in progress...

[changesets-prereleases-docs-link]: https://github.com/atlassian/changesets/blob/c426035565cfac518238c8bf32f3c496c66c0657/docs/prereleases.md
