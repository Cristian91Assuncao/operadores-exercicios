//PARTE 1
const operacao1 = 5 > 20 && 5 < 2
const operacao2 = 5 === 5 || 5 === "5"
const operacao3 = !(20 > 50)
const operacao4 = !(20 > 50 || 50 > 60)

console.log(`5 é maior que 20 E também é menor que 2: ${operacao1}`)
console.log(`5 é igual a 5 OU é igual a “5”: ${operacao2}`)
console.log(`negação de (vinte é maior que cinquenta: ${operacao3}`)
console.log(`negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta): ${operacao4}`)


//PARTE 2

const salario = 2000
const auxCreche = (45.5 * 2)
const comissao = 0.1
const inss = 0.05
const vendasJan = 5784.50
const vendasFev = 3418.41
const vendasMar = 4124.10
const vendasAbr = 1874
const vendasMai = 7000
const vendasJun = 9450

// 1)
const salarioMaisAux = salario + auxCreche
console.log(`O salário fixo mais o auxílio creche: ${salarioMaisAux}`)

// 2)
const comissaoJaneiro = vendasJan * comissao
console.log(`Quanto receberá de comissão em janeiro: ${comissaoJaneiro}`)

// 3)
const descontoJanInss = (salarioMaisAux + comissaoJaneiro) * inss
console.log(`Quanto será descontado em janeiro pelo INSS: ${descontoJanInss}`)

// 4)

const salarioTotal = salario * 6
const auxTotal = auxCreche * 6
const comissaoTotal = (vendasJan + vendasFev + vendasMar + vendasAbr + vendasMai + vendasJun) * comissao
const descontoInssTotal = (salarioTotal + auxTotal + comissaoTotal) * 0.05

const salarioBrutoTotal = (salarioTotal + auxTotal + comissaoTotal) - (salarioTotal + auxTotal + comissaoTotal) * inss
console.log(`O cálculo do salário de todos os meses com acréscimos e descontos: ${salarioBrutoTotal}`)

// 5)
const mediaSalario = salarioBrutoTotal / 6
console.log(`A média do salário em seis meses: ${mediaSalario}`)