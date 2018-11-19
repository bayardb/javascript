var nome = prompt('Digite seu nome:');
var altura = prompt('Digite sua altura em cm:');
var peso = prompt('Digite seu peso em kg');
altura = parseFloat(altura);
peso = parseFloat(peso);
altura = altura / 100;
var M = peso / (altura * altura);
var IMC = ' '

if (M < 16) {
	document.write('Baixo peso muito grave');
}else if(M >= 16 && M <= 16.99)
{
	IMC = 'Baixo peso grave';
}
else if(M >= 17 && M <= 18.49)
{
	IMC = 'Baixo peso';
}else if(M >= 18,50 && M <= 24.99)
{
	IMC = 'Peso Normal';
}else if(M >= 25 && M <= 29.99)
{
	IMC = 'Sobrepeso';
}else if(M >= 30 && M <= 34.99)
{
	IMC = 'Obesidade Grau I';
}else if(M >= 35 && M <= 39.99)
{
	IMC = 'Obesidade Grau II';
}else if(M >= 40)
{
	IMC = 'Obesidade Grau III';
};
alert( nome+ ' possui índice de massa corporal igual a '+M+' , sendo classificado como: '+IMC )
