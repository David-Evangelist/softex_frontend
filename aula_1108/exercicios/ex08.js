let salario = Number(prompt("Digite o salário: "));
let novoSalario;

if (salario < 2000) {
  novoSalario = salario * 1.15;

  //salario = salario * 1.15;
  salario *= 1.15;

  console.log(salario);
  console.log(novoSalario);
} else {
  salario *= 1.07;
  console.log(salario);
}

// let salario = Number(prompt("Digite o salário: "));

// if (salario < 2000) {
//   salario += salario * 0.15;
//   console.log(salario);
// } else {
//   salario += salario * 0.07;
//   console.log(salario);
// }
