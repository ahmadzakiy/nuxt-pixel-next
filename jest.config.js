module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js',
    '\\.(css)$': '<rootDir>/test/styleMock.js'
  },
  moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest'
  },
  transformIgnorePatterns: ['node_modules/(?!@mekari|lodash-es)'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/components/**/*.vue', '<rootDir>/pages/**/*.vue'],
  testEnvironment: 'jsdom'
}
