// EVENTOS PARA INTERAÇÃO DA PÁGINA
import Dados from "./dados-obj.js";
import { ShowModal, addArray, addBotton, escolha, quiz1, quiz2, quiz3, quiz4, quiz5, quiz6, quiz7 } from "./functions.js"

// PASSO 1: MONTAR A ESTRUTURA HTML
const kaya = () => {
    const main = document.querySelector("main")
    const dados = Dados.obj
   
    for (let i = 0; i <= dados.length; i ++)
    {
        let overview = dados[i].relatorio

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
        entrada.setAttribute("type","text")
        entrada.setAttribute("id",`questao-${i}`)
        entrada.setAttribute("placeholder","ex: 0")
        entrada.setAttribute("class","input")

        // BOTTON
        let botton = document.createElement("input")
        botton.setAttribute("type","submit")
        botton.setAttribute("class","botton")
        botton.setAttribute("id",`calcular-${i}`)
        botton.setAttribute("value","Calcular")
        addBotton(botton,i)                          // function aqui -- addBototn

        // BOX SECUNDÁRIO
        let box2 = document.createElement("div")
        box2.classList.add("box-resposta","container")

        // PARAGRAFO DE RESPOSTAS
        let resposta = document.createElement("p")
        resposta.setAttribute("id",`resposta-${i}`)
        resposta.textContent = ''

        // BOX PARA O RELATÓRIO
        let box3 = document.createElement("div")
        box3.classList.add("box-relatorio", "container")

        // BOX PARA CONTEÚDO DO RELATÓRIO
        let box4 = document.createElement("div")
        box4.classList.add("box-conteudo","container","invisible")

        // H3 E PARAGRAFOS
        let h3Title = document.createElement("h3")
        h3Title.textContent = 'RELATÓRIO'

        let icon = document.createElement("span")
        icon.classList.add("material-symbols-outlined")
        icon.textContent = 'expand_more'
        ShowModal(box3,box4,icon)           //  function aqui -- ShowModal

        let h3Obj = document.createElement("h3")
        h3Obj.textContent = 'OBJETIVO'

        let pObj = document.createElement("p")
        pObj.textContent = overview.objetivo

        let h3Over = document.createElement("h3")
        h3Over.textContent = 'PASSO Á PASSO'

        let ul = document.createElement("ul")
        ul.classList.add("lista","container")

        let funcao = overview.recursao
        for (let x = 0; x < funcao.length; x++) 
        {
            let li = document.createElement("li")
            li.classList.add("container")

            let h3Li = document.createElement("h3")
            h3Li.textContent = funcao[x].name
            li.appendChild(h3Li)

            funcao[x].desc.forEach(desc => {
                let pLi = document.createElement("p")
                pLi.textContent = desc;
                li.appendChild(pLi)
            })

            ul.appendChild(li)
        }

        // MONTANDO...
        main.appendChild(box)
            box.appendChild(h3)
            box.appendChild(sub)
            box.appendChild(entrada)
            box.appendChild(botton)
            box.appendChild(box2)
            box.appendChild(box3)
                box2.appendChild(resposta)
                box3.appendChild(h3Title)
                box3.appendChild(icon)
                box3.appendChild(box4)
                    box4.appendChild(h3Obj)
                    box4.appendChild(pObj)
                    box4.appendChild(h3Over)
                    box4.appendChild(ul)
    }
}

kaya()