module.exports = {
  preset: 'react-native',
  setupFiles: ['./config/jest/globalFetch.js'],
  setupTestFrameworkScriptFile: './config/jest/snapshotDiff.js',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
