/*Desafío isUniform()
 Se trata del DESAFÍO de la clase 11 que te proponemos que lo compartas en Discord cuando termines.

En este ejercicio deberás crear la Función isUniform que tome un Arreglo como Parámetro y devuelva true si todos los elementos del Arreglo son idénticos. De lo contrario, deberá devolver false.

⚠️ Importante: Salvo que sea necesario, tu Función no debe recorrer todo el Arreglo si no es idéntico. Es decir, al momento que encuentre una diferencia deberá cortar.

Usá este código para testear tu solución:*/



let arregloUno = [1, 1, 1, 1];
let arregloDos = [1, 2, 1, 1];
let arregloTres = ["a", "b", "p"];
let arregloCuatro = ["b", "b", "b"];


const isUniform = arr => arr.every(v => v === arr[0]);


console.log(isUniform(arregloUno)); // true
console.log(isUniform(arregloDos)); // false
console.log(isUniform(arregloTres)); // false
console.log(isUniform(arregloCuatro)); // true
