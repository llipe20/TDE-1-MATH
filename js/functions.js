// FUNÇÕES DE RESOLUÇÃO DE QUESTÕES
export { addArray, addBotton, escolha, quiz1, quiz2, quiz3, quiz4, quiz5, quiz6, quiz7 }

// QUESTÃO 1
function quiz1(S, subset = [], index = 0) {
    // Caso base: quando chegamos ao final do conjunto S
    if (index === S.length) {
      console.log(subset);
      console.log("oiii")
      return;
    }
  
    // Inclua o elemento atual em subset e gere os subconjuntos que o incluem
    subset.push(S[index]);
    quiz1(S, subset, index + 1);
  
    // Não inclua o elemento atual em subset e gere os subconjuntos que o excluem
    subset.pop();
    quiz1(S, subset, index + 1);
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
            return 0
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
const addBotton = (botton, input) => {
    botton.addEventListener("click", (e) => {
        e.preventDefault()
        return input.value
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