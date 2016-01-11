module.exports = function (wallaby) {

    return {
        files: [
            'src/*.ts'
        ],

        tests: [
            'test/*Spec.ts'
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