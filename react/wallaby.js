module.exports = function (wallaby) {

    return {
        files: [
            'src/*.ts',
            'src/**/*.ts'
        ],

        tests: [
            'test/*Test.ts'
        ],

        testFramework: "mocha",

        env: {
            type: 'node'
        },

        compilers: {
            '**/*.ts': wallaby.compilers.typeScript({
                /* 1 for CommonJs*/
                module: 1
            })
        }
    }
};