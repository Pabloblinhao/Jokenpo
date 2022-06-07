// Jogo do jokenpô
// Para poder jogar basta escolher 3 elementos, sendo eles, pedra, papel ou tesoura.
// Mas aqui vou usar os seguintes nomes, pedra representando fogo, papel representando àgua e planta representando tesoura. 
 


const prompt = require("prompt-sync")();
console.clear()

const introducao = prompt("Bem vindo ao Jokempô dos Elemntos ! \nPressione [ENTER] para começar... \n")

let resposta = "s"

while (resposta.toLowerCase() == "sim" || resposta.toLowerCase() == "s") {
  console.clear()

  let numero_de_rodadas = prompt("Quantas rodadas deseja jogar? ")
    
  const fogo = 1
  const agua = 2
  const planta = 3
    
  let pontuacao_computador = 0
  let pontuacao_jogador = 0

  for(i = 1; i <= numero_de_rodadas; i++) {
    let jogada_computador = Math.floor(Math.random() * 3+1)
    console.log(`\nRodada ${i}`)
    let jogada = 0
    let jogada_jogador = prompt("Escolha [1]FOGO [2]ÀGUA ou [3]PLANTA: ")

    while (jogada_jogador != 1 && jogada_jogador.toLowerCase() != "fogo" && jogada_jogador != 2 && jogada_jogador.toLowerCase() != "agua" && jogada_jogador != 3 && jogada_jogador.toLowerCase() != "planta") {
      console.log("\nRESPOSTA INVÁLIDA!")
      jogada_jogador = prompt("Escolha [1]FOGO [2]ÀGUA ou [3]PLANTA: ")
    }

    if (jogada_jogador == 1 || jogada_jogador.toLowerCase() == "fogo") {
      console.log("Jogador: Fogo")
      jogada = 1
    } else if (jogada_jogador == 2 || jogada_jogador.toLowerCase() == "àgua") {
      console.log("Jogador: Àgua")
      jogada = 2
    } else if (jogada_jogador == 3 || jogada_jogador.toLowerCase() == "planta") {
      console.log("Jogador: Planta")
      jogada = 3
    }

    if (jogada_computador == 1) {
      console.log("Computador: Fogo")
    } else if (jogada_computador == 2) {
      console.log("Computador: Àgua")
    } else if (jogada_computador == 3) {
      console.log("Computador: Planta")
    }

    if (jogada == jogada_computador ) {
      console.log("EMPATE")
    } else if (jogada == 1 && jogada_computador == 2) {
      console.log("PERDEU")
      pontuacao_computador++
    } else if (jogada == 1 && jogada_computador == 3) {
      console.log("GANHOU")
      pontuacao_jogador++
    } else if (jogada == 2 && jogada_computador == 1) {
      console.log("GANHOU")
      pontuacao_jogador++
    } else if (jogada == 2 && jogada_computador == 3) {
      console.log("PERDEU")
      pontuacao_computador++
    } else if (jogada == 3 && jogada_computador == 1) {
      console.log("PERDEU")
      pontuacao_computador++
    } else if (jogada == 3 && jogada_computador == 2) {
      console.log("GANHOU")
      pontuacao_jogador++
    } 
    
    }
    console.log()
    const final = prompt("Pressione [ENTER] para ver os resultados.")
    console.clear()

    if (pontuacao_computador > pontuacao_jogador){
      console.log("\nO COMPUTADOR GANHOU")
      console.log(`Você: ${pontuacao_jogador} \nComputador: ${pontuacao_computador}`)
    } else if (pontuacao_computador < pontuacao_jogador){
      console.log("\nVOCÊ É O GRANDE VENCEDOR!")
      console.log(`Você: ${pontuacao_jogador} \nComputador: ${pontuacao_computador}`)
    } else if (pontuacao_computador == pontuacao_jogador){
      console.log("\nEMPATE")
      console.log(`Você: ${pontuacao_jogador} \nComputador: ${pontuacao_computador}`)
  }
  console.log()
  resposta = prompt("Deseja jogar novamente? ").toUpperCase();
}
console.log("Fim de jogo.")

