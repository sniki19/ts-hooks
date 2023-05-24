import type { Config } from 'jest'

const ignoreDirs = [
  'dist/',
  'node_modules/',
  'packages/'
]

export default async (): Promise<Config> => ({
  preset: 'ts-jest',
  verbose: false,
  roots: ['./src'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  testPathIgnorePatterns: ignoreDirs,
  coveragePathIgnorePatterns: ignoreDirs,
  coverageDirectory: '<rootDir>/coverage/',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.([t]sx?)$',
  moduleFileExtensions: ['ts', 'js', 'json'],
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    html: '<html lang="en-US."></html>',
    url: 'https://jestjs.io/',
    userAgent: 'Agent/007',
  }
})