
function CallMenu() {
    let nro_ejercicio = parseInt(
        prompt("Ingrese el numero de ejercicio que quiera ejecuttar: \r\n 1. Suma. \r\n 2. Promedio de Exmenes \r\n 3. Calcular el área del rectangulo \r\n 4. Calcular el área del triangulo \r\n 5. Calcular el área del circulo \r\n 6. Calcular salario semanal \r\n 7. Convertir pulgadas \r\n 8. Cambiar a dolares \r\n 9. Calcular edad personal \r\n 10. Persona de menor edad \r\n 11. Bono por antiguedad \r\n 12. Aumento Salario Anual \r\n 13. Alumnos aprobados y desaprobados \r\n 14. Inventario de focos de colores \r\n 15. Electores para elecciones")
    );
    if (isNaN(nro_ejercicio)) {
        alert("Porfavor ingresa valores numericos");

    } else {
        MenuEjercicios(nro_ejercicio)
    }
}

function MenuEjercicios(nro_ejercicio) {
    switch (nro_ejercicio) {
        case 1:
            let valor1 = parseFloat(prompt("Ingrese el valor 1 a sumar:"));
            let valor2 = parseFloat(prompt("Ingrese el valor 2 a sumar:"));
            alert(ej1_sumaValores(valor1, valor2));
            break;

        case 2:
            let ex1 = parseFloat(prompt("Ingrese la primera nota:"));
            let ex2 = parseFloat(prompt("Ingrese la segunda nota:"));
            let ex3 = parseFloat(prompt("Ingrese la tercera nota:"));
            let ex4 = parseFloat(prompt("Ingrese la cuarta nota:"));
            alert(ej2_calcularPromedio(ex1, ex2, ex3, ex4));
            break;

        case 3:
            let base_rec = parseFloat(prompt("Ingrese base de rectangulo:"));
            let altura_rec = parseFloat(prompt("Ingrese altura de rectangulo:"));
            alert(ej3_calcularAreaRectangulo(base_rec, altura_rec));
            break;

        case 4:
            let base_tri = parseFloat(prompt("Ingrese base de triangulo:"));
            let altura_tri = parseFloat(prompt("Ingrese altura de triangulo:"));
            alert(ej4_calcularAreaTriangulo(base_tri, altura_tri));
            break;

        case 5:
            const pi_cir = 3.1416;
            let radio_cir = parseFloat(prompt("Ingrese radio del circulo:"));
            alert(ej5_calcularAreaCirculo(pi_cir, radio_cir));
            break;

        case 6:
            let hr_sem = parseFloat(prompt("Ingrese total horas trabajadas en la semana:"));
            let salario_hr = parseFloat(prompt("Ingrese el salario por hora:"));
            alert(ej6_calcularSalarioSemanal(hr_sem, salario_hr));
            break;

        case 7:
            const val_pulg = 0.0254;
            let cant_mts = parseFloat(prompt("Ingrese cantidad de metros a convertir:"));
            alert(ej7_calcularCantidadMetros(val_pulg, cant_mts));
            break;

        case 8:
            const cot_dolar = 3.78;
            let cant_soles = parseFloat(prompt("Ingrese cantidad de soles para cambiar:"));
            alert(ej8_calcularCambioDolares(cot_dolar, cant_soles));
            break;

        case 9:
            const today = new Date();
            let year_now = today.getFullYear();
            let anio_nac = parseFloat(prompt("Ingrese el año de su nacimiento:"));
            alert(ej9_calcularEdadPostulante(year_now,anio_nac));
        break;
    }
}

function ej1_sumaValores(valor1, valor2) {
    if (isNaN(valor1) || isNaN(valor2)) {
        return "Porfavor ingrese valores";
    } else {
        return `La suma de los valores es: ${valor1 + valor2}`;
    }
}

function ej2_calcularPromedio(ex1, ex2, ex3, ex4) {
    if (isNaN(ex1) || isNaN(ex2) || isNaN(ex3) || isNaN(ex4)) {
        return "Porfavor ingrese valores";
    } else {
        return `El promedio de notas es: ${(ex1 + ex2 + ex3 + ex4) / 4}`;
    }
}

function ej3_calcularAreaRectangulo(base_rec, altura_rec) {
    if (isNaN(base_rec) || isNaN(altura_rec)) {
        return "Porfavor ingrese valores";
    } else {
        return "El area del rectangulo es: " + base_rec * +altura_rec;
    }
}

function ej4_calcularAreaTriangulo(base_tri, altura_tri) {
    if (isNaN(base_tri) || isNaN(altura_tri)) {
        return "Porfavor ingrese valores";
    } else {
        return "El area del triangulo es: " + base_tri * +altura_tri / 2;
    }
}

function ej5_calcularAreaCirculo(pi_cir, radio_cir) {
    if (isNaN(pi_cir) || isNaN(radio_cir)) {
        return "Porfavor ingrese valores";
    } else {
        return "El area del circulo es: " + radio_cir * +radio_cir * pi_cir;
    }
}

function ej6_calcularSalarioSemanal(hr_sem, salario_hr) {
    if (isNaN(hr_sem) || isNaN(salario_hr)) {
        return "Porfavor ingrese valores";
    } else {
        return "El salario semanal es: " + hr_sem * +salario_hr;
    }
}

function ej7_calcularCantidadMetros(val_pulg, cant_mts) {
    if (isNaN(val_pulg) || isNaN(cant_mts)) {
        return "Porfavor ingrese valores";
    } else {
        return "El cambio de metros a pulgadas es: " + cant_mts / +val_pulg;
    }
}

function ej8_calcularCambioDolares(cot_dolar, cant_soles) {
    if (isNaN(cot_dolar) || isNaN(cant_soles)) {
        return "Porfavor ingrese valores";
    } else {
        return "Su cambio de soles a dolares es: " + cant_soles / +cot_dolar;
    }
}

function ej9_calcularEdadPostulante(year_now,anio_nac){
    if (isNaN(anio_nac)){
        return "Porfavor ingrese valores";
    }else{
        return `La Edad del potulante es: ${year_now-anio_nac} años`;
    }
}