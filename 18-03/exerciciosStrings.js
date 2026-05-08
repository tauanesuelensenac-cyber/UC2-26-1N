//LISTA DE EXERCÍCIOS - STRINGS EM JAVASCRIPT

//Utilize o pacote readline-sync para entrada de dados quando necessário.Resolva cada exercício separadamente.
//const ask = require('readline-sync');
// 1)
// Peça para o usuário digitar um nome completo.
// Armazene esse valor em uma variável.
// Exiba no console:
// - O nome digitado
// - A quantidade total de caracteres do nome
/*
const ask = require('readline-sync');
let nome = ask.question("Qual é o seu nome? ");
console.log(nome, nome.length);

// 2)
// Peça para o usuário digitar uma frase.
// Exiba:
// - A frase toda em letras maiúsculas
// - A frase toda em letras minúsculas

const ask = require('readline-sync');
let frase = ask.question("Digite uma frase");

console.log(frase.toUpperCase())
console.log(frase.toLowerCase())

// 3)
// Declare uma variável que armazene a frase "  Socorram-me! Subi no onibus em Marrocos!      "
// Exiba:
// - O texto original
// - O texto sem os espaços desnecessários
// - O tamanho antes e depois da remoção dos espaços
 
let frase3 = "   Socorram-me!  "  Subi no onibus em Marrocos!      "
console.log(frase3)
console.log(frase3.trim())
console.log(frase3.length, frase3.trim().length)

// 4)
// Armazene em uma variável uma string com o nome de 5 frutas a sua escolha.
// Depois peça para o usuário digitar o nome de uma fruta qualquer.
// Exiba no console um boolean indicando se a string contém a palavra fruta pelo usuário.

let fruta = "Banana Maça Pere Kiwi Manga Morango"
let frutaQualquer = ask.question("Digite o nome de uma fruta")
console.log(`Sua fruta foi encontrada; ${fruta.includes(frutaQualquer)}´);

// 5)
// Peça para o usuário digitar uma frase.
// Peça também para o usuário digitar uma palavra que deseja substituir.
// Peça ainda uma nova palavra para substituição.
// Substitua todas as ocorrências da palavra informada pela nova palavra.
// Exiba o resultado.

let frase = ask.question("Digite uma frase");
let substituir = ask.question("Digite uma palavra que deseja substituir");
let palavraNova = ask.question("Digite uma Nova palavra")

let fraseAlterada = frase.repleceAll(substituida, palavraNova)

console.log(fraseAlterada)

// 6)
// Crie duas variáveis com valores numéricos definidos por você.
// Exiba:
// - A soma desses valores
// - Uma frase concatenada explicando o resultado, utilizando template string

let primeiroValor = 10
let segundoValor = 7
let resultado = primeiroValor + segundoValor
console.log(resultado)
console.log(`a soma de ${primeiroValor} e ${segundoValor} resultam em resultado´)

// 7)
// Peça para o usuário digitar qualquer valor.
// Exiba:
// - O valor digitado
// - O tipo desse valor usando typeof

const ask = require('readline-sync');
let valor = Number.ask.question("Digite um valor");

console.log(valor)
console.log(typeof valor)

// 8)
// Peça para o usuário digitar duas palavras e armazene em duas variáveis diferentes.
// Crie uma nova variável que seja a junção dessas palavras com um espaço entre elas.
// Exiba:
// - A frase final
// - O tamanho total da frase

const ask = require('readline-sync');
let frase = ask.question("Digite uma palavra: ");
let frase2 = ask.question("Digite mais uma palavra: ");
let juncao = `${frase}  ${frase2}´
console.log(juncao , juncao.length)

*/

// 9)
// Peça para o usuário digitar uma frase.
// Peça também para o usuário digitar uma letra.
// Transforme a frase para:
// - Toda em maiúsculas
// - Depois substitua todas as ocorrências da letra informada por "*"
// Exiba o resultado final.

const ask = require('readline-sync');
let frase = ask.question("Digite uma frase").toUpperCase()
let letra = ask.question("Digite uma letra").toUpperCase()
console.log(frase)
console.log(frase.replaceAll(letra, "*"))