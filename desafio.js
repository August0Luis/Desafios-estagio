//Testar os codigos no console do navegador

// Desafio 1
let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}

console.log("O valor da variável SOMA é:", SOMA);

// Desafio 2
function verificarFibonacci(numero) {
    let a = 0;
    let b = 1;
    while (b < numero) {
        const temp = b;
        b = a + b;
        a = temp;
    }
     if (b === numero) {
        return true;
    } else {
        return false;
    }
}

const numeroVerificar = 21;

const pertenceFibonacci = verificarFibonacci(numeroVerificar);

if (pertenceFibonacci) {
    console.log(numeroVerificar + " pertence à sequência de Fibonacci.");
} else {
    console.log(numeroVerificar + " não pertence à sequência de Fibonacci.");
}

// Desafio 3
// Sequência a)
const proximoA = 7 + 2;
console.log("Próximo número da sequência a):", proximoA);

// Sequência b) 
const proximoB = 64 * 2;
console.log("Próximo número da sequência b):", proximoB);

// Sequência c)
const proximoC = 6 * 6;
console.log("Próximo número da sequência c):", proximoC);

// Sequência d) 
const proximoD = 10 * 10;
console.log("Próximo número da sequência d):", proximoD);

// Sequência e) 
const proximoE = 8 + 5;
console.log("Próximo número da sequência e):", proximoE);

// Sequência f) 
const proximoF = 19 + 1;
console.log("Próximo número da sequência f):", proximoF);

//Desafio 4
// Primeira ida
console.log("\nPrimeira ida:");
console.log("Ligue o primeiro interruptor e espere alguns minutos.");
console.log("Desligue o primeiro interruptor e ligue o segundo interruptor.");
console.log("Entre na sala.");

// Segunda ida
console.log("\nSegunda ida:");
const lâmpadaAcesa = prompt("A lâmpada está acesa? (s/n)");
if (lâmpadaAcesa === 's') {
    console.log("O segundo interruptor controla esta lâmpada.");
} else {
    const lâmpadaQuente = prompt("A lâmpada está quente? (s/n)");
    if (lâmpadaQuente === 's') {
        console.log("O primeiro interruptor controla esta lâmpada.");
    } else {
        console.log("O terceiro interruptor controla esta lâmpada.");
    }
}

//Desafio 5
const stringOriginal = "Hello, world!";
function inverterString(string) {
    let stringInvertida = '';
    for (let i = string.length - 1; i >= 0; i--) {
        stringInvertida += string[i];
    }
    return stringInvertida;
}

const stringInvertida = inverterString(stringOriginal);

console.log("String original:", stringOriginal);
console.log("String invertida:", stringInvertida);


