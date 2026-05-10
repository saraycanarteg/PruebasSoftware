const js = require('@eslint/js');

//Exportamos arreglo de configuraciones especificas
module.exports = [
    {
        files: ['src/**/*.js'],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'commonjs'
        },

        //reglas
        rules:{
            ...js.configs.recommended.rules,
            semi: ['error', 'always'],
            quotes: ['error', 'single']
        }
    } 
]

