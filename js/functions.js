// FUNÇÕES DE RESOLUÇÃO DE QUESTÕES
export { ShowModal, addBotton }

// QUESTÃO 1
const subconjunto = (conjunto) => {
    if (conjunto.length === 0) 
    {
        return [['']];
    }

    const first = conjunto[0]
    const sub = subconjunto(conjunto.slice(1))
    const primeiro = sub.map(subset => [first, ...subset])

    return sub.concat(primeiro)
}

const quiz1 = (id) => {
    const input = document.getElementById(`questao-${id}`)
    const entrada = input.value;
    const saida = document.getElementById(`resposta-${id}`)

    if (entrada.trim() === '') 
    {
        saida.textContent = 'Nenhum valor inserido.'
        return
    }

    const conjunto = entrada.split(',')
    const subconjuntos = subconjunto(conjunto)

    // Exibir subconjuntos 
    saida.innerHTML = subconjuntos.map(subset => `[${subset.map(item => item === '' ? '..' : item).join(', ')}]`).join('&nbsp;')
}
      
// QUESTÃO 2
const quiz2 = (id,sub) => {

    let expressao = ''
    if(!sub)
    {
        const input = document.getElementById(`questao-${id}`)
        expressao = input.value
    }
    else
    {
        expressao = sub
    }
    
    const pilha = []
    
    // Função auxiliar para verificar se um token é um operador
    function eOperador(token) 
    {
        const operadores = "+-*/^()[]{}"; // Operadores suportados
        return operadores.includes(token)
    }

    // Função auxiliar para calcular a potência
    function calcularPotencia(base, expoente) 
    {
        return Math.pow(base, expoente)
    }

    // Divida a expressão em tokens (operandos e operadores)
    const tokens = expressao.split(" ")

    // Itere pelos tokens
    for (const token of tokens) 
    {
        if (!eOperador(token)) 
        {
            // Se o token não for um operador, é um operando; empilhe na pilha
            pilha.push(parseFloat(token)) // Converta para número
        } 
        else 
        {
            // Se o token for um operador, execute a operação apropriada
            switch (token) {
                case "+":
                    pilha.push(pilha.pop() + pilha.pop())
                    break;
                case "-":
                    const subtrahend = pilha.pop()
                    pilha.push(pilha.pop() - subtrahend)
                    break;
                case "*":
                    pilha.push(pilha.pop() * pilha.pop())
                    break;
                case "/":
                    const divisor = pilha.pop();
                    pilha.push(pilha.pop() / divisor)
                    break;
                case "^":
                    const expoente = pilha.pop();
                    pilha.push(calcularPotencia(pilha.pop(), expoente));
                    break;
                case "(":
                case "[":
                case "{":
                    // Empilhe operadores de abertura
                    pilha.push(token)
                    break;
                case ")":
                case "]":
                case "}":
                    // Avalie a expressão dentro dos parênteses/colchetes/chaves
                    let open = token === ")" ? "(" : (token === "]" ? "[" : "{")
                    let subexpressao = []
                    while (pilha.length > 0 && pilha[pilha.length - 1] !== open) 
                    {
                        subexpressao.unshift(pilha.pop())
                    }
                    pilha.pop() // Remova o operador de abertura da pilha
                    // Avalie a subexpressão
                    let resultadoSubexpressao = quiz2(1,subexpressao.join(" "))
                    pilha.push(resultadoSubexpressao)
                    break
                default:
                    throw new Error("Operador inválido: " + token)
            }
        }
    }

    // O resultado final estará no topo da pilha
    const saida = document.getElementById(`resposta-${id}`)
    saida.textContent = pilha
}
    
// QUESTÃO 3 - ALTERNATIVA A
const quiz3A = (id) => {
    const input = document.getElementById(`questao-${id}`)
    const expressao = input.value;
    const saida = document.getElementById(`resposta-${id}`)

    // Função para verificar a precedência dos operadores
    const precedencia = (operador) => {
        switch (operador) {
            case '+':
            case '-':
                return 1;
            case '*':
            case '/':
                return 2;
            case '^':
                return 3;
            default:
                return 0; // Operandos ou parênteses
        }
    }

    // Inicialize uma pilha para operadores 
    const operadores = []
    let posfixa = ''
    
    // Itere pelos caracteres da expressão
    for (let i = 0; i < expressao.length; i++) 
    {
        const caractere = expressao[i];

        if (caractere === ' ') 
        {
            continue
        }

        if (/[a-zA-Z0-9]/.test(caractere)) 
        {
            // Se for um operando, adicione-o à notação pós-fixa
            posfixa += (posfixa === '' ? '' : ' ') + caractere
        } 
        else if (caractere === '(') 
        {
            // Se for um parêntese de abertura, empilhe-o
            operadores.push(caractere)
        } 
        else if (caractere === ')') 
        {
            
            while (operadores.length > 0 && operadores[operadores.length - 1] !== '(') {
                posfixa += ' ' + operadores.pop()
            }
            operadores.pop(); // Remova o parêntese de abertura
        } 
        else 
        {

            while (operadores.length > 0 && precedencia(operadores[operadores.length - 1]) >= precedencia(caractere)) {
                posfixa += ' ' + operadores.pop()
            }
            operadores.push(caractere); // Empilhe o operador atual
        }
    }

    // Desempilhe todos os operadores restantes
    while (operadores.length > 0) 
    {
        posfixa += ' ' + operadores.pop()
    }

    saida.textContent = posfixa.trim()
}

//  QUESTÃO 3 - ALTERNATIVA B 
const quiz3B = (id) => {
    const input = document.getElementById(`questao-${id}`)
    const expressao = input.value;
    const saida = document.getElementById(`resposta-${id}`)

    // Função para verificar a precedência dos operadores
    const precedencia = (operador) => {
        switch (operador) {
            case '^':
                return 3;
            case '*':
            case '/':
                return 2;
            case '+':
            case '-':
                return 1;
            default:
                return 0; // Operandos
        }
    }

    // Função para converter a expressão infixa em pós-fixa
    const converter = (infixa) => {
        const operadores = []
        let posfixa = ''

        for (let i = 0; i < infixa.length; i++) 
        {
            const caractere = infixa[i]

            if (caractere === ' ') 
            {
                continue
            }

            if (/[a-zA-Z0-9]/.test(caractere)) 
            {
                // Adicione um espaço entre os operandos
                if (posfixa !== '' && /[a-zA-Z0-9]/.test(posfixa[posfixa.length - 1])) 
                {
                    posfixa += ' '
                }
                posfixa += caractere
            } 
            else if (caractere === '(') 
            {
                operadores.push(caractere)
            } 
            else if (caractere === ')') 
            {
                while (operadores.length > 0 && operadores[operadores.length - 1] !== '(') 
                {
                    posfixa += ' ' + operadores.pop()
                }
                operadores.pop()
            } 
            else 
            {
                while (operadores.length > 0 && precedencia(operadores[operadores.length - 1]) >= precedencia(caractere)) 
                {
                    posfixa += ' ' + operadores.pop()
                }
                operadores.push(caractere)
            }
        }

        while (operadores.length > 0) 
        {
            posfixa += ' ' + operadores.pop()
        }

        return posfixa.trim()
    }

    const posfixa = converter(expressao)
    saida.textContent = posfixa
}

// QUESTÃO 4
const quiz4 = (id) => {
    const input = document.getElementById(`questao-${id}`)
    const entrada = input.value;
    const saida = document.getElementById(`resposta-${id}`)

    // Função para calcular P(n, r)
    const calcularPermutacao = (n, r) => {
        // Verificar se n e r são números inteiros positivos
        if (n < 0 || r < 0 || !Number.isInteger(n) || !Number.isInteger(r)) {
            return 'Números inválidos. Insira valores inteiros positivos.'
        }

        // Calcular P(n, r)
        let resultado = 1
        for (let i = 0; i < r; i++) {
            resultado *= (n - i)
        }
        return resultado
    }

    // Dividir a entrada em valores de n e r
    const valores = entrada.split(' ')

    if (valores.length !== 2) 
    {
        saida.textContent = 'Insira dois números separados por espaço (n e r).'
    } 
    else 
    {
        const n = parseInt(valores[0])
        const r = parseInt(valores[1])
        const resultado = calcularPermutacao(n, r)

        if (isNaN(resultado)) 
        {
            saida.textContent = 'Valores inválidos. Insira números inteiros positivos.'
        } 
        else 
        {
            saida.textContent = `P(${n}, ${r}) = ${resultado}`
        }
    }
}

// QUESTÃO 5
const quiz5 = (id) => {
    const input = document.getElementById(`questao-${id}`)
    const entrada = input.value;
    const saida = document.getElementById(`resposta-${id}`)

    // Função para calcular C(n, p)
    const calcularCombinacao = (n, p) => {
        // Verificar se n e p são números inteiros positivos
        if (n < 0 || p < 0 || !Number.isInteger(n) || !Number.isInteger(p)) {
            return 'Números inválidos. Insira valores inteiros positivos.'
        }

        // Função para calcular o fatorial
        const calcularFatorial = (x) => {
            if (x === 0 || x === 1) {
                return 1
            }
            let resultado = 1
            for (let i = 2; i <= x; i++) {
                resultado *= i
            }
            return resultado;
        }

        // Calcular C(n, p)
        if (n >= p) {
            const numerador = calcularFatorial(n)
            const denominador = calcularFatorial(p) * calcularFatorial(n - p)
            return numerador / denominador
        } else {
            return 'n deve ser maior ou igual a p.'
        }
    }

    // Dividir a entrada em valores de n e p
    const valores = entrada.split(' ')

    if (valores.length !== 2) {
        saida.textContent = 'Insira dois números separados por espaço (n e p).'
    } else {
        const n = parseInt(valores[0])
        const p = parseInt(valores[1])

        const resultadoCombinacao = calcularCombinacao(n, p)

        if (isNaN(resultadoCombinacao)) {
            saida.textContent = 'Valores inválidos. Insira números inteiros positivos.';
        } else {
            saida.textContent = `C(${n}, ${p}) = ${resultadoCombinacao}`
        }
    }
}

// QUESTÃO 6
const quiz6 = (id) => {
    const input = document.getElementById(`questao-${id}`)
    const n = parseInt(input.value);
    const saida = document.getElementById(`resposta-${id}`)

    // Função para calcular C(n, r)
    const calcularCombinacao = (n, r) => {
        // Verificar se n e r são números inteiros positivos
        if (n < 0 || r < 0 || !Number.isInteger(n) || !Number.isInteger(r)) {
            return 'Números inválidos. Insira valores inteiros positivos.'
        }

        // Função para calcular o fatorial
        const calcularFatorial = (x) => {
            if (x === 0 || x === 1) {
                return 1
            }
            let resultado = 1
            for (let i = 2; i <= x; i++) {
                resultado *= i
            }
            return resultado
        }

        // Calcular C(n, r)
        if (n >= r) 
        {
            const numerador = calcularFatorial(n)
            const denominador = calcularFatorial(r) * calcularFatorial(n - r)
            return numerador / denominador
        } 
        else 
        {
            return 'n deve ser maior ou igual a r.'
        }
    }

    if (!isNaN(n) && n >= 0 && Number.isInteger(n)) 
    {
        let resultados = ''

        for (let r = 0; r <= n; r++) 
        {
            const resultadoCombinacao = calcularCombinacao(n, r)
            resultados += `C(${n}, ${r}) = ${resultadoCombinacao}\n .. `
        }

        saida.textContent = resultados
    }
    else 
    {
        saida.textContent = 'Valor inválido. Insira um número inteiro positivo.'
    }
}

// QUESTÃO 7 - ALTERNAIVA A
const quiz7A = (id) => {
    const input = document.getElementById(`questao-${id}`)
    const valores = input.value.split(',').map(val => parseFloat(val))
    const saida = document.getElementById(`resposta-${id}`)

    if (valores.length !== 3 || valores.some(isNaN)) {
        saida.textContent = 'Insira três valores numéricos separados por vírgula.'
        return
    }

    const [a, b, n] = valores

    // Função para calcular o coeficiente binomial C(n, r)
    const calcularCoeficienteBinomial = (n, r) => {
        // Verificar se n e r são números inteiros positivos
        if (n < 0 || r < 0 || !Number.isInteger(n) || !Number.isInteger(r)) {
            return 0
        }

        // Função para calcular o fatorial
        const calcularFatorial = (x) => {
            if (x === 0 || x === 1) {
                return 1
            }
            let resultado = 1
            for (let i = 2; i <= x; i++) {
                resultado *= i
            }
            return resultado
        }

        // Calcular C(n, r)
        if (n >= r) {
            const numerador = calcularFatorial(n)
            const denominador = calcularFatorial(r) * calcularFatorial(n - r)
            return numerador / denominador
        } else {
            return 0
        }
    }

    // Calcular (a + b)^n usando o Teorema Binomial
    let resultado = 0
    for (let r = 0; r <= n; r++) {
        const coeficienteBinomial = calcularCoeficienteBinomial(n, r)
        const termo = coeficienteBinomial * (Math.pow(a, n - r)) * (Math.pow(b, r))
        resultado += termo
    }

    saida.textContent = resultado
}

//QUESTÃO 7 - ALTERNATIVA B
const quiz7B = (id) => {
    const input = document.getElementById(`questao-${id}`)
    const valores = input.value.split(',').map(val => parseFloat(val))
    const saida = document.getElementById(`resposta-${id}`)

    if (valores.length !== 3 || valores.some(isNaN)) 
    {
        saida.textContent = 'Insira três valores numéricos separados por vírgula.';
        return;
    }
    const [a, b, n] = valores

    // Função para calcular o coeficiente binomial C(n, r)
    const calcular = (n, r) => {
        // Verificar se n e r são números inteiros positivos
        if (n < 0 || r < 0 || !Number.isInteger(n) || !Number.isInteger(r)) {
            return 0;
        }

        // Função para calcular o fatorial
        const calcularFatorial = (x) => {
            if (x === 0 || x === 1) 
            {
                return 1
            }
            let resultado = 1
            for (let i = 2; i <= x; i++) 
            {
                resultado *= i
            }
            return resultado
        }

        // Calcular C(n, r)
        if (n >= r) 
        {
            const numerador = calcularFatorial(n)
            const denominador = calcularFatorial(r) * calcularFatorial(n - r)
            return numerador / denominador;
        } 
        else 
        {
            return 0;
        }
    }

    // Calcular (a + b)^n usando o Teorema Binomial
    let resultado1 = 0;
    for (let r = 0; r <= n; r++) 
    {
        const coeficienteBinomial = calcular(n, r)
        const termo = coeficienteBinomial * (Math.pow(a, n - r)) * (Math.pow(b, r))
        resultado1 += termo;
    }
    // Calcular (a + b)^n da maneira alternativa
    const resultado2 = Math.pow(a + b, n);

    // Comparar os resultados
    const comparacao = resultado1 === resultado2;

    if (comparacao) {
        saida.textContent = `Os resultados são iguais. ${resultado1} e ${resultado2}`
    } else {
        saida.textContent = `Os resultados são iguais. ${resultado1} e ${resultado2}`
    }
}

// RODA A FUNÇÃO CORRETA DE RESOLVER O EXERCÍCIO CORRETO
const escolha = (index) => {
    switch (index)
    {
        case 0:
            return quiz1(index)
        break
        case 1:
            return quiz2(index)
        break
        case 2:
            return quiz3A(index)
        break
        case 3:
           return quiz3B(index)
        break
        case 4:
            return quiz4(index)
        break
        case 5:
            return quiz5(index)
        break
        case 6:
            return quiz6(index)
        break
        case 7:
            return quiz7A(index)
        break
        case 8:
            return quiz7B(index)
        break
        default:
            return ''
    }
}

// ADICIONAR ESCULTA NOS BOTÕES DE CALCULAR
const addBotton = (botton, index) => {
    let i = index
    botton.addEventListener("click", (e) => {
        e.preventDefault()
        return escolha(i)
    })
}

// ABRE E FECHA A JANELA DE RELATÓRIO
const ShowModal = (gatilho,box,icon) => {
    gatilho.addEventListener("click", () => {
        box.classList.toggle("invisible")

        if(box.classList.contains("invisible"))
        {
            icon.textContent = 'expand_more'
        }
        else
        {
            icon.textContent = 'expand_less'
        }
    })
}