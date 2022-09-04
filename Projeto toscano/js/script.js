var operacoesMat = ['Multiplicação', 'Divisão', 'Soma', 'Subtração'];
var x = 0;
var y =0;
var result = 0
var qualOperacao
var h1Result
var divResultado
const operacoes = document.getElementById("operacoes")



operacoesMat.forEach((language) => {
    option = new Option(language, language.toLowerCase());
    operacoes.options[operacoes.options.length] = option;
});

var butaoAcionador = document.querySelector('#teste')
butaoAcionador.addEventListener('click', start)

function start(){
    limpaResultado()
    recebeOperacao()
    recebeValores()

}

function recebeValores(){
    var valorOp1 = Number(document.querySelector('#primeiroInput').value)
    x = valorOp1;
    var valorOp2 = Number(document.querySelector('#segundoInput').value)
    y = valorOp2;
    console.log(x)
    console.log(y)
    calculadora()
}

function recebeOperacao(){
  var select = document.getElementById('operacoes');
  qualOperacao = select.options[select.selectedIndex].value;
  console.log(qualOperacao);
}

function calculadora(){
  if(qualOperacao == 'multiplicação'){
    result = x * y;
  } else if(qualOperacao == 'divisão'){
    result = x / y;
  } else if(qualOperacao == 'subtração'){
    result = x - y;
  } else if(qualOperacao == 'soma'){
    result = x + y; 
  }
  exibirResultado()
}

function exibirResultado(){
  divResultado = document.querySelector('#resultado')
  h1Result = document.createElement('h1')
  h1Result.textContent = 'O resultado da sua conta é ' + result + '!'; 
   divResultado.appendChild(h1Result)
   
}

function limpaResultado(){
  divResultado = document.querySelector('#resultado')
  divResultado.textContent = '';
}

limpaResultado()