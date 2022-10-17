module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
      diagnostics: false,
    },
  },
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
}