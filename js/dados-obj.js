// OBJETO COM OS DADOS DAS QUESTÕES 

export default {
    obj : [
        {
            title : 'QUESTÃO 1. INSIRA UM CONJUNTO S QUALQUER ABAIXO: ',
            obs : 'Obs: Insira um conjunto separado por vírgulas, em seguida, aperte em CALCULAR',
            place : 'ex: 1,2,3',
            relatorio : {

                objetivo : 'O código em questão tem o objetivo de receber um conjunto de elementos separados por vírgula de um usuário e, em seguida, gerar e exibir todos os subconjuntos possíveis desses elementos.',

                recursao: [
                    {
                        name : 'Função subconjunto:',
                        desc : 
                        [
                            '- Esta função é responsável por gerar os subconjuntos de um conjunto dado.',
                            '- Ela recebe um argumento chamado `conjunto`, que é o conjunto de elementos a serem processados.',
                            '- A função começa verificando se o conjunto está vazio. Se estiver, ela retorna um subconjunto contendo apenas um conjunto vazio (representado por `[..]`), indicando que não há elementos no conjunto original.'
                        ]
                    },
                    {
                        name : 'Função `quiz1`:',
                        desc : [
                            '- Esta função é responsável por lidar com a entrada do usuário, processar os dados e exibir os resultados.',
                            '- Ela recebe um argumento chamado `id`, que é usado para identificar qual input e elemento de saída devem ser usados.'
                        ]
                    },
                    {
                        name : 'Obtenção da Entrada do Usuário:',
                        desc : [
                            '- A função `quiz1` começa obtendo o valor inserido pelo usuário de um elemento HTML, identificado pelo `id` especificado.'
                        ]
                    },
                    {
                        name : 'Verificação de Entrada Vazia:',
                        desc : [
                            '- Ela verifica se o valor inserido está em branco (vazio). Se estiver vazio, exibe uma mensagem informando que nenhum valor foi inserido e encerra a execução.'
                        ]
                    },
                    {
                        name : 'Divisão do Valor de Entrada:',
                        desc : [
                            '- Se a entrada não estiver vazia, a função divide o valor em uma matriz (array) usando a vírgula como separador. Isso significa que se o usuário inserir "1,2,3", o código criará um array contendo os elementos [1, 2, 3].'
                        ]
                    },
                    {
                        name : 'Chamada da Função `subconjunto`:',
                        desc : [
                            '- A função `subconjunto` é então chamada com o array de entrada como argumento. Ela gera todos os subconjuntos possíveis do conjunto de entrada, levando em consideração todas as combinações de elementos.'
                        ]
                    },
                    {
                        name : 'Formatação e Exibição dos Subconjuntos:',
                        desc : [
                            '- Os subconjuntos gerados são formatados de maneira apropriada e visualmente organizados.',
                            '- Se um subconjunto for vazio, ele será representado como `[""]` (com aspas vazias).',
                            '- Os subconjuntos são exibidos no elemento HTML especificado como saída. Eles são separados visualmente por vírgulas seguidas de um espaço.'
                        ]
                    }
                ]
            }
        },
        {
            title : 'QUESTÃO 2. Insira um expressão aritmética na notação pós-fixa',
            obs : 'Obs: Na notação pós-fixa os operadores são colocados após os operandos, por exemplo: 3 + 4 ~ 3 4 +',
            place : 'ex: 30 4 +',
            relatorio : {

                objetivo : 'Avaliar uma expressão aritmética na notação pós-fixa (também conhecida como notação polonesa reversa) e retornar o valor resultante da expressão.',

                recursao: [
                    {
                        name : 'Divisão em Tokens:',
                        desc : 
                        [
                            'A expressão é dividida em tokens, que podem ser operandos (números) ou operadores aritméticos (+, -, *, /). Esses tokens são separados por espaços em branco.'
                        ]
                    },
                    {
                        name : 'Uso de Pilha:',
                        desc : 
                        [
                            'A função utiliza uma pilha para realizar a avaliação da expressão. A pilha armazena temporariamente os operandos e realiza as operações com base nos operadores.'
                        ]
                    },
                    {
                        name : 'Iteração pelos Tokens:',
                        desc : 
                        [
                            ' A função itera pelos tokens da expressão, processando cada token sequencialmente.'
                        ]
                    },
                    {
                        name : 'Verificação de Operadores:',
                        desc : 
                        [
                            'Se o token atual for um operador, a função desempilha os dois operandos mais recentes da pilha, aplica a operação correspondente e empilha o resultado de volta na pilha.'
                        ]
                    },
                    {
                        name : 'Resultado Final:',
                        desc : 
                        [
                            'O resultado final da expressão é obtido retirando o último valor da pilha, que será o valor da expressão avaliada.'
                        ]
                    }
                ]
            }
        },
        {
            title : 'QUESTÃO 3 - A. Insira uma expressão aritmética na notação in-fixa',
            obs : 'Obs: A expressão deve conter obrigatoriamente parênteses, para poder retornar a forma pós-fixa',
            place : 'ex: (50 + 100)',
            relatorio : {

                objetivo : 'Converter uma expressão aritmética na notação infixa (com uso de parênteses) em sua forma pós-fixa correspondente, também conhecida como notação polonesa reversa. A notação pós-fixa é uma forma de representar expressões matemáticas em que os operadores são colocados após os operandos, tornando-a adequada para avaliação por computadores.',

                recursao: [
                    {
                        name : 'Obtenção dos Dados de Entrada:',
                        desc : 
                        [
                            'A função começa obtendo o valor da expressão aritmética a ser convertida da entrada do usuário, identificada pelo ID especificado.'
                        ]
                    },
                    {
                        name : 'Inicialização de Variáveis:',
                        desc : 
                        [
                            'Inicializa uma pilha chamada operadores para armazenar os operadores temporariamente durante o processo de conversão.',
                            'Inicializa uma variável chamada posfixa para armazenar a expressão na forma pós-fixa.'
                        ]
                    },
                    {
                        name : 'Definição da Função de Precedência:',
                        desc : 
                        [
                            'Define uma função chamada precedencia para determinar a precedência dos operadores. Isso é essencial para garantir que a notação pós-fixa seja gerada corretamente.'
                        ]
                    },
                    {
                        name : 'Iteração pela Expressão de Entrada:',
                        desc : 
                        [
                            'A função itera por cada caractere da expressão de entrada.'
                        ]
                    },
                    {
                        name : 'Tratamento de Operandos:',
                        desc : 
                        [
                            'Se o caractere atual não for um espaço e for uma letra, dígito ou número, ele é considerado um operando. Os operandos são concatenados na variável posfixa com um espaço em branco, separando-os dos demais operandos ou operadores.',
                            'Se o caractere atual for um operador, a função compara sua precedência com a dos operadores na pilha. Operadores com precedência maior ou igual são desempilhados e adicionados à posfixa até que a pilha esteja vazia ou contenha operadores com menor precedência. O operador atual é então empilhado na pilha de operadores.'
                        ]
                    },
                    {
                        name : 'Tratamento de Parênteses:',
                        desc : 
                        [
                            'Se o caractere atual for um parêntese de abertura "(", ele é empilhado na pilha de operadores.',
                            'Se o caractere atual for um parêntese de fechamento ")", a função desempilha operadores da pilha e os adiciona à posfixa até encontrar o parêntese de abertura correspondente, removendo-o em seguida.'
                        ]
                    },
                    {
                        name : 'Resultado:',
                        desc : 
                        [
                            'Após a iteração completa pela expressão, a função desempilha qualquer operador restante na pilha de operadores e os adiciona à posfixa.',
                            'A notação pós-fixa gerada é exibida na saída do usuário, após a remoção de espaços em branco extras.'
                        ]
                    }
                ]
            }
        },
        {
            title : 'QUESTÃO 3 - B. Insira uma expressão aritmética na notação in-fixa',
            obs : 'Obs: O código deve retornar a forma pós-fixa respeitando a ordem de precedência dos operadores',
            place : 'ex: (30 - 20) * 2',
            relatorio : {

                objetivo : 'Avaliar uma expressão aritmética na notação pós-fixa (também conhecida como notação polonesa reversa) e retornar o valor resultante da expressão.',

                recursao: [
                    {
                        name : 'Divisão em Tokens:',
                        desc : 
                        [
                            'A expressão é dividida em tokens, que podem ser operandos (números) ou operadores aritméticos (+, -, *, /). Esses tokens são separados por espaços em branco.'
                        ]
                    },
                    {
                        name : 'Uso de Pilha:',
                        desc : 
                        [
                            'A função utiliza uma pilha para realizar a avaliação da expressão. A pilha armazena temporariamente os operandos e realiza as operações com base nos operadores.'
                        ]
                    },
                    {
                        name : 'Iteração pelos Tokens:',
                        desc : 
                        [
                            ' A função itera pelos tokens da expressão, processando cada token sequencialmente.'
                        ]
                    },
                    {
                        name : 'Verificação de Operadores:',
                        desc : 
                        [
                            'Se o token atual for um operador, a função desempilha os dois operandos mais recentes da pilha, aplica a operação correspondente e empilha o resultado de volta na pilha.'
                        ]
                    },
                    {
                        name : 'Resultado Final:',
                        desc : 
                        [
                            'O resultado final da expressão é obtido retirando o último valor da pilha, que será o valor da expressão avaliada.'
                        ]
                    }
                ]
            }
        },
        {
            title : 'QUESTÃO 4. INSIRA VALORES PARA N E R -- P(n,r)',
            obs : 'Obs: Insira dois Valores separados por espaço, o primeiro valor conrresponde a N e o segundo, a R. N tem que ser maior que 0 e R menor que N',
            place : 'ex: 10 5',
            relatorio : {

                objetivo : 'Avaliar uma expressão aritmética na notação pós-fixa (também conhecida como notação polonesa reversa) e retornar o valor resultante da expressão.',

                recursao: [
                    {
                        name : 'Divisão em Tokens:',
                        desc : 
                        [
                            'A expressão é dividida em tokens, que podem ser operandos (números) ou operadores aritméticos (+, -, *, /). Esses tokens são separados por espaços em branco.'
                        ]
                    },
                    {
                        name : 'Uso de Pilha:',
                        desc : 
                        [
                            'A função utiliza uma pilha para realizar a avaliação da expressão. A pilha armazena temporariamente os operandos e realiza as operações com base nos operadores.'
                        ]
                    },
                    {
                        name : 'Iteração pelos Tokens:',
                        desc : 
                        [
                            ' A função itera pelos tokens da expressão, processando cada token sequencialmente.'
                        ]
                    },
                    {
                        name : 'Verificação de Operadores:',
                        desc : 
                        [
                            'Se o token atual for um operador, a função desempilha os dois operandos mais recentes da pilha, aplica a operação correspondente e empilha o resultado de volta na pilha.'
                        ]
                    },
                    {
                        name : 'Resultado Final:',
                        desc : 
                        [
                            'O resultado final da expressão é obtido retirando o último valor da pilha, que será o valor da expressão avaliada.'
                        ]
                    }
                ]
            }
        },
        {
            title : 'QUESTÃO 5. INSIRA VALORES PARA N E R -- C(n,r)',
            obs : 'Obs: Insira dois Valores separados por espaço, o primeiro valor conrresponde a N e o segundo, a R. N tem que ser maior que 0 e R menor que N',
            place : 'ex: 11 6',
            relatorio : {

                objetivo : 'Avaliar uma expressão aritmética na notação pós-fixa (também conhecida como notação polonesa reversa) e retornar o valor resultante da expressão.',

                recursao: [
                    {
                        name : 'Divisão em Tokens:',
                        desc : 
                        [
                            'A expressão é dividida em tokens, que podem ser operandos (números) ou operadores aritméticos (+, -, *, /). Esses tokens são separados por espaços em branco.'
                        ]
                    },
                    {
                        name : 'Uso de Pilha:',
                        desc : 
                        [
                            'A função utiliza uma pilha para realizar a avaliação da expressão. A pilha armazena temporariamente os operandos e realiza as operações com base nos operadores.'
                        ]
                    },
                    {
                        name : 'Iteração pelos Tokens:',
                        desc : 
                        [
                            ' A função itera pelos tokens da expressão, processando cada token sequencialmente.'
                        ]
                    },
                    {
                        name : 'Verificação de Operadores:',
                        desc : 
                        [
                            'Se o token atual for um operador, a função desempilha os dois operandos mais recentes da pilha, aplica a operação correspondente e empilha o resultado de volta na pilha.'
                        ]
                    },
                    {
                        name : 'Resultado Final:',
                        desc : 
                        [
                            'O resultado final da expressão é obtido retirando o último valor da pilha, que será o valor da expressão avaliada.'
                        ]
                    }
                ]
            }
        },
        {
            title : 'QUESTÃO 6. INSIRA UM VALOR PARA N',
            obs : 'Obs: Valor maior que 0. A função retornará, todos os valores de C(n,r)',
            place : 'ex: 13',
            relatorio : {

                objetivo : 'Avaliar uma expressão aritmética na notação pós-fixa (também conhecida como notação polonesa reversa) e retornar o valor resultante da expressão.',

                recursao: [
                    {
                        name : 'Divisão em Tokens:',
                        desc : 
                        [
                            'A expressão é dividida em tokens, que podem ser operandos (números) ou operadores aritméticos (+, -, *, /). Esses tokens são separados por espaços em branco.'
                        ]
                    },
                    {
                        name : 'Uso de Pilha:',
                        desc : 
                        [
                            'A função utiliza uma pilha para realizar a avaliação da expressão. A pilha armazena temporariamente os operandos e realiza as operações com base nos operadores.'
                        ]
                    },
                    {
                        name : 'Iteração pelos Tokens:',
                        desc : 
                        [
                            ' A função itera pelos tokens da expressão, processando cada token sequencialmente.'
                        ]
                    },
                    {
                        name : 'Verificação de Operadores:',
                        desc : 
                        [
                            'Se o token atual for um operador, a função desempilha os dois operandos mais recentes da pilha, aplica a operação correspondente e empilha o resultado de volta na pilha.'
                        ]
                    },
                    {
                        name : 'Resultado Final:',
                        desc : 
                        [
                            'O resultado final da expressão é obtido retirando o último valor da pilha, que será o valor da expressão avaliada.'
                        ]
                    }
                ]
            }
        },
        {
            title : 'QUESTÃO 7 - A. INSIRA VALORES PARA A, B E N',
            obs : 'Obs: Ponha os valores A, B e C separados por vírgula, respectivamente.',
            place : 'ex: 1, 2, 3',
            relatorio : {

                objetivo : 'Avaliar uma expressão aritmética na notação pós-fixa (também conhecida como notação polonesa reversa) e retornar o valor resultante da expressão.',

                recursao: [
                    {
                        name : 'Divisão em Tokens:',
                        desc : 
                        [
                            'A expressão é dividida em tokens, que podem ser operandos (números) ou operadores aritméticos (+, -, *, /). Esses tokens são separados por espaços em branco.'
                        ]
                    },
                    {
                        name : 'Uso de Pilha:',
                        desc : 
                        [
                            'A função utiliza uma pilha para realizar a avaliação da expressão. A pilha armazena temporariamente os operandos e realiza as operações com base nos operadores.'
                        ]
                    },
                    {
                        name : 'Iteração pelos Tokens:',
                        desc : 
                        [
                            ' A função itera pelos tokens da expressão, processando cada token sequencialmente.'
                        ]
                    },
                    {
                        name : 'Verificação de Operadores:',
                        desc : 
                        [
                            'Se o token atual for um operador, a função desempilha os dois operandos mais recentes da pilha, aplica a operação correspondente e empilha o resultado de volta na pilha.'
                        ]
                    },
                    {
                        name : 'Resultado Final:',
                        desc : 
                        [
                            'O resultado final da expressão é obtido retirando o último valor da pilha, que será o valor da expressão avaliada.'
                        ]
                    }
                ]
            }
        },
        {
            title : 'QUESTÃO 7 - B. INSIRA VALORES PARA A, B E N:',
            obs : 'Obs: Ponha os valores A, B e C separados por vírgula, respectivamente.',
            place : 'ex: 1, 2, 3',
            relatorio : {

                objetivo : 'Avaliar uma expressão aritmética na notação pós-fixa (também conhecida como notação polonesa reversa) e retornar o valor resultante da expressão.',

                recursao: [
                    {
                        name : 'Divisão em Tokens:',
                        desc : 
                        [
                            'A expressão é dividida em tokens, que podem ser operandos (números) ou operadores aritméticos (+, -, *, /). Esses tokens são separados por espaços em branco.'
                        ]
                    },
                    {
                        name : 'Uso de Pilha:',
                        desc : 
                        [
                            'A função utiliza uma pilha para realizar a avaliação da expressão. A pilha armazena temporariamente os operandos e realiza as operações com base nos operadores.'
                        ]
                    },
                    {
                        name : 'Iteração pelos Tokens:',
                        desc : 
                        [
                            ' A função itera pelos tokens da expressão, processando cada token sequencialmente.'
                        ]
                    },
                    {
                        name : 'Verificação de Operadores:',
                        desc : 
                        [
                            'Se o token atual for um operador, a função desempilha os dois operandos mais recentes da pilha, aplica a operação correspondente e empilha o resultado de volta na pilha.'
                        ]
                    },
                    {
                        name : 'Resultado Final:',
                        desc : 
                        [
                            'O resultado final da expressão é obtido retirando o último valor da pilha, que será o valor da expressão avaliada.'
                        ]
                    }
                ]
            }
        }
    ]
}