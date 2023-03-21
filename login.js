let usuarios = [
    {
        nome: "kevinho.com",
        senha: "kevin",
    }, {
        nome: "tarsinho.com",
        senha: "largoatras",
    }, {
        nome: "rodriguinho.com",
        senha: "roraima",
    }, {
        nome: "alek.com",
        senha: "ifood",
    }, {
        nome: "eduardo",
        senha: "saopaulo",
    }, {
        nome: "teves.com",
        senha: "loiro",
    }
]


let armaz = localStorage.getItem("usuariologado")

if (armaz != undefined) {


    let h2nome = document.querySelector("h2#bbb")
    h2nome.innerHTML += ` ${armaz}`

    // BOTÕES
    const sair = document.querySelector("input.deslogar");
    sair.addEventListener("click", sair2)

    const limpar = document.querySelector("input.limpe")
    limpar.addEventListener("click", limpar2)

    const deletar = document.querySelector("input.sairpagina")
    deletar.addEventListener("click", deletar2)

    const insertusu = document.querySelector('input.adicionar')
    insertusu.addEventListener("click", adicionar1)

    const atua1 = document.querySelector('input.atualizar')
    atua1.addEventListener("click", atualizarusu1)

    const listar = document.querySelector("input.show")
    listar.addEventListener("click", mostrar)

    const testar = document.querySelector("input.teste")
    testar.addEventListener("click", testar1)

    // Função sair da página

    function sair2() {
        localStorage.removeItem("usuariologado")
        window.location.href = "./index.html"
    }

    window.addEventListener("beforeunload", function () {
        localStorage.removeItem("usuariologado");
    })

    // Função mostrar os usuarios

    function mostrar() {
        let res = document.querySelector('div.res')
        res.innerHTML = ""

        for (let a = 0; a < usuarios.length; a++) {
            res.innerHTML += `Usuário ${[a + 1]}: ${usuarios[a].nome} (Senha - ${usuarios[a].senha})<br>`
        }

    }

    // função para limpar os usuários
    function limpar2() {
        let res = document.querySelector('div.res')

        res.innerHTML = ""

    }

    ////////////-------//////////////------/////////  DIVISÃO DE FUNÇÃO  //////////////------///////////////------////////////////////////// DIVISÃO DE FUNÇÃO //////////////------///////////////
    ////////////-------//////////////------/////////  DIVISÃO DE FUNÇÃO  //////////////------///////////////------////////////////////////// DIVISÃO DE FUNÇÃO //////////////------///////////////

    function deletar2() {
        let res = document.querySelector('div.res')
        res.innerHTML = ""

        for (let a = 0; a < usuarios.length; a++) {

            res.innerHTML += `<div><input type="checkbox" id="${a}"><label>Usuário ${[a + 1]}: ${usuarios[a].nome}<br></label></div>`
        }

        res.innerHTML += `<input type="button" value = "Deletar" id = "excl">`

        const excl = document.querySelector('input#excl');
        excl.addEventListener("click", excluir)

        function excluir() {

            let userdeletado = [""]

            for (let a = 0; a < usuarios.length; a++) {
                let checkbox = document.getElementById(`${a}`);

                if (checkbox.checked == true) {
                    userdeletado[a] = 1
                } else {
                    userdeletado[a] = 0
                }

            }

            for (let a = userdeletado.length - 1; a >= 0; a--) {
                if (userdeletado[a] == 1) {
                    usuarios.splice(a, 1);
                }

            }
            let res = document.querySelector('div.res')
            res.innerHTML = ""

            for (let a = 0; a < usuarios.length; a++) {
                res.innerHTML += `Usuário ${[a + 1]}: ${usuarios[a].nome}<br>`
            }

        }



    }

    ////////////-------//////////////------/////////  DIVISÃO DE FUNÇÃO  //////////////------///////////////------////////////////////////// DIVISÃO DE FUNÇÃO //////////////------///////////////

    function adicionar1() {
        let res = document.querySelector('div.res')
        res.innerHTML = ""
        res.innerHTML += `<form>
                        <label for="inputuseradd">Novo usuário:</label><br>
                        <input type="text" id="useradd"><br>
                        <label for="inputsenhadd">Senha novo usuário:</label><br>
                        <input type = "password" id="senhadd"><br>
                        <label for="inputconfirmadd">Confirmação:</label><br>
                        <input type = "password" id="confirmadd"><br></br>
                        <input type = "button" id="botaoadd" value="Adicionar Usuário"></form>`

        const adicionar3 = document.querySelector('input#botaoadd')
        adicionar3.addEventListener("click", adicionar2)
    }

    ////////////-------//////////////------/////////  DIVISÃO DE FUNÇÃO  //////////////------///////////////------////////////////////////// DIVISÃO DE FUNÇÃO //////////////------///////////////

    function adicionar2() {
        let novouser = {
            nome: document.querySelector('input#useradd').value,
            senha: document.querySelector('input#senhadd').value,
        }

        let confi = document.querySelector('input#confirmadd').value

        let barracao = 0

        if (confi == novouser.senha) {
            for (let a = 0; a < usuarios.length; a++) {
                if (usuarios[a].nome == novouser.nome) {
                    barracao = 1
                }
            }

            if (barracao == 0) {
                usuarios.push(novouser)
                alert("Usuário adicionado com sucesso")
                mostrar()

            } else {
                alert("Usuário já encontrado no banco de dados")
                adicionar1()
            }

        } else {
            alert("Senhas não coincidem, favor reescrevê-las!")
            adicionar1()
        }


    }

    // atualizar página

    function atualizarusu1() {
        let res = document.querySelector('div.res')
        res.innerHTML = ""
        res.innerHTML = ""
        res.innerHTML = ""

        

    }

    ////////////-------//////////////------/////////  DIVISÃO DE FUNÇÃO  //////////////------///////////////------////////////////////////// DIVISÃO DE FUNÇÃO //////////////------///////////////
    ////////////-------//////////////------/////////  DIVISÃO DE FUNÇÃO  //////////////------///////////////------////////////////////////// DIVISÃO DE FUNÇÃO //////////////------///////////////

    function testar1() {
        let res = document.querySelector('div.res')
        res.innerHTML = ""
        res.innerHTML = ""
        res.innerHTML = ""



    }


} else {
    const botao1 = document.querySelector("#btnentrar")
    botao1.addEventListener("click", logar)

    function logar() {
        let user = document.querySelector('input.usuario').value
        let pass = document.querySelector('input.pass').value
        let cont = 0


        for (i = 0; i < usuarios.length; i++) {

            if (usuarios[i].nome == user && usuarios[i].senha == pass) {
                alert(`Seja bem-vindo ${(usuarios[i].nome)}!`)
                localStorage.setItem("usuariologado", usuarios[i].nome)
                i = usuarios.length
                cont = 1
                window.location.href = './projetosite.html'
            }

        }
        if (cont == 0) {
            alert(`Usuário não encontrado, favor criar uma conta.`)

        }

    }

}




