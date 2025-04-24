const esModules = [
  "query-string",
  "decode-uri-component",
  "split-on-first",
  "filter-obj",
];

module.exports = {
  transformIgnorePatterns: esModules.length
    ? [`/node_modules/(?!${esModules.join("|")})`]
    : [],
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['<rootDir>/jest.setup.js'],
}