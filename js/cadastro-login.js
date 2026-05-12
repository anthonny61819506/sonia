const FORM_CADASTRAR = document.getElementById('form-cadastrar')

if (FORM_CADASTRAR) {
    FORM_CADASTRAR.addEventListener('submit', function (event) {
        event.preventDefault()

        const usuario = {
            nome: document.getElementById('nome').value,
            sobrenome: document.getElementById('sobrenome').value,
            email: document.getElementById('email').value,
            senha: document.getElementById('senha').value,
            ddd: document.getElementById('ddd').value,
            telefone: document.getElementById('telefone').value,
            endereco: document.getElementById('endereco').value,
            cidade: document.getElementById('cidade').value,
            dataNascimento: document.getElementById('data-nascimento').value,
            cep: document.getElementById('cep').value,
            genero: document.getElementById('genero').selectedOptions[0].text,
        }

        localStorage.setItem('usuarioCadastrado', JSON.stringify(usuario))
        alert('Cadastro realizado com sucesso!')
        window.location.href = 'login.html'
    })
}

// parte de login
const FORM_LOGIN = document.getElementById('form-login')

if (FORM_LOGIN) {
    FORM_LOGIN.addEventListener('submit', function (event) {
        event.preventDefault()

            const usuarioCadastrado = localStorage.getItem('usuarioCadastrado')
            
            if (usuarioCadastrado) {
                const usuarioEncontrado = JSON.parse(usuarioCadastrado)

            if (emailDigitado === usuarioEncontrado.email && senhaDigitada === usuarioEncontrado.senha) {
                alert('Login realizado com sucesso!')
                window.location.href = 'index.html'
            } else {
                alert('Email ou senha incorretos!')
            }
        } else {
            alert('Nenhum usuário cadastrado encontrado!')
        }
    })
}

        