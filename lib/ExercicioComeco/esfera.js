const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const PI = 3.14159;

function calcularVolumeEsfera(raio) {
  return (4 / 3) * PI * Math.pow(raio, 3);
}

rl.question('Digite o raio da esfera: ', (entrada) => {
  const raio = parseFloat(entrada);
  if (isNaN(raio) || raio < 0) {
    console.log('Entrada inválida. Por favor, insira um número válido.');
  } else {
    const volume = calcularVolumeEsfera(raio);
    console.log(`O volume da esfera é: ${volume.toFixed(4)}`);
  }
  rl.close();
});
