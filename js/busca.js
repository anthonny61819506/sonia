const formaBusca = document.querySelector('.busca');
const campoBusca = document.querySelector('.busca__campo');
const itensCatalogo = document.querySelectorAll('.bordados');

//verificar se o formulario de busca existe na pagina
if (formaBusca) {
    formaBusca.addEventListener('submit', function (e) {
        e.preventDefault();

        })
    }

//agora vamos verificar o texto que foi digitado

    campoBusca.addEventListener('input', function () {

        //converter o texto para minusculo para facilitar a comparação
        const termoBusca = campoBusca.value.toLowerCase()

        //vamos verificar todas as seções de bordados
        itensCatalogo.forEach(function (item) {
            
            //pegar o elementos que tem o texto do bordado
            const titulo = item.querySelector('h3').innerText.toLowerCase();

            //verificar se o termo de busca é igual ao titulo
            if(titulo.includes(termoBusca)){
                item.style.display = "block"; //mostrar o item
            } else {
                item.style.display ="none"; //ocultar o item
            }
        })
    })