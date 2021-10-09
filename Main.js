function pointOne(p) {
    console.log(p);
}
pointOne("Hola");

function add(num1, num2) {
    if (typeof (num1) != "number" && typeof (num2) != "number") {
        console.log("Lo que esta usando no es un número por favor enviame solo números")
    } else {
        let result;
        result = num1 + num2;
        console.log(result);
    }

}
add(12, 2);

function substract(num1, num2) {
    if (typeof (num1) != "number" && typeof (num2) != "number") {
        console.log("Lo que esta usando no es un número por favor enviame solo números")
    } else {
        let result;
        result = num1 - num2;
        console.log(result);
    }
}
substract(18, 3);

function multiply(num1, num2) {
    if (typeof (num1) != "number" && typeof (num2) != "number") {
        console.log("Lo que esta usando no es un número por favor enviame solo números")
    } else {
        let result;
        result = num1 * num2;
        console.log(result);
    }
}
multiply(18, 3);

function divide(num1, num2) {
    if (typeof (num1) != "number" && typeof (num2) != "number") {
        console.log("Lo que esta usando no es un número por favor enviame solo números")
    } else if (num2 == 0) {
        console.log("No se puede dividir un número por cero");
    } else {
        let result;
        result = num1 / num2;
        console.log("El resultado de la división es de: " + result);
    }
}
divide(18, 3);

function areaOfaCircle(r) {
    if (typeof (r) != "number") {
        console.log("Lo que esta usando no es un número por favor enviame solo números")
    } else {
        let area;
        area = 3.1416 * r * r;
        console.log("El area del circulo es de: " + area + "cm");
    }
}
areaOfaCircle(19);

function converter(m) {
    if (typeof (m) != "number") {
        console.log("Lo que esta usando no es un número por favor enviame solo números")
    } else {
        let kilometres;
        kilometres = (m * 1) / 1000;
        console.log("El valor en Kilometros corresponde a: " + kilometres.toFixed(2) + "km");
    }
}
converter(5000);

function converterToFahrenheit(c) {
    if (typeof (c) != "number") {
        console.log("Lo que esta usando no es un número por favor enviame solo números")
    } else {
        let Fahrenheit;
        Fahrenheit = c * (9 / 5) + 32;
        console.log("La temperatura pasada a grados Fahrenheit es: " + Fahrenheit.toFixed(2) + "°F");
    }
}
converterToFahrenheit(32);

function list(arr) {
    var min = arr[0];
    var max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] > max) {
            max = arr[i];
        }
        else if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log("El número mayor es: " + max);
    console.log("El número menor es:" + min);

}
list([11, 2, 23, 4])

function exponential(b, e) {
    if (typeof (b) != "number" && typeof (e) != "number") {
        console.log("Lo que esta usando no es un número por favor enviame solo números")
    } else {
        let potencia;
        potencia = b ** e;
        console.log("La Potencia con base " + b + " y con exponente " + e + " es: " + potencia);
    }
}
exponential(5, 3)

function country(cant){
    if(typeof(cant)!="number"){
        alert("Ingresa un número por favor");
    }else{   
        for(let i=0;i<cant;i++){
            var nameCountry=prompt("Ingrese el nombre del país");
            var lengthCharacters=nameCountry.length;
            alert("El País "+nameCountry+" tiene "+lengthCharacters+" Caracteres");
        }

    }
    
}
country(2);