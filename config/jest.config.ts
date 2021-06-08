import { Config } from "@jest/types";
// import { pathsToModuleNameMapper } from "ts-jest/utils";
import path from "path";

// import { compilerOptions } from "./tsconfig.tests.json";

const ignorePatterns = [
  "<rootDir>/node_modules",
  "<rootDir>/build",
  "<rootDir>/coverage",
];

const rootDir = path.resolve(__dirname, "..");

const baseConfig: Config.InitialOptions = {
  preset: "ts-jest",
  rootDir,
  setupFiles: ["<rootDir>/config/jest.setup.ts"],
  testEnvironment: "node",
  testPathIgnorePatterns: ignorePatterns,
  verbose: true,

  moduleNameMapper: {
    "^@test$": "<rootDir>/test",
    "^@test/(.*)": "<rootDir>/test/$1",
  },

  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/**/*.ts"],
  coveragePathIgnorePatterns: ignorePatterns,

  watchPathIgnorePatterns: ignorePatterns,
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],

  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/config/tsconfig.tests.json",
    },
  },
};

const projects: Config.InitialOptions[] = [
  {
    ...baseConfig,
    displayName: { name: "Source", color: "cyan" },
    testMatch: ["<rootDir>/src/**/*.test.ts"],
    collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  },
  {
    ...baseConfig,
    displayName: { name: "Tools", color: "magenta" },
    testMatch: ["<rootDir>/!(src)/**/*.test.ts"],
    collectCoverageFrom: ["<rootDir>/!(src)/**/*.ts"],
  },
];

const config: Config.InitialOptions = {
  ...baseConfig,
  projects,
};

export default config;
