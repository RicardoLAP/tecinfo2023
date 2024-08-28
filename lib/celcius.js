const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite a temperatura em Celsius: ', (entrada) => {
  const celsius = parseFloat(entrada);
  if (isNaN(celsius)) {
    console.log('Entrada inválida.');
  } else {
    const fahrenheit = (celsius * 9 / 5) + 32;
    console.log(`A temperatura em Fahrenheit é: ${fahrenheit.toFixed(1)}`);
  }
  rl.close();
});
