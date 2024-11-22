const lista_devocional = [
    {
        dia: 1,      // Dia da leitura
        mes: 9,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "1 sam",            // Abreviação do livro 
                capitulo: 25,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 44,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [32,39],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [6]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "1 cor",             // Abreviação do livro 
                capitulo: 6,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 20,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [11,12,17,19,20]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "eze",            // Abreviação do livro 
                capitulo: 4,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 17,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [14],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "salm",                    // Abreviação do livro 
                capitulo: 40,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 17,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [5,6,9,10,11,12,13,14,15,16,17],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [1,2,3,4]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "salm",                    // Abreviação do livro 
                capitulo: 41,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 13,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [4,10,11,12],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [1,2,3]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    },
    {
        dia: 2,      // Dia da leitura
        mes: 9,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "1 sam",            // Abreviação do livro 
                capitulo: 26,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 25,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [24]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "1 cor",             // Abreviação do livro 
                capitulo: 7,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 40,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [15,17,20,22,23]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "eze",            // Abreviação do livro 
                capitulo: 5,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 17,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "salm",                    // Abreviação do livro 
                capitulo: 42,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 11,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [6,9],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [1,2,5,8,11]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "salm",                    // Abreviação do livro 
                capitulo: 43,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 5,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1,2,3,4],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [5]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    },
    {
        dia: 3,      // Dia da leitura
        mes: 9,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "1 sam",            // Abreviação do livro 
                capitulo: 27,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 12,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "1 cor",             // Abreviação do livro 
                capitulo: 8,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 13,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [6],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [1,3,4,8]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "eze",            // Abreviação do livro 
                capitulo: 6,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 14,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "salm",                    // Abreviação do livro 
                capitulo: 44,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 26,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ]
    },
    {
        dia: 4,      // Dia da leitura
        mes: 9,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "1 sam",            // Abreviação do livro 
                capitulo: 28,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 25,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "1 cor",             // Abreviação do livro 
                capitulo: 9,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 27,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [14,16,19,24]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "eze",            // Abreviação do livro 
                capitulo: 7,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 27,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "salm",                    // Abreviação do livro 
                capitulo: 45,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 17,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ]
    },
    {
        dia: 5,      // Dia da leitura
        mes: 9,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "1 sam",            // Abreviação do livro 
                capitulo: 29,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 11,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "1 sam",            // Abreviação do livro 
                capitulo: 30,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 31,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [8],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [6]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "1 cor",             // Abreviação do livro 
                capitulo: 10,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 33,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [12,13,14,17,23,24,26,31,32,33]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "eze",            // Abreviação do livro 
                capitulo: 8,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 18,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "salm",                    // Abreviação do livro 
                capitulo: 46,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 11,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [1,2,3,4,5,6,7,8,9,10,11]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "salm",                    // Abreviação do livro 
                capitulo: 47,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 9,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1,2,3,4,5,6,7,8,9],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ]
    },
    {
        dia: 6,      // Dia da leitura
        mes: 9,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "1 sam",            // Abreviação do livro 
                capitulo: 31,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 13,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "1 cor",             // Abreviação do livro 
                capitulo: 11,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 34,         // Verso que termina a leitura
                versos_vermelhos: [24,25],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [3,26]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "eze",            // Abreviação do livro 
                capitulo: 9,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 11,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [8],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "salm",                    // Abreviação do livro 
                capitulo: 48,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 14,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1,9,10],      // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [3,14]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ]
    },
    {
        dia: 7,      // Dia da leitura
        mes: 9,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "2 sam",            // Abreviação do livro 
                capitulo: 1,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 27,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "1 cor",             // Abreviação do livro 
                capitulo: 12,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 31,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [11,12,13,20,22,25,26,27]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "eze",            // Abreviação do livro 
                capitulo: 10,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 22,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "salm",                    // Abreviação do livro 
                capitulo: 49,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 20,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [15]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ]
    },
    {
        dia: 8,      // Dia da leitura
        mes: 9,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "2 sam",            // Abreviação do livro 
                capitulo: 2,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 32,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "1 cor",             // Abreviação do livro 
                capitulo: 13,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 13,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [1,2,3,4,5,6,7,8,13]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "eze",            // Abreviação do livro 
                capitulo: 11,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 25,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [13],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "salm",                    // Abreviação do livro 
                capitulo: 50,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 23,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [14,15,23]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ]
    },
    {
        dia: 9,      // Dia da leitura
        mes: 9,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "2 sam",            // Abreviação do livro 
                capitulo: 3,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 39,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "1 cor",             // Abreviação do livro 
                capitulo: 14,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 40,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [20,33,40]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "eze",            // Abreviação do livro 
                capitulo: 12,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 28,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "salm",                    // Abreviação do livro 
                capitulo: 51,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 19,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ]
    },
    {
        dia: 10,      // Dia da leitura
        mes: 9,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "2 sam",            // Abreviação do livro 
                capitulo: 4,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 12,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [9]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "2 sam",            // Abreviação do livro 
                capitulo: 5,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 25,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [19,23,24],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "1 cor",             // Abreviação do livro 
                capitulo: 15,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 58,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [57],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [3,4,10,19,20,21,22,58]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "eze",            // Abreviação do livro 
                capitulo: 13,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 23,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "salm",                    // Abreviação do livro 
                capitulo: 52,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 9,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [9],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [1,8]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "salm",                    // Abreviação do livro 
                capitulo: 53,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 6,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 4,               // Ordem que o livro está na leitura
                livro: "salm",                    // Abreviação do livro 
                capitulo: 54,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 7,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1,2,3,6,7],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [4]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ]
    },
    {
        dia: 11,      // Dia da leitura
        mes: 9,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "2 sam",            // Abreviação do livro 
                capitulo: 6,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 23,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [13,14,15,17,18],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [21,22]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "1 cor",             // Abreviação do livro 
                capitulo: 16,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 24,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [13,24]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "eze",            // Abreviação do livro 
                capitulo: 14,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 23,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "salm",                    // Abreviação do livro 
                capitulo: 55,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 23,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [22]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ]
    },
    {
        dia: 12,      // Dia da leitura
        mes: 9,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "2 sam",            // Abreviação do livro 
                capitulo: 7,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 29,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [18,19,20,21,22,23,24,25,26,24,27,28,29],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "2 cor",             // Abreviação do livro 
                capitulo: 1,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 24,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [3,4,11],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [2,5,6,7,8,9,10,12,20,21,22,24]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "eze",            // Abreviação do livro 
                capitulo: 15,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 8,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "salm",                    // Abreviação do livro 
                capitulo: 56,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 13,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1,2,3,4,5,6,7,8,9,10,11,12,13],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "salm",                    // Abreviação do livro 
                capitulo: 57,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 11,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1,2,3,5,7,8,9,10,11],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ]
    },
    {
        dia: 13,      // Dia da leitura
        mes: 9,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "2 sam",            // Abreviação do livro 
                capitulo: 8,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 18,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [6,14]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "2 sam",            // Abreviação do livro 
                capitulo: 9,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 13,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "2 cor",             // Abreviação do livro 
                capitulo: 2,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 17,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [14]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "eze",            // Abreviação do livro 
                capitulo: 16,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 63,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [8]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "salm",                    // Abreviação do livro 
                capitulo: 58,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 11,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [11]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "salm",                    // Abreviação do livro 
                capitulo: 59,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 17,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ]
    },
    {
        dia: 14,      // Dia da leitura
        mes: 9,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "2 sam",            // Abreviação do livro 
                capitulo: 10,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 19,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [12]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "2 cor",             // Abreviação do livro 
                capitulo: 13,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 18,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [5,6,17,18]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "eze",            // Abreviação do livro 
                capitulo: 17,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 24,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "salm",                    // Abreviação do livro 
                capitulo: 60,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 12,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1,5],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [11,12]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "salm",                    // Abreviação do livro 
                capitulo: 61,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 8,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1,2,8],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [3,4]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ]
    },
    {
        dia: 15,      // Dia da leitura
        mes: 9,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "2 sam",            // Abreviação do livro 
                capitulo: 11,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 27,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "2 cor",             // Abreviação do livro 
                capitulo: 4,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 18,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [15],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [1,6,7,8,9,10,11,16,17,18]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "eze",            // Abreviação do livro 
                capitulo: 18,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 32,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [9,23,32]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "salm",                    // Abreviação do livro 
                capitulo: 62,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 12,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [1,2,5,6,7,8,10,12]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "salm",                    // Abreviação do livro 
                capitulo: 63,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 11,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [1,2,3,4,5,6,7,8]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ]
    },
    {
        dia: 16,      // Dia da leitura
        mes: 9,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "2 sam",            // Abreviação do livro 
                capitulo: 12,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 31,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [16,20],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [13]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "2 cor",             // Abreviação do livro 
                capitulo: 5,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 21,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [1,2,14,15,17,18,19,20,21]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "eze",            // Abreviação do livro 
                capitulo: 19,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 14,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "salm",                    // Abreviação do livro 
                capitulo: 64,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 10,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [10]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "salm",                    // Abreviação do livro 
                capitulo: 65,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 13,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1,2],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [4,5]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ]
    },
    {
        dia: 17,      // Dia da leitura
        mes: 9,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "2 sam",            // Abreviação do livro 
                capitulo: 13,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 39,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "2 cor",             // Abreviação do livro 
                capitulo: 6,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 18,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [16,17,18]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "eze",            // Abreviação do livro 
                capitulo: 20,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 49,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [49],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [17]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "salm",                    // Abreviação do livro 
                capitulo: 66,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 20,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1,2,3,4,8,9,10,11,12,13,18,19,20],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [16,17]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "salm",                    // Abreviação do livro 
                capitulo: 67,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 7,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1,2,3,4,5],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ]
    },
    {
        dia: 18,      // Dia da leitura
        mes: 9,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "2 sam",            // Abreviação do livro 
                capitulo: 14,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 33,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "2 cor",             // Abreviação do livro 
                capitulo: 7,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 16,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [6,10]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "eze",            // Abreviação do livro 
                capitulo: 21,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 32,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "salm",                    // Abreviação do livro 
                capitulo: 68,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 35,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [3,4,26,35],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [5,6,10,19,20,28]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ]
    },
    {
        dia: 19,      // Dia da leitura
        mes: 9,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "2 sam",            // Abreviação do livro 
                capitulo: 15,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 37,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [25,26]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "2 cor",             // Abreviação do livro 
                capitulo: 8,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 24,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [9,14]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "eze",            // Abreviação do livro 
                capitulo: 22,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 31,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "salm",                    // Abreviação do livro 
                capitulo: 69,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 36,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1,2,3,4,5,6,7,8,9,13,14,15,16,17,18,25,30,34],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [32,33]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ]
    },
    {
        dia: 20,      // Dia da leitura
        mes: 9,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "2 sam",            // Abreviação do livro 
                capitulo: 16,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 23,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [12]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "2 cor",             // Abreviação do livro 
                capitulo: 9,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 15,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [6,7,8,9,10,11,12]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "eze",            // Abreviação do livro 
                capitulo: 23,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 49,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "salm",                    // Abreviação do livro 
                capitulo: 70,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 5,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1,5],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [4]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "salm",                    // Abreviação do livro 
                capitulo: 71,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 24,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1,2,3,4,8,9,12,19,20,21,22,23,24],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [5,6,7,16]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ]
    },
    {
        dia: 21,      // Dia da leitura
        mes: 9,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "2 sam",            // Abreviação do livro 
                capitulo: 17,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 29,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "2 cor",             // Abreviação do livro 
                capitulo: 10,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 18,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [4,17,18]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "eze",            // Abreviação do livro 
                capitulo: 24,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 27,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "salm",                    // Abreviação do livro 
                capitulo: 72,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 20,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [18,19],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ]
    },
    {
        dia: 22,      // Dia da leitura
        mes: 9,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "2 sam",            // Abreviação do livro 
                capitulo: 18,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 33,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "2 cor",             // Abreviação do livro 
                capitulo: 11,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 33,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [2]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "eze",            // Abreviação do livro 
                capitulo: 25,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 17,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "salm",                    // Abreviação do livro 
                capitulo: 73,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 28,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [1,23,24,25,26,28]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ]
    },
    {
        dia: 23,      // Dia da leitura
        mes: 9,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "2 sam",            // Abreviação do livro 
                capitulo: 19,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 43,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "2 cor",             // Abreviação do livro 
                capitulo: 12,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 21,         // Verso que termina a leitura
                versos_vermelhos: [9],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [7,8],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [9,10]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "eze",            // Abreviação do livro 
                capitulo: 26,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 21,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "salm",                    // Abreviação do livro 
                capitulo: 74,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 23,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1,10,11,21],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [12]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ]
    },
    {
        dia: 24,      // Dia da leitura
        mes: 9,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "2 sam",            // Abreviação do livro 
                capitulo: 20,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 26,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "2 cor",             // Abreviação do livro 
                capitulo: 13,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 14,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [7],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [4,8,11,14]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "eze",            // Abreviação do livro 
                capitulo: 27,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 36,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "salm",                    // Abreviação do livro 
                capitulo: 75,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 10,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1,9],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [7]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "salm",                    // Abreviação do livro 
                capitulo: 76,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 12,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ]
    },
    {
        dia: 25,      // Dia da leitura
        mes: 9,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "2 sam",            // Abreviação do livro 
                capitulo: 21,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 22,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "gál",             // Abreviação do livro 
                capitulo: 1,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 24,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [5,24],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [3,4]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "eze",            // Abreviação do livro 
                capitulo: 28,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 26,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "salm",                    // Abreviação do livro 
                capitulo: 77,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 20,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1,2,3,4,5,6,7,8,9,10,11,12],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [13,14]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ]
    },
    {
        dia: 26,      // Dia da leitura
        mes: 9,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "2 sam",            // Abreviação do livro 
                capitulo: 22,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 51,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "gál",             // Abreviação do livro 
                capitulo: 2,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 21,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [16,19,20]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "eze",            // Abreviação do livro 
                capitulo: 29,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 21,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "salm",                    // Abreviação do livro 
                capitulo: 78.1-37,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 37,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [7]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ]
    },
    {
        dia: 27,      // Dia da leitura
        mes: 9,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "2 sam",            // Abreviação do livro 
                capitulo: 23,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 39,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [5]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "gál",             // Abreviação do livro 
                capitulo: 3,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 29,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [11,13,22,24,25,26,27]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "eze",            // Abreviação do livro 
                capitulo: 30,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 26,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "salm",                    // Abreviação do livro 
                capitulo: 78.38-72,                    // Capitulo que será feita a leitura
                verso_inicial: 38,               // Verso em que se inicia a leitura
                verso_final: 72,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [38,39]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ]
    },
    {
        dia: 28,      // Dia da leitura
        mes: 9,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "2 sam",            // Abreviação do livro 
                capitulo: 24,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 25,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [14,17,23,24]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "gál",             // Abreviação do livro 
                capitulo: 4,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 31,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [6,7,31]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "eze",            // Abreviação do livro 
                capitulo: 31,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 18,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "salm",                    // Abreviação do livro 
                capitulo: 79,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 13,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [5,8,9,11,13],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ]
    },
    {
        dia: 29,      // Dia da leitura
        mes: 9,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "1 re",            // Abreviação do livro 
                capitulo: 1,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 53,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [48],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [29]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "gál",             // Abreviação do livro 
                capitulo: 5,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 26,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [1,13,16,24]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "eze",            // Abreviação do livro 
                capitulo: 32,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 32,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "salm",                    // Abreviação do livro 
                capitulo: 80,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 19,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ]
    },
    {
        dia: 30,      // Dia da leitura
        mes: 9,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "1 re",            // Abreviação do livro 
                capitulo: 2,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 46,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [3]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "gál",             // Abreviação do livro 
                capitulo: 6,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 18,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [7,8,9,10,14,15,18]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "eze",            // Abreviação do livro 
                capitulo: 33,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 33,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [11]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "salm",                    // Abreviação do livro 
                capitulo: 81,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 16,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1,2,3,4,5,7],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "salm",                    // Abreviação do livro 
                capitulo: 82,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 8,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ]
    },
]