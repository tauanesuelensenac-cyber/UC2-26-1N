//Questão 1
/*
function criarUsuario(nome, idade, cidade, hobbies) {
    //let user1 = criarUsuario("João", 25, "Porto Alegre", ["música", "jogos"])
    return [nome, idade, cidade, hobbies]
}
//console.log(criarUsuario())

//Questão 2

function formatarHobbies(hobbies) {
    return hobbies.join(", ")

} 
console.log(formatarHobbies())

//Questão 3
/*

function gerarDescricao(usuario) {
    let usuario = `${usuario[0]} tem ${usuario[1]} anos, mora em ${usuario[2]}, gosto de escutar: ${usuario[3].join(" , ")}`
    return usuario
}
//console.log(gerarDescricao())

//Questão 4 
function adicionarUsuario(usuarios, usuario) {
    usuarios.push(usuarios, usuario)
    return usuarios
}
//console.log(adicionarUsuario("tau", "mari"))

function gerarRelatorio(usuarios) {
    let frase = `Total de usuários: ${(usuarios1.length)}`
    return frase
}
//console.log(gerarRelatorio())

//Desafio Extra

// function listarDescricoes(usuarios) {
//     let fraseMaiuscula = usuarios.toUpperCase()
//     return fraseMaiuscula
// }
// console.log(listarDescricoes(`tauane`))

// function listarCidades(usuarios) {
//     let lista = [`porto alegre`, `coreia`, `paris`]
//     return lista
// }
// console.log(listarCidades())



//-----------------------------------------------------
const usuarios1 = []

let user1 = criarUsuario('Tauane', 23, 'Sapucaia', ['Dar tiro pro alto', 'Caçar galinha', 'Caridade'])

let hobbiesFormatados = formatarHobbies(user1[3])

const ask = require('readline-sync')

function criarUsuario(nome, idade, cidade, hobbies) {
    return [nome, idade, cidade, hobbies];
}

function formatarHobbies(hobbies) {
    return hobbies.slice(0, -1).join(', ') + ' e ' + hobbies.slice(-1);
}

function gerarDescricao(usuario){
    return `${usuario[0]} tem ${usuario[1]} anos, mora em ${usuario[2]} e gosta de ${formatarHobbies(usuario[3])}`
}

function adicionarUsuario(usuarios, usuario){
    let usuarioAtualizado = [...usuarios, usuario]
    return usuarioAtualizado
}

function gerarRelatorio(usuarios){
    return `Total de usuarios: ${usuarios.length}`
}


//----------------------------------------------




let usuarios = []

// CRIACAO DO USUARIO ---------
let nome = ask.question('Digite seu nome: ')
let idade = Number(ask.question('Digite sua idade: '))
let cidade = ask.question('Digite sua cidade: ')
let primeiroHobby = ask.question('Digite seu primeiro Hobbie: ')
let segundoHobby = ask.question('Digite o segundo hobby: ')
let terceiroHobby = ask.question('Digite o terceiro hobby: ')
let user1 = criarUsuario(nome, idade, cidade, [primeiroHobby, segundoHobby, terceiroHobby])
usuarios = adicionarUsuario(usuarios, user1)
//-----------


console.clear()
console.log(gerarDescricao(user1))
console.log(gerarRelatorio(usuarios))
*/