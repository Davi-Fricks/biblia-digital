document.getElementById('searchButton').addEventListener('click', fetchChapter);
document.getElementById('searchButton').addEventListener('click', fetchChapter);

function fetchChapter() {
    debugger
    const chave = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHIiOiJTdW4gSnVuIDMwIDIwMjQgMTg6NTI6MTUgR01UKzAwMDAubHVjaWFubzU3QGdtYWlsLmNvbSIsImlhdCI6MTcxOTc3MzUzNX0.GYJ2ialkCn4HztSsjHfBF-cE6Fi_lCJIqvDqFHSMWTI';
    const dia = document.getElementById('dia').value.trim();
    const mes = document.getElementById('mes').value.trim();
    var devocional_busca = '';
    if (!dia || !mes) {
        alert('Por favor, preencha dia e mês');
        return;
    }

    const devocionais = [...janeiro, ...favereiro, ...marco, ...abril, ...maio, ...junho, ...julho, ...agosto, ...setembro, ...outubro, ...novembro, ...dezembro]

    for (const devocional of devocionais) {
        if (devocional.dia == dia && devocional.mes == mes) {
            devocional_busca = devocional;
            break;
        }
    }

    if (devocional_busca != undefined) {
        debugger
        const leitura_familiar = document.getElementById('leitura-familiar');
        const leitura_pessoal = document.getElementById('leitura-pessoal');
        leitura_familiar.innerHTML = ''; // Limpa o conteúdo anterior
        leitura_pessoal.innerHTML = ''; // Limpa o conteúdo anterior

        devocional_busca.leitura_familia.forEach(leitura => {
            fetch(`https://www.abibliadigital.com.br/api/verses/acf/${leitura.livro}/${leitura.capitulo}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${chave}`
                }
            })
                .then(response => response.json())
                .then((data) => {
                    const title = document.createElement('h2');
                    debugger
                    title.textContent = `${data.book.name} ${data.chapter.number}`;
                    leitura_familiar.appendChild(title);
                    data.verses.forEach(verse => {
                        debugger
                        const verseElement = document.createElement('p');
                        verseElement.className = 'versebox__versos';
                        verseElement.textContent = `${verse.number}. ${verse.text}`;
                        verseElement.style.margin = '0.5em 0'
                        leitura_familiar.appendChild(verseElement);
                    })

                    // for (const verse of data.verses) {
                    //     const verseElement = document.createElement('p');
                    //     verseElement.textContent = `${verse.number}. ${verse.text}`;
                    //     leitura_familiar.appendChild(verseElement);
                    // }
                })
                .catch(error => {
                    console.error('Erro:', error);
                    alert('Erro ao buscar o capítulo. Verifique os dados e tente novamente.');
                });
        })

        devocional_busca.leitura_pessoal.forEach(leitura => {
            fetch(`https://www.abibliadigital.com.br/api/verses/acf/${leitura.livro}/${leitura.capitulo}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${chave}`
                }
            })
                .then(response => response.json())
                .then((data) => {
                    const title = document.createElement('h2');

                    title.textContent = `${data.book.name} ${data.chapter.number}`;
                    leitura_pessoal.appendChild(title);
                    data.verses.forEach(verse => {
                        debugger
                        const verseElement = document.createElement('p');
                        verseElement.className = 'versebox__versos';
                        verseElement.textContent = `${verse.number}. ${verse.text}`;
                        verseElement.style.margin = '0.5em 0'
                        leitura_pessoal.appendChild(verseElement);
                    })
                })
                .catch(error => {
                    console.error('Erro:', error);
                    alert('Erro ao buscar o capítulo. Verifique os dados e tente novamente.');
                });
        })

       
    }


}

const janeiro = [
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
                dia: 2,      // Dia da leitura
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
                versos_azuis: [32, 33, 36, 38, 39, 41, 42, 43, 44, 45, 46, 47]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_azuis: [2, 8, 17]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_verdes: [11, 12, 13],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_azuis: [6, 16, 19, 26]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_vermelhos: [4, 7, 10, 17, 19],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [20, 22]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_verdes: [10, 11, 24, 25, 26, 27, 28, 29, 30, 31],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [12, 13, 19, 20, 32, 33, 34, 35]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_vermelhos: [4, 7, 10, 17, 19],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [20, 22]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_verdes: [10, 11, 24, 25, 26, 27, 28, 29, 30, 31],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [12, 13, 19, 20, 32, 33, 34, 35]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_azuis: [22, 24]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "mt",             // Abreviação do livro 
                capitulo: 5,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 48,         // Verso que termina a leitura
                versos_vermelhos: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_azuis: [2, 11]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "at",                    // Abreviação do livro 
                capitulo: 5,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 42,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [13, 29, 30, 31, 32, 39, 41]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_azuis: [8, 9]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "mt",             // Abreviação do livro 
                capitulo: 6,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 34,         // Verso que termina a leitura
                versos_vermelhos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_vermelhos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_verdes: [27, 28],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [10]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "at",                    // Abreviação do livro 
                capitulo: 7,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 60,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [59, 60],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_azuis: [21, 22]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "mt",             // Abreviação do livro 
                capitulo: 8,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 34,         // Verso que termina a leitura
                versos_vermelhos: [3, 4, 7, 10, 11, 12, 13, 20, 22, 26, 32],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [2, 25],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_azuis: [21, 22, 28, 31]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_azuis: [8, 9, 10, 11, 12, 13, 14, 15, 16]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_vermelhos: [2, 4, 5, 6, 9, 12, 13, 15, 16, 17, 22, 24, 28, 29, 30, 37, 38],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_verdes: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "at",                    // Abreviação do livro 
                capitulo: 9,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 43,                // Verso que termina a leitura
                versos_vermelhos: [4, 5, 6, 10, 11, 12, 15, 16,],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_vermelhos: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_azuis: [34, 35]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_verdes: [7, 8],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "mt",             // Abreviação do livro 
                capitulo: 11,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 30,         // Verso que termina a leitura
                versos_vermelhos: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_verdes: [4, 5, 6, 7, 8, 9, 10, 11],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_verdes: [3, 4, 18],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "mt",             // Abreviação do livro 
                capitulo: 12,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 50,         // Verso que termina a leitura
                versos_vermelhos: [3, 4, 5, 6, 7, 8, 11, 12, 13, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 39, 40, 41, 42, 43, 44, 45, 48, 49, 50],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_azuis: [18, 20]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "at",                    // Abreviação do livro 
                capitulo: 12,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 25,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [5, 12],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_vermelhos: [3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 57],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_azuis: [30, 38, 39]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_verdes: [2, 3, 4, 5],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [1]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "mt",             // Abreviação do livro 
                capitulo: 14,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 36,         // Verso que termina a leitura
                versos_vermelhos: [16, 18, 27, 29, 31],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [23, 28, 30, 33],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_verdes: [4, 5, 9],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [14, 20]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "at",                    // Abreviação do livro 
                capitulo: 14,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 28,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [23],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [17, 22]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_vermelhos: [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 24, 26, 28, 32, 34],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [22, 25, 27, 31],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [28, 30]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_verdes: [13, 19],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_vermelhos: [2, 3, 4, 6, 8, 9, 10, 11, 12, 13, 15, 17, 18, 19, 23, 24, 25, 26, 27, 28],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_azuis: [15, 16]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "at",                    // Abreviação do livro 
                capitulo: 16,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 40,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [25],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [30, 31, 32, 33, 34]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_verdes: [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "mt",             // Abreviação do livro 
                capitulo: 17,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 27,         // Verso que termina a leitura
                versos_vermelhos: [7, 9, 11, 12, 17, 20, 21, 22, 23, 25, 26, 27],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [15, 16],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [5, 8]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_azuis: [3, 7, 11, 12, 23, 24, 25, 26, 27, 28, 29, 30, 31]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_vermelhos: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_azuis: [8, 9, 10]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "at",                    // Abreviação do livro 
                capitulo: 18,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 28,                // Verso que termina a leitura
                versos_vermelhos: [9, 10],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_vermelhos: [4, 5, 6, 8, 9, 11, 12, 14, 17, 18, 19, 21, 23, 24, 26, 28, 29, 30],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_verdes: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_vermelhos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 21, 22, 23, 25, 26, 27, 28, 32],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [30, 31, 33],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_azuis: [28, 29]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "at",                    // Abreviação do livro 
                capitulo: 20,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 38,                // Verso que termina a leitura
                versos_vermelhos: [35],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [36],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [18, 19, 20, 21, 24, 32]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_vermelhos: [2, 3, 13, 16, 19, 21, 22, 24, 25, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 42, 43, 44],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [9, 15],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_vermelhos: [2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 18, 19, 20, 21, 29, 30, 31, 32, 33, 37, 38, 39, 40, 42, 43, 44, 45],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_vermelhos: [7, 8, 10, 18, 21],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [17, 19, 20],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_verdes: [12, 13, 14, 26, 27],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [52]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "mt",             // Abreviação do livro 
                capitulo: 23,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 39,         // Verso que termina a leitura
                versos_vermelhos: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_verdes: [14, 22, 29, 31],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_vermelhos: [2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_vermelhos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_vermelhos: [2, 10, 11, 12, 13, 18, 21, 23, 24, 25, 26, 27, 28, 29, 31, 32, 34, 36, 38, 39, 40, 41, 42, 45, 46, 50, 52, 53, 54, 55, 56, 64, 75],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_vermelhos: [14, 15, 16, 17, 18],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_vermelhos: [11, 46, 63],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_vermelhos: [9, 10, 18, 19, 20],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_vermelhos: [15, 17, 25, 38, 41, 44],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [35, 40],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [11, 18, 22, 37, 41]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_verdes: [9, 10, 25],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [5, 6, 16, 17]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_azuis: [3, 5, 7, 42]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "mc",             // Abreviação do livro 
                capitulo: 2,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 28,         // Verso que termina a leitura
                versos_vermelhos: [5, 8, 9, 10, 11, 14, 17, 19, 20, 21, 22, 25, 26, 27, 28],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_azuis: [4, 11, 29]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_verdes: [9, 10, 11, 12],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "mc",             // Abreviação do livro 
                capitulo: 3,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 35,         // Verso que termina a leitura
                versos_vermelhos: [3, 4, 5, 23, 24, 25, 26, 27, 28, 29, 33, 34, 35],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_azuis: [4, 22, 23, 24, 25, 26, 27, 28]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    },
]

const favereiro = [
    {
        dia: 1,
        mes: 2,
        leitura_familia: [
            {
                ordem: 1,
                livro: "gn",
                capitulo: 33,
                verso_inicial: 1,
                verso_final: 20,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "mc",
                capitulo: 4,
                verso_inicial: 1,
                verso_final: 41,
                versos_vermelhos: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 35, 39, 40],
                versos_verdes: [40],
                versos_azuis: []
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "et",
                capitulo: 9,
                verso_inicial: 1,
                verso_final: 32,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "et",
                capitulo: 10,
                verso_inicial: 1,
                verso_final: 3,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 3,
                livro: "rm",
                capitulo: 4,
                verso_inicial: 1,
                verso_final: 25,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [5, 6, 7, 8, 17]
            }
        ]
    }, {
        dia: 2,
        mes: 2,
        leitura_familia: [
            {
                ordem: 1,
                livro: "gn",
                capitulo: 34,
                verso_inicial: 1,
                verso_final: 31,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "mc",
                capitulo: 5,
                verso_inicial: 1,
                verso_final: 43,
                versos_vermelhos: [9, 8, 19, 30, 31, 34, 36, 39, 41],
                versos_verdes: [6, 23],
                versos_azuis: [20]
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "jó",
                capitulo: 1,
                verso_inicial: 0,
                verso_final: 22,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [21]
            },
            {
                ordem: 2,
                livro: "rm",
                capitulo: 5,
                verso_inicial: 1,
                verso_final: 21,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 17, 18, 19, 20, 21]
            }
        ]
    },
    {
        dia: 3,
        mes: 2,
        leitura_familia: [
            {
                ordem: 1,
                livro: "gn",
                capitulo: 35,
                verso_inicial: 1,
                verso_final: 29,
                versos_vermelhos: [],
                versos_verdes: [7, 14, 15],
                versos_azuis: [3]
            },
            {
                ordem: 2,
                livro: "gn",
                capitulo: 36,
                verso_inicial: 1,
                verso_final: 43,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 3,
                livro: "mc",
                capitulo: 6,
                verso_inicial: 1,
                verso_final: 56,
                versos_vermelhos: [4, 11, 31, 37, 38, 50,],
                versos_verdes: [],
                versos_azuis: [34]
            }
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "jó",
                capitulo: 2,
                verso_inicial: 1,
                verso_final: 13,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [10]
            },
            {
                ordem: 2,
                livro: "rm",
                capitulo: 6,
                verso_inicial: 1,
                verso_final: 23,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 18, 23]
            }
        ]
    }, {
        dia: 4,
        mes: 2,
        leitura_familia: [
            {
                ordem: 1,
                livro: "gn",
                capitulo: 37,
                verso_inicial: 1,
                verso_final: 36,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "mc",
                capitulo: 36,
                verso_inicial: 1,
                verso_final: 37,
                versos_vermelhos: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 27, 29, 34],
                versos_verdes: [],
                versos_azuis: [28, 37]
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "jó",
                capitulo: 3,
                verso_inicial: 1,
                verso_final: 26,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "rm",
                capitulo: 7,
                verso_inicial: 1,
                verso_final: 25,
                versos_vermelhos: [],
                versos_verdes: [25],
                versos_azuis: [4, 6, 12]
            }
        ]
    },
    {
        dia: 5,
        mes: 2,
        leitura_familia: [
            {
                ordem: 1,
                livro: "gn",
                capitulo: 38,
                verso_inicial: 1,
                verso_final: 30,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "mc",
                capitulo: 8,
                verso_inicial: 1,
                verso_final: 38,
                versos_vermelhos: [2, 3, 12, 15, 16, 17, 18, 19, 20, 26, 27, 29, 33, 34, 35, 36, 37, 38],
                versos_verdes: [],
                versos_azuis: [29]
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "jó",
                capitulo: 4,
                verso_inicial: 21,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [6, 17]
            },
            {
                ordem: 2,
                livro: "rm",
                capitulo: 8,
                verso_inicial: 1,
                verso_final: 39,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [1, 2, 10, 11, 14, 15, 16, 17, 18, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 37, 38, 39]
            }
        ]
    }, {
        dia: 6,
        mes: 2,
        leitura_familia: [
            {
                ordem: 1,
                livro: "gn",
                capitulo: 39,
                verso_inicial: 1,
                verso_final: 23,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [2, 3, 5, 21, 23]
            },
            {
                ordem: 2,
                livro: "mc",
                capitulo: 9,
                verso_inicial: 1,
                verso_final: 50,
                versos_vermelhos: [1, 2, 12, 13, 16, 19, 21, 23, 29, 31, 33, 35, 37, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 48, 49, 50],
                versos_verdes: [24],
                versos_azuis: [22]
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "jó",
                capitulo: 5,
                verso_inicial: 1,
                verso_final: 27,
                versos_vermelhos: [],
                versos_verdes: [8, 11, 13, 15, 17, 18, 27],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "rm",
                capitulo: 9,
                verso_inicial: 0,
                verso_final: 0,
                versos_vermelhos: [],
                versos_verdes: [5],
                versos_azuis: [145, 16]
            }
        ]
    }, {
        dia: 7,
        mes: 2,
        leitura_familia: [
            {
                ordem: 1,
                livro: "gn",
                capitulo: 40,
                verso_inicial: 1,
                verso_final: 23,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "mc",
                capitulo: 10,
                verso_inicial: 1,
                verso_final: 52,
                versos_vermelhos: [3, 5, 6, 7, 8, 9, 11, 14, 18, 19, 21, 23, 24, 25, 27, 29, 30, 31, 33, 34, 36, 38, 39, 40, 42, 43, 44, 45, 51, 52],
                versos_verdes: [47, 48],
                versos_azuis: [49, 50]
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "jó",
                capitulo: 6,
                verso_inicial: 1,
                verso_final: 30,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [14, 24]
            },
            {
                ordem: 2,
                livro: "rm",
                capitulo: 10,
                verso_inicial: 1,
                verso_final: 21,
                versos_vermelhos: [],
                versos_verdes: [1],
                versos_azuis: [6, 7, 8, 9, 11, 12]
            }
        ]
    }, {
        dia: 8,
        mes: 2,
        leitura_familia: [
            {
                ordem: 1,
                livro: "gn",
                capitulo: 41,
                verso_inicial: 1,
                verso_final: 57,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [51, 52]
            },
            {
                ordem: 2,
                livro: "mc",
                capitulo: 11,
                verso_inicial: 1,
                verso_final: 30,
                versos_vermelhos: [2, 3, 14, 17, 23, 24, 25, 26, 29, 30, 33],
                versos_verdes: [9, 10],
                versos_azuis: []
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "jó",
                capitulo: 7,
                verso_inicial: 1,
                verso_final: 21,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [17, 18]
            },
            {
                ordem: 2,
                livro: "rm",
                capitulo: 11,
                verso_inicial: 1,
                verso_final: 36,
                versos_vermelhos: [],
                versos_verdes: [33, 34, 35, 36],
                versos_azuis: [29, 30, 31, 32]
            }
        ]
    },
    {
        dia: 9,
        mes: 2,
        leitura_familia: [
            {
                ordem: 1,
                livro: "gn",
                capitulo: 42,
                verso_inicial: 1,
                verso_final: 38,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "mc",
                capitulo: 12,
                verso_inicial: 1,
                verso_final: 44,
                versos_vermelhos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 15, 16, 17, 24, 25, 26, 27, 29, 30, 31, 35, 36, 37, 38, 39, 40, 43, 44],
                versos_verdes: [],
                versos_azuis: []
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "jó",
                capitulo: 1,
                verso_inicial: 1,
                verso_final: 22,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [3, 5, 6, 7, 11, 12, 13, 14, 20]
            },
            {
                ordem: 2,
                livro: "rm",
                capitulo: 12,
                verso_inicial: 1,
                verso_final: 21,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [1, 2, 5]
            }
        ]
    }, {
        dia: 10,
        mes: 2,
        leitura_familia: [
            {
                ordem: 1,
                livro: "gn",
                capitulo: 43,
                verso_inicial: 1,
                verso_final: 34,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "mc",
                capitulo: 13,
                verso_inicial: 1,
                verso_final: 37,
                versos_vermelhos: [2, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37],
                versos_verdes: [],
                versos_azuis: []
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "jó",
                capitulo: 9,
                verso_inicial: 1,
                verso_final: 35,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [2, 3, 4, 10, 12, 14, 15, 16, 19, 20, 21,]
            },
            {
                ordem: 2,
                livro: "rm",
                capitulo: 13,
                verso_inicial: 1,
                verso_final: 14,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [8, 10, 11]
            }
        ]
    }, {
        dia: 11,
        mes: 2,
        leitura_familia: [
            {
                ordem: 1,
                livro: "gn",
                capitulo: 44,
                verso_inicial: 1,
                verso_final: 34,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "mc",
                capitulo: 14,
                verso_inicial: 1,
                verso_final: 72,
                versos_vermelhos: [6, 7, 8, 9, 13, 14, 15, 18, 20, 21, 22, 23, 24, 25, 27, 28, 30, 32, 34, 36, 37, 38, 41, 42, 48, 49, 62],
                versos_verdes: [35, 39],
                versos_azuis: []
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "jó",
                capitulo: 10,
                verso_inicial: 1,
                verso_final: 2,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [14]
            },
            {
                ordem: 2,
                livro: "rm",
                capitulo: 14,
                verso_inicial: 1,
                verso_final: 23,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [7, 8, 9, 17, 18, 19]
            }
        ]
    }, {
        dia: 12,
        mes: 2,
        leitura_familia: [
            {
                ordem: 1,
                livro: "gn",
                capitulo: 45,
                verso_inicial: 1,
                verso_final: 28,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [5, 7, 8]
            },
            {
                ordem: 2,
                livro: "mc",
                capitulo: 15,
                verso_inicial: 1,
                verso_final: 47,
                versos_vermelhos: [2, 34],
                versos_verdes: [],
                versos_azuis: [38, 39]
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "jó",
                capitulo: 11,
                verso_inicial: 1,
                verso_final: 20,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [6, 7, 13, 14, 15, 16, 17, 18, 19]
            },
            {
                ordem: 2,
                livro: "rm",
                capitulo: 15,
                verso_inicial: 1,
                verso_final: 33,
                versos_vermelhos: [],
                versos_verdes: [13, 30, 31, 32, 33],
                versos_azuis: [1, 2, 4, 5, 6, 7]
            }
        ]
    }, {
        dia: 13,
        mes: 2,
        leitura_familia: [
            {
                ordem: 1,
                livro: "gn",
                capitulo: 46,
                verso_inicial: 1,
                verso_final: 34,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "mc",
                capitulo: 16,
                verso_inicial: 1,
                verso_final: 20,
                versos_vermelhos: [15, 16, 17, 18],
                versos_verdes: [],
                versos_azuis: [6, 7, 19, 20]
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "jó",
                capitulo: 12,
                verso_inicial: 1,
                verso_final: 25,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [10]
            },
            {
                ordem: 2,
                livro: "rm",
                capitulo: 16,
                verso_inicial: 1,
                verso_final: 27,
                versos_vermelhos: [],
                versos_verdes: [24, 25, 26, 27],
                versos_azuis: []
            }
        ]
    }, {
        dia: 14,
        mes: 2,
        leitura_familia: [
            {
                ordem: 1,
                livro: "gn",
                capitulo: 47,
                verso_inicial: 1,
                verso_final: 31,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "lc",
                capitulo: 1,
                verso_inicial: 1,
                verso_final: 38,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [3, 4, 6, 30, 37, 38]
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "jó",
                capitulo: 13,
                verso_inicial: 1,
                verso_final: 28,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [15, 16]
            },
            {
                ordem: 2,
                livro: "1 co",
                capitulo: 1,
                verso_inicial: 1,
                verso_final: 31,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [2, 3, 9, 18, 21, 24, 25, 27, 28, 29, 30, 31]
            }
        ]
    }, {
        dia: 15,
        mes: 2,
        leitura_familia: [
            {
                ordem: 1,
                livro: "gn",
                capitulo: 48,
                verso_inicial: 1,
                verso_final: 22,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "lc",
                capitulo: 1,
                verso_inicial: 39,
                verso_final: 80,
                versos_vermelhos: [],
                versos_verdes: [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 64],
                versos_azuis: [58]
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "jó",
                capitulo: 14,
                verso_inicial: 1,
                verso_final: 22,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "1 co",
                capitulo: 2,
                verso_inicial: 1,
                verso_final: 16,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [2, 9, 12]
            }
        ]
    }, {
        dia: 16,
        mes: 2,
        leitura_familia: [
            {
                ordem: 1,
                livro: "gn",
                capitulo: 49,
                verso_inicial: 1,
                verso_final: 33,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "lc",
                capitulo: 2,
                verso_inicial: 1,
                verso_final: 52,
                versos_vermelhos: [],
                versos_verdes: [13, 20, 28, 29, 30, 31, 32, 38],
                versos_azuis: [10, 11, 25, 40, 51, 52]
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "jó",
                capitulo: 15,
                verso_inicial: 1,
                verso_final: 35,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "1 co",
                capitulo: 3,
                verso_inicial: 1,
                verso_final: 23,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [9, 11, 16, 21, 22, 23]
            }
        ]
    }, {
        dia: 17,
        mes: 2,
        leitura_familia: [
            {
                ordem: 1,
                livro: "gn",
                capitulo: 50,
                verso_inicial: 1,
                verso_final: 28,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [20]
            },
            {
                ordem: 2,
                livro: "lc",
                capitulo: 3,
                verso_inicial: 1,
                verso_final: 38,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [8]
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "jó",
                capitulo: 16,
                verso_inicial: 1,
                verso_final: 21,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [5]
            },
            {
                ordem: 2,
                livro: "jó",
                capitulo: 17,
                verso_inicial: 1,
                verso_final: 16,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 3,
                livro: "1 co",
                capitulo: 4,
                verso_inicial: 1,
                verso_final: 21,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            }
        ]
    }, {
        dia: 18,
        mes: 2,
        leitura_familia: [
            {
                ordem: 1,
                livro: "êx",
                capitulo: 1,
                verso_inicial: 1,
                verso_final: 22,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "lc",
                capitulo: 4,
                verso_inicial: 1,
                verso_final: 44,
                versos_vermelhos: [43],
                versos_verdes: [],
                versos_azuis: [32]
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "jó",
                capitulo: 18,
                verso_inicial: 1,
                verso_final: 21,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "1 co",
                capitulo: 5,
                verso_inicial: 1,
                verso_final: 13,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [6, 7, 8]
            }
        ]
    }, {
        dia: 19,
        mes: 2,
        leitura_familia: [
            {
                ordem: 1,
                livro: "êx",
                capitulo: 2,
                verso_inicial: 1,
                verso_final: 25,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [24]
            },
            {
                ordem: 2,
                livro: "lc",
                capitulo: 5,
                verso_inicial: 1,
                verso_final: 39,
                versos_vermelhos: [4, 10, 13, 14, 20, 22, 23, 24, 27, 31, 32, 34, 35, 36, 37, 38, 39],
                versos_verdes: [12, 16, 26],
                versos_azuis: [5, 8, 28]
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "jó",
                capitulo: 19,
                verso_inicial: 1,
                verso_final: 29,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "1 co",
                capitulo: 6,
                verso_inicial: 1,
                verso_final: 20,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [11, 12, 17, 19, 20]
            }
        ]
    }, {
        dia: 20,
        mes: 2,
        leitura_familia: [
            {
                ordem: 1,
                livro: "êx",
                capitulo: 3,
                verso_inicial: 1,
                verso_final: 22,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [7, 8]
            },
            {
                ordem: 2,
                livro: "lc",
                capitulo: 6,
                verso_inicial: 1,
                verso_final: 49,
                versos_vermelhos: [3, 4, 8, 9, 10, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
                versos_verdes: [12],
                versos_azuis: []
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "jó",
                capitulo: 20,
                verso_inicial: 1,
                verso_final: 29,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "1 co",
                capitulo: 7,
                verso_inicial: 1,
                verso_final: 40,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [15, 17, 20, 21, 22, 23]
            }
        ]
    }, {
        dia: 21,
        mes: 2,
        leitura_familia: [
            {
                ordem: 1,
                livro: "êx",
                capitulo: 4,
                verso_inicial: 1,
                verso_final: 31,
                versos_vermelhos: [],
                versos_verdes: [31],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "lc",
                capitulo: 7,
                verso_inicial: 1,
                verso_final: 50,
                versos_vermelhos: [9, 13, 14, 22, 23, 24, 25, 26, 27, 28, 31, 32, 33, 34, 35, 40, 41, 42, 43, 44, 45, 46, 47, 48, 50],
                versos_verdes: [16],
                versos_azuis: [6, 7, 13]
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "jó",
                capitulo: 21,
                verso_inicial: 1,
                verso_final: 34,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "1 co",
                capitulo: 8,
                verso_inicial: 1,
                verso_final: 13,
                versos_vermelhos: [],
                versos_verdes: [6],
                versos_azuis: [1, 3, 4, 8]
            }
        ]
    }, {
        dia: 22,
        mes: 2,
        leitura_familia: [
            {
                ordem: 1,
                livro: "êx",
                capitulo: 5,
                verso_inicial: 1,
                verso_final: 23,
                versos_vermelhos: [],
                versos_verdes: [22, 23],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "lc",
                capitulo: 8,
                verso_inicial: 1,
                verso_final: 56,
                versos_vermelhos: [5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 21, 22, 25, 30, 39, 45, 46, 50, 52, 54],
                versos_verdes: [24, 41, 42],
                versos_azuis: [35]
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "jó",
                capitulo: 21,
                verso_inicial: 1,
                verso_final: 30,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [2, 3, 4, 21, 22, 23, 24, 25, 26, 27, 28, 29]
            },
            {
                ordem: 2,
                livro: "1 co",
                capitulo: 9,
                verso_inicial: 1,
                verso_final: 27,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [14, 16, 19, 24]
            },

        ]
    }, {
        dia: 23,
        mes: 2,
        leitura_familia: [
            {
                ordem: 1,
                livro: "êx",
                capitulo: 6,
                verso_inicial: 1,
                verso_final: 30,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [6, 7]
            },
            {
                ordem: 2,
                livro: "lc",
                capitulo: 9,
                verso_inicial: 1,
                verso_final: 62,
                versos_vermelhos: [3, 4, 5, 20, 22, 23, 24, 25, 26, 27, 41, 44, 48, 50, 55, 56, 58, 59, 60, 62],
                versos_verdes: [29],
                versos_azuis: []
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "jó",
                capitulo: 23,
                verso_inicial: 1,
                verso_final: 17,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [10, 11, 12]
            },
            {
                ordem: 2,
                livro: "1 co",
                capitulo: 10,
                verso_inicial: 1,
                verso_final: 33,
                versos_vermelhos: [],
                versos_verdes: [12, 13, 14, 17, 23, 24, 26, 31, 32, 33],
                versos_azuis: []
            }
        ]
    }, {
        dia: 24,
        mes: 2,
        leitura_familia: [
            {
                ordem: 1,
                livro: "êx",
                capitulo: 7,
                verso_inicial: 1,
                verso_final: 25,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "lc",
                capitulo: 10,
                verso_inicial: 1,
                verso_final: 42,
                versos_vermelhos: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24, 26, 30, 31, 32, 33, 34, 35, 36, 37, 41, 42],
                versos_verdes: [],
                versos_azuis: [38, 39]
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "jó",
                capitulo: 24,
                verso_inicial: 1,
                verso_final: 25,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "1 co",
                capitulo: 11,
                verso_inicial: 1,
                verso_final: 34,
                versos_vermelhos: [],
                versos_verdes: [24, 25],
                versos_azuis: [3, 26]
            }
        ]
    }, {
        dia: 25,
        mes: 2,
        leitura_familia: [
            {
                ordem: 1,
                livro: "êx",
                capitulo: 8,
                verso_inicial: 1,
                verso_final: 32,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "lc",
                capitulo: 11,
                verso_inicial: 1,
                verso_final: 54,
                versos_vermelhos: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 29, 30, 31, 32, 33, 34, 35, 36, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
                versos_verdes: [1],
                versos_azuis: []
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "jó",
                capitulo: 25,
                verso_inicial: 1,
                verso_final: 6,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [4]
            },
            {
                ordem: 2,
                livro: "jó",
                capitulo: 26,
                verso_inicial: 1,
                verso_final: 14,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [14]
            },
            {
                ordem: 3,
                livro: "1 co",
                capitulo: 12,
                verso_inicial: 1,
                verso_final: 31,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [11, 12, 13, 20, 22, 25, 26, 27]
            }
        ]
    }, {
        dia: 26,
        mes: 2,
        leitura_familia: [
            {
                ordem: 1,
                livro: "êx",
                capitulo: 9,
                verso_inicial: 1,
                verso_final: 35,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "lc",
                capitulo: 12,
                verso_inicial: 1,
                verso_final: 59,
                versos_vermelhos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
                versos_verdes: [],
                versos_azuis: []
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "jó",
                capitulo: 27,
                verso_inicial: 1,
                verso_final: 23,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [2, 3, 4]
            },
            {
                ordem: 2,
                livro: "1 co",
                capitulo: 13,
                verso_inicial: 1,
                verso_final: 13,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [1, 2, 3, 4, 5, 6, 7, 8, 13]
            }
        ]
    }, {
        dia: 27,
        mes: 2,
        leitura_familia: [
            {
                ordem: 1,
                livro: "êx",
                capitulo: 10,
                verso_inicial: 1,
                verso_final: 29,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [9]
            },
            {
                ordem: 2,
                livro: "lc",
                capitulo: 13,
                verso_inicial: 1,
                verso_final: 35,
                versos_vermelhos: [2, 3, 4, 5, 6, 7, 8, 9, 12, 15, 16, 18, 19, 20, 21, 24, 25, 26, 27, 28, 29, 30, 32, 33, 34, 35],
                versos_verdes: [13],
                versos_azuis: [17]
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "jó",
                capitulo: 28,
                verso_inicial: 1,
                verso_final: 28,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [28]
            },
            {
                ordem: 2,
                livro: "1 co",
                capitulo: 14,
                verso_inicial: 1,
                verso_final: 40,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [20, 33, 40]
            }
        ]
    }, {
        dia: 28,
        mes: 2,
        leitura_familia: [
            {
                ordem: 1,
                livro: "êx",
                capitulo: 11,
                verso_inicial: 1,
                verso_final: 10,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "êx",
                capitulo: 12,
                verso_inicial: 1,
                verso_final: 20,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [13]
            },
            {
                ordem: 3,
                livro: "lc",
                capitulo: 14,
                verso_inicial: 1,
                verso_final: 35,
                versos_vermelhos: [3, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, , 35],
                versos_verdes: [],
                versos_azuis: []
            },

        ],
        leitura_pessoal: [

            {
                ordem: 1,
                livro: "jó",
                capitulo: 29,
                verso_inicial: 1,
                verso_final: 25,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "1 co",
                capitulo: 15,
                verso_inicial: 1,
                verso_final: 58,
                versos_vermelhos: [],
                versos_verdes: [57],
                versos_azuis: [3, 4, 10, 19, 20, 21, 22, 58]
            }
        ]
    }
]

const marco = [

    {
        dia: 1,
        mes: 3,
        leitura_familia: [
            {
                ordem: 1,
                livro: "êx",
                capitulo: 12,
                verso_inicial: 21,
                verso_final: 51,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [23, 24]
            },
            {
                ordem: 2,
                livro: "lc",
                capitulo: 15,
                verso_inicial: 1,
                verso_final: 32,
                versos_vermelhos: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
                versos_verdes: [],
                versos_azuis: []
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "jó",
                capitulo: 30,
                verso_inicial: 1,
                verso_final: 31,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "1 co",
                capitulo: 16,
                verso_inicial: 1,
                verso_final: 24,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [13, 23, 24]
            }
        ]
    },
    {
        dia: 2,
        mes: 3,
        leitura_familia: [
            {
                ordem: 1,
                livro: "êx",
                capitulo: 13,
                verso_inicial: 1,
                verso_final: 22,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [14, 16, 21, 22]
            },
            {
                ordem: 2,
                livro: "lc",
                capitulo: 16,
                verso_inicial: 1,
                verso_final: 31,
                versos_vermelhos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
                versos_verdes: [],
                versos_azuis: []
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "jó",
                capitulo: 31,
                verso_inicial: 1,
                verso_final: 40,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [1, 8]
            },
            {
                ordem: 2,
                livro: "2 co",
                capitulo: 1,
                verso_inicial: 1,
                verso_final: 24,
                versos_vermelhos: [],
                versos_verdes: [3, 4, 11],
                versos_azuis: [2, 5, 6, 7, 8, 9, 10, 12, 20, 21, 22, 24]
            }
        ]
    },
    {
        dia: 3,
        mes: 3,
        leitura_familia: [
            {
                ordem: 1,
                livro: "êx",
                capitulo: 14,
                verso_inicial: 1,
                verso_final: 31,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [13, 14]
            },
            {
                ordem: 2,
                livro: "lc",
                capitulo: 17,
                verso_inicial: 1,
                verso_final: 37,
                versos_vermelhos: [1, 2, 3, 4, 6, 7, 8, 9, 10, 14, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37],
                versos_verdes: [],
                versos_azuis: []
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "jó",
                capitulo: 32,
                verso_inicial: 2,
                verso_final: 22,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [8, 22]
            },
            {
                ordem: 2,
                livro: "2 co",
                capitulo: 2,
                verso_inicial: 1,
                verso_final: 17,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [14]
            }
        ]
    },

    {
        dia: 4,
        mes: 3,
        leitura_familia: [
            {
                ordem: 1,
                livro: "êx",
                capitulo: 15,
                verso_inicial: 1,
                verso_final: 27,
                versos_vermelhos: [],
                versos_verdes: [1, 2, 3, 4, 5, 6, 7, 11, 21],
                versos_azuis: [13, 18]
            },
            {
                ordem: 2,
                livro: "lc",
                capitulo: 18,
                verso_inicial: 1,
                verso_final: 43,
                versos_vermelhos: [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 16, 17, 19, 20, 22, 24, 25, 27, 29, 30, 31, 32, 33, 41, 42],
                versos_verdes: [1, 38, 39, 41, 43],
                versos_azuis: []
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "jó",
                capitulo: 33,
                verso_inicial: 1,
                verso_final: 33,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [4, 12, 24, 25, 26, 27, 28, 29, 30]
            },
            {
                ordem: 2,
                livro: "2 co",
                capitulo: 3,
                verso_inicial: 1,
                verso_final: 18,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [5, 6, 17, 18]
            }
        ]
    },
    {
        dia: 5,
        mes: 3,
        leitura_familia: [
            {
                ordem: 1,
                livro: "êx",
                capitulo: 16,
                verso_inicial: 1,
                verso_final: 36,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "lc",
                capitulo: 19,
                verso_inicial: 1,
                verso_final: 48,
                versos_vermelhos: [5, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 30, 31, 40, 42, 43, 44, 46,],
                versos_verdes: [37, 38],
                versos_azuis: []
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "jó",
                capitulo: 34,
                verso_inicial: 1,
                verso_final: 37,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [10, 12, 14, 15, 23]
            },
            {
                ordem: 2,
                livro: "2 co",
                capitulo: 4,
                verso_inicial: 1,
                verso_final: 18,
                versos_vermelhos: [],
                versos_verdes: [15],
                versos_azuis: [1, 6, 7, 8, 9, 10, 11, 16, 17, 18]
            }
        ]
    },
    {
        dia: 6,
        mes: 3,
        leitura_familia: [
            {
                ordem: 1,
                livro: "êx",
                capitulo: 17,
                verso_inicial: 1,
                verso_final: 16,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [15]
            },
            {
                ordem: 2,
                livro: "lc",
                capitulo: 20,
                verso_inicial: 1,
                verso_final: 47,
                versos_vermelhos: [3, 4, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 23, 24, 25, 34, 35, 36, 37, 38, 41, 42, 43, 44, 45, 46, 47],
                versos_verdes: [],
                versos_azuis: [26]
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "jó",
                capitulo: 35,
                verso_inicial: 1,
                verso_final: 16,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [6, 7, 13]
            },
            {
                ordem: 2,
                livro: "2 co",
                capitulo: 5,
                verso_inicial: 1,
                verso_final: 21,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [1, 2, 14, 15, 17, 18, 19, 20, 21]
            }
        ]
    },
    {
        dia: 7,
        mes: 3,
        leitura_familia: [
            {
                ordem: 1,
                livro: "êx",
                capitulo: 18,
                verso_inicial: 1,
                verso_final: 27,
                versos_vermelhos: [],
                versos_verdes: [10, 11, 12],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "lc",
                capitulo: 21,
                verso_inicial: 1,
                verso_final: 38,
                versos_vermelhos: [3, 4, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
                versos_verdes: [],
                versos_azuis: []
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "jó",
                capitulo: 36,
                verso_inicial: 1,
                verso_final: 33,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [5, 15, 19, 22, 23, 24, 26, 31]
            },
            {
                ordem: 2,
                livro: "2 co",
                capitulo: 6,
                verso_inicial: 1,
                verso_final: 18,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [16, 17, 18]
            }
        ]
    },
    {
        dia: 8,
        mes: 3,
        leitura_familia: [
            {
                ordem: 1,
                livro: "êx",
                capitulo: 19,
                verso_inicial: 1,
                verso_final: 25,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [4]
            },
            {
                ordem: 2,
                livro: "lc",
                capitulo: 22,
                verso_inicial: 1,
                verso_final: 71,
                versos_vermelhos: [8, 10, 11, 12, 15, 16, 17, 18, 19, 20, 21, 22, 25, 26, 27, 28, 29, 30, 31, 32, 34, 35, 36, 37, 38, 40, 42, 46, 48, 51, 52, 53, 61, 67, 68, 69, 70],
                versos_verdes: [41, 43, 44],
                versos_azuis: []
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "jó",
                capitulo: 37,
                verso_inicial: 1,
                verso_final: 24,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [5, 13, 14, 23, 24]
            },
            {
                ordem: 2,
                livro: "2 co",
                capitulo: 7,
                verso_inicial: 1,
                verso_final: 16,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [6, 10]
            }
        ]
    },
    {
        dia: 9,
        mes: 3,
        leitura_familia: [
            {
                ordem: 1,
                livro: "êx",
                capitulo: 20,
                verso_inicial: 1,
                verso_final: 26,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "lc",
                capitulo: 23,
                verso_inicial: 1,
                verso_final: 56,
                versos_vermelhos: [28, 29, 30, 31, 34, 43, 46],
                versos_verdes: [47],
                versos_azuis: [45]
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "jó",
                capitulo: 38,
                verso_inicial: 1,
                verso_final: 41,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "2 co",
                capitulo: 8,
                verso_inicial: 1,
                verso_final: 24,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [9, 14]
            }
        ]
    },
    {
        dia: 10,
        mes: 3,
        leitura_familia: [
            {
                ordem: 1,
                livro: "êx",
                capitulo: 21,
                verso_inicial: 1,
                verso_final: 36,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "lc",
                capitulo: 24,
                verso_inicial: 1,
                verso_final: 53,
                versos_vermelhos: [7, 17, 19, 25, 26, 36, 38, 39, 41, 44, 46, 47, 48, 49],
                versos_verdes: [52, 53],
                versos_azuis: [5, 32, 34]
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "jó",
                capitulo: 39,
                verso_inicial: 1,
                verso_final: 30,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "2 co",
                capitulo: 9,
                verso_inicial: 1,
                verso_final: 15,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [6, 7, 8, 9, 10, 11, 12]
            }
        ]
    },
    {
        dia: 11,
        mes: 3,
        leitura_familia: [
            {
                ordem: 1,
                livro: "ex",
                capitulo: 22,
                verso_inicial: 1,
                verso_final: 31,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [28]
            },
            {
                ordem: 2,
                livro: "jo",
                capitulo: 1,
                verso_inicial: 1,
                verso_final: 51,
                versos_vermelhos: [38, 39, 42, 43, 47, 48, 50, 51],
                versos_verdes: [36, 49],
                versos_azuis: [12, 13, 16, 29, 41]
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "jó",
                capitulo: 40,
                verso_inicial: 1,
                verso_final: 24,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [2, 4]
            },
            {
                ordem: 2,
                livro: "2 co",
                capitulo: 10,
                verso_inicial: 1,
                verso_final: 18,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [4, 17, 18]
            }
        ]
    },
    {
        dia: 12,
        mes: 3,
        leitura_familia: [
            {
                ordem: 1,
                livro: "êx",
                capitulo: 23,
                verso_inicial: 1,
                verso_final: 33,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [8, 25]
            },
            {
                ordem: 2,
                livro: "jo",
                capitulo: 2,
                verso_inicial: 1,
                verso_final: 25,
                versos_vermelhos: [4, 7, 8, 16, 19],
                versos_verdes: [],
                versos_azuis: []
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "jó",
                capitulo: 41,
                verso_inicial: 1,
                verso_final: 34,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [10, 11]
            },
            {
                ordem: 2,
                livro: "2 co",
                capitulo: 11,
                verso_inicial: 1,
                verso_final: 33,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [2]
            }
        ]
    },
    {
        dia: 13,
        mes: 3,
        leitura_familia: [
            {
                ordem: 1,
                livro: "êx",
                capitulo: 24,
                verso_inicial: 1,
                verso_final: 18,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "jo",
                capitulo: 3,
                verso_inicial: 1,
                verso_final: 36,
                versos_vermelhos: [3, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
                versos_verdes: [],
                versos_azuis: [30, 36]
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "jó",
                capitulo: 42,
                verso_inicial: 1,
                verso_final: 17,
                versos_vermelhos: [],
                versos_verdes: [7, 8, 9, 10],
                versos_azuis: [2, 3, 4, 5, 6, 12]
            },
            {
                ordem: 2,
                livro: "2 co",
                capitulo: 12,
                verso_inicial: 1,
                verso_final: 21,
                versos_vermelhos: [9],
                versos_verdes: [7, 8],
                versos_azuis: [9, 10]
            }
        ]
    },
    {
        dia: 14,
        mes: 3,
        leitura_familia: [
            {
                ordem: 1,
                livro: "êx",
                capitulo: 25,
                verso_inicial: 1,
                verso_final: 40,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [8]
            },
            {
                ordem: 2,
                livro: "jo",
                capitulo: 4,
                verso_inicial: 1,
                verso_final: 54,
                versos_vermelhos: [10, 13, 14, 16, 17, 18, 21, 22, 23, 24, 32, 34, 45, 36, 37, 38, 48, 50, 53],
                versos_verdes: [15, 42, 49],
                versos_azuis: []
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "pv",
                capitulo: 1,
                verso_inicial: 1,
                verso_final: 33,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [7, 8, 10, 33]
            },
            {
                ordem: 2,
                livro: "2 co",
                capitulo: 13,
                verso_inicial: 1,
                verso_final: 14,
                versos_vermelhos: [],
                versos_verdes: [7],
                versos_azuis: [4, 8, 11, 14]
            }
        ]
    },
    {
        dia: 15,
        mes: 3,
        leitura_familia: [
            {
                ordem: 1,
                livro: "êx",
                capitulo: 26,
                verso_inicial: 1,
                verso_final: 37,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "jo",
                capitulo: 5,
                verso_inicial: 1,
                verso_final: 47,
                versos_vermelhos: [6, 8, 11, 12, 14, 17, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
                versos_verdes: [],
                versos_azuis: []
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "pv",
                capitulo: 2,
                verso_inicial: 1,
                verso_final: 22,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
            },
            {
                ordem: 2,
                livro: "gl",
                capitulo: 1,
                verso_inicial: 1,
                verso_final: 24,
                versos_vermelhos: [],
                versos_verdes: [5, 24],
                versos_azuis: [3, 4]
            }
        ]
    },
    {
        dia: 16,
        mes: 3,
        leitura_familia: [
            {
                ordem: 1,
                livro: "êx",
                capitulo: 27,
                verso_inicial: 1,
                verso_final: 21,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "jo",
                capitulo: 6,
                verso_inicial: 1,
                verso_final: 71,
                versos_vermelhos: [5, 10, 12, 26, 27, 29, 32, 33, 35, 36, 37, 38, 39, 40, 41, 43, 44, 45, 46, 47, 48, 49, 50, 51, 53, 54, 55, 56, 57, 58, 61, 62, 63, 64, 65, 67, 70],
                versos_verdes: [14, 34],
                versos_azuis: [68, 69]
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "pv",
                capitulo: 3,
                verso_inicial: 1,
                verso_final: 35,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [1, 2, 5, 6, 7, 9, 13, 21, 22, 23, 24, 25, 26, 27, 32, 33, 34]
            },
            {
                ordem: 2,
                livro: "gl",
                capitulo: 2,
                verso_inicial: 1,
                verso_final: 21,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [16, 19, 20]
            }
        ]
    },
    {
        dia: 17,
        mes: 3,
        leitura_familia: [
            {
                ordem: 1,
                livro: "êx",
                capitulo: 28,
                verso_inicial: 1,
                verso_final: 43,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "jo",
                capitulo: 7,
                verso_inicial: 1,
                verso_final: 53,
                versos_vermelhos: [6, 7, 8, 16, 17, 18, 19, 21, 22, 23, 24, 28, 29, 33, 34, 36, 37, 38,],
                versos_verdes: [],
                versos_azuis: [46]
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "pv",
                capitulo: 4,
                verso_inicial: 1,
                verso_final: 27,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
            },
            {
                ordem: 2,
                livro: "gl",
                capitulo: 3,
                verso_inicial: 1,
                verso_final: 29,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [11, 13, 22, 24, 25, 26, 27,]
            }
        ]
    },
    {
        dia: 18,
        mes: 3,
        leitura_familia: [
            {
                ordem: 1,
                livro: "êx",
                capitulo: 29,
                verso_inicial: 1,
                verso_final: 46,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "jo",
                capitulo: 8,
                verso_inicial: 1,
                verso_final: 59,
                versos_vermelhos: [7, 10, 11, 12, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 28, 29, 31, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 49, 50, 51, 54, 55, 56, 58],
                versos_verdes: [],
                versos_azuis: []
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "pv",
                capitulo: 5,
                verso_inicial: 1,
                verso_final: 23,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [3, 4, 7, 8, 18, 21]
            },
            {
                ordem: 2,
                livro: "gl",
                capitulo: 4,
                verso_inicial: 1,
                verso_final: 31,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [6, 7, 31]
            }
        ]
    },
    {
        dia: 19,
        mes: 3,
        leitura_familia: [
            {
                ordem: 1,
                livro: "êx",
                capitulo: 30,
                verso_inicial: 1,
                verso_final: 38,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "jo",
                capitulo: 9,
                verso_inicial: 1,
                verso_final: 41,
                versos_vermelhos: [3, 4, 5, 7, 11, 37, 41],
                versos_verdes: [38],
                versos_azuis: []
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "pv",
                capitulo: 6,
                verso_inicial: 1,
                verso_final: 35,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [20, 21, 22, 23, 24, 32]
            },
            {
                ordem: 2,
                livro: "gl",
                capitulo: 5,
                verso_inicial: 1,
                verso_final: 26,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [1, 13, 16, 24]
            }
        ]
    },
    {
        dia: 20,
        mes: 3,
        leitura_familia: [
            {
                ordem: 1,
                livro: "êx",
                capitulo: 31,
                verso_inicial: 1,
                verso_final: 18,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [13]
            },
            {
                ordem: 2,
                livro: "jo",
                capitulo: 10,
                verso_inicial: 1,
                verso_final: 42,
                versos_vermelhos: [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 17, 18, 25, 26, 27, 28, 29, 30, 34, 35, 36, 37, 38],
                versos_verdes: [41],
                versos_azuis: []
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "pv",
                capitulo: 7,
                verso_inicial: 1,
                verso_final: 27,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [1, 2, 3, 4, 5]
            },
            {
                ordem: 2,
                livro: "gl",
                capitulo: 6,
                verso_inicial: 1,
                verso_final: 18,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [7, 8, 9, 10, 14, 15, 18]
            }
        ]
    },
    {
        dia: 21,
        mes: 3,
        leitura_familia: [
            {
                ordem: 1,
                livro: "êx",
                capitulo: 32,
                verso_inicial: 1,
                verso_final: 35,
                versos_vermelhos: [],
                versos_verdes: [7, 8, 9, 10, 11, 12, 13, 30, 31, 32, 33, 34],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "jo",
                capitulo: 11,
                verso_inicial: 1,
                verso_final: 57,
                versos_vermelhos: [4, 7, 9, 10, 11, 14, 15, 23, 25, 26, 34, 39, 40, 41, 42, 43, 43, 44],
                versos_verdes: [27],
                versos_azuis: [5, 24]
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "pv",
                capitulo: 8,
                verso_inicial: 1,
                verso_final: 36,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "ef",
                capitulo: 1,
                verso_inicial: 1,
                verso_final: 23,
                versos_vermelhos: [],
                versos_verdes: [16, 17, 18, 19, 20, 21, 22],
                versos_azuis: [2, 4, 5, 6, 7, 8, 11, 12, 13, 14]
            }
        ]
    },
    {
        dia: 22,
        mes: 3,
        leitura_familia: [
            {
                ordem: 1,
                livro: "ex",
                capitulo: 33,
                verso_inicial: 1,
                verso_final: 23,
                versos_vermelhos: [],
                versos_verdes: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "jo",
                capitulo: 12,
                verso_inicial: 1,
                verso_final: 50,
                versos_vermelhos: [7, 8, 23, 24, 25, 26, 27, 28, 30, 31, 32, 34, 35, 36, 44, 45, 46, 47, 48, 49, 50],
                versos_verdes: [3, 13],
                versos_azuis: [28]
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "pv",
                capitulo: 9,
                verso_inicial: 1,
                verso_final: 18,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [10]
            },
            {
                ordem: 2,
                livro: "ef",
                capitulo: 12,
                verso_inicial: 1,
                verso_final: 22,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [4, 5, 6, 7, 8, 9, 10, 13, 14, 18, 19, 20, 21, 22]
            }
        ]
    },
    {
        dia: 23,
        mes: 3,
        leitura_familia: [
            {
                ordem: 1,
                livro: "êx",
                capitulo: 34,
                verso_inicial: 1,
                verso_final: 35,
                versos_vermelhos: [],
                versos_verdes: [6, 7],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "jo",
                capitulo: 13,
                verso_inicial: 1,
                verso_final: 38,
                versos_vermelhos: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 26, 27, 31, 32, 33, 34, 35, 36, 38],
                versos_verdes: [],
                versos_azuis: [1]
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "pv",
                capitulo: 10,
                verso_inicial: 1,
                verso_final: 32,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [4, 17, 19, 22, 27]
            },
            {
                ordem: 2,
                livro: "ef",
                capitulo: 3,
                verso_inicial: 1,
                verso_final: 21,
                versos_vermelhos: [],
                versos_verdes: [14, 15, 16, 17, 18, 19, 20, 21],
                versos_azuis: []
            }
        ]
    },
    {
        dia: 24,
        mes: 3,
        leitura_familia: [
            {
                ordem: 1,
                livro: "êx",
                capitulo: 35,
                verso_inicial: 1,
                verso_final: 35,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "jo",
                capitulo: 14,
                verso_inicial: 1,
                verso_final: 31,
                versos_vermelhos: [1, 2, 3, 4, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29, 30, 31],
                versos_verdes: [],
                versos_azuis: []
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "pv",
                capitulo: 11,
                verso_inicial: 1,
                verso_final: 31,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [14, 24, 25]
            },
            {
                ordem: 2,
                livro: "ef",
                capitulo: 4,
                verso_inicial: 1,
                verso_final: 32,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [1, 2, 3, 4, 5, 6, 7, 10, 32]
            }
        ]
    },
    {
        dia: 25,
        mes: 3,
        leitura_familia: [
            {
                ordem: 1,
                livro: "êx",
                capitulo: 36,
                verso_inicial: 1,
                verso_final: 38,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "jo",
                capitulo: 15,
                verso_inicial: 1,
                verso_final: 27,
                versos_vermelhos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                versos_verdes: [],
                versos_azuis: []
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "pv",
                capitulo: 12,
                verso_inicial: 1,
                verso_final: 20,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [9, 22, 27]
            },
            {
                ordem: 2,
                livro: "ef",
                capitulo: 5,
                verso_inicial: 1,
                verso_final: 33,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [8]
            }
        ]
    },
    {
        dia: 26,
        mes: 3,
        leitura_familia: [
            {
                ordem: 1,
                livro: "ex",
                capitulo: 37,
                verso_inicial: 1,
                verso_final: 29,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "jo",
                capitulo: 16,
                verso_inicial: 1,
                verso_final: 33,
                versos_vermelhos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 32, 33],
                versos_verdes: [30],
                versos_azuis: []
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "pv",
                capitulo: 13,
                verso_inicial: 1,
                verso_final: 25,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [1, 4, 5, 20, 24]
            },
            {
                ordem: 2,
                livro: "ef",
                capitulo: 6,
                verso_inicial: 1,
                verso_final: 24,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [10, 11, 23, 24]
            }
        ]
    },
    {
        dia: 27,
        mes: 3,
        leitura_familia: [
            {
                ordem: 1,
                livro: "êx",
                capitulo: 38,
                verso_inicial: 1,
                verso_final: 35,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [1, 2, 16, 27, 30]
            },
            {
                ordem: 2,
                livro: "jo",
                capitulo: 17,
                verso_inicial: 1,
                verso_final: 26,
                versos_vermelhos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                versos_verdes: [],
                versos_azuis: []
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "pv",
                capitulo: 14,
                verso_inicial: 1,
                verso_final: 35,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [1, 2, 16, 27, 30]
            },
            {
                ordem: 2,
                livro: "fp",
                capitulo: 1,
                verso_inicial: 1,
                verso_final: 30,
                versos_vermelhos: [],
                versos_verdes: [3, 4, 5, 9, 10, 11, 19, 20],
                versos_azuis: [2, 21, 29]
            }
        ]
    },
    {
        dia: 28,
        mes: 3,
        leitura_familia: [
            {
                ordem: 1,
                livro: "êx",
                capitulo: 39,
                verso_inicial: 1,
                verso_final: 43,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "jo",
                capitulo: 18,
                verso_inicial: 1,
                verso_final: 40,
                versos_vermelhos: [4, 5, 6, 7, 8, 9, 11, 20, 21, 23, 34, 36, 37],
                versos_verdes: [],
                versos_azuis: []
            }
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "pv",
                capitulo: 15,
                verso_inicial: 1,
                verso_final: 33,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [1, 11, 16, 29, 33]
            },
            {
                ordem: 2,
                livro: "fp",
                capitulo: 2,
                verso_inicial: 1,
                verso_final: 30,
                versos_vermelhos: [],
                versos_verdes: [5, 6, 7, 8, 9, 10, 11],
                versos_azuis: []
            }
        ]
    },
    {
        dia: 29,
        mes: 3,
        leitura_familia: [
            {
                ordem: 1,
                livro: "êx",
                capitulo: 40,
                verso_inicial: 1,
                verso_final: 38,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [38]
            },
            {
                ordem: 2,
                livro: "jo",
                capitulo: 19,
                verso_inicial: 1,
                verso_final: 42,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "pv",
                capitulo: 16,
                verso_inicial: 1,
                verso_final: 33,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [2, 3, 4, 5, 6, 7, 8, 9, 18, 19, 20, 25]
            },
            {
                ordem: 2,
                livro: "fp",
                capitulo: 3,
                verso_inicial: 1,
                verso_final: 21,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [7, 8, 9,]
            }
        ]
    },
    {
        dia: 30,
        mes: 3,
        leitura_familia: [
            {
                ordem: 1,
                livro: "lv",
                capitulo: 1,
                verso_inicial: 1,
                verso_final: 17,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "jo",
                capitulo: 20,
                verso_inicial: 1,
                verso_final: 31,
                versos_vermelhos: [13, 15, 16, 17, 1921, 22, 23, 26, 27, 29],
                versos_verdes: [30],
                versos_azuis: []
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "pv",
                capitulo: 17,
                verso_inicial: 1,
                verso_final: 28,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [3, 22]
            },
            {
                ordem: 2,
                livro: "fp",
                capitulo: 4,
                verso_inicial: 1,
                verso_final: 23,
                versos_vermelhos: [],
                versos_verdes: [6, 7, 20],
                versos_azuis: [8, 9, 11, 12, 13, 19, 23]
            }
        ]
    },
    {
        dia: 31,
        mes: 3,
        leitura_familia: [
            {
                ordem: 1,
                livro: "lv",
                capitulo: 2,
                verso_inicial: 1,
                verso_final: 16,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "lv",
                capitulo: 3,
                verso_inicial: 1,
                verso_final: 17,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "jo",
                capitulo: 21,
                verso_inicial: 1,
                verso_final: 25,
                versos_vermelhos: [10, 12, 15, 16, 17, 18, 19, 22],
                versos_verdes: [],
                versos_azuis: [25]
            }
        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "pv",
                capitulo: 18,
                verso_inicial: 1,
                verso_final: 24,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [10, 12, 22]
            },
            {
                ordem: 2,
                livro: "cl",
                capitulo: 1,
                verso_inicial: 1,
                verso_final: 29,
                versos_vermelhos: [],
                versos_verdes: [3, 9, 10, 11, 12, 13],
                versos_azuis: [26, 27]
            }
        ]
    }
]

const abril = [
    {
        dia: 1,      // Dia da leitura
        mes: 4,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,
                livro: "lv",
                capitulo: 4,
                verso_inicial: 1,
                verso_final: 35,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "sl",
                capitulo: 1,
                verso_inicial: 1,
                verso_final: 6,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [1, 2, 3, 4, 5, 6]
            },

            {
                ordem: 3,
                livro: "sl",
                capitulo: 2,
                verso_inicial: 1,
                verso_final: 12,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [11, 12]
            },




        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "pv",
                capitulo: 19,
                verso_inicial: 1,
                verso_final: 29,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [14, 17, 21, 23, 26, 27]
            },
            {
                ordem: 2,
                livro: "co",
                capitulo: 2,
                verso_inicial: 1,
                verso_final: 23,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [1, 6, 7, 13, 14, 15]
            }
        ]
    },

    {
        dia: 2,      // Dia da leitura
        mes: 4,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,
                livro: "lv",
                capitulo: 5,
                verso_inicial: 1,
                verso_final: 19,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "sl",
                capitulo: 3,
                verso_inicial: 1,
                verso_final: 8,
                versos_vermelhos: [],
                versos_verdes: [1, 2, 3, 4, 7],
                versos_azuis: [5, 6, 8]
            },

            {
                ordem: 3,
                livro: "sl",
                capitulo: 4,
                verso_inicial: 1,
                verso_final: 8,
                versos_vermelhos: [],
                versos_verdes: [1],
                versos_azuis: [3, 5, 7, 8]
            },




        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "pv",
                capitulo: 20,
                verso_inicial: 1,
                verso_final: 30,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [10, 22, 23, 24]
            },
            {
                ordem: 2,
                livro: "co",
                capitulo: 3,
                verso_inicial: 1,
                verso_final: 25,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [1, 12, 13, 14, 15, 23]
            }
        ]
    },

    {
        dia: 3,      // Dia da leitura
        mes: 4,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,
                livro: "lv",
                capitulo: 6,
                verso_inicial: 1,
                verso_final: 30,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "sl",
                capitulo: 5,
                verso_inicial: 1,
                verso_final: 12,
                versos_vermelhos: [],
                versos_verdes: [1, 2, 3, 6],
                versos_azuis: [11, 12]
            },

            {
                ordem: 3,
                livro: "sl",
                capitulo: 6,
                verso_inicial: 1,
                verso_final: 10,
                versos_vermelhos: [],
                versos_verdes: [1, 2, 3, 4, 5, 6, 7],
                versos_azuis: [9]
            },




        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "pv",
                capitulo: 21,
                verso_inicial: 1,
                verso_final: 31,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [2, 3, 4, 21, 23, 30, 31]
            },
            {
                ordem: 2,
                livro: "co",
                capitulo: 4,
                verso_inicial: 1,
                verso_final: 18,
                versos_vermelhos: [],
                versos_verdes: [2, 3, 4, 12],
                versos_azuis: [18]
            }
        ]
    },

    {
        dia: 4,      // Dia da leitura
        mes: 4,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,
                livro: "lv",
                capitulo: 7,
                verso_inicial: 1,
                verso_final: 38,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "sl",
                capitulo: 7,
                verso_inicial: 1,
                verso_final: 17,
                versos_vermelhos: [],
                versos_verdes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 17],
                versos_azuis: [10]
            },

            {
                ordem: 3,
                livro: "sl",
                capitulo: 8,
                verso_inicial: 1,
                verso_final: 9,
                versos_vermelhos: [],
                versos_verdes: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                versos_azuis: []
            },




        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "pv",
                capitulo: 22,
                verso_inicial: 1,
                verso_final: 29,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [1, 4, 6, 17, 18, 19]
            },
            {
                ordem: 2,
                livro: "1ts",
                capitulo: 1,
                verso_inicial: 1,
                verso_final: 10,
                versos_vermelhos: [],
                versos_verdes: [2, 3],
                versos_azuis: []
            }
        ]
    },

    {
        dia: 5,      // Dia da leitura
        mes: 4,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,
                livro: "lv",
                capitulo: 8,
                verso_inicial: 1,
                verso_final: 36,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "sl",
                capitulo: 9,
                verso_inicial: 1,
                verso_final: 20,
                versos_vermelhos: [],
                versos_verdes: [1, 2, 3, 4, 5, 11, 13, 14, 19, 20],
                versos_azuis: [7, 8, 9, 10, 12]
            },




        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "pv",
                capitulo: 23,
                verso_inicial: 1,
                verso_final: 35,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [5, 12, 13, 14, 15, 17, 22, 23]
            },
            {
                ordem: 2,
                livro: "1ts",
                capitulo: 2,
                verso_inicial: 1,
                verso_final: 20,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            }
        ]
    },

    {
        dia: 6,      // Dia da leitura
        mes: 4,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,
                livro: "lv",
                capitulo: 9,
                verso_inicial: 1,
                verso_final: 24,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "sl",
                capitulo: 10,
                verso_inicial: 1,
                verso_final: 18,
                versos_vermelhos: [],
                versos_verdes: [1, 12],
                versos_azuis: [17]
            },




        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "pv",
                capitulo: 24,
                verso_inicial: 1,
                verso_final: 34,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [16]
            },
            {
                ordem: 2,
                livro: "1ts",
                capitulo: 3,
                verso_inicial: 1,
                verso_final: 13,
                versos_vermelhos: [],
                versos_verdes: [9, 10, 11, 12, 13],
                versos_azuis: [7, 8]
            }
        ]
    },

    {
        dia: 7,
        mes: 4,
        leitura_familia: [
            {
                ordem: 1,
                livro: "lv",
                capitulo: 10,
                verso_inicial: 1,
                verso_final: 20,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [3]
            },
            {
                ordem: 2,
                livro: "sl",
                capitulo: 11,
                verso_inicial: 1,
                verso_final: 7,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [5, 7]
            },
            {
                ordem: 3,
                livro: "sl",
                capitulo: 12,
                verso_inicial: 1,
                verso_final: 8,
                versos_vermelhos: [],
                versos_verdes: [1],
                versos_azuis: [6, 7]
            },




        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "pv",
                capitulo: 25,
                verso_inicial: 1,
                verso_final: 28,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "1ts",
                capitulo: 4,
                verso_inicial: 1,
                verso_final: 18,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [1, 18]
            }
        ]
    },

    {
        dia: 8,
        mes: 4,
        leitura_familia: [
            {
                ordem: 1,
                livro: "lv",
                capitulo: 11,
                verso_inicial: 1,
                verso_final: 47,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [45]
            },
            {
                ordem: 2,
                livro: "lv",
                capitulo: 12,
                verso_inicial: 1,
                verso_final: 8,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 3,
                livro: "sl",
                capitulo: 13,
                verso_inicial: 1,
                verso_final: 6,
                versos_vermelhos: [],
                versos_verdes: [1, 2, 3, 4, 5, 6],
                versos_azuis: []
            },

            {
                ordem: 4,
                livro: "sl",
                capitulo: 14,
                verso_inicial: 1,
                verso_final: 7,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },




        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "pv",
                capitulo: 26,
                verso_inicial: 1,
                verso_final: 28,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "1ts",
                capitulo: 5,
                verso_inicial: 1,
                verso_final: 28,
                versos_vermelhos: [],
                versos_verdes: [17, 25],
                versos_azuis: [4, 5, 6, 7, 8, 9, 10, 11, 16, 23, 28]
            }
        ]
    },

    {
        dia: 9,
        mes: 4,
        leitura_familia: [
            {
                ordem: 1,
                livro: "lv",
                capitulo: 13,
                verso_inicial: 1,
                verso_final: 59,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },

            {
                ordem: 2,
                livro: "sl",
                capitulo: 15,
                verso_inicial: 1,
                verso_final: 5,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },

            {
                ordem: 3,
                livro: "sl",
                capitulo: 16,
                verso_inicial: 1,
                verso_final: 11,
                versos_vermelhos: [],
                versos_verdes: [1],
                versos_azuis: [5, 6, 7, 8, 9, 11]
            },




        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "pv",
                capitulo: 27,
                verso_inicial: 1,
                verso_final: 27,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [5, 6, 21]
            },
            {
                ordem: 2,
                livro: "2ts",
                capitulo: 1,
                verso_inicial: 1,
                verso_final: 12,
                versos_vermelhos: [],
                versos_verdes: [11, 12],
                versos_azuis: []
            }
        ]
    },

    {
        dia: 10,
        mes: 4,
        leitura_familia: [
            {
                ordem: 1,
                livro: "lv",
                capitulo: 14,
                verso_inicial: 1,
                verso_final: 57,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },

            {
                ordem: 2,
                livro: "sl",
                capitulo: 17,
                verso_inicial: 1,
                verso_final: 15,
                versos_vermelhos: [],
                versos_verdes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                versos_azuis: []
            },


        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "pv",
                capitulo: 28,
                verso_inicial: 1,
                verso_final: 28,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [5, 13, 14, 20, 21, 25, 26]
            },
            {
                ordem: 2,
                livro: "2ts",
                capitulo: 2,
                verso_inicial: 1,
                verso_final: 17,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [16, 17]
            }
        ]
    },

    {
        dia: 11,
        mes: 4,
        leitura_familia: [
            {
                ordem: 1,
                livro: "lv",
                capitulo: 15,
                verso_inicial: 1,
                verso_final: 33,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },

            {
                ordem: 2,
                livro: "sl",
                capitulo: 18,
                verso_inicial: 1,
                verso_final: 50,
                versos_vermelhos: [],
                versos_verdes: [2, 46, 49, 50],
                versos_azuis: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 25, 26, 27, 28, 29, 30, 31, 32, 33]
            },



        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "pv",
                capitulo: 29,
                verso_inicial: 1,
                verso_final: 27,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [5, 15, 23, 25]
            },
            {
                ordem: 2,
                livro: "2ts",
                capitulo: 3,
                verso_inicial: 1,
                verso_final: 18,
                versos_vermelhos: [],
                versos_verdes: [1, 2],
                versos_azuis: [3, 13, 16, 18]
            }
        ]
    },

    {
        dia: 12,
        mes: 4,
        leitura_familia: [
            {
                ordem: 1,
                livro: "lv",
                capitulo: 16,
                verso_inicial: 1,
                verso_final: 34,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },

            {
                ordem: 2,
                livro: "sl",
                capitulo: 19,
                verso_inicial: 1,
                verso_final: 14,
                versos_vermelhos: [],
                versos_verdes: [1],
                versos_azuis: [7, 8, 9, 10, 11, 12, 13, 14]
            },

        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "pv",
                capitulo: 30,
                verso_inicial: 1,
                verso_final: 33,
                versos_vermelhos: [],
                versos_verdes: [7, 8, 9],
                versos_azuis: [5]
            },
            {
                ordem: 2,
                livro: "1tm",
                capitulo: 1,
                verso_inicial: 1,
                verso_final: 20,
                versos_vermelhos: [],
                versos_verdes: [17],
                versos_azuis: [1, 2, 12, 14, 15]
            }
        ]
    },
    {
        dia: 13,
        mes: 4,
        leitura_familia: [
            {
                ordem: 1,
                livro: "lv",
                capitulo: 17,
                verso_inicial: 1,
                verso_final: 16,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },

            {
                ordem: 2,
                livro: "sl",
                capitulo: 20,
                verso_inicial: 1,
                verso_final: 9,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [5, 6,]
            },

            {
                ordem: 3,
                livro: "sl",
                capitulo: 21,
                verso_inicial: 1,
                verso_final: 13,
                versos_vermelhos: [],
                versos_verdes: [1, 2, 3, 4, 5, 6],
                versos_azuis: []
            },

        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "pv",
                capitulo: 31,
                verso_inicial: 1,
                verso_final: 31,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
            },
            {
                ordem: 2,
                livro: "1tm",
                capitulo: 2,
                verso_inicial: 1,
                verso_final: 15,
                versos_vermelhos: [],
                versos_verdes: [1, 2, 3, 4, 8],
                versos_azuis: []
            }
        ]
    },

    {
        dia: 14,
        mes: 4,
        leitura_familia: [
            {
                ordem: 1,
                livro: "lv",
                capitulo: 18,
                verso_inicial: 1,
                verso_final: 30,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },

            {
                ordem: 2,
                livro: "sl",
                capitulo: 22,
                verso_inicial: 1,
                verso_final: 31,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },





        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "ec",
                capitulo: 1,
                verso_inicial: 1,
                verso_final: 18,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "1tm",
                capitulo: 3,
                verso_inicial: 1,
                verso_final: 16,
                versos_vermelhos: [],
                versos_verdes: [16],
                versos_azuis: [5, 15]
            }
        ]
    },



    {
        dia: 15,
        mes: 4,
        leitura_familia: [
            {
                ordem: 1,
                livro: "lv",
                capitulo: 19,
                verso_inicial: 1,
                verso_final: 37,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [25, 36]
            },

            {
                ordem: 2,
                livro: "sl",
                capitulo: 23,
                verso_inicial: 1,
                verso_final: 6,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [1, 2, 3, 4, 5, 6]
            },


            {
                ordem: 3,
                livro: "sl",
                capitulo: 24,
                verso_inicial: 1,
                verso_final: 10,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },



        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "ec",
                capitulo: 2,
                verso_inicial: 1,
                verso_final: 26,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [13]
            },
            {
                ordem: 2,
                livro: "1tm",
                capitulo: 4,
                verso_inicial: 1,
                verso_final: 16,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [12, 15]
            }
        ]
    },


    {
        dia: 16,
        mes: 4,
        leitura_familia: [
            {
                ordem: 1,
                livro: "lv",
                capitulo: 20,
                verso_inicial: 1,
                verso_final: 27,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [7, 8, 24, 26]
            },

            {
                ordem: 2,
                livro: "sl",
                capitulo: 25,
                verso_inicial: 1,
                verso_final: 22,
                versos_vermelhos: [],
                versos_verdes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
                versos_azuis: []
            },




        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "ec",
                capitulo: 32,
                verso_inicial: 1,
                verso_final: 22,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [1, 2, 3, 4, 5, 6, 7, 8, 11, 14, 17, 18]
            },
            {
                ordem: 2,
                livro: "1tm",
                capitulo: 5,
                verso_inicial: 1,
                verso_final: 25,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [8]
            }
        ]
    },


    {
        dia: 17,
        mes: 4,
        leitura_familia: [
            {
                ordem: 1,
                livro: "lv",
                capitulo: 21,
                verso_inicial: 1,
                verso_final: 24,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [8]
            },

            {
                ordem: 2,
                livro: "sl",
                capitulo: 26,
                verso_inicial: 1,
                verso_final: 12,
                versos_vermelhos: [],
                versos_verdes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12],
                versos_azuis: []
            },


            {
                ordem: 3,
                livro: "sl",
                capitulo: 27,
                verso_inicial: 1,
                verso_final: 14,
                versos_vermelhos: [],
                versos_verdes: [6, 7, 8, 9, 10, 11, 12],
                versos_azuis: [1, 3, 4, 5, 13, 14]
            },



        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "ec",
                capitulo: 4,
                verso_inicial: 1,
                verso_final: 16,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [6, 9, 10, 11, 12, 13]
            },
            {
                ordem: 2,
                livro: "1tm",
                capitulo: 6,
                verso_inicial: 1,
                verso_final: 21,
                versos_vermelhos: [],
                versos_verdes: [15, 16],
                versos_azuis: [6, 7, 11, 14, 17, 21]
            }
        ]
    },



    {
        dia: 18,
        mes: 4,
        leitura_familia: [
            {
                ordem: 1,
                livro: "lv",
                capitulo: 22,
                verso_inicial: 1,
                verso_final: 33,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },

            {
                ordem: 2,
                livro: "sl",
                capitulo: 28,
                verso_inicial: 1,
                verso_final: 9,
                versos_vermelhos: [],
                versos_verdes: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                versos_azuis: []
            },


            {
                ordem: 3,
                livro: "sl",
                capitulo: 29,
                verso_inicial: 1,
                verso_final: 11,
                versos_vermelhos: [],
                versos_verdes: [1, 2],
                versos_azuis: [10, 11]
            },



        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "ec",
                capitulo: 5,
                verso_inicial: 1,
                verso_final: 20,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [2, 7, 10]
            },
            {
                ordem: 2,
                livro: "2tm",
                capitulo: 1,
                verso_inicial: 1,
                verso_final: 18,
                versos_vermelhos: [],
                versos_verdes: [3, 4],
                versos_azuis: [7, 12]
            }
        ]
    },


    {
        dia: 19,
        mes: 4,
        leitura_familia: [
            {
                ordem: 1,
                livro: "lv",
                capitulo: 23,
                verso_inicial: 1,
                verso_final: 44,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },

            {
                ordem: 2,
                livro: "sl",
                capitulo: 30,
                verso_inicial: 1,
                verso_final: 12,
                versos_vermelhos: [],
                versos_verdes: [1, 2, 3, 4, 8, 9, 10, 11, 12],
                versos_azuis: [5, 6, 7]
            },




        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "ec",
                capitulo: 6,
                verso_inicial: 1,
                verso_final: 12,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "2tm",
                capitulo: 2,
                verso_inicial: 1,
                verso_final: 26,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [1, 3, 4, 5, 11, 12, 13, 15, 19, 24, 25, 26]
            }
        ]
    },


    {
        dia: 20,
        mes: 4,
        leitura_familia: [
            {
                ordem: 1,
                livro: "lv",
                capitulo: 24,
                verso_inicial: 1,
                verso_final: 23,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },

            {
                ordem: 2,
                livro: "sl",
                capitulo: 31,
                verso_inicial: 1,
                verso_final: 24,
                versos_vermelhos: [],
                versos_verdes: [1, 2, 3, 4, 5, 6, 7, , 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
                versos_azuis: [24]
            },




        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "ec",
                capitulo: 7,
                verso_inicial: 1,
                verso_final: 29,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [5, 8, 13, 14, 19, 25, 29]
            },
            {
                ordem: 2,
                livro: "2tm",
                capitulo: 3,
                verso_inicial: 1,
                verso_final: 17,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [11, 12, 16, 17]
            }
        ]
    },




    {
        dia: 21,
        mes: 4,
        leitura_familia: [
            {
                ordem: 1,
                livro: "lv",
                capitulo: 25,
                verso_inicial: 1,
                verso_final: 55,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [17, 38]
            },

            {
                ordem: 2,
                livro: "sl",
                capitulo: 32,
                verso_inicial: 1,
                verso_final: 12,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [1, 2, 5, 6, 7, 10, 11]
            },




        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "ec",
                capitulo: 8,
                verso_inicial: 1,
                verso_final: 17,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [12]
            },
            {
                ordem: 2,
                livro: "2tm",
                capitulo: 4,
                verso_inicial: 1,
                verso_final: 22,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [2, 8, 17, 18, 22]
            }
        ]
    },

    {
        dia: 22,
        mes: 4,
        leitura_familia: [
            {
                ordem: 1,
                livro: "lv",
                capitulo: 26,
                verso_inicial: 1,
                verso_final: 46,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },

            {
                ordem: 2,
                livro: "sl",
                capitulo: 33,
                verso_inicial: 1,
                verso_final: 22,
                versos_vermelhos: [],
                versos_verdes: [1, 2, 3, 4, 5],
                versos_azuis: [9, 11, 18, 19, 20, 21, 22]
            },




        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "ec",
                capitulo: 9,
                verso_inicial: 1,
                verso_final: 18,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [4, 8, 10, 11]
            },
            {
                ordem: 2,
                livro: "tt",
                capitulo: 1,
                verso_inicial: 1,
                verso_final: 16,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [4]
            }
        ]
    },




    {
        dia: 23,
        mes: 4,
        leitura_familia: [
            {
                ordem: 1,
                livro: "lv",
                capitulo: 27,
                verso_inicial: 1,
                verso_final: 34,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },

            {
                ordem: 2,
                livro: "sl",
                capitulo: 34,
                verso_inicial: 1,
                verso_final: 22,
                versos_vermelhos: [],
                versos_verdes: [1, 2, 3],
                versos_azuis: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
            },




        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "ec",
                capitulo: 10,
                verso_inicial: 1,
                verso_final: 20,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "tt",
                capitulo: 2,
                verso_inicial: 1,
                verso_final: 15,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [1, 7, 11, 14]
            }
        ]
    },





    {
        dia: 24,
        mes: 4,
        leitura_familia: [
            {
                ordem: 1,
                livro: "nm",
                capitulo: 1,
                verso_inicial: 1,
                verso_final: 54,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },

            {
                ordem: 2,
                livro: "sl",
                capitulo: 35,
                verso_inicial: 1,
                verso_final: 28,
                versos_vermelhos: [],
                versos_verdes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
                versos_azuis: []
            },




        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "ec",
                capitulo: 11,
                verso_inicial: 1,
                verso_final: 10,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [5, 9, 10]
            },
            {
                ordem: 2,
                livro: "tt",
                capitulo: 3,
                verso_inicial: 1,
                verso_final: 15,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [4, 5, 6, 7, 15]
            }
        ]
    },


    {
        dia: 25,
        mes: 4,
        leitura_familia: [
            {
                ordem: 1,
                livro: "nm",
                capitulo: 2,
                verso_inicial: 1,
                verso_final: 34,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [34]
            },

            {
                ordem: 2,
                livro: "sl",
                capitulo: 36,
                verso_inicial: 1,
                verso_final: 12,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [5, 6, 7, 8, 9, 10]
            },




        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "ec",
                capitulo: 12,
                verso_inicial: 1,
                verso_final: 14,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [1, 13]
            },
            {
                ordem: 2,
                livro: "fm",
                capitulo: 1,
                verso_inicial: 1,
                verso_final: 25,
                versos_vermelhos: [],
                versos_verdes: [4, 5, 6, 22],
                versos_azuis: [3, 25]
            }
        ]
    },


    {
        dia: 26,
        mes: 4,
        leitura_familia: [
            {
                ordem: 1,
                livro: "nm",
                capitulo: 3,
                verso_inicial: 1,
                verso_final: 51,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },

            {
                ordem: 2,
                livro: "sl",
                capitulo: 37,
                verso_inicial: 1,
                verso_final: 40,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [3, 4, 5, 6, 7, 8, 9, 11, 17, 18, 19, 23, 24, 25, 26, 27, 28, 29, 30, 31, 33, 34, 37, 39, 40]
            },




        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "ct",
                capitulo: 1,
                verso_inicial: 1,
                verso_final: 17,
                versos_vermelhos: [],
                versos_verdes: [3, 16],
                versos_azuis: [15]
            },
            {
                ordem: 2,
                livro: "hb",
                capitulo: 1,
                verso_inicial: 1,
                verso_final: 14,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            }
        ]
    },




    {
        dia: 27,
        mes: 4,
        leitura_familia: [
            {
                ordem: 1,
                livro: "nm",
                capitulo: 4,
                verso_inicial: 1,
                verso_final: 49,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },

            {
                ordem: 2,
                livro: "sl",
                capitulo: 38,
                verso_inicial: 1,
                verso_final: 22,
                versos_vermelhos: [],
                versos_verdes: [1, 2, 3, 4, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
                versos_azuis: []
            },




        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "ct",
                capitulo: 2,
                verso_inicial: 1,
                verso_final: 17,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [10, 14, 16]
            },
            {
                ordem: 2,
                livro: "hb",
                capitulo: 2,
                verso_inicial: 1,
                verso_final: 18,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [1, 9, 10, 11, 14, 15, 17, 18]
            }
        ]
    },




    {
        dia: 28,
        mes: 4,
        leitura_familia: [
            {
                ordem: 1,
                livro: "nm",
                capitulo: 5,
                verso_inicial: 1,
                verso_final: 31,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },

            {
                ordem: 2,
                livro: "sl",
                capitulo: 39,
                verso_inicial: 1,
                verso_final: 13,
                versos_vermelhos: [],
                versos_verdes: [4, 8, 9, 10, 11, 12, 13],
                versos_azuis: []
            },




        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "ct",
                capitulo: 3,
                verso_inicial: 1,
                verso_final: 11,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "hb",
                capitulo: 3,
                verso_inicial: 1,
                verso_final: 19,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [7, 8, 12, 13]
            }
        ]
    },

    {
        dia: 29,
        mes: 4,
        leitura_familia: [
            {
                ordem: 1,
                livro: "nm",
                capitulo: 6,
                verso_inicial: 1,
                verso_final: 27,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [8, 23, 24, 24, 25]
            },

            {
                ordem: 2,
                livro: "sl",
                capitulo: 40,
                verso_inicial: 1,
                verso_final: 17,
                versos_vermelhos: [],
                versos_verdes: [9, 10, 11, 12, 13, 14, 15, 16, 17],
                versos_azuis: [1, 2, 3, 4]
            },


            {
                ordem: 3,
                livro: "sl",
                capitulo: 41,
                verso_inicial: 1,
                verso_final: 13,
                versos_vermelhos: [],
                versos_verdes: [4, 10, 11, 12],
                versos_azuis: [1, 2, 3]
            },





        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "ct",
                capitulo: 4,
                verso_inicial: 1,
                verso_final: 16,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [1, 7, 12]
            },
            {
                ordem: 2,
                livro: "hb",
                capitulo: 4,
                verso_inicial: 1,
                verso_final: 16,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [3, 12, 13, 14, 15, 16]
            }
        ]
    },

    {
        dia: 30,
        mes: 4,
        leitura_familia: [
            {
                ordem: 1,
                livro: "nm",
                capitulo: 7,
                verso_inicial: 1,
                verso_final: 89,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: []
            },

            {
                ordem: 2,
                livro: "sl",
                capitulo: 42,
                verso_inicial: 1,
                verso_final: 11,
                versos_vermelhos: [],
                versos_verdes: [6, 9],
                versos_azuis: [1, 2, 5, 8, 11]
            },


            {
                ordem: 3,
                livro: "sl",
                capitulo: 43,
                verso_inicial: 1,
                verso_final: 5,
                versos_vermelhos: [],
                versos_verdes: [1, 2, 3, 4],
                versos_azuis: [5]
            },





        ],
        leitura_pessoal: [
            {
                ordem: 1,
                livro: "ct",
                capitulo: 5,
                verso_inicial: 1,
                verso_final: 16,
                versos_vermelhos: [],
                versos_verdes: [16],
                versos_azuis: []
            },
            {
                ordem: 2,
                livro: "hb",
                capitulo: 5,
                verso_inicial: 1,
                verso_final: 14,
                versos_vermelhos: [],
                versos_verdes: [],
                versos_azuis: [8, 9]
            }
        ]
    },
]

const maio = [
    // NÃO FIZERAM AINDA 
]

const junho = [
    {
        dia: 1,      // Dia da leitura
        mes: 6,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "dt",            // Abreviação do livro 
                capitulo: 5,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 33,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [29, 32, 33]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",             // Abreviação do livro 
                capitulo: 88,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 18,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 3, 9, 13, 14],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "is",            // Abreviação do livro 
                capitulo: 33,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 24,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [2],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [22]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "ap",                    // Abreviação do livro 
                capitulo: 3,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 22,                // Verso que termina a leitura
                versos_vermelhos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 2,      // Dia da leitura
        mes: 6,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "dt",            // Abreviação do livro 
                capitulo: 6,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 25,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [3, 4, 5, 6, 7, 12, 13, 17, 18,]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",             // Abreviação do livro 
                capitulo: 89,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 52,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 5, 6, 7, 8, 46, 47, 48, 49, 50, 51, 52],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [14, 18]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "is",            // Abreviação do livro 
                capitulo: 34,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 17,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "ap",                    // Abreviação do livro 
                capitulo: 4,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 11,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [8, 9, 10, 11],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 3,      // Dia da leitura
        mes: 6,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "dt",            // Abreviação do livro 
                capitulo: 7,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 26,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 21]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",             // Abreviação do livro 
                capitulo: 90,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 17,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [12, 14, 15, 16, 17]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "is",            // Abreviação do livro 
                capitulo: 35,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 10,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [10],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [3, 4]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "ap",                    // Abreviação do livro 
                capitulo: 5,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 14,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [9, 10, 11, 12, 13, 14],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 4,      // Dia da leitura
        mes: 6,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "dt",            // Abreviação do livro 
                capitulo: 8,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 20,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",             // Abreviação do livro 
                capitulo: 91,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 16,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "is",            // Abreviação do livro 
                capitulo: 36,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 22,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "ap",                    // Abreviação do livro 
                capitulo: 6,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 17,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 5,      // Dia da leitura
        mes: 6,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "dt",            // Abreviação do livro 
                capitulo: 9,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 29,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [25, 26, 27, 28, 29],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [3, 4, 5, 6]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",             // Abreviação do livro 
                capitulo: 92,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 15,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 3, 4, 5, 6, 8],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [12, 13, 14, 15]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "sl",             // Abreviação do livro 
                capitulo: 93,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 5,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 3, 4, 5],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "is",            // Abreviação do livro 
                capitulo: 37,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 38,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [15, 16, 17, 18, 19, 20],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "ap",                    // Abreviação do livro 
                capitulo: 7,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 17,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [9, 10, 11, 12],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [15, 16, 17]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 6,      // Dia da leitura
        mes: 6,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "dt",            // Abreviação do livro 
                capitulo: 10,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 22,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",             // Abreviação do livro 
                capitulo: 94,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 23,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [11, 12, 13, 14, 17, 18, 19, 22]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "is",            // Abreviação do livro 
                capitulo: 38,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 22,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [2, 3, 14, 15, 16, 18, 19, 20],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [17]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "ap",                    // Abreviação do livro 
                capitulo: 8,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 13,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [3, 4, 5],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 7,      // Dia da leitura
        mes: 6,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "dt",            // Abreviação do livro 
                capitulo: 11,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 32,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [7, 8, 9, 10, 11, 12]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",             // Abreviação do livro 
                capitulo: 95,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 11,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 3, 4, 5, 6],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "sl",             // Abreviação do livro 
                capitulo: 96,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 13,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "is",            // Abreviação do livro 
                capitulo: 39,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 8,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "ap",                    // Abreviação do livro 
                capitulo: 9,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 21,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 8,      // Dia da leitura
        mes: 6,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "dt",            // Abreviação do livro 
                capitulo: 12,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 32,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [28]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",             // Abreviação do livro 
                capitulo: 97,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 12,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 9],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [2, 10, 11, 12]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "sl",             // Abreviação do livro 
                capitulo: 98,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 9,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 3, 4, 5, 6, 7, 8, 9],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "is",            // Abreviação do livro 
                capitulo: 40,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 31,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [6, 7, 8, 28, 29, 30, 31]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "ap",                    // Abreviação do livro 
                capitulo: 10,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 11,                // Verso que termina a leitura
                versos_vermelhos: [11],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 9,      // Dia da leitura
        mes: 6,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "dt",            // Abreviação do livro 
                capitulo: 13,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 18,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [4]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "dt",             // Abreviação do livro 
                capitulo: 14,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 29,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "sl",             // Abreviação do livro 
                capitulo: 99,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 9,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 3, 4, 5, 9],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [8]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 4,               // Ordem que o livro está na leitura
                livro: "sl",             // Abreviação do livro 
                capitulo: 100,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 5,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 3, 4, 5],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 5,               // Ordem que o livro está na leitura
                livro: "sl",             // Abreviação do livro 
                capitulo: 101,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 8,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [2, 3, 7]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "is",            // Abreviação do livro 
                capitulo: 41,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 29,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [8, 9, 10, 13, 14]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "ap",                    // Abreviação do livro 
                capitulo: 11,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 19,                // Verso que termina a leitura
                versos_vermelhos: [1, 2, 3],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [16, 17, 18],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 10,      // Dia da leitura
        mes: 6,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "dt",            // Abreviação do livro 
                capitulo: 15,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 23,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",             // Abreviação do livro 
                capitulo: 102,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 28,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 25, 26, 27],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [19, 20, 21]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "is",            // Abreviação do livro 
                capitulo: 42,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 25,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [10, 11, 12],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [8]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "ap",                    // Abreviação do livro 
                capitulo: 12,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 17,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [10, 11, 12],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 11,      // Dia da leitura
        mes: 6,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "dt",            // Abreviação do livro 
                capitulo: 16,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 22,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [20]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",             // Abreviação do livro 
                capitulo: 103,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 22,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 20, 21, 22],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "is",            // Abreviação do livro 
                capitulo: 43,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 28,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [1, 2, 10, 11, 12, 13, 15, 25]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "ap",                    // Abreviação do livro 
                capitulo: 13,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 18,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    },
    {
        dia: 12,      // Dia da leitura
        mes: 6,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "dt",            // Abreviação do livro 
                capitulo: 17,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 20,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",             // Abreviação do livro 
                capitulo: 104,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 35,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 33],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [24, 31, 34]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "is",            // Abreviação do livro 
                capitulo: 44,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 28,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [23],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [2, 6, 8, 21, 22, 24, 25]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "ap",                    // Abreviação do livro 
                capitulo: 14,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 20,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 3],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [4]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 13,      // Dia da leitura
        mes: 6,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "dt",            // Abreviação do livro 
                capitulo: 18,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 22,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [13]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",             // Abreviação do livro 
                capitulo: 105,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 45,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [3, 4, 14, 15, 19]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "is",            // Abreviação do livro 
                capitulo: 45,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 25,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [15, 17, 18, 19, 21]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "ap",                    // Abreviação do livro 
                capitulo: 15,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 8,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [2, 3, 4],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 14,      // Dia da leitura
        mes: 6,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "dt",            // Abreviação do livro 
                capitulo: 19,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 21,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",             // Abreviação do livro 
                capitulo: 106,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 48,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 4, 23, 47, 48],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [8, 44, 45]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "is",            // Abreviação do livro 
                capitulo: 46,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 13,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [9]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "ap",                    // Abreviação do livro 
                capitulo: 16,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 21,                // Verso que termina a leitura
                versos_vermelhos: [15],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [5, 6, 7],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 15,      // Dia da leitura
        mes: 6,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "dt",            // Abreviação do livro 
                capitulo: 20,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 20,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [4]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",             // Abreviação do livro 
                capitulo: 107,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 43,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 8, 13, 14, 15, 19, 21, 22, 28, 29, 30, 31, 32],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [41, 42, 43]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "is",            // Abreviação do livro 
                capitulo: 47,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 15,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [4]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "ap",                    // Abreviação do livro 
                capitulo: 17,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 18,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [14]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 16,      // Dia da leitura
        mes: 6,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "dt",            // Abreviação do livro 
                capitulo: 21,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 23,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",             // Abreviação do livro 
                capitulo: 108,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 13,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 3, 4, 5],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [6, 12, 13]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "sl",             // Abreviação do livro 
                capitulo: 109,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 31,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 21, 25, 26, 27, 30, 31],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "is",            // Abreviação do livro 
                capitulo: 48,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 22,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [10]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "ap",                    // Abreviação do livro 
                capitulo: 18,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 24,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 17,      // Dia da leitura
        mes: 6,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "dt",            // Abreviação do livro 
                capitulo: 22,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 30,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",             // Abreviação do livro 
                capitulo: 110,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 7,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "sl",             // Abreviação do livro 
                capitulo: 111,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 10,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "is",            // Abreviação do livro 
                capitulo: 49,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 26,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [13],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [15, 16]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "ap",                    // Abreviação do livro 
                capitulo: 19,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 21,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 3, 4, 5, 6, 7, 8],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [9, 10]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 18,      // Dia da leitura
        mes: 6,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "dt",            // Abreviação do livro 
                capitulo: 23,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 25,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",             // Abreviação do livro 
                capitulo: 112,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 10,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [1, 2, 3, 4, 5, 6, 7, 8, 10]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "sl",             // Abreviação do livro 
                capitulo: 113,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 9,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 3, 4, 5, 6, 7, 8, 9],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "is",            // Abreviação do livro 
                capitulo: 50,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 11,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [4, 5, 9, 10]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "ap",                    // Abreviação do livro 
                capitulo: 20,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 15,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 19,      // Dia da leitura
        mes: 6,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "dt",            // Abreviação do livro 
                capitulo: 24,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 22,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",             // Abreviação do livro 
                capitulo: 114,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 8,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "sl",             // Abreviação do livro 
                capitulo: 115,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 18,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 18],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [9, 10, 11, 12, 13, 14, 15]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "is",            // Abreviação do livro 
                capitulo: 51,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 23,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [9, 10, 11],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [1, 7, 8, 12]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "ap",                    // Abreviação do livro 
                capitulo: 21,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 27,                // Verso que termina a leitura
                versos_vermelhos: [5, 6, 7, 8],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [3, 4]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 20,      // Dia da leitura
        mes: 6,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "dt",            // Abreviação do livro 
                capitulo: 25,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 19,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",             // Abreviação do livro 
                capitulo: 116,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 19,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "is",            // Abreviação do livro 
                capitulo: 52,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 15,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [9, 10],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [7]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "ap",                    // Abreviação do livro 
                capitulo: 22,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 21,                // Verso que termina a leitura
                versos_vermelhos: [7, 12, , 13, 16, 20],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [20],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [21]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 21,      // Dia da leitura
        mes: 6,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "dt",            // Abreviação do livro 
                capitulo: 26,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 19,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",             // Abreviação do livro 
                capitulo: 117,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 2,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "sl",             // Abreviação do livro 
                capitulo: 118,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 29,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 14, 15, 16, 19, 20, 21, 24, 25, 26, 27, 28, 29],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [5, 6, 7, 8, 9, 17, 18]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "is",            // Abreviação do livro 
                capitulo: 53,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 12,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "mt",                    // Abreviação do livro 
                capitulo: 1,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 25,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [20, 21]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 22,      // Dia da leitura
        mes: 6,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "dt",            // Abreviação do livro 
                capitulo: 27,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 26,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "dt",            // Abreviação do livro 
                capitulo: 28,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 19,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "sl",             // Abreviação do livro 
                capitulo: 119,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 24,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [7, 8, 10, 12, 13, 18],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [1, 2, 3, 4, 5, 6, 9, 11, 24]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "is",            // Abreviação do livro 
                capitulo: 54,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 17,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "mt",                    // Abreviação do livro 
                capitulo: 2,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 23,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 23,      // Dia da leitura
        mes: 6,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "dt",            // Abreviação do livro 
                capitulo: 28,            // Capitulo que será feita a leitura
                verso_inicial: 20,       // Verso em que se inicia a leitura
                verso_final: 68,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",             // Abreviação do livro 
                capitulo: 119,             // Capitulo que será feita a leitura
                verso_inicial: 25,        // Verso em que se inicia a leitura
                verso_final: 48,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [27, 28, 41, 42, 43],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [34]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "is",            // Abreviação do livro 
                capitulo: 55,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 13,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [1, 6, 7, 8, 9, 10, 11]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "mt",                    // Abreviação do livro 
                capitulo: 3,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 17,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [2, 8, 17]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 24,      // Dia da leitura
        mes: 6,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "dt",            // Abreviação do livro 
                capitulo: 29,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 29,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",             // Abreviação do livro 
                capitulo: 119,             // Capitulo que será feita a leitura
                verso_inicial: 49,        // Verso em que se inicia a leitura
                verso_final: 72,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [54, 68],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [50, 52, 63, 67, 71, 72]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "is",            // Abreviação do livro 
                capitulo: 56,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 12,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "mt",                    // Abreviação do livro 
                capitulo: 4,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 25,                // Verso que termina a leitura
                versos_vermelhos: [4, 7, 10, 17, 19],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [20, 22]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 25,      // Dia da leitura
        mes: 6,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "dt",            // Abreviação do livro 
                capitulo: 30,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 20,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [11, 12, 13, 14]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",             // Abreviação do livro 
                capitulo: 119,             // Capitulo que será feita a leitura
                verso_inicial: 73,        // Verso em que se inicia a leitura
                verso_final: 96,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [73, 77, 89, 90, 94],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [74, 75, 79, 83, 92, 93]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "is",            // Abreviação do livro 
                capitulo: 57,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 21,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [15, 19]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "mt",                    // Abreviação do livro 
                capitulo: 5,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 48,                // Verso que termina a leitura
                versos_vermelhos: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 26,      // Dia da leitura
        mes: 6,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "dt",            // Abreviação do livro 
                capitulo: 31,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 30,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [6, 8]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",             // Abreviação do livro 
                capitulo: 119,             // Capitulo que será feita a leitura
                verso_inicial: 97,        // Verso em que se inicia a leitura
                verso_final: 120,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [97, 103, 107, 111, 114, 116, 117],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [101, 105, 112]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "is",            // Abreviação do livro 
                capitulo: 58,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 14,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "mt",                    // Abreviação do livro 
                capitulo: 6,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 34,                // Verso que termina a leitura
                versos_vermelhos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 27,      // Dia da leitura
        mes: 6,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "dt",            // Abreviação do livro 
                capitulo: 32,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 52,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [3, 4],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [10, 11, 12, 47]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",             // Abreviação do livro 
                capitulo: 119,             // Capitulo que será feita a leitura
                verso_inicial: 121,        // Verso em que se inicia a leitura
                verso_final: 144,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [124, 125, 127, 128, 129, 137, 138],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [130, 140, 141, 143,]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "is",            // Abreviação do livro 
                capitulo: 59,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 21,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [1]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "mt",                    // Abreviação do livro 
                capitulo: 1,                    // Capitulo que será feita a leitura
                verso_inicial: 7,               // Verso em que se inicia a leitura
                verso_final: 29,                // Verso que termina a leitura
                versos_vermelhos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 28,      // Dia da leitura
        mes: 6,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "dt",            // Abreviação do livro 
                capitulo: 33,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 29,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [3, 12, 27]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "dt",            // Abreviação do livro 
                capitulo: 34,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 12,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "sl",             // Abreviação do livro 
                capitulo: 119,             // Capitulo que será feita a leitura
                verso_inicial: 145,        // Verso em que se inicia a leitura
                verso_final: 176,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [145, 146, 147, 149, 153, 154, 169, 170, 176],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [148, 151, 160, 162, 163, 174]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "is",            // Abreviação do livro 
                capitulo: 60,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 22,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "mt",                    // Abreviação do livro 
                capitulo: 8,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 34,                // Verso que termina a leitura
                versos_vermelhos: [3, 4, 7, 10, 11, 12, 13, 20, 22, 26],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [2, 25],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [8]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 29,      // Dia da leitura
        mes: 6,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "js",            // Abreviação do livro 
                capitulo: 1,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 18,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [31],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [5, 7, 8, 9,]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",             // Abreviação do livro 
                capitulo: 120,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 7,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "sl",             // Abreviação do livro 
                capitulo: 121,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 8,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 3, 4, 5, 6, 7, 8],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 4,               // Ordem que o livro está na leitura
                livro: "sl",             // Abreviação do livro 
                capitulo: 122,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 9,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "is",            // Abreviação do livro 
                capitulo: 61,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 11,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "mt",                    // Abreviação do livro 
                capitulo: 9,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 38,                // Verso que termina a leitura
                versos_vermelhos: [2, 4, 5, 6, 9, 12, 13, 15, 16, 17, 22, 24, 28, 29, 30, 37, 38],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [27],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [18]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 30,      // Dia da leitura
        mes: 6,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "js",            // Abreviação do livro 
                capitulo: 2,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 24,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [11]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",             // Abreviação do livro 
                capitulo: 123,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 4,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [1, 2]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "sl",             // Abreviação do livro 
                capitulo: 124,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 8,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 3, 4, 5, 6, 8],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [7]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 4,               // Ordem que o livro está na leitura
                livro: "sl",             // Abreviação do livro 
                capitulo: 125,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 5,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [1, 2, 3]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "is",            // Abreviação do livro 
                capitulo: 62,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 12,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "mt",                    // Abreviação do livro 
                capitulo: 1,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 42,                // Verso que termina a leitura
                versos_vermelhos: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    },
]

const julho = [
    // NÃO FIZERAM AINDA 
]

const agosto = [
    {
        dia: 1,      // Dia da leitura
        mes: 8,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "jz",            // Abreviação do livro 
                capitulo: 15,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 20,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "at",             // Abreviação do livro 
                capitulo: 19,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 41,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [17],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [20]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "jr",            // Abreviação do livro 
                capitulo: 28,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 17,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "mc",                    // Abreviação do livro 
                capitulo: 14,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 72,                // Verso que termina a leitura
                versos_vermelhos: [6, 7, 8, 9, 13, 14, 15, 18, 20, 21, 22, 24, 25, 27, 28, 30, 32, 34, 36, 37, 38, 41, 48, 49, 62],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [35, 39],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 2,      // Dia da leitura
        mes: 8,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "jz",            // Abreviação do livro 
                capitulo: 16,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 31,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [28],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "at",             // Abreviação do livro 
                capitulo: 20,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 38,         // Verso que termina a leitura
                versos_vermelhos: [35],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [36],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [18, 19, 20, 21, 24, 32]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "jr",            // Abreviação do livro 
                capitulo: 29,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 32,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [11, 12, 13]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "mc",                    // Abreviação do livro 
                capitulo: 15,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 47,                // Verso que termina a leitura
                versos_vermelhos: [34],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [14, 24, 25],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [38, 39]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 3,      // Dia da leitura
        mes: 8,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "jz",            // Abreviação do livro 
                capitulo: 17,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 13,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "at",             // Abreviação do livro 
                capitulo: 21,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 40,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [5],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "jr",            // Abreviação do livro 
                capitulo: 30,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 24,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [10, 11]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "jr",                    // Abreviação do livro 
                capitulo: 31,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 40,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [12, 13, 18, 19],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [3, 20]                // Lista com o número dos versos que estão em azul (colocar os números separados por ,virgula Ex.: [1, 2, 3])
            }, {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "mc",                    // Abreviação do livro 
                capitulo: 16,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 20,                // Verso que termina a leitura
                versos_vermelhos: [15, 16, 17, 18],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [6, 7, 19, 20]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 4,      // Dia da leitura
        mes: 8,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "jz",            // Abreviação do livro 
                capitulo: 18,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 31,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "at",             // Abreviação do livro 
                capitulo: 22,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 30,         // Verso que termina a leitura
                versos_vermelhos: [7, 8, 10, 18, 21],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [17, 18, 20],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [14]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "jr",            // Abreviação do livro 
                capitulo: 32,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 44,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [27, 38, 39, 40]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 1,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 6,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [1, 2, 3, 4, 5, 6]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 2,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 12,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [11, 12]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 5,      // Dia da leitura
        mes: 8,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "jz",            // Abreviação do livro 
                capitulo: 19,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 30,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "at",             // Abreviação do livro 
                capitulo: 23,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 35,         // Verso que termina a leitura
                versos_vermelhos: [11],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "jr",            // Abreviação do livro 
                capitulo: 33,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 26,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [11],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 3,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 8,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 3, 4, 7],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [5, 6, 8]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 4,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 8,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [3, 5, 7, 8]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 6,      // Dia da leitura
        mes: 8,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "jz",            // Abreviação do livro 
                capitulo: 20,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 48,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "at",             // Abreviação do livro 
                capitulo: 24,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 27,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [16]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "jr",            // Abreviação do livro 
                capitulo: 34,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 22,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 5,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 12,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 3, 6],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [11, 12]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 6,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 10,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 3, 4, 5, 6, 7],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [9]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 7,      // Dia da leitura
        mes: 8,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "jz",            // Abreviação do livro 
                capitulo: 21,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 25,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "at",             // Abreviação do livro 
                capitulo: 25,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 27,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "jr",            // Abreviação do livro 
                capitulo: 35,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 19,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [17],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [10]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 7,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 17,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 17],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [10]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 8,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 9,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 3, 4, 5, 6, 7, 8, 9],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 8,      // Dia da leitura
        mes: 8,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "rt",            // Abreviação do livro 
                capitulo: 1,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 22,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [16]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "at",             // Abreviação do livro 
                capitulo: 26,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 32,         // Verso que termina a leitura
                versos_vermelhos: [14, 15, 16, 17, 18],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [29]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "jr",            // Abreviação do livro 
                capitulo: 36,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 32,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "jr",                    // Abreviação do livro 
                capitulo: 45,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 5,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 9,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 20,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 3, 4, 5, 11, 13, 14, 19, 20],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [7, 8, 9, 10, 12]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 9,      // Dia da leitura
        mes: 8,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "rt",            // Abreviação do livro 
                capitulo: 2,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 23,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [12]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "at",             // Abreviação do livro 
                capitulo: 27,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 44,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [35],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [25]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "jr",            // Abreviação do livro 
                capitulo: 37,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 21,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 10,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 18,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 12],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [17]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 10,      // Dia da leitura
        mes: 8,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "rt",            // Abreviação do livro 
                capitulo: 3,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 18,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "rt",             // Abreviação do livro 
                capitulo: 4,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 22,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }, {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "at",             // Abreviação do livro 
                capitulo: 28,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 31,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [8],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "jr",            // Abreviação do livro 
                capitulo: 38,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 28,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 11,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 7,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [5, 7]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 12,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 8,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [6, 7]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 11,      // Dia da leitura
        mes: 8,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "1sm",            // Abreviação do livro 
                capitulo: 1,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 28,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "rm",             // Abreviação do livro 
                capitulo: 1,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 32,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [9, 10, 25],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [5, 6, 16, 17]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "jr",            // Abreviação do livro 
                capitulo: 39,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 18,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 13,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 6,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 3, 4, 5, 6],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 14,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 7,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 12,      // Dia da leitura
        mes: 8,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "1sm",            // Abreviação do livro 
                capitulo: 2,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 36,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [26]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "rm",             // Abreviação do livro 
                capitulo: 2,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 29,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [4, 11, 29]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "jr",            // Abreviação do livro 
                capitulo: 40,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 16,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 15,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 5,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 16,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 11,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [5, 6, 7, 8, 9, 11]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 13,      // Dia da leitura
        mes: 8,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "1sm",            // Abreviação do livro 
                capitulo: 3,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 21,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [10, 18, 19]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "rm",             // Abreviação do livro 
                capitulo: 3,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 31,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [4, 22, 23, 24, 25, 26, 27, 28]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "jr",            // Abreviação do livro 
                capitulo: 41,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 18,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 17,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 15,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 14,      // Dia da leitura
        mes: 8,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "1sm",            // Abreviação do livro 
                capitulo: 4,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 22,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "rm",             // Abreviação do livro 
                capitulo: 4,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 25,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [5, 6, 7, 8, 17]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "jr",            // Abreviação do livro 
                capitulo: 42,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 22,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 18,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 50,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [2, 46, 49, 50],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 25, 26, 27, 28, 29, 30, 31, 32, 33]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 15,      // Dia da leitura
        mes: 8,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "1sm",            // Abreviação do livro 
                capitulo: 5,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 12,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "1sm",             // Abreviação do livro 
                capitulo: 6,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 21,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "rm",             // Abreviação do livro 
                capitulo: 5,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 21,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 15, 17, 18, 19, 20, 21]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "jr",            // Abreviação do livro 
                capitulo: 43,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 13,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 19,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 14,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [7, 8, 9, 10, 11, 12, 13, 14]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 16,      // Dia da leitura
        mes: 8,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "1sm",            // Abreviação do livro 
                capitulo: 7,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 17,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [12]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "1sm",             // Abreviação do livro 
                capitulo: 8,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 22,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [6, 7, 8, 9],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "rm",             // Abreviação do livro 
                capitulo: 6,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 23,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 18, 23]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "jr",            // Abreviação do livro 
                capitulo: 44,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 30,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 20,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 9,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [5, 6]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 21,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 13,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 3, 4, 5, 6],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 17,      // Dia da leitura
        mes: 8,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "1sm",            // Abreviação do livro 
                capitulo: 9,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 27,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "rm",             // Abreviação do livro 
                capitulo: 7,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 25,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [25],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [4, 6, 12]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "jr",            // Abreviação do livro 
                capitulo: 46,           // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 28,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 22,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 26,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 18,      // Dia da leitura
        mes: 8,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "1sm",            // Abreviação do livro 
                capitulo: 10,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 27,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "rm",             // Abreviação do livro 
                capitulo: 8,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 39,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [1, 2, 10, 11, 14, 15, 16, 17, 18, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 37, 38, 39]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "jr",            // Abreviação do livro 
                capitulo: 47,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 7,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 23,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 6,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [1, 2, 3, 4, 5, 6]       // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 24,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 10,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 19,      // Dia da leitura
        mes: 8,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "1sm",            // Abreviação do livro 
                capitulo: 11,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 15,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "rm",             // Abreviação do livro 
                capitulo: 9,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 33,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [5],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [15]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "jr",            // Abreviação do livro 
                capitulo: 48,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 47,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 25,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 22,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 20,      // Dia da leitura
        mes: 8,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "1sm",            // Abreviação do livro 
                capitulo: 12,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 25,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [20, 21, 22, 23, 24]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "rm",             // Abreviação do livro 
                capitulo: 10,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 21,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [6, 7, 8, 9, 11, 12]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "jr",            // Abreviação do livro 
                capitulo: 49,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 39,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 26,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 12,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 27,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 14,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [6, 7, 8, 9, 10, 11, 12],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [1, 3, 4, 5, 13, 14]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 21,      // Dia da leitura
        mes: 8,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "1sm",            // Abreviação do livro 
                capitulo: 13,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 23,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "rm",             // Abreviação do livro 
                capitulo: 11,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 36,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [29, 30, 31, 32],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [33, 34, 35, 36]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "jr",            // Abreviação do livro 
                capitulo: 50,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 46,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 28,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 9,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 3, 4, 5, 6, 7, 8, 9],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 29,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 11,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2,],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [10, 11]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 22,      // Dia da leitura
        mes: 8,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "1sm",            // Abreviação do livro 
                capitulo: 14,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 52,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "rm",             // Abreviação do livro 
                capitulo: 1,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 21,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [1, 2, 5]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "jr",            // Abreviação do livro 
                capitulo: 51,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 64,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 30,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 12,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 3, 4, 8, 9, 10, 11, 12],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [5, 6, 7]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 23,      // Dia da leitura
        mes: 8,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "1sm",            // Abreviação do livro 
                capitulo: 15,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 35,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [22, 29]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "rm",             // Abreviação do livro 
                capitulo: 13,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 14,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [8, 10, 11]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "jr",            // Abreviação do livro 
                capitulo: 52,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 34,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 31,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 24,                // Verso que termina a leitura
                versos_vermelhos: [5, 7, 8],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [24]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 24,      // Dia da leitura
        mes: 8,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "1sm",            // Abreviação do livro 
                capitulo: 16,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 23,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [7,]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "rm",             // Abreviação do livro 
                capitulo: 14,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 23,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [7, 8, 9, 17, 18, 19,]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "lm",            // Abreviação do livro 
                capitulo: 1,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 22,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [9, 11, 20, 21, 22],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [18]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 32,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 11,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [1, 2, 5, 6, 7, 10, 11]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 25,      // Dia da leitura
        mes: 8,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "1sm",            // Abreviação do livro 
                capitulo: 17,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 58,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [37, 45, 47]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "rm",             // Abreviação do livro 
                capitulo: 15,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 33,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [13, 30, 31, 32, 33],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [1, 2, 4, 5, 6, 7]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "lm",            // Abreviação do livro 
                capitulo: 2,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 22,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [19, 20, 21, 22],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 33,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 22,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 3, 4, 5],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [9, 11, 18, 19, 20, 21, 22]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 26,      // Dia da leitura
        mes: 8,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "1sm",            // Abreviação do livro 
                capitulo: 18,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 30,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "rm",             // Abreviação do livro 
                capitulo: 16,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 27,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [24, 25, 26, 27],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "lm",            // Abreviação do livro 
                capitulo: 3,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 66,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 39, 40, 41]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 34,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 22,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 3],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 27,      // Dia da leitura
        mes: 8,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "1sm",            // Abreviação do livro 
                capitulo: 19,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 24,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "1co",             // Abreviação do livro 
                capitulo: 1,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 31,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [2, 3, 9, 18, 21, 24, 27, 28, 29, 30, 31]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "lm",            // Abreviação do livro 
                capitulo: 4,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 22,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 35,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 28,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2,3])
                versos_verdes: [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 28,      // Dia da leitura
        mes: 8,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "1sm",            // Abreviação do livro 
                capitulo: 20,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 43,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "1co",             // Abreviação do livro 
                capitulo: 2,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 16,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [2, 9, 12]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "lm",            // Abreviação do livro 
                capitulo: 5,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 22,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 19, 20, 21, 22],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 36,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 12,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [5, 6, 7, 8, 9, 10]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 29,      // Dia da leitura
        mes: 8,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "1sm",            // Abreviação do livro 
                capitulo: 21,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 15,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "1sm",             // Abreviação do livro 
                capitulo: 22,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 23,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "1co",             // Abreviação do livro 
                capitulo: 3,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 23,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [9, 11, 16, 21, 22, 23]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "ez",            // Abreviação do livro 
                capitulo: 1,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 28,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 37,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 40,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [3, 4, 5, 6, 7, 8, 9, 11, 17, 18, 19, 23, 24, 25, 26, 27, 28, 29, 30, 31, 33, 34, 37, 39, 40]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 30,      // Dia da leitura
        mes: 8,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "1sm",            // Abreviação do livro 
                capitulo: 23,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 29,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [2, 4, 10, 11, 12],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "1co",             // Abreviação do livro 
                capitulo: 4,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 21,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "ez",            // Abreviação do livro 
                capitulo: 2,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 10,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 38,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 22,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }, {
        dia: 31,      // Dia da leitura
        mes: 8,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "1sm",            // Abreviação do livro 
                capitulo: 24,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 22,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "1co",             // Abreviação do livro 
                capitulo: 5,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 13,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [6, 7, 8]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "ez",            // Abreviação do livro 
                capitulo: 3,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 27,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 39,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 13,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ]
    }
]

const setembro = [
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
                versos_verdes: [32, 39],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_azuis: [11, 12, 17, 19, 20]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_verdes: [5, 6, 9, 10, 11, 12, 13, 14, 15, 16, 17],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [1, 2, 3, 4]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "salm",                    // Abreviação do livro 
                capitulo: 41,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 13,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [4, 10, 11, 12],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [1, 2, 3]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_azuis: [15, 17, 20, 22, 23]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_verdes: [6, 9],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [1, 2, 5, 8, 11]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "salm",                    // Abreviação do livro 
                capitulo: 43,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 5,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 3, 4],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_azuis: [1, 3, 4, 8]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_verdes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_azuis: [14, 16, 19, 24]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_azuis: [12, 13, 14, 17, 23, 24, 26, 31, 32, 33]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_azuis: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "salm",                    // Abreviação do livro 
                capitulo: 47,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 9,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 3, 4, 5, 6, 7, 8, 9],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_vermelhos: [24, 25],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [3, 26]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_verdes: [1, 9, 10],      // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [3, 14]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_azuis: [11, 12, 13, 20, 22, 25, 26, 27]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_azuis: [1, 2, 3, 4, 5, 6, 7, 8, 13]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_azuis: [14, 15, 23]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_azuis: [20, 33, 40]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_verdes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_verdes: [19, 23, 24],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_azuis: [3, 4, 10, 19, 20, 21, 22, 58]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_azuis: [1, 8]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_verdes: [1, 2, 3, 6, 7],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_verdes: [13, 14, 15, 17, 18],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [21, 22]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "1 cor",             // Abreviação do livro 
                capitulo: 16,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 24,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [13, 24]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_verdes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_verdes: [18, 19, 20, 21, 22, 23, 24, 25, 26, 24, 27, 28, 29],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "2 cor",             // Abreviação do livro 
                capitulo: 1,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 24,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [3, 4, 11],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [2, 5, 6, 7, 8, 9, 10, 12, 20, 21, 22, 24]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_verdes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "salm",                    // Abreviação do livro 
                capitulo: 57,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 11,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 3, 5, 7, 8, 9, 10, 11],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_azuis: [6, 14]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_verdes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_azuis: [5, 6, 17, 18]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_verdes: [1, 5],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [11, 12]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "salm",                    // Abreviação do livro 
                capitulo: 61,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 8,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 8],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [3, 4]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_azuis: [1, 6, 7, 8, 9, 10, 11, 16, 17, 18]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_azuis: [9, 23, 32]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "salm",                    // Abreviação do livro 
                capitulo: 62,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 12,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [1, 2, 5, 6, 7, 8, 10, 12]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "salm",                    // Abreviação do livro 
                capitulo: 63,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 11,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [1, 2, 3, 4, 5, 6, 7, 8]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_verdes: [16, 20],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_azuis: [1, 2, 14, 15, 17, 18, 19, 20, 21]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_verdes: [1, 2],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [4, 5]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_azuis: [16, 17, 18]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_verdes: [1, 2, 3, 4, 8, 9, 10, 11, 12, 13, 18, 19, 20],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [16, 17]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "salm",                    // Abreviação do livro 
                capitulo: 67,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 7,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 3, 4, 5],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_azuis: [6, 10]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_verdes: [3, 4, 26, 35],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [5, 6, 10, 19, 20, 28]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_azuis: [25, 26]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "2 cor",             // Abreviação do livro 
                capitulo: 8,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 24,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [9, 14]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_verdes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 14, 15, 16, 17, 18, 25, 30, 34],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [32, 33]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_azuis: [6, 7, 8, 9, 10, 11, 12]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_verdes: [1, 5],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [4]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "salm",                    // Abreviação do livro 
                capitulo: 71,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 24,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 3, 4, 8, 9, 12, 19, 20, 21, 22, 23, 24],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [5, 6, 7, 16]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_azuis: [4, 17, 18]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_verdes: [18, 19],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_azuis: [1, 23, 24, 25, 26, 28]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_verdes: [7, 8],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [9, 10]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_verdes: [1, 10, 11, 21],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_azuis: [4, 8, 11, 14]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_verdes: [1, 9],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_verdes: [5, 24],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [3, 4]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_verdes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [13, 14]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_verdes: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_azuis: [16, 19, 20]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                capitulo: 78.1 - 37,                    // Capitulo que será feita a leitura
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
                versos_azuis: [11, 13, 22, 24, 25, 26, 27]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                capitulo: 78.38 - 72,                    // Capitulo que será feita a leitura
                verso_inicial: 38,               // Verso em que se inicia a leitura
                verso_final: 72,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [38, 39]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_azuis: [14, 17, 23, 24]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "gál",             // Abreviação do livro 
                capitulo: 4,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 31,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [6, 7, 31]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_verdes: [5, 8, 9, 11, 13],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_azuis: [1, 13, 16, 24]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_verdes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_azuis: [7, 8, 9, 10, 14, 15, 18]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
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
                versos_verdes: [1, 2, 3, 4, 5, 7],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
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

const outubro = [
    // NÃO FIZERAM AINDA  
]

const novembro = [
    {
        dia: 1,      // Dia da leitura
        mes: 1,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "2rs",            // Abreviação do livro 
                capitulo: 14,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 29,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [3, 6]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "2tm",             // Abreviação do livro 
                capitulo: 4,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 22,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [2, 8, 17, 18, 22]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "os",            // Abreviação do livro 
                capitulo: 7,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 16,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 120,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 7,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },


            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 121,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 8,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 3, 4, 5, 6, 7, 8],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },

            {
                ordem: 4,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 122,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 9,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }

        ]
    },

    {
        dia: 2,      // Dia da leitura
        mes: 11,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "2rs",            // Abreviação do livro 
                capitulo: 15,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 38,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [3, 34]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "tt",             // Abreviação do livro 
                capitulo: 1,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 16,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [4]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "os",            // Abreviação do livro 
                capitulo: 8,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 14,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 123,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 4,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },


            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 124,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 8,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 3, 4, 5, 6, 8],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [7]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },

            {
                ordem: 4,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 125,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 5,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [1, 2, 3]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }

        ]
    },

    {
        dia: 3,      // Dia da leitura
        mes: 11,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "2rs",            // Abreviação do livro 
                capitulo: 16,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 20,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "tt",             // Abreviação do livro 
                capitulo: 2,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 15,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [1, 7, 11, 14]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "os",            // Abreviação do livro 
                capitulo: 9,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 17,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 126,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 6,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 3],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [5, 6]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },


            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 127,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 5,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [1]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },

            {
                ordem: 4,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 128,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 6,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [1]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }

        ]
    },

    {
        dia: 4,      // Dia da leitura
        mes: 11,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "2rs",            // Abreviação do livro 
                capitulo: 17,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 41,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "tt",             // Abreviação do livro 
                capitulo: 3,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 15,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [4, 5, 6, 7, 15]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "os",            // Abreviação do livro 
                capitulo: 10,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 15,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [12]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 129,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 8,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },


            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 130,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 8,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 3, 4],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },

            {
                ordem: 4,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 131,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 3,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }

        ]
    },

    {
        dia: 5,      // Dia da leitura
        mes: 11,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "2rs",            // Abreviação do livro 
                capitulo: 18,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 37,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [3, 5, 6, 7]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "fm",             // Abreviação do livro 
                capitulo: 1,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 25,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [4, 5, 6, 22],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [3, 25]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "os",            // Abreviação do livro 
                capitulo: 11,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 12,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 132,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 18,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [9, 16]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },


            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 133,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 3,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },

            {
                ordem: 4,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 134,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 3,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 3],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }

        ]
    },

    {
        dia: 6,      // Dia da leitura
        mes: 11,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "2rs",            // Abreviação do livro 
                capitulo: 19,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 37,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [15, 16, 17, 18, 19],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "hb",            // Abreviação do livro 
                capitulo: 1,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 14,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "os",            // Abreviação do livro 
                capitulo: 12,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 14,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [6]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 135,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 21,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 3, 13, 19, 20, 21],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [5]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },


            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 136,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 8,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },

        ]
    },

    {
        dia: 7,      // Dia da leitura
        mes: 11,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "2rs",            // Abreviação do livro 
                capitulo: 20,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 21,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "hb",             // Abreviação do livro 
                capitulo: 2,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 18,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [1, 9, 10, 11, 14, 15, 17, 18]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "os",            // Abreviação do livro 
                capitulo: 13,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 16,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [4]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 137,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 9,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },


            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 138,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 8,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 3, 4, 5, 8],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [6]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },

        ]
    },
    {
        dia: 8,      // Dia da leitura
        mes: 11,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "2rs",            // Abreviação do livro 
                capitulo: 21,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 26,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "hb",             // Abreviação do livro 
                capitulo: 3,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 9,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [8, 12, 13]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "os",            // Abreviação do livro 
                capitulo: 14,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 9,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [2],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [4, 5, 6]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 139,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 24,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 17, 18, 23, 24],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },

        ]
    },
    {
        dia: 9,      // Dia da leitura
        mes: 11,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "2rs",            // Abreviação do livro 
                capitulo: 22,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 20,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [2, 8]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "hb",             // Abreviação do livro 
                capitulo: 4,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 16,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [12, 13, 14, 15, 16]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "jo",            // Abreviação do livro 
                capitulo: 1,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 20,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [14, 19, 20],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 140,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 13,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 4, 6],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [12, 13]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },


            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 141,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 10,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 3, 4, 5],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [8]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },

        ]
    },

    {
        dia: 10,      // Dia da leitura
        mes: 11,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "2rs",            // Abreviação do livro 
                capitulo: 23,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 37,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [3, 25]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "hb",             // Abreviação do livro 
                capitulo: 5,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 14,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [8, 9]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "jo",            // Abreviação do livro 
                capitulo: 2,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 32,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [17],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [12, 13, 21]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 142,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 7,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 3, 4, 5, 6, 7],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },

        ]
    },

    {
        dia: 1,      // Dia da leitura
        mes: 1,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "2rs",            // Abreviação do livro 
                capitulo: 24,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 20,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "hb",             // Abreviação do livro 
                capitulo: 6,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 20,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [1, 10, 11, 17, 18, 19, 20]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "jo",            // Abreviação do livro 
                capitulo: 3,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 21,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 143,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 12,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 7, 8, 9, 10, 11, 12],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },

        ]
    },

    {
        dia: 12,      // Dia da leitura
        mes: 11,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "2rs",            // Abreviação do livro 
                capitulo: 25,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 30,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "hb",             // Abreviação do livro 
                capitulo: 7,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 28,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [22, 24, 24, 25, 26, 27, 28]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "am",            // Abreviação do livro 
                capitulo: 1,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 15,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 144,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 15,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 3, 7, 8],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [15]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },

        ]
    },

    {
        dia: 13,      // Dia da leitura
        mes: 11,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "1cr",            // Abreviação do livro 
                capitulo: 1,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 54,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "1cr",             // Abreviação do livro 
                capitulo: 2,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 55,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "hb",             // Abreviação do livro 
                capitulo: 8,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 13,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [1, 6]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "am",            // Abreviação do livro 
                capitulo: 2,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 16,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 145,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 21,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },

        ]
    },

    {
        dia: 14,      // Dia da leitura
        mes: 11,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "1cr",            // Abreviação do livro 
                capitulo: 3,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 24,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "1cr",             // Abreviação do livro 
                capitulo: 4,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 43,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [9, 10],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "hb",             // Abreviação do livro 
                capitulo: 9,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 28,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [14, 24, 26, 27, 28]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "am",            // Abreviação do livro 
                capitulo: 3,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 15,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 146,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 10,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [1, 2, 5, 6, 7, 8, 9, 10]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "sl",                    // Abreviação do livro 
                capitulo: 147,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 20,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 7, 12, 13, 14, 15],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [3, 11]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },

        ]
    },

    {
        dia: 16,      // Dia da leitura
        mes: 11,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "1cr",            // Abreviação do livro 
                capitulo: 7,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 40,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "1cr",             // Abreviação do livro 
                capitulo: 8,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 40,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "hb",             // Abreviação do livro 
                capitulo: 11,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 40,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [6, 16, 25, 26, 27]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "am",            // Abreviação do livro 
                capitulo: 5,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 27,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [4, 14]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "lc",                    // Abreviação do livro 
                capitulo: 1,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 38,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [3, 4, 6, 30, 37, 38]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },


        ]
    },

    {
        dia: 17,      // Dia da leitura
        mes: 11,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "1cr",            // Abreviação do livro 
                capitulo: 9,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 44,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [20]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "1cr",             // Abreviação do livro 
                capitulo: 10,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 14,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "hb",             // Abreviação do livro 
                capitulo: 12,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 29,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "am",            // Abreviação do livro 
                capitulo: 6,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 14,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "lc",                    // Abreviação do livro 
                capitulo: 1,                    // Capitulo que será feita a leitura
                verso_inicial: 39,               // Verso em que se inicia a leitura
                verso_final: 80,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 64],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [58]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },


        ]
    },

    {
        dia: 18,      // Dia da leitura
        mes: 11,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "1cr",            // Abreviação do livro 
                capitulo: 11,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 47,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [9, 14]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "1cr",             // Abreviação do livro 
                capitulo: 12,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 40,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "hb",             // Abreviação do livro 
                capitulo: 13,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 25,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [18, 19, 20, 21],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [5, 6, 8, 9, 14, 15, 25]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "am",            // Abreviação do livro 
                capitulo: 7,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 17,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [2, 3, 5, 6],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "lc",                    // Abreviação do livro 
                capitulo: 2,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 52,                // Verso que termina a leitura
                versos_vermelhos: [49],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [13, 14, 20, 28, 29, 30, 31, 32, 38],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [10, 11, 25, 40, 51, 52]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },


        ]
    },

    {
        dia: 19,      // Dia da leitura
        mes: 11,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "1cr",            // Abreviação do livro 
                capitulo: 13,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 14,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [8],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [14]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "1cr",             // Abreviação do livro 
                capitulo: 14,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 17,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "tg",             // Abreviação do livro 
                capitulo: 1,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 27,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [5, 6],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [3, 4, 9, 10, 19, 20, 21, 22]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }
        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "am",            // Abreviação do livro 
                capitulo: 8,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 14,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "lc",                    // Abreviação do livro 
                capitulo: 3,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 38,                // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [8]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },


        ]
    },
    {
        dia: 20,      // Dia da leitura
        mes: 11,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "1cr",            // Abreviação do livro 
                capitulo: 15,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 29,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [25, 26, 27, 28],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [1]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "tg",             // Abreviação do livro 
                capitulo: 2,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 26,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [1, 8, 9, 10, 13, 17]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            }

        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "am",            // Abreviação do livro 
                capitulo: 9,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 15,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "lc",                    // Abreviação do livro 
                capitulo: 4,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 44,                // Verso que termina a leitura
                versos_vermelhos: [4, 8, 12, 18, 19, 21, 23, 24, 25, 26, 27, 43],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [32]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },


        ]
    },

    {
        dia: 21,      // Dia da leitura
        mes: 11,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "1cr",            // Abreviação do livro 
                capitulo: 16,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 43,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 41],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "tg",             // Abreviação do livro 
                capitulo: 3,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 18,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [13, 17]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },

        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "ob",            // Abreviação do livro 
                capitulo: 1,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 21,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "lc",                    // Abreviação do livro 
                capitulo: 5,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 39,                // Verso que termina a leitura
                versos_vermelhos: [4, 10, 13, 14, 20, 22, 23, 24, 27, 31, 32, 33, 34, 35, 36, 37, 38, 39],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [12, 16, 26],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [5, 8, 28]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },


        ]
    },

    {
        dia: 22,      // Dia da leitura
        mes: 11,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "1cr",            // Abreviação do livro 
                capitulo: 17,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 27,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "tg",             // Abreviação do livro 
                capitulo: 4,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 17,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [6, 7, 8, 9, 10, 15, 17]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },

        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "jo",            // Abreviação do livro 
                capitulo: 1,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 17,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [14, 16],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "lc",                    // Abreviação do livro 
                capitulo: 6,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 49,                // Verso que termina a leitura
                versos_vermelhos: [3, 4, 5, 8, 9, 10, 20, 21, 22, 23, 24, 27, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [12],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },


        ]
    },

    {
        dia: 23,      // Dia da leitura
        mes: 11,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "1cr",            // Abreviação do livro 
                capitulo: 18,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 17,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [13]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "tg",             // Abreviação do livro 
                capitulo: 5,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 20,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [13, 14, 15, 16, 17, 18,],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [7, 8]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },

        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "jn",            // Abreviação do livro 
                capitulo: 2,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 10,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [1, 2, 3, 4, 5, 6, 7, 8, 9],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "lc",                    // Abreviação do livro 
                capitulo: 7,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 50,                // Verso que termina a leitura
                versos_vermelhos: [9, 14, 22, 23, 24, 25, 26, 27, 28, 31, 32, 33, 34, 35, 40, 41, 42, 43, 44, 45, 46, 47, 48, 50],      //Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [16],                      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [6, 7, 13,]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },


        ]
    },

    {
        dia: 24,      // Dia da leitura
        mes: 11,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "1cr",            // Abreviação do livro 
                capitulo: 19,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 19,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "1cr",             // Abreviação do livro 
                capitulo: 20,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 8,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "1pe",             // Abreviação do livro 
                capitulo: 1,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 25,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [3, 4,],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [5, 6, 7, 8, , 9, 13, 14, 15, 16]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },

        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "jo",            // Abreviação do livro 
                capitulo: 3,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 10,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [5, 8, 9, 10]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "lc",                    // Abreviação do livro 
                capitulo: 8,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 56,                // Verso que termina a leitura
                versos_vermelhos: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 21, 22, 25, 39, 50, 52],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [24, 41, 42],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [35]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },


        ]
    },

    {
        dia: 25,      // Dia da leitura
        mes: 11,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "1cr",            // Abreviação do livro 
                capitulo: 21,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 30,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [8],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [13, 26]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "1pe",             // Abreviação do livro 
                capitulo: 2,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 25,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [1, 2, 9, 12, 17, 19, 20, 21]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },


        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "jn",            // Abreviação do livro 
                capitulo: 4,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 11,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [2, 3, 4],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "lc",                    // Abreviação do livro 
                capitulo: 9,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 62,                // Verso que termina a leitura
                versos_vermelhos: [3, 4, 5, 13, 14, 18, 20, 22, 23, 24, 25, 26, 27, 41, 44, 48, 50, 55, 56, 58, 60, 62],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [29],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },


        ]
    },

    {
        dia: 26,      // Dia da leitura
        mes: 11,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "1cr",            // Abreviação do livro 
                capitulo: 22,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 19,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [11, 12, 13, 16, 18, 19]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "1pe",             // Abreviação do livro 
                capitulo: 3,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 22,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [7, 12],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [8, 9, 14, 15, 16, 17]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },


        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "mq",            // Abreviação do livro 
                capitulo: 1,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 16,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "lc",                    // Abreviação do livro 
                capitulo: 10,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 41,                // Verso que termina a leitura
                versos_vermelhos: [2, 3, 4, 5, 13, 14, 15, 16, 18, 20, 22, 23, 24, 26, 30, 31, 32, 33, 34, 35, 36, 37, 41],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [38, 39]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },


        ]
    },

    {
        dia: 27,      // Dia da leitura
        mes: 11,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "1cr",            // Abreviação do livro 
                capitulo: 23,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 32,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "1pe",             // Abreviação do livro 
                capitulo: 3,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 19,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [19],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [2, 8, 12, 13, 14, 15, 16]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },


        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "mq",            // Abreviação do livro 
                capitulo: 2,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 13,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "lc",                    // Abreviação do livro 
                capitulo: 11,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 52,                // Verso que termina a leitura
                versos_vermelhos: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 29, 30, 31, 32, 33, 34, 35, 36, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },


        ]
    },

    {
        dia: 28,      // Dia da leitura
        mes: 11,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "1cr",            // Abreviação do livro 
                capitulo: 24,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 31,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "1cr",            // Abreviação do livro 
                capitulo: 25,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 31,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "1pe",             // Abreviação do livro 
                capitulo: 5,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 14,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [10, 11],       // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [5, 6, 7, 14]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },


        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "mq",            // Abreviação do livro 

                capitulo: 3,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 12,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "lc",                    // Abreviação do livro 
                capitulo: 12,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 59,                // Verso que termina a leitura
                versos_vermelhos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [29],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },


        ]
    },

    {
        dia: 29,      // Dia da leitura
        mes: 11,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "1cr",            // Abreviação do livro 
                capitulo: 26,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 32,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "1cr",            // Abreviação do livro 
                capitulo: 27,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 34,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 3,               // Ordem que o livro está na leitura
                livro: "2pe",             // Abreviação do livro 
                capitulo: 1,             // Capitulo que será feita a leitura
                verso_inicial: 1,        // Verso em que se inicia a leitura
                verso_final: 21,         // Verso que termina a leitura
                versos_vermelhos: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],         // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [2, 8, 17]   // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },


        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "mq",            // Abreviação do livro 
                capitulo: 4,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 13,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "lc",                    // Abreviação do livro 
                capitulo: 12,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 31,                // Verso que termina a leitura
                versos_vermelhos: [2, 3, 4, 5, 6, 7, 8, 9, 12, 15, 16, 18, 20, 21, 24, 25, 26, 27, 28, 29, 30, 32, 33, 34, 35],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [13],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [17]                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },


        ]
    },

    {
        dia: 30,      // Dia da leitura
        mes: 11,      // Mês da leitura
        leitura_familia: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "1cr",            // Abreviação do livro 
                capitulo: 28,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 21,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [8, 9, 20]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "2pe",            // Abreviação do livro 
                capitulo: 2,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 31,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [9]        // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
            },

        ],
        leitura_pessoal: [
            {
                ordem: 1,               // Ordem que o livro está na leitura
                livro: "mq",            // Abreviação do livro 
                capitulo: 5,            // Capitulo que será feita a leitura
                verso_inicial: 1,       // Verso em que se inicia a leitura
                verso_final: 15,        // Verso que termina a leitura
                versos_vermelhos: [],   // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],      // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: [4]        // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },
            {
                ordem: 2,               // Ordem que o livro está na leitura
                livro: "lc",                    // Abreviação do livro 
                capitulo: 12,                    // Capitulo que será feita a leitura
                verso_inicial: 1,               // Verso em que se inicia a leitura
                verso_final: 35,                // Verso que termina a leitura
                versos_vermelhos: [3, 4, 5, 6, 8, 9, 10, 11, 12, 14, 16, 17, 18, 20, 21, 22, 23, 24, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35],    // Lista com o número dos versos que estão em vermelho (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_verdes: [],    // Lista com o número dos versos que estão em verde (colocar os números separados por virgula Ex.: [1, 2, 3])
                versos_azuis: []                // Lista com o número dos versos que estão em azul (colocar os números separados por virgula Ex.: [1, 2, 3])
            },


        ]
    },

]

const dezembro = [
    // NÃO FIZERAM AINDA  
]
