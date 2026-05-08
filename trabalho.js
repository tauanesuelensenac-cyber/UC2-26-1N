const ask = require(`readline-sync`);
let opção = ask.question(`Escolha um valor: \n soma: 1 \n subtracao: 2 \n divisao: 3 \n multiplicacao: 4 \n resto da divisao: 5 \n numero escolhido:  `)

function soma(num, num1){
    return num + num1
}
function subtracao(num2, num3){
    return num2 - num3
}
function divisao(num4, num5){
    return num4 / num5
}
function multiplicacao(num6, num7){
    return num6 * num7
}
function restodadivisao(num8, num9){
    return num8 & num9
}

switch (opção){
    case `1`:
    const num = Number(ask.question(`Escolha um numero de 1 a 5: `))
    const num1= Number(ask.question(`Escolha um numero de 1 a 5: `))
    console.log(soma(num, num1))
    break
    
    case `2`:
        const num2 = Number(ask.question(`Escolha um numero de 1 a 5: `))
        const num3 = Number(ask.question(`Escolha um numero de 1 a 5: `))
        console.log(subtracao(num2, num3))
        break

    case `3`:
        const num4 = Number(ask.question(`Escolha um numero de 1 a 5: `))
        const num5 = Number(ask.question(`Escolha um numero de 1 a 5: `))
        console.log(divisao(num4, num5))
        break

        case `4`:
            const num6 = Number(ask.question(`Escolha um numero de 1 a 5: `))
            const num7 = Number(ask.question(`Escolha um numero de 1 a 5: `))
            console.log(multiplicacao(num6, num7))
            break

        case `5`:
            const num8 = Number(ask.question(`Escolha um numero de 1 a 5: `))
            const num9 = Number(ask.question(`Escolha um numero de 1 a 5: `))
            console.log(restodadivisao(num8, num9))
            break

        default:
            console.log(`Numero nao encontrado`)
            break
}
