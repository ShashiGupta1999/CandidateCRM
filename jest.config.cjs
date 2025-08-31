module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['js', 'json', 'vue', 'ts'],
    transform: {
        '^.+\\.vue$': 'vue-jest',
        '^.+\\.[tj]s$': 'ts-jest'
    }
};