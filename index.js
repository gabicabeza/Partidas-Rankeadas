// Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
// depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

// Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100= Lendário
// Se vitórias for maior ou igual a 101 = Imortal

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

let playerResults = calc(50, 10)
let level

if (playerResults < 10) {
    level = "Ferro"
} else if (playerResults >= 11 && playerResults <= 20){
    level = "Bronze"
} else if (playerResults >= 21 && playerResults <= 50){
    level = "Prata"
} else if (playerResults >= 51 && playerResults <= 80){
    level = "Ouro"
} else if (playerResults >= 81 && playerResults <= 90){
    level = "Diamante"
} else if (playerResults >= 91 && playerResults <= 100){
    level = "Lendário"
} else {
    level = "Imortal"
}

console.log("O Herói tem saldo de vitórias "+ playerResults, "e está no nível "+ level )

function calc(wins, loses){
    let balance = wins - loses
    return balance
}