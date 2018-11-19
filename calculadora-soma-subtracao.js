
var num1 = prompt('Informe o primeiro numero da operação:');
var operador = prompt('Infrome qual operação deseja realizar (soma ou subtração)');
var num2 = prompt('Informe o segundo numero da operação:');

num1 = parseInt(num1)
num2 = parseInt(num2)

if (operador == 'soma' || operador == 'Soma')
{
operador = 'TRUE'
}
else if(operador == 'subtração' || operador == 'Subtração' || operador == 'subtraçao' ||operador == 'subtracão')
{
	operador = 'FALSE'
}
else{
	document.write('Voce digitou uma opcao invalida'+'<br>');
  operador = 'inv'
}
;

function opera(num1,operador,num2)
{
if (operador == 'inv')
{
break;
}
else if (operador == 'TRUE')
{
return(num1 + num2 )
}
else{
return(num1 - num2)
};
};

document.write('O resultado da função eh:'+ opera(num1,operador,num2));

