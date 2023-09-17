// OBJETO COM OS DADOS DAS QUESTÕES 

export default {
    obj : [
        {
            title : 'QUESTÃO 1. INSIRA UM CONJUNTO S QUALQUER ABAIXO: ',
            obs : 'Obs: Insira um conjunto separado por vírgulas, em seguida, aperte em CALCULAR',
            place : 'ex: 1,2,3',
            relatorio : {

                objetivo : 'O código em questão tem o objetivo de receber um conjunto de elementos separados por vírgula de um usuário e, em seguida, gerar e exibir todos os subconjuntos possíveis desses elementos.',

                link : 
                [ 
                    'https://drive.google.com/file/d/17y3WaUsYlsosZR6jZ6PEEixafqjpxbrg/view?usp=drive_link'
                ],

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

                link : 
                [
                    'https://drive.google.com/file/d/1pC0WfcWnx8ug4XCGqkMTq4rWJT-WpJl4/view?usp=drive_link',

                    'https://drive.google.com/file/d/1jeC3CM2cLA8z-VWTlCjQ0yWF1zh69VBT/view?usp=drive_link',

                    'https://drive.google.com/file/d/19AhduCb3ZFCbnZtxp1Fsj0OjMx5H9nfO/view?usp=drive_link'
                ],
                
                recursao: [
                    {
                        name : 'Divisão em Tokens:',
                        desc : 
                        [
                            '- A expressão é dividida em tokens, que podem ser operandos (números) ou operadores aritméticos (+, -, *, /). Esses tokens são separados por espaços em branco.'
                        ]
                    },
                    {
                        name : 'Uso de Pilha:',
                        desc : 
                        [
                            '- A função utiliza uma pilha para realizar a avaliação da expressão. A pilha armazena temporariamente os operandos e realiza as operações com base nos operadores.'
                        ]
                    },
                    {
                        name : 'Iteração pelos Tokens:',
                        desc : 
                        [
                            '- A função itera pelos tokens da expressão, processando cada token sequencialmente.'
                        ]
                    },
                    {
                        name : 'Verificação de Operadores:',
                        desc : 
                        [
                            '- Se o token atual for um operador, a função desempilha os dois operandos mais recentes da pilha, aplica a operação correspondente e empilha o resultado de volta na pilha.'
                        ]
                    },
                    {
                        name : 'Resultado Final:',
                        desc : 
                        [
                            '- O resultado final da expressão é obtido retirando o último valor da pilha, que será o valor da expressão avaliada.'
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

                link : 
                [ 
                    'https://drive.google.com/file/d/1Dh0gasBX9wVz5UQtmjUPfcV4lXGe5dQj/view?usp=drive_link',

                    'https://drive.google.com/file/d/1IejQtuiFTzK-gY7My2MijMd7M7lshE2S/view?usp=drive_link'
                ],

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
                            '- Inicializa uma pilha chamada operadores para armazenar os operadores temporariamente durante o processo de conversão.',

                            '- Inicializa uma variável chamada posfixa para armazenar a expressão na forma pós-fixa.'
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
                            '- Se o caractere atual não for um espaço e for uma letra, dígito ou número, ele é considerado um operando. Os operandos são concatenados na variável posfixa com um espaço em branco, separando-os dos demais operandos ou operadores.',

                            '- Se o caractere atual for um operador, a função compara sua precedência com a dos operadores na pilha. Operadores com precedência maior ou igual são desempilhados e adicionados à posfixa até que a pilha esteja vazia ou contenha operadores com menor precedência. O operador atual é então empilhado na pilha de operadores.'
                        ]
                    },
                    {
                        name : 'Tratamento de Parênteses:',
                        desc : 
                        [
                            '- Se o caractere atual for um parêntese de abertura "(", ele é empilhado na pilha de operadores.',

                            '- Se o caractere atual for um parêntese de fechamento ")", a função desempilha operadores da pilha e os adiciona à posfixa até encontrar o parêntese de abertura correspondente, removendo-o em seguida.'
                        ]
                    },
                    {
                        name : 'Resultado:',
                        desc : 
                        [
                            '- Após a iteração completa pela expressão, a função desempilha qualquer operador restante na pilha de operadores e os adiciona à posfixa.',

                            '- A notação pós-fixa gerada é exibida na saída do usuário, após a remoção de espaços em branco extras.'
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

                objetivo : 'Converter uma expressão matemática infixa em notação pós-fixa, considerando a precedência dos operadores e usando uma pilha para garantir a ordem correta. Isso pode ser útil em aplicações que precisam avaliar ou processar expressões matemáticas de forma eficiente, como calculadoras ou interpretadores de linguagem.',

                link : 
                [
                    'https://drive.google.com/file/d/15gOagVvwqKCVFBjC5cODoIKc66AVhNur/view?usp=drive_link',

                    'https://drive.google.com/file/d/1MRhTHVCgEb1A3KvN5s9jqhvhXIbC43AQ/view?usp=drive_link'
                ],

                recursao: [
                    {
                        name : 'Inicialização de Elementos e Variáveis:',
                        desc : 
                        [
                            '- São obtidos um elemento de entrada de texto e um elemento de saída na página HTML com base no id fornecido. Esses elementos são onde o usuário insere a expressão matemática e onde a saída na notação pós-fixa será exibida.',

                            '- Inicialização de uma função interna chamada precedencia para atribuir valores numéricos à precedência dos operadores matemáticos.',

                            '- Inicialização da pilha operadores e da variável posfixa.'
                        ]
                    },
                    {
                        name : 'Iteração e Identificação dos operando:',
                        desc : 
                        [
                            '- O código começa a iterar pelos caracteres da expressão matemática. Se um caractere for um espaço em branco, ele é ignorado.',

                            '- Se um caractere for uma letra (a-z ou A-Z) ou um número (0-9), ele é considerado um operando e é adicionado à notação pós-fixa.'
                        ]
                    },
                    {
                        name : 'Processamento de Parênteses:',
                        desc : 
                        [
                            '- Se um caractere for um parêntese de abertura "(" ele é empilhado na pilha de operadores.',

                            '- Se um caractere for um parêntese de fechamento ")", os operadores na pilha são desempilhados e adicionados à notação pós-fixa até que um parêntese de abertura correspondente seja encontrado.'
                        ]
                    },
                    {
                        name : 'Processamento de Operadores:',
                        desc : 
                        [
                            '- Se um caractere for um operador (+, -, *, /, ^), o código verifica a precedência desse operador em relação aos operadores na pilha. Operadores com precedência maior ou igual são desempilhados e adicionados à notação pós-fixa, garantindo a ordem correta dos operadores de acordo com as regras da notação pós-fixa.'
                        ]
                    },
                    {
                        name : 'Desempilhamento de Operadores Restantes:',
                        desc : 
                        [
                            '- Após o loop, qualquer operador restante na pilha de operadores é desempilhado e adicionado à notação pós-fixa.',

                            '- A notação pós-fixa resultante é exibida no elemento HTML de saída.'
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

                objetivo : 'O objetivo principal do código é calcular e exibir o valor da permutação P(n, r) de acordo com os valores de n e r fornecidos pelo usuário. A lógica central do código está na função calcularPermutacao. Ela utiliza um loop para calcular o resultado da permutação usando a fórmula matemática apropriada, levando em consideração as restrições de n e r. O código também contém verificações para garantir que os valores fornecidos pelo usuário sejam válidos, incluindo se são inteiros positivos e se foram fornecidos corretamente.',

                link : 
                [
                    'https://drive.google.com/file/d/1KEFvOg0VILlLblH-C4AGx_28dnosU3LI/view?usp=drive_link'
                ],

                recursao: [
                    {
                        name : 'Obtenção da entrada do usuário:',
                        desc : 
                        [
                            '- A função "quiz4" começa obtendo elementos HTML relacionados ao processo. Ela utiliza o parâmetro id para identificar o campo de entrada e o elemento de saída onde o resultado será exibido'
                        ]
                    },
                    {
                        name : 'Cálculo da permutação:',
                        desc : 
                        [
                            '- A entrada fornecida pelo usuário é dividida em dois valores (n e r) usando um espaço em branco como delimitador.',

                            '- O código verifica se a entrada foi corretamente dividida em dois valores. Se não houver exatamente dois valores, uma mensagem de erro é exibida no elemento de saída.',

                            '- Se a entrada foi corretamente dividida, os valores de n e r são convertidos em números inteiros usando parseInt.',

                            '- Em seuida, utiliza a função interna calcularPermutacao para calcular a permutação P(n, r). Se o resultado for válido (ou seja, não é NaN), ele é exibido no elemento de saída. Caso contrário, uma mensagem de erro é exibida se os valores de n e r não forem números inteiros positivos.'
                        ]
                    },
                ]
            }
        },
        {
            title : 'QUESTÃO 5. INSIRA VALORES PARA N E R -- C(n,r)',
            obs : 'Obs: Insira dois Valores separados por espaço, o primeiro valor conrresponde a N e o segundo, a R. N tem que ser maior que 0 e R menor que N',
            place : 'ex: 11 6',
            relatorio : {

                objetivo : 'Calcular e exibir o valor da combinação C(n, p) com base nos valores de n e p fornecidos pelo usuário. A lógica central do código está na função calcularCombinacao. Ela calcula a combinação C(n, p) usando a fórmula matemática correta, que envolve o cálculo dos fatoriais de n, p e (n - p). O código também contém verificações para garantir que os valores fornecidos pelo usuário sejam válidos, incluindo se são inteiros positivos e se n é maior ou igual a p.',

                link : 
                [
                    'https://drive.google.com/file/d/18yoVbh4HcrfK7gNBvXycgrvIivQeHou5/view?usp=drive_link',

                    'https://drive.google.com/file/d/1A_kYzQ-8z2GSIvw3WpcA64w8DPGgLyYz/view?usp=drive_link'
                ],

                recursao: [
                    {
                        name : 'Obtenção da entrada do usuário: ',
                        desc : 
                        [
                            '- A função começa obtendo elementos HTML relacionados ao processo. Ela utiliza o parâmetro id para identificar o campo de entrada e o elemento de saída onde o resultado será exibido.',

                            '- A função obtém o valor inserido pelo usuário no campo de entrada com o id correspondente.',
                            '- A entrada fornecida pelo usuário é dividida em dois valores (n e p) usando um espaço em branco como delimitador.',

                            '- O código verifica se a entrada foi corretamente dividida em dois valores. Se não houver exatamente dois valores, uma mensagem de erro é exibida no elemento de saída.',

                            '- Se a entrada foi corretamente dividida, os valores de n e p são convertidos em números inteiros usando parseInt.'
                        ]
                    },
                    {
                        name : 'Cálculo da combinação: ',
                        desc : 
                        [
                            '- A função utiliza a função interna calcularCombinacao para calcular a combinação C(n, p). Antes do cálculo, ela verifica se os valores de n e p são válidos, ou seja, se são números inteiros positivos.',

                            '- Dentro da função calcularCombinacao, há uma função interna calcularFatorial que calcula o fatorial de um número. O fatorial de um número x é o produto de todos os inteiros positivos de 1 a x.',

                            '- Se n for maior ou igual a p, a função calcula o numerador e o denominador da fórmula da combinação e retorna o resultado. Caso contrário, ela retorna uma mensagem de erro.',

                            '-  Se o resultado for válido (ou seja, não é NaN), ele é exibido no elemento de saída. Caso contrário, uma mensagem de erro é exibida se os valores de n e p não forem números inteiros positivos ou se n não for maior ou igual a p.'
                        ]
                    },
                ]
            }
        },
        {
            title : 'QUESTÃO 6. INSIRA UM VALOR PARA N',
            obs : 'Obs: Valor maior que 0. A função retornará, todos os valores de C(n,r)',
            place : 'ex: 13',
            relatorio : {

                objetivo : 'O objetivo principal do código é calcular e exibir todas as combinações C(n, r) para um valor inteiro positivo n fornecido pelo usuário, variando o valor de r de 0 até n. A combinação C(n, r) representa o número de maneiras diferentes de escolher r elementos de um conjunto de n elementos, onde a ordem não importa.',

                link : 
                [
                    'https://drive.google.com/file/d/1RpAE60znmzubwmGaUzR8hbCnOqVA8dVJ/view?usp=drive_link',

                    'https://drive.google.com/file/d/1BNFdmS-sKjhp4guLHQUd9eDPdsRZBVqP/view?usp=drive_link'
                ],

                recursao: [
                    {
                        name : 'Obtenção do elemento HTML de entrada:',
                        desc : 
                        [
                            '- A função começa obtendo o elemento HTML de entrada com o id correspondente e converte seu valor em um número inteiro, representando n.'
                        ]
                    },
                    {
                        name : 'Cálculo da combinação: ',
                        desc : 
                        [
                            '- A função utiliza a função interna calcularCombinacao para calcular a combinação C(n, r) para todos os valores de r de 0 até n. Antes do cálculo, ela verifica se o valor de n é válido, ou seja, se é um número inteiro positivo.',

                            '- Dentro da função calcularCombinacao, há uma função interna calcularFatorial que calcula o fatorial de um número. O fatorial de um número x é o produto de todos os inteiros positivos de 1 a x.',

                            '- Para cada valor de r de 0 até n, a função calcula a combinação C(n, r) usando a fórmula matemática correta. Ela armazena esses resultados em uma string resultados.',

                            '- Após calcular todas as combinações, os resultados são exibidos no elemento de saída. Cada resultado é formatado como "C(n, r) = valor" e separado por quebras de linha e dois pontos de reticências " .. ".'
                        ]
                    },
                ]
            }
        },
        {
            title : 'QUESTÃO 7 - A. INSIRA VALORES PARA A, B E N',
            obs : 'Obs: Ponha os valores A, B e C separados por vírgula, respectivamente.',
            place : 'ex: 1, 2, 3',
            relatorio : {

                objetivo : 'O objetivo do código é calcular e exibir o resultado da expansão de (a + b)^n, onde a, b, e n são valores numéricos fornecidos pelo usuário. A lógica principal do código está na expansão do binômio (a + b)^n usando o Teorema Binomial. O coeficiente binomial C(n, r) é calculado para cada valor de r, e os termos (a^(n-r)) e (b^r) são multiplicados com o coeficiente binomial correspondente. Esses termos são somados para obter o resultado final da expansão.',

                link : 
                [
                    'https://drive.google.com/file/d/17BRYWGS2CctQmMESSQJiknT3FO5MVDGp/view?usp=drive_link',

                    'https://drive.google.com/file/d/1zTT2NdLKYbXWvD1nlcql1twi1kOq7CTn/view?usp=drive_link'
                ],

                recursao: [
                    {
                        name : 'Obtenção da entrada do usuário:',
                        desc : 
                        [
                            '- O código obtém o valor inserido pelo usuário em um campo de entrada HTML identificado pelo id.',

                            '- A entrada é dividida em um array de valores usando a vírgula como separador. Em seguida, cada valor é convertido em um número de ponto flutuante usando o método parseFloat.',

                            '- O código verifica se foram fornecidos exatamente três valores numéricos válidos. Caso contrário, uma mensagem de erro é exibida no elemento de saída e a função retorna.'
                        ]
                    },
                    {
                        name : 'Cálculo do coeficiente binomial: ',
                        desc : 
                        [
                            '- A função interna calcularCoeficienteBinomial é utilizada para calcular o coeficiente binomial C(n, r), que é necessário para a expansão do binômio. Ela verifica se n e r são números inteiros positivos e calcula o coeficiente binomial com base na fórmula apropriada.'
                        ]
                    },
                    {
                        name : 'Cálculo da expansão do binômio:',
                        desc : 
                        [
                            '- O código realiza um loop de 0 até n, onde para cada valor de r, calcula o coeficiente binomial correspondente e multiplica os termos (a^(n-r)) e (b^r) para obter o termo individual. Esses termos são somados ao resultado final.'
                        ]
                    },
                ]
            }
        },
        {
            title : 'QUESTÃO 7 - B. INSIRA VALORES PARA A, B E N:',
            obs : 'Obs: Ponha os valores A, B e C separados por vírgula, respectivamente.',
            place : 'ex: 1, 2, 3',
            relatorio : {

                objetivo : 'O objetivo do código é calcular a expansão de (a + b)^n de duas maneiras diferentes e verificar se os resultados das duas abordagens.',

                link : 
                [
                    'https://drive.google.com/file/d/1stRJW1NuU3wuRKMZCe4HaBwMkfkU_k4J/view?usp=drive_link',

                    'https://drive.google.com/file/d/1-jwkNF0Ih2eyr58JSM_lkp30gJWSeId5/view?usp=drive_link'
                ],

                recursao: [
                    {
                        name : 'Obtenção da entrada do usuário:',
                        desc : 
                        [
                            '- O código obtém o valor inserido pelo usuário em um campo de entrada HTML identificado pelo id.',

                            '- A entrada é dividida em um array de valores usando a vírgula como separador. Em seguida, cada valor é convertido em um número de ponto flutuante usando o método parseFloat.',

                            '- O código verifica se foram fornecidos exatamente três valores numéricos válidos. Caso contrário, uma mensagem de erro é exibida no elemento de saída e a função retorna.'
                        ]
                    },
                    {
                        name : 'Cálculo do coeficiente binomial: ',
                        desc : 
                        [
                            '- A função interna calcular é utilizada para calcular o coeficiente binomial C(n, r), que é necessário para a expansão do binômio. Ela verifica se n e r são números inteiros positivos e calcula o coeficiente binomial com base na fórmula apropriada.'
                        ]
                    },
                    {
                        name : 'Cálculo da expansão do binômio (a + b)^n de duas maneiras: ',
                        desc : 
                        [
                            '-  O código realiza um loop de 0 até n, onde para cada valor de r, calcula o coeficiente binomial correspondente e multiplica os termos (a^(n-r)) e (b^r) para obter o termo individual da expansão. O resultado é armazenado em resultado1.'
                        ]
                    },
                    {
                        name : 'Cálculo da expansão do binômio (a + b)^n da maneira alternativa: ',
                        desc : 
                        [
                            '-  O código calcula o resultado da expansão do binômio (a + b)^n diretamente usando a função Math.pow(a + b, n) e armazena em resultado2.'
                        ]
                    },
                    {
                        name : 'Comparação dos resultados:',
                        desc : 
                        [
                            '- O código compara os valores de resultado1 e resultado2. Se eles forem iguais, exibe uma mensagem indicando que os resultados são iguais; caso contrário, exibe uma mensagem indicando que os resultados são diferentes.'
                        ]
                    }
                ]
            }
        }
    ]
}