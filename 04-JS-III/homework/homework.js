// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array.shift()
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1]
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  let increased = [];
  for(i in array){
    let element = array[i]
    if(Number.isInteger(element)){
      element += 1;
      increased.push(element);
    }
  }
  return increased
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento)
  return array
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento)
  return array
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(" ")
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for(elem in array){
    if(array[elem] === elemento){
      return true
    }
  }
  return false
}

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let acum = 0;
  for(num in numeros){
    if(Number.isInteger(numeros[num])){
      acum += numeros[num];
    }
  }
  return acum
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let acum = 0;
  for(resultado in resultadosTest){
    if(Number.isInteger(resultadosTest[resultado])){
      acum += resultadosTest[resultado];
    }
  }
  return acum / resultadosTest.length
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let mayor = 0;
  for(num in numeros){
    let n = numeros[num];
    if(Number.isInteger(n)){
      if(n > mayor){
        mayor = n;
      }else continue
    }
  }
  return mayor
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  let valores = Object.values(arguments);
  let acum = 1;
  console.log(valores.length)
  if(valores.length === 0){
    return 0
  }else if(valores.length === 1){
    return valores[0]
  }else{
    for( valor in valores){
      let n = valores[valor]
      acum *= n;
    }
  }
  return acum;
}

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let counter = 0;
  for(num in arreglo){
    if(arreglo[num] > 18){
      counter++
    }
  }
  return counter
}

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí
  return numeroDeDia === 1 || numeroDeDia === 7 ? "Es fin de semana" : "Es dia Laboral"
} 

console.log(diaDeLaSemana())

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  return String(n).charAt(0) === '9' ? true : false 
}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  let counter = 0;
  for(let i = 0; i <= arreglo.length; i++){
    let actual = arreglo[i];
    let siguiente = arreglo[i+1];
    if(actual === siguiente) counter++;
  }
  return counter === arreglo.length ? true : false
} 

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let meses = [];
  for(mes in array){
    let month = array[mes];
    if(month === 'Enero' || month === 'Marzo' || month === 'Noviembre'){
      meses.push(month);
    }
  }

  return meses.length < 3 ? "No se encontraron los meses pedidos" : meses;
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let numeros = [];
  for(num in array){
    if(array[num] > 100){
      numeros.push(array[num]);
    }
  }
  return numeros;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let numeros = [], iteraciones = 0, continuar = true;
  for(let count=0; count<10; count++){
    numeros.push(numero+=2);
    iteraciones += count; 
    if(iteraciones === agregarNumeros(numeros)){
      continuar = false;
      break;
    }
  }
  return continuar ? numeros : "Se interrumpió la ejecución";
}

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let numeros = [], count = 0;
  for(count; count<10; count++){
    if(count ===5){
      continue
    }else numeros.push(numero+=2);
  }
  return numeros
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
