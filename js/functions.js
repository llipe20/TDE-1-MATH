// FUNÇÕES DE RESOLUÇÃO DE QUESTÕES
export { ShowModal, addArray, addBotton, escolha, quiz1, quiz2, quiz3, quiz4, quiz5, quiz6, quiz7 }

// QUESTÃO 1
const subconjunto = (conjunto) => {
    if (conjunto.length === 0) 
    {
        return [['']];
    }

    const first = conjunto[0];
    const sub = subconjunto(conjunto.slice(1));
    const subconjuntosComPrimeiroElemento = sub.map(subset => [first, ...subset]);

    return sub.concat(subconjuntosComPrimeiroElemento);
}

const quiz1 = (id) => {
    const input = document.getElementById(`questao-${id}`);
    const entrada = input.value;
    const saida = document.getElementById(`resposta-${id}`);

    if (entrada.trim() === '') 
    {
        saida.textContent = 'Nenhum valor inserido.';
        return
    }

    const conjunto = entrada.split(',');
    const subconjuntos = subconjunto(conjunto);

    // Exibir subconjuntos 
    saida.innerHTML = subconjuntos.map(subset => `[${subset.map(item => item === '' ? '..' : item).join(', ')}]`).join('&nbsp;');
}
      
// QUESTÃO 2
const quiz2 = () => {

}

// QUESTÃO 3
const quiz3 = () => {

}

// QUESTÃO 4
const quiz4 = () => {

}

// QUESTÃO 5
const quiz5 = () => {

}

// QUESTÃO 6
const quiz6 = () => {

}

// QUESTÃO 7
const quiz7 = () => {

}

// RODA A FUNÇÃO CORRETA DE RESOLVER O EXERCÍCIO CORRETO
const escolha = (index) => {
    switch (index)
    {
        case 0:
            return quiz1(index)
        break
        case 1:
            return 1
        break
        case 2:
            return 2
        break
        case 3:
           return 3
        break
        case 4:
            return 4
        break
        case 5:
            return 5
        break
        case 6:
            return 6
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

// ADICIONAR DADOS NUMÉRICOS EM ARRAY       
const addArray = (input) => {
    input.addEventListener("keydown", (event) => {
        if (event.keyCode === 13) 
        {   let conj = []
            conj.push(input.value)

            input.value = ''
            input.setAttribute("autofocus","autofocus")

            return conj
        }     
    })
}

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