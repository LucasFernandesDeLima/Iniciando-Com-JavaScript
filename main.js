//1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
function printHelloWorld() {
  alert('Hello World!')
}

//2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
function PrintSum() {
  let numberOne = Number(prompt('Digite o primeiro número'))
  let numberSecond = Number(prompt('Digite o segundo número'))
  let sum = numberOne + numberSecond

  alert('A soma resulto em: ' + sum)
}

//3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
function confirmNumber() {
  let value = 7

  if (typeof value !== 'number') {
    alert('Não é um número')
  } else {
    alert('É um número')
  }
}

//4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
function confirmString() {
  let value = 8

  if (typeof value != 'string') {
    alert('Não é uma string')
  } else {
    alert('É uma string')
  }
}

//5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
function confirmBooleano() {
  let value = 8

  if (typeof value != 'string') {
    alert('Não é uma booleano')
  } else {
    alert('É um booleano')
  }
}

//6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
function PrintSubtraction() {
  let numberOne = Number(prompt('Digite o primeiro número'))
  let numberSecond = Number(prompt('Digite o segundo número'))
  let subtraction = numberOne - numberSecond

  alert('A subtração resulto em: ' + subtraction)
}

//7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
function PrintMultiplication() {
  let numberOne = Number(prompt('Digite o primeiro número'))
  let numberSecond = Number(prompt('Digite o segundo número'))
  let multiplication = numberOne * numberSecond

  alert('A multiplicação resulto em: ' + multiplication)
}

//8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
function PrintDivision() {
  let numberOne = Number(prompt('Digite o primeiro número'))
  let numberSecond = Number(prompt('Digite o segundo número'))
  let division = numberOne / numberSecond

  alert('A divisão resulto em: ' + division)
}

//9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
function pritnIsAnEvenNumber() {
  let numberOfUser = Number(prompt('Digite um número qualquer'))
  let isAnEvenNumber = numberOfUser % 2 == 0

  isAnEvenNumber ? alert('É um número par') : alert('Não é um número par')
}

//10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
function pritnIsAnOddNumberr() {
  let numberOfUser = Number(prompt('Digite um número qualquer'))
  let isAnOddNumber = numberOfUser % 2 != 0

  isAnOddNumber ? alert('É um número ímpar') : alert('Não é um número ímpar')
}
