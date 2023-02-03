let numero1 = Number(prompt('Escolha um número!'))
let numero2 = Number(prompt('Escolha outro número!'))

console.log(`Seu primeiro número escolhido é: ${numero1}`)
console.log(`Seu segundo número escolhido é: ${numero2}`)
console.log(`O produto dos números escolhidos é: ${numero1 * numero2}`)

let operacao1 = numero1 > numero2
console.log(`O primeiro numero é maior que o segundo? ${operacao1}`)

let operacao2 = numero1 === numero2
console.log(`O primeiro numero é igual ao segundo? ${operacao2}`)

let operacao3 = numero1 % numero2 === 0
console.log(`O primeiro numero é divisível pelo segundo? ${operacao3}`)

let operacao4 = numero2 % numero1 === 0
console.log(`O segundo numero é divisível pelo primeiro? ${operacao4}`)


/*
const op1 = Number(prompt("escolha um numeros"))
const op2 = Number(prompt("escolha outro numero"))
console.log(op1,op2)
console.log("o primeiro numero é maior que o segundo" ,op1 > op2)
console.log("O primeiro numero é igual ao segundo " , op1 === op2)
console.log("O primeiro numero é divisível pelo segundo " , op1 % op2 === 0) 
console.log("O segundo numero é divisível pelo primeiro? " ,op2 % op1 === 0)
*/