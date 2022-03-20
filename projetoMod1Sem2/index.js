console.clear()
const prompt = require('prompt-sync')();

let continuar = "S"

while (continuar == "S"){

console.log(`Jokenpô\n`)

const jokenpo = ['Pedra','Papel','Tesoura']

let vitoriasJogador = 0
let vitoriasComputador = 0 

let quantidadeRodadas = +prompt(`Quantas rodadas vamos jogar?`)
for ( let i = 0 ; i < quantidadeRodadas ; i++){
console.log("\n[0]Pedra\n[1]Papel\n[2]Tesoura\n")
 const escolhaJogador = +prompt('Qual sua escolha?')
  const escolhaComputador = Math.floor(Math.random() * 3)

console.log(`Você escolheu ${jokenpo[escolhaJogador]}`)
console.log(`O computador escolheu ${jokenpo[escolhaComputador]}`)

if (escolhaJogador == 0 && escolhaComputador == 2 || escolhaJogador == 1 && escolhaComputador == 0 || escolhaJogador == 2 && escolhaComputador == 1){
    console.log(`VOCÊ VENCEU`)
    vitoriasJogador++
} else if (escolhaComputador == 0 && escolhaJogador == 2 || escolhaComputador == 1 && escolhaJogador == 0 || escolhaComputador == 2 && escolhaJogador == 1){
    console.log(`COMPUTADOR VENCEU`)
      vitoriasComputador++
  } else if (escolhaComputador == escolhaJogador){
    console.log(`EMPATE`)
  } else {console.log(`Opção não é válida`)}
}

console.log(`\nO computador possui ${vitoriasComputador} vitórias.`)
  console.log(`O jogador possui ${vitoriasJogador} vitórias.`)

if (vitoriasComputador > vitoriasJogador){
  console.log(`O Computador é o ganhador!`)
} else if (vitoriasJogador > vitoriasComputador){
  console.log(`O Jogador é o ganhador!`)
}
  else {
  console.log(`O Jogo empatou, jogue novamente!`)
}

continuar = prompt(`Deseja jogar novamente? [S/N]`).toUpperCase()
  while (continuar != "S" && continuar != "N"){
    continuar = prompt(`Deseja jogar novamente? [S/N]`).toUpperCase()
  }
}

console.log("Fim de Jogo!!!")