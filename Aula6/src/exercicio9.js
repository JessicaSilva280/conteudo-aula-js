// Exercício 9: Escreva um algoritmo para ler as dimensões de um trapézio (base maior, base menor e altura), calcular e escrever a área do trapézio

alert("Área de um Trapézio");

let baseMaior = parseFloat(prompt("Informe o valor da base maior: "));
let baseMenor = parseFloat(prompt("Informe o valor da base menor: "))
let altura = parseFloat(prompt("Informe o valor de altura da altura do Trapézio"))

let resultado = ((baseMaior+baseMenor) * altura) /2;

alert(`O resultado da operação é:` + resultado);

