export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  roots: ["<rootDir>/src/"],
  modulePaths: ["<rootDir>/src/"],
}
