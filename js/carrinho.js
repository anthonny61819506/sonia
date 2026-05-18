const botoesBordados = document.querySelectorAll('.btn-adicionar')

//agora vamos criar o carrinho de compras
let carrinho = JSON.parse(localStorage.getItem('itemCarrinho')) || []

//função para adicionar itens ao carrinho
botoesBordados.forEach(function (botao) {
    botao.addEventListener('click', function() {

        //recebe dados do botao
        const nomeProduto = botao.getAttribute('data-nome')
        const precoProduto = botao.getAttribute('data-preco')

        //criar um objeto para o item do carrinho
        const itemCarrinho = {
            nome: nomeProduto,
            preco: precoProduto

    }   //adiciona o item ao carrinho
        carrinho.push(itemCarrinho)
        localStorage.setItem('itemCarrinho', JSON.stringify(carrinho))

        //salva o carrinho no localStorage
        localStorage.setItem('itemCarrinho', JSON.stringify(carrinho))

        //exibe uma mensagem de confirmação
        botao.innertText = "Adicionado!"
        botao.classList.replace('btn-primary', 'btn-success')

        //depois de um tempo, a mensagem some
        setTimeout(() => {
            botao.innertText = "Adicionado!"
            botao.classList.replace('btn-success', 'btn-primary')
        }, 2000)
    })
})