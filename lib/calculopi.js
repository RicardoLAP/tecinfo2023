const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularPerimetroCirculo(raio) {
  const PI = 3.14159;
  return 2 * PI * raio;
}

rl.question('Digite o raio do círculo: ', (entrada) => {
  const raio = parseFloat(entrada);

  if (!isNaN(raio) && raio >= 0) {
    const perimetro = calcularPerimetroCirculo(raio);
    
    console.log(`O perímetro do círculo é: ${perimetro.toFixed(4)}`);
  } else {
    console.log('Entrada inválida. Por favor, insira um número válido.');
  }

  rl.close();
});
