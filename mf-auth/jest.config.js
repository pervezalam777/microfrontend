module.exports = {
  setupFilesAfterEnv: ['./src/setUpTests.js'],
  transform: {
    '^.+\\.js$': '<rootDir>/transformer.js'
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/node_modules/',
    '!src/index.js',
    '!src/bootstrap.js',
  ],
  coverageThreshold: {
    'global': {
      'branches': 0,
      'functions': 0,
      'lines': 0,
      'statements': 0
    }
  },
  testEnvironment: 'jsdom',
  coverageReporters: ['text', 'lcov'],
  testResultsProcessor: 'jest-sonar-reporter',
  moduleNameMapper: {
    '\\.(svg)$': '<rootDir>/src/__mocks__/svgMock.js',
    '\\.(scss)$': '<rootDir>/src/__mocks__/scssMock.js',
  }
};
