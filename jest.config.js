module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  collectCoverageFrom: ["src/*.vue", "src/*.js", "!src/main.js", "!**/node_modules/**"],
  transform: {
    "^.+\\.worker.[t|j]sx?$": "workerloader-jest-transformer"
  }
}
