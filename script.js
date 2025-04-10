let n1 = Number(prompt("Digite o primeiro número: "));
let n2 = Number(prompt("Digite o segundo número: "));

soma = n1; soma += n2;
subtracao = n1; subtracao -= n2;
multiplicacao = n1; multiplicacao *= n2;
divisao = n1; divisao /= n2;
resto = n1; resto %= n2;

console.log(`O resultado da soma é ${soma}`);
console.log(`O resultado da subtração é ${subtracao}`);
console.log(`O resultado da multiplicação é ${multiplicacao}`);
console.log(`O resultado da divisão é ${divisao}`);
console.log(`O resto desse cálculo é ${resto}`);
