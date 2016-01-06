    module.exports = function (wallaby) {

        return {
            files: [
                'src/*.ts'
            ],

            tests: [
                'test/*Spec.ts'
            ],

            env: {
                type: 'node'
            },

            compilers: {
                '**/*.ts': wallaby.compilers.typeScript({
                    module: 5,  // ES6
                    target: 2  // ES6
                })
            },
            preprocessors: {
                '**/*.js': file => require('babel-core').transform(
                    file.content,
                    {sourceMap: true, presets: ['es2015']})
            }
        }
    }