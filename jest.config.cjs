module.exports = {
  testEnvironment: 'node',
  // Do not run tests located under the `.internal` folder
  testPathIgnorePatterns: ['/src/.internal/'],
  // Exclude `.internal` files from coverage reports
  coveragePathIgnorePatterns: ['/src/.internal/'],
};
