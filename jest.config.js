module.exports = {
  testEnviroment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules', '/.next'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFailsAfterEnv: ['<rootDir>/.jest/setup.ts']
}
