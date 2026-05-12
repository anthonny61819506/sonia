// bancode dados
const nomeUsuario = "pessoa1@exemplo.com"
const senha = "senhaUsuario1"
const nomeUsuario2 = "pessoa2@exemplo.com"
const senha2 = "senhaUsuario2"

//variaveis de login
let nomeDigitado = prompt("Digite seu email:")
let senhaDigitada = prompt("Digite sua senha:")

//verificação de login
if ((nomeDigitado === nomeUsuario && senhaDigitada === senha))
{
    alert("login realizado com sucesso! bem vindo," + nomeUsuario + "!")

}else
{
    alert("email ou senha incorretos!")
    document.body.classList.add("acesso_negado")
    document.getElementById("banner_image").src = "images/OIP.png"
}