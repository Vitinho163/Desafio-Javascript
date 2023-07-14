// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.

alert("Hello World!")

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

let numberOne = 20
let numberTwo = 10

let soma = numberOne + numberTwo

alert(`A soma de ${numberOne} + ${numberTwo} é ${soma}`)

// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

let IsNumber = 'Anderson'

if(IsNumber == Number) {
  alert("É um número")
} else {
  alert("Não é um número.")
}

// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

let IsString = 22

if(IsString == String) {
  alert("É uma string")
} else {
  alert("Não é uma string")
}

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

let IsBoolean = false 

if(typeof IsBoolean == 'boolean') {
  alert("É um booleano")
} else {
  alert("Não é um booleano")
}

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

let subNumberOn = '30'
let subNumberTwo = '10'

let subtração = subNumberOn - subNumberTwo

alert(`A subtração de ${subNumberOn} e ${subNumberTwo} é ${subtração}`)

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

let multNumberOn = '40'
let multNumberTwo = '20'

let multiplicação = multNumberOn * multNumberTwo

alert(`A multiplicação entre ${multNumberOn} e ${multNumberTwo} é ${multiplicação}`)

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

let restNumberOn = '50'
let restNumberTwo = '30'

let restoDivisao = restNumberOn % restNumberTwo

alert(`O resto da divisão entre ${restNumberOn} e ${restNumberTwo} é ${restoDivisao}`)

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

let isPar = '5'

if (isPar % 2 === 0) {
  alert("É um número par");
} else {
  alert("Não é um número par"); 
}

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

let Isimpar = '2'

if(Isimpar % 2 !== 0) {
  alert("É um número ímpar")
} else {
  alert("Não é um número ímpar")
}