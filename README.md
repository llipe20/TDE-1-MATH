# TDE-1-MATH
 script simples para um trabalho da faculdade

        for (let x = 0; x < funcao.length; x ++)
        {
            let li = document.createElement("li")
            li.classList.add("container")

            let h3Li = document.createElement("h3")
            h3Li.textContent = funcao.name

            funcao.desc.forEach(desc => {
                let pLi = document.createElement("p");
                pLi.textContent = desc
                ul.appendChild(pLi)
            });
        }