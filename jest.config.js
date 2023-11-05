const nextJest = require("next/jest")

const createJestConfig = nextJest({
  dir: "./",
})

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  testPathIgnorePatterns: ["<rootDir>/e2e"],
  transformIgnorePatterns: ["/node_modules/", "^.+\\.module\\.(css|sass|scss)$"],
}

module.exports = createJestConfig(customJestConfig)
