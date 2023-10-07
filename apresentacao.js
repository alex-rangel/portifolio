const  apresentacao = document.querySelector('#apresentacao')
const  corpo = document.querySelector('main')

corpo.style.display = "none"

function efeitoApres(){
    apresentacao.style.display = "none"
    corpo.style.display = "block"
}

setTimeout(efeitoApres,2600);