//2 argumentos
/* let num1 = prompt("SUMAR - Ingrese Primer Numero");
let num2 = prompt("SUMAR - Ingrese Segundo Numero")

let sumar = +num1 + +num2;

document.write("el resultado final es: " ,sumar) */

//notas de 4 examenes
/* let a = prompt("Ingresar nota1")
let b = prompt("Ingresar nota2")
let c = prompt("Ingresar nota3")
let d = prompt("Ingresar nota4")

function sumarNotas(a, b, c, d) {
    return (+a + +b + +c + +d)/sumarNotas.length
}
let promedio = sumarNotas (a, b, c, d)

console.log("Promedio final", promedio) */


//calcular area de un rectangulo

/* let base = prompt ("Ingrese Base del rectangulo")
let altura = prompt ("Ingrese Altura del rectangulo")

let area = function (base, altura) {
    return (parseInt(base)*parseInt(altura))

}
console.log("Area del rectangulo; ", area(base, altura)) */

//calcular area de un triangulo

/* let base = prompt ("Ingrese Base del triangulo")
let altura = prompt ("Ingrese Altura del triangulo")

let area = function (base, altura) {
    return (parseInt(base)*parseInt(altura))/2

}
console.log("Area del triangulo: ", area(base, altura)) */

//calcular area de circunferencia

/* let radio = prompt("Ingrese radio del circulo")
const pi = 3.1416

let areaCirculo = pi*radio*radio

console.log(`Area de una circunferencia con radio ${radio} es: `, areaCirculo) */

//sueldo semanal de un trabajador
/* let horasTrabajo = prompt("Ingrese horas de trabajo toral en la semana")
let salarioHora = prompt("Ingrese salario del trabajador por hora")

let salario = horasTrabajo*salarioHora

console.log(`Salario semanal es ${salario} soles`) */

//modista de prendas
/* const pulg = 0.0254
let longitudMetros = prompt("Ingrese la meida en metros")

function convertir() {
    return longitudMetros/pulg
}

let pedido = convertir
console.log(pedido()) */

//cambio soles a dolares

/* let costoDolar = 3.78
let cantidadSoles = prompt("Ingrese la cantidad en soles")

function cambio() {
    return cantidadSoles/costoDolar
}

let divisas = cambio
console.log("Su cambio de soles a dolares es:" ,divisas()) */