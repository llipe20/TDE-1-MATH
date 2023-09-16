// EVENTOS PARA INTERAÇÃO DA PÁGINA
import Dados from "./dados-obj.js";
import { addArray, addBotton, escolha, quiz1, quiz2, quiz3, quiz4, quiz5, quiz6, quiz7 } from "./functions.js"

// PASSO 1: MONTAR A ESTRUTURA HTML
const kaya = () => {
    const main = document.querySelector("main")
    const dados = Dados.obj
   
    for (let i = 0; i <= dados.length; i ++)
    {
        // BOX PRINCIPAL
        let box = document.createElement("div")
        box.classList.add("box-questao", "container")
      
        // H3 E PARAGRAFO
        let h3 = document.createElement("h3")
        h3.textContent = dados[i].title
        let sub = document.createElement("p")
        sub.textContent = dados[i].obs

        // INPUT
        let entrada = document.createElement("input")
        entrada.setAttribute("type","number")
        entrada.setAttribute("id",`questao-${i}`)
        entrada.setAttribute("placeholder","ex: 0")
        entrada.setAttribute("class","input")

        // BOTTON
        let botton = document.createElement("input")
        botton.setAttribute("type","submit")
        botton.setAttribute("class","botton")
        botton.setAttribute("id",`calcular-${i}`)
        botton.setAttribute("value","Calcular")

        // BOX SECUNDÁRIO
        let box2 = document.createElement("div")
        box2.classList.add("box-resposta","container")

        // PARAGRAFO DE RESPOSTAS
        let resposta = document.createElement("p")
        let valor = escolha(i)            // function resposta aqui
        resposta.setAttribute("id",`resposta-${i}`)
        resposta.textContent = valor
        
        // MONTANDO...
        main.appendChild(box)
            box.appendChild(h3)
            box.appendChild(sub)
            box.appendChild(entrada)
            box.appendChild(botton)
            box.appendChild(box2)
                box2.appendChild(resposta)
    }
}

kaya()
     // Exemplo de uso:
     var conjuntoS = [1, 2, 3];
     quiz1(conjuntoS);