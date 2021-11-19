// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
let alturaRetangulo = Number(prompt("Informe a altura do retângulo"))
let larguraRetangulo = Number(prompt("Indique a largura do retângulo"))

console.log (alturaRetangulo * larguraRetangulo)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
const anoAtual = Number(prompt("Em que ano estamos?"))
const anoNascimento = Number(prompt("Qual ano você nasceu?"))

console.log (anoAtual - anoNascimento)
}


// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

return peso/(altura*altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
const nomeUser = prompt("Qual seu nome?")
const idadeUser = prompt ("Qual sua idade?")
const emailUser = prompt ("Qual é seu email?")

console.log ("Meu nome é " + nomeUser +  "," + " tenho " + idadeUser + " anos, e o meu email é " + emailUser + ".")
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const cor1 = prompt("Qual sua cor favorita?")
const cor2 = prompt("Qual sua segunda cor favorita?")
const cor3 = prompt("Qual sua terceira cor favorita?")

const listaDeCores = [cor1, cor2, cor3]

console.log (listaDeCores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
return ((string).toUpperCase())
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo/valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
return array[array.length - 1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let novoArray = array.slice()
  novoArray [array.length-1] = array[0]
  novoArray[0] = array [array.length-1]
  
  return novoArray

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
 string1 = string1.toLowerCase()
 string2 = string2.toLowerCase()
return string1 === string2
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
const esseAno = Number(prompt("Qual o ano atual?"))
const anoNasceu = Number(prompt("Qual ano nasceu?"))
const anoEmissaoId = Number(prompt("Qual ano foi emitida sua carteira de identidade?"))

let idade = esseAno - anoNasceu
let validade = esseAno - anoEmissaoId

if (((idade <= 20 && validade >= 5) || (idade > 20 && idade <= 50 && validade >= 10) || (idade > 50 && validade >= 15))) {
  console.log (true)
} else {
  console.log (false)
}
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
 const cond1 = (ano % 400 == 0) 
 const cond2 =  (ano % 4 == 0)
 const cond3 = (ano % 100 != 0)

 return cond1|| cond2 && cond3
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
const maiorDeidade = prompt("Você tem mais de 18 anos?")
const ensinoMedio = prompt("Você possui ensino médio completo?")
const disponHorario = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

const inscricaovalda = (maiorDeidade === "sim" && ensinoMedio === "sim" && disponHorario === "sim")

console.log (inscricaovalda)
}