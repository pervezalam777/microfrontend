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
      'branches': 80,
      'functions': 80,
      'lines': 80,
      'statements': 80
    }
  },
  coverageReporters: ['text', 'lcov'],
  testResultsProcessor: 'jest-sonar-reporter',
  moduleNameMapper: {
    '\\.(svg)$': '<rootDir>/src/__mocks__/svgMock.js',
    '\\.(scss)$': '<rootDir>/src/__mocks__/scssMock.js',
  }
};
