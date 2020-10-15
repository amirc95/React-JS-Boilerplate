module.exports = {
  testEnvironment: "node",
  testMatch: ["**/*.spec.js"],
  moduleNameMapper: {
    "@root/(.*)": "<rootDir>/$1",
    "@Assets(.*)$": "<rootDir>/src/Assets$1",
    "@Components(.*)$": "<rootDir>/src/Components$1",
    "@Styles(.*)$": "<rootDir>/src/Styles$1",
  },
};
