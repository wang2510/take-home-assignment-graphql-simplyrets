// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
    verbose: true,
    moduleFileExtensions: ["js", "json"],
    rootDir: "./",
    modulePaths: ["<rootDir>"],
    testRegex: ".*\\.test\\.js$",
    collectCoverageFrom: ["src/**/*.js"],
    coverageDirectory: "./coverage",
    testEnvironment: "node",
};

module.exports = config;

// Or async function
module.exports = async () => {
    return {
        verbose: true,
    };
};