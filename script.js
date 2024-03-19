/*
Criando a base de dados de filmes  
*/

const filmes = [
    {
    id: 0,
    nome: 'Harry Potter',
    genero: 'fantasia',
    lancamento: 2001
    },
    {
    id: 1,
    nome: 'Avatar',
    genero: 'fantasia',
    lancamento: 2010
    },
    {
     id:2,
     nome:'O senhor dos Anéis',
     genero: 'fantasia',
     lancamento: 2000,
    },
    {
     id:3,
     nome: 'Branquelas',
     genero: 'comédia',
     lancamento: 2007
    },
    {
     id:4,
     nome: 'A Lagoa Azul',
     genero: 'romance',
     lancamento: 1983
}]

/*
Criando um array de filmes favoritos
*/
let filmesFavoritos = []

/*
Pegando Elementos HTML
*/

//pega o elemento button
const btn1 = document.querySelector('button')
//pega a lista de filmes
const listaFilmes = document.querySelector('#listaFilmes')

/*
Ao carregar a página, executa a função que renderiza os elementos na tela
*/

window.onload = () => {
   renderizarLista()
}

/*
Função para renderizar filmes na tela
*/


const renderizarLista = () =>{
    //limpa a tela antes de renderizar
    listaFilmes.innerHTML = ""
    //percorre o array de filmes, inserindo um li com o nome do filme a cada volta do loop
    filmes.forEach((filme)=>{
        const itemLista = document.createElement('li')
        //adiciona o li à lista de filmes
        listaFilmes.append(itemLista)
        //adiciona o filme que o usuário digitou à lista
        itemLista.innerHTML = `Meu filme ${filme.nome}`

        
        //cria uma nova imagem
        const favorito = document.createElement('img')
        //adiciona imagem ao item img
        favorito.src = 'img/heart.svg'
        //muda o cursor da imagem para mãozinha de clique
        favorito.style.cursor = 'pointer'
        //adiciona evento de clique à imagem
        favorito.addEventListener('click',(e)=>{
            favoritoClicado(e,filme)
        })
        //adiciona a imagem ao item da lista
        itemLista.append(favorito)
    })
}

