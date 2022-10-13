const config = {
  rootDir: '.',
  testEnvironment: 'jsdom',
  verbose: true,
  silent: true,
  transform: {
    '\\.(j|t)s[x]?$': ['babel-jest', { configFile: './jest.babel.js' }],
  },
  moduleNameMapper: {
    'lodash-es': 'lodash',
  },
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js',
  ],
};

module.exports = config;
