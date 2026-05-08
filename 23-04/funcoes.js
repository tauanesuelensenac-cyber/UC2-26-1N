/*
//Questao 1

function imprimirOlaMundo(){
    console.log("olá mundo")
}  
    imprimirOlaMundo()
//Questao 2 

function calcularArea(altura, largura){
   const area = altura * largura 
    console.log(area)
}
calcularArea(2, 6)

//Questao 3

function imprimirMensagem(nome){
    console.log(`ola ${nome}`)
 }

 imprimirMensagem("Leo")
 imprimirMensagem("Tau")
 imprimirMensagem("Dani")

//Questao 4

function testeVariavel(){
    let number = 5
    console.log(number)
}
testeVariavel()
//variavel de escopo global

let variavelGlobal = `esta eh variavel global`
function funcao1(){
    let variavelLocal = `esta eh a variavel local`
    console.log(variavelLocal)

}

function calcularArea(altura, largura){
    const area = altura * largura
    return area

}
console.log(calcularArea(5, 8))
let areaCalculada = calcularArea(7, 9)
//console.log(areaCalculada > 60)
console.log(calcularArea(7,12) > 100)

//Questao 5

function somar(number1, number2){
    return number1 + number2

}
let somaFinal = somar(5, 10)
somar(5, 10)
console.log(somaFinal)
*/
let variavelArray = [1, 2, 3, 4, 5, 6, 9]

function exercicios4(array){
  let novoArray = []
  novoArray.push((array[array.length -1])/2)
  novoArray.push((array[0])/2)
  return novoArray
}
console.log(exercicios4(variavelArray))


