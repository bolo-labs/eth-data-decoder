// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

const { resolve } = require('path');

module.exports = {
    bail: true,
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: '__tests__/coverage',
    coverageReporters: ['json', 'lcov'],
    coverageThreshold: {
        global: {
            branches: 70,
            functions: 80,
            lines: 80,
            statements: 80,
        },
    },
    testMatch: ['**/__tests__/**/*.(test|spec).+(ts|tsx|js)'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
};
