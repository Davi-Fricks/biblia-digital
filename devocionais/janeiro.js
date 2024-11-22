const lista_devocional = [
    {
        dia: 1,      // Dia da leitura
        mes: 1,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "gn",            // Abreviação do livro 
                capitulo: 1,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 31,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [31],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "mt",             // Abreviação do livro 
                capitulo: 1,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 25,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [20, 21]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "ed",            // Abreviação do livro 
                capitulo: 1,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 11,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "at",                    // Abreviação do livro 
                capitulo: 1,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 26,                // Verso que termina a leitura
                versos_vermelhos: [5, 7, 8],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [14, 24, 25],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    },
    {
        dia: 2,      // Dia da leitura
        mes: 1,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "gn",            // Abreviação do livro 
                capitulo: 2,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 25,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "mt",             // Abreviação do livro 
                capitulo: 2,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 23,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "ed",            // Abreviação do livro 
                capitulo: 2,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 70,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [68]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "at",                    // Abreviação do livro 
                capitulo: 2,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 47,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [32,33,36,38,39,41,42,43,44,45,46,47]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    },
    {
        dia: 3,      // Dia da leitura
        mes: 1,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "gn",            // Abreviação do livro 
                capitulo: 3,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 24,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "mt",             // Abreviação do livro 
                capitulo: 3,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 17,         // Verso que termina a leitura
                versos_vermelhos: [15],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [2,8,17]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "ed",            // Abreviação do livro 
                capitulo: 3,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 13,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [11,12,13],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "at",                    // Abreviação do livro 
                capitulo: 3,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 26,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [8],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [6,16,19,26]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    },
    {
        dia: 4,      // Dia da leitura
        mes: 1,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "gn",            // Abreviação do livro 
                capitulo: 4,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 26,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "mt",             // Abreviação do livro 
                capitulo: 4,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 25,         // Verso que termina a leitura
                versos_vermelhos: [4,7,10,17,19],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [20,22]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "ed",            // Abreviação do livro 
                capitulo: 4,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 24,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "at",                    // Abreviação do livro 
                capitulo: 4,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 37,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [10,11,24,25,26,27,28,29,30,31],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [12,13,19,20,32,33,34,35]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    },
    {
        dia: 4,      // Dia da leitura
        mes: 1,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "gn",            // Abreviação do livro 
                capitulo: 4,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 26,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "mt",             // Abreviação do livro 
                capitulo: 4,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 25,         // Verso que termina a leitura
                versos_vermelhos: [4,7,10,17,19],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [20,22]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "ed",            // Abreviação do livro 
                capitulo: 4,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 24,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "at",                    // Abreviação do livro 
                capitulo: 4,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 37,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [10,11,24,25,26,27,28,29,30,31],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [12,13,19,20,32,33,34,35]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    },
    {
        dia: 5,      // Dia da leitura
        mes: 1,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "gn",            // Abreviação do livro 
                capitulo: 5,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 32,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [22,24]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "mt",             // Abreviação do livro 
                capitulo: 5,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 48,         // Verso que termina a leitura
                versos_vermelhos: [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "ed",            // Abreviação do livro 
                capitulo: 5,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 17,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [2,11]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "at",                    // Abreviação do livro 
                capitulo: 5,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 42,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [13,29,30,31,32,39,41]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    },
    {
        dia: 6,      // Dia da leitura
        mes: 1,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "gn",            // Abreviação do livro 
                capitulo: 6,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 22,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [8,9]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "mt",             // Abreviação do livro 
                capitulo: 6,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 34,         // Verso que termina a leitura
                versos_vermelhos: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "ed",            // Abreviação do livro 
                capitulo: 6,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 22,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [16]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "at",                    // Abreviação do livro 
                capitulo: 6,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 15,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [6],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    },
    {
        dia: 7,      // Dia da leitura
        mes: 1,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "gn",            // Abreviação do livro 
                capitulo: 7,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 24,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "mt",             // Abreviação do livro 
                capitulo: 7,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 29,         // Verso que termina a leitura
                versos_vermelhos: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "ed",            // Abreviação do livro 
                capitulo: 7,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 28,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [27,28],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [10]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "at",                    // Abreviação do livro 
                capitulo: 7,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 60,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [59,60],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    },
    {
        dia: 8,      // Dia da leitura
        mes: 1,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "gn",            // Abreviação do livro 
                capitulo: 8,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 22,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [20],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [21,22]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "mt",             // Abreviação do livro 
                capitulo: 8,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 34,         // Verso que termina a leitura
                versos_vermelhos: [3,4,7,10,11,12,13,20,22,26,32],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [2,25],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [8]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "ed",            // Abreviação do livro 
                capitulo: 8,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 36,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [23],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [21,22,28,31]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "at",                    // Abreviação do livro 
                capitulo: 8,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 40,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [15],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [37]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, 
    {
        dia: 9,      // Dia da leitura
        mes: 1,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "gn",            // Abreviação do livro 
                capitulo: 9,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 29,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [8,9,10,11,12,13,14,15,16]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "gn",            // Abreviação do livro 
                capitulo: 10,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 32,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "mt",             // Abreviação do livro 
                capitulo: 9,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 38,         // Verso que termina a leitura
                versos_vermelhos: [2,4,5,6,9,12,13,15,16,17,22,24,28,29,30,37,38],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [27],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [18]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "ed",            // Abreviação do livro 
                capitulo: 9,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 15,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [5,6,7,8,9,10,11,12,13,14,15],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "at",                    // Abreviação do livro 
                capitulo: 9,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 43,                // Verso que termina a leitura
                versos_vermelhos: [4,5,6,10,11,12,15,16,],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [40],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    },
    {
        dia: 10,      // Dia da leitura
        mes: 1,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "gn",            // Abreviação do livro 
                capitulo: 11,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 32,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "mt",             // Abreviação do livro 
                capitulo: 10,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 42,         // Verso que termina a leitura
                versos_vermelhos: [5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "ed",            // Abreviação do livro 
                capitulo: 10,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 44,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "at",                    // Abreviação do livro 
                capitulo: 10,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 48,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [46],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [34,35]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, 
    {
        dia: 11,      // Dia da leitura
        mes: 1,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "gn",            // Abreviação do livro 
                capitulo: 12,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 20,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [7,8],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "mt",             // Abreviação do livro 
                capitulo: 11,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 30,         // Verso que termina a leitura
                versos_vermelhos: [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,21,22,23,24,25,26,27,28,29,30],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "ne",            // Abreviação do livro 
                capitulo: 1,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 11,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [4,5,6,7,8,9,10,11],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "at",                    // Abreviação do livro 
                capitulo: 11,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 30,                // Verso que termina a leitura
                versos_vermelhos: [16],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [18],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [23]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    },
    {
        dia: 12,      // Dia da leitura
        mes: 1,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "gn",            // Abreviação do livro 
                capitulo: 13,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 18,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [3,4,18],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "mt",             // Abreviação do livro 
                capitulo: 12,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 50,         // Verso que termina a leitura
                versos_vermelhos: [3,4,5,6,7,8,11,12,13,25,26,27,28,29,30,31,32,33,34,35,36,37,39,40,41,42,43,44,45,48,49,50],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "ne",            // Abreviação do livro 
                capitulo: 2,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 20,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [4],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [18,20]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "at",                    // Abreviação do livro 
                capitulo: 12,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 25,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [5,12],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    },
    {
        dia: 13,      // Dia da leitura
        mes: 1,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "gn",            // Abreviação do livro 
                capitulo: 14,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 24,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [20],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "mt",             // Abreviação do livro 
                capitulo: 13,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 58,         // Verso que termina a leitura
                versos_vermelhos: [3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,57],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "ne",            // Abreviação do livro 
                capitulo: 3,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 32,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "at",                    // Abreviação do livro 
                capitulo: 13,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 52,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [3],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [30,38,39]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    },
    {
        dia: 14,      // Dia da leitura
        mes: 1,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "gn",            // Abreviação do livro 
                capitulo: 15,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 21,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [2,3,4,5],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [1]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "mt",             // Abreviação do livro 
                capitulo: 14,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 36,         // Verso que termina a leitura
                versos_vermelhos: [16,18,27,29,31],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [23,28,30,33],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [14]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "ne",            // Abreviação do livro 
                capitulo: 4,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 23,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [4,5,9],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [14,20]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "at",                    // Abreviação do livro 
                capitulo: 14,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 28,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [23],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [17,22]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    },
    {
        dia: 15,      // Dia da leitura
        mes: 1,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "gn",            // Abreviação do livro 
                capitulo: 16,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 16,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [13]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "mt",             // Abreviação do livro 
                capitulo: 15,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 39,         // Verso que termina a leitura
                versos_vermelhos: [3,4,5,6,7,8,9,10,11,13,14,15,16,17,18,19,20,24,26,28,32,34],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [22,25,27,31],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [28,30]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "ne",            // Abreviação do livro 
                capitulo: 5,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 19,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [13,19],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [9]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "at",                    // Abreviação do livro 
                capitulo: 15,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 41,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [11]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    },
    {
        dia: 16,      // Dia da leitura
        mes: 1,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "gn",            // Abreviação do livro 
                capitulo: 17,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 27,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "mt",             // Abreviação do livro 
                capitulo: 16,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 28,         // Verso que termina a leitura
                versos_vermelhos: [2,3,4,6,8,9,10,11,12,13,15,17,18,19,23,24,25,26,27,28],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [16]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "ne",            // Abreviação do livro 
                capitulo: 6,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 19,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [14],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [15,16]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "at",                    // Abreviação do livro 
                capitulo: 16,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 40,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [25],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [30,31,32,33,34]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    },
    {
        dia: 17,      // Dia da leitura
        mes: 1,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "gn",            // Abreviação do livro 
                capitulo: 18,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 7,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [23,24,25,26,27,28,29,30,31,32,33],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "mt",             // Abreviação do livro 
                capitulo: 17,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 27,         // Verso que termina a leitura
                versos_vermelhos: [7,9,11,12,17,20,21,22,23,25,26,27],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [15,16],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [5,8]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "ne",            // Abreviação do livro 
                capitulo: 8,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 73,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "at",                    // Abreviação do livro 
                capitulo: 17,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 34,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [3,7,11,12,23,24,25,26,27,28,29,30,31]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    },
    {
        dia: 18,      // Dia da leitura
        mes: 1,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "gn",            // Abreviação do livro 
                capitulo: 19,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 38,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "mt",             // Abreviação do livro 
                capitulo: 18,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 35,         // Verso que termina a leitura
                versos_vermelhos: [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,23,24,25,26,27,28,29,30,31,32,33,34,35],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [21],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "ne",            // Abreviação do livro 
                capitulo: 9,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 18,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [6],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [8,9,10]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "at",                    // Abreviação do livro 
                capitulo: 18,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 28,                // Verso que termina a leitura
                versos_vermelhos: [9,10],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    },
    {
        dia: 19,      // Dia da leitura
        mes: 1,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "gn",            // Abreviação do livro 
                capitulo: 20,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 18,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "mt",             // Abreviação do livro 
                capitulo: 19,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 30,         // Verso que termina a leitura
                versos_vermelhos: [4,5,6,8,9,11,12,14,17,18,19,21,23,24,26,28,29,30],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "ne",            // Abreviação do livro 
                capitulo: 10,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 38,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [4,5,6,7,8,9,10,11,12,13,14,15],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [28]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "at",                    // Abreviação do livro 
                capitulo: 19,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 41,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [17],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [20]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    },
    {
        dia: 20,      // Dia da leitura
        mes: 1,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "gn",            // Abreviação do livro 
                capitulo: 21,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 34,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [33],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [17]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "mt",             // Abreviação do livro 
                capitulo: 20,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 34,         // Verso que termina a leitura
                versos_vermelhos: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,21,22,23,25,26,27,28,32],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [30,31,33],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [34]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "ne",            // Abreviação do livro 
                capitulo: 11,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 39,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [28,29]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "at",                    // Abreviação do livro 
                capitulo: 20,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 38,                // Verso que termina a leitura
                versos_vermelhos: [35],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [36],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [18,19,20,21,24,32]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    },
    {
        dia: 21,      // Dia da leitura
        mes: 1,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "gn",            // Abreviação do livro 
                capitulo: 22,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 24,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [8]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "mt",             // Abreviação do livro 
                capitulo: 21,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 46,         // Verso que termina a leitura
                versos_vermelhos: [2,3,13,16,19,21,22,24,25,27,28,29,30,31,32,33,34,35,36,37,38,39,40,42,43,44],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [9,15],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "ne",            // Abreviação do livro 
                capitulo: 11,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 36,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "at",                    // Abreviação do livro 
                capitulo: 21,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 40,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [5],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [14]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    },
    {
        dia: 22,      // Dia da leitura
        mes: 1,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "gn",            // Abreviação do livro 
                capitulo: 23,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 20,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "mt",             // Abreviação do livro 
                capitulo: 22,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 46,         // Verso que termina a leitura
                versos_vermelhos: [2,3,4,5,6,7,8,9,10,12,13,14,18,19,20,21,29,30,31,32,33,37,38,39,40,42,43,44,45],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "ne",            // Abreviação do livro 
                capitulo: 12,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 47,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [43]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "at",                    // Abreviação do livro 
                capitulo: 22,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 30,                // Verso que termina a leitura
                versos_vermelhos: [7,8,10,18,21],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [17,19,20],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [14]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    },
    {
        dia: 23,      // Dia da leitura
        mes: 1,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "gn",            // Abreviação do livro 
                capitulo: 24,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 67,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [12,13,14,26,27],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [52]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "mt",             // Abreviação do livro 
                capitulo: 23,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 39,         // Verso que termina a leitura
                versos_vermelhos: [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "ne",            // Abreviação do livro 
                capitulo: 13,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 31,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [14,22,29,31],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [2]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "at",                    // Abreviação do livro 
                capitulo: 23,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 35,                // Verso que termina a leitura
                versos_vermelhos: [11],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    },
    {
        dia: 24,      // Dia da leitura
        mes: 1,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "gn",            // Abreviação do livro 
                capitulo: 25,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 34,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "mt",             // Abreviação do livro 
                capitulo: 24,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 51,         // Verso que termina a leitura
                versos_vermelhos: [2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "est",            // Abreviação do livro 
                capitulo: 1,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 22,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "at",                    // Abreviação do livro 
                capitulo: 24,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 27,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [16]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    },
    {
        dia: 25,      // Dia da leitura
        mes: 1,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "gn",            // Abreviação do livro 
                capitulo: 26,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 35,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [25],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "mt",             // Abreviação do livro 
                capitulo: 25,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 46,         // Verso que termina a leitura
                versos_vermelhos: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "est",            // Abreviação do livro 
                capitulo: 2,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 23,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "at",                    // Abreviação do livro 
                capitulo: 25,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 27,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    },
    {
        dia: 26,      // Dia da leitura
        mes: 1,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "gn",            // Abreviação do livro 
                capitulo: 27,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 46,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "mt",             // Abreviação do livro 
                capitulo: 26,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 75,         // Verso que termina a leitura
                versos_vermelhos: [2,10,11,12,13,18,21,23,24,25,26,27,28,29,31,32,34,36,38,39,40,41,42,45,46,50,52,53,54,55,56,64,75],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "est",            // Abreviação do livro 
                capitulo: 3,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 15,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "at",                    // Abreviação do livro 
                capitulo: 26,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 32,                // Verso que termina a leitura
                versos_vermelhos: [14,15,16,17,18],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [29]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    },
    {
        dia: 27,      // Dia da leitura
        mes: 1,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "gn",            // Abreviação do livro 
                capitulo: 28,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 22,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [15]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "mt",             // Abreviação do livro 
                capitulo: 27,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 66,         // Verso que termina a leitura
                versos_vermelhos: [11,46,63],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [54]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "est",            // Abreviação do livro 
                capitulo: 4,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 17,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [16],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [14

                ]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "at",                    // Abreviação do livro 
                capitulo: 27,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 44,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [35],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [25]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    },
    {
        dia: 28,      // Dia da leitura
        mes: 1,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "gn",            // Abreviação do livro 
                capitulo: 29,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 35,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "mt",             // Abreviação do livro 
                capitulo: 28,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 20,         // Verso que termina a leitura
                versos_vermelhos: [9,10,18,19,20],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [17],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "est",            // Abreviação do livro 
                capitulo: 5,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 14,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "at",                    // Abreviação do livro 
                capitulo: 28,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 31,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [8],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    },
    {
        dia: 29,      // Dia da leitura
        mes: 1,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "gn",            // Abreviação do livro 
                capitulo: 30,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 43,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "mc",             // Abreviação do livro 
                capitulo: 1,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 45,         // Verso que termina a leitura
                versos_vermelhos: [15,17,25,38,41,44],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [35,40],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [11,18,22,37,41]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "est",            // Abreviação do livro 
                capitulo: 6,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 14,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "rom",                    // Abreviação do livro 
                capitulo: 1,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 32,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [9,10,25],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [5,6,16,17]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    },
    {
        dia: 30,      // Dia da leitura
        mes: 1,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "gn",            // Abreviação do livro 
                capitulo: 31,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 55,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [3,5,7,42]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "mc",             // Abreviação do livro 
                capitulo: 2,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 28,         // Verso que termina a leitura
                versos_vermelhos: [5,8,9,10,11,14,17,19,20,21,22,25,26,27,28],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [12],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "est",            // Abreviação do livro 
                capitulo: 7,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 10,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "rom",                    // Abreviação do livro 
                capitulo: 2,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 29,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [4,11,29]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    },
    {
        dia: 31,      // Dia da leitura
        mes: 1,      // Mês da leitura
        leitura_familia: [ 
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "gn",            // Abreviação do livro 
                capitulo: 32,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 32,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [9,10,11,12],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "mc",             // Abreviação do livro 
                capitulo: 3,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 35,         // Verso que termina a leitura
                versos_vermelhos: [3,4,5,23,24,25,26,27,28,29,33,34,35],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [5]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "est",            // Abreviação do livro 
                capitulo: 8,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 17,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [17]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "rom",                    // Abreviação do livro 
                capitulo: 3,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 31,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [4,22,23,24,25,26,27,28]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    },
]