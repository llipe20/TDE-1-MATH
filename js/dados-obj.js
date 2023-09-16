// OBJETO COM OS DADOS DAS QUESTÕES 

export default {
    obj : [
        {
            title : 'QUESTÃO 1. INSIRA UM CONJUNTO S QUALQUER ABAIXO: ',
            obs : 'Obs: Insira um conjunto separado por vírgulas, em seguida, aperte em CALCULAR',
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
            title : 'QUESTÃO 2. ',
            obs : 'Obs: Insira um número de cada vez, use enter para enviar e o botão CALCULAR para finalizar o conjunto'
        },
        {
            title : 'QUESTÃO 3. ',
            obs : 'Obs: Insira um número de cada vez, use enter para enviar e o botão CALCULAR para finalizar o conjunto'
        },
        {
            title : 'QUESTÃO 4. ',
            obs : 'Obs: Insira um número de cada vez, use enter para enviar e o botão CALCULAR para finalizar o conjunto'
        },
        {
            title : 'QUESTÃO 5. ',
            obs : 'Obs: Insira um número de cada vez, use enter para enviar e o botão CALCULAR para finalizar o conjunto'
        },
        {
            title : 'QUESTÃO 6. ',
            obs : 'Obs: Insira um número de cada vez, use enter para enviar e o botão CALCULAR para finalizar o conjunto'
        },
        {
            title : 'QUESTÃO 7. ',
            obs : 'Obs: Insira um número de cada vez, use enter para enviar e o botão CALCULAR para finalizar o conjunto'
        }
    ]
}