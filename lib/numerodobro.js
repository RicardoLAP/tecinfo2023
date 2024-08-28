function imprimirDobro() {
      
      let entrada = prompt("Digite um número:");

      
      let numero = parseFloat(entrada);

      
      if (!isNaN(numero)) {
        
        let dobro = numero * 2;
        
        
        document.write("O dobro do número é: " + dobro);
      } else {
        document.write("Entrada inválida.");
      }
    }