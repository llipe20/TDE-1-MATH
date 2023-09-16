// FUNÇÕES DE RESOLUÇÃO DE QUESTÕES
export { addBotton, escolha, quiz1, quiz2, quiz3, quiz4, quiz5, quiz6, quiz7 }

// QUESTÃO 1
const quiz1 = () => {

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
const escolha = (index,conjunto) => {
    switch (index)
    {
        case 0:
            console.log(0)
            return 0
        break
        case 1:
            console.log(1)
            return 1
        break
        case 2:
            console.log(2)
            return 2
        break
        case 3:
           console.log(3)
           return 3
        break
        case 4:
            console.log(4)
            return 4
        break
        case 5:
            console.log(5)
            return 5
        break
        case 6:
            console.log(6)
            return 6
        break
        default:
            return ''
    }
}

// ADICIONAR ESCULTA NOS BOTÕES DE CALCULAR
const addBotton = (botton, input) => {
    botton.addEventListener("click", (e) => {
        e.preventDefault()
        console.log(input.value)
        return input.value
    })
}