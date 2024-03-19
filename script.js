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
