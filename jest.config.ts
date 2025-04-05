export default {
  preset: './jest.preset.js', // This can be the same as a shared preset for all apps
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'], // Global test setup (if you use it)
  coverageDirectory: '<rootDir>/coverage', // Shared coverage directory
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.[jt]s?(x)',
    '<rootDir>/src/**/*(*.)@(spec|test).[jt]s?(x)', // Shared test file pattern
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html', 'css'], // Common extensions
};
