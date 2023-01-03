//--------------------------ejercicio 1

/*1 Realizar un programa que permita el ingreso de un numero y muestre su tabla de
multiplicar (Los primeros 10 multiplos). */
/* function numero(num){
    let list=[];
    for(i=0; i<=10; i++){
        list.push(num*i);
    }
    return list
} */
/* let nume=Number(prompt("ingrese un numero: "));
console.log(numero(nume)); */

//--------------------------ejercicio 2

/* 2. Realizar un programa que permita el ingreso de numeros los cuales se 
tienen que ir acumulando. 
El ingreso de datos terminara cuando el usuario ingrese un valor 0. */
/* let list=[];
let num;
while(num!=0){
    num=prompt("ingresar:");
    if(num!=0)
    list.push(num);
}
console.log(list); */

//--------------------------ejercicio 3

/* 3. Realizar en juego de adivinar el numero del los ejercicios del tema anterior, en una
variable guardar un numero que este en el rango 1 - 100. La persona debera poder
ingresar numeros hasta adivinar el valor que se encuentre en dicha variable. Si el
valor es menor al numero secreto, avisarle al usuario lo sucedido y pedirle
nuevamente el ingreso de otro numero, realizar la misma accion pero en lugar de
cuando es menor, si es que el numero ingresado es mayor. Asi sucesivamente hasta
que el usuario adivine el numero secreto. Por ultimo mostrar un mensaje de
felicitaciones y decirle en cuantos intentos lo ha realizado. */
/* let numeroAdivinar=Math.floor(Math.random() * 100);
let intento=0;
let numIngresado;
while(numeroAdivinar!=numIngresado){
    if(intento===0){
    numIngresado=prompt("ingresar numero:" + numeroAdivinar);
    }
    else if(numIngresado>numeroAdivinar){
        numIngresado=prompt("el numero ingresado es mayor, ingresar otro numero:");
    }
    else if(numIngresado<numeroAdivinar){
        numIngresado=prompt("el numero ingresado es menor, ingresar otro numero:");
    }
    intento++;
}
alert("felicitaciones acertaste con "+ intento + " intentos");*/

//--------------------------ejercicio 4

/* 4. Realizar un programa que permita decir si un numero es primo. Un numero es primo
si solo es divisible por el valor 1 y por si mismo. Ayuda: Usar la operacion de modulo.
Los numeros solo poseen divisores hasta la mitad del valor del mismo. Ej: 50 tiene
como divisores 1, 2, 5, 10 y 25. No es primo. Con tener mas de 2 divisores el
numero ya no es primo */
/* let numero1=parseInt(prompt("ingresa un numero entero: "))
let cont=0;
for(i=1; i<=numero1; i++){
    if((numero1%i)===0){
        cont++;
    }
    else if(cont>1){
        alert("no es primo")
    }
    else{
        alert("son numeros primos")
    }
} */

//--------------------------ejercicio 5
/* 5. Realizar un programa que permita dado un numero, mostrar todos sus divisores. */
/* let numero2=parseInt(prompt("ingresa un numero entero: "))
let cont=0;
let list=[];
for(i=1; i<=numero2; i++){
    if((numero2%i)===0){
        list.push(i)
    }
}
console.log(list) */

//--------------------ejercicio 6
/* 
6. Dado un array de 10 elementos, realizar un programa que recorra ese array y
muestre un mensaje por consola con cada uno de los elementos del array */

/* let array=[1,2,3,4,5,6,7,8,9,10];
 for (let dato of array) {
     console.log(dato);
} */


//--------------------------ejercicio 7

/* 7. Dado un array de 10 numeros, realizar un programa que muestre por consola el
doble de cada uno de los elementos. */
/* let list=[5,20,30,4,6,7,11,25,50,100];
let aux=0;
for(let i=0; i<=list.length-1; i++){
    aux=list[i]*2
    console.log(aux);
} */


//--------------------ejercicio 8

/*8. Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada
objeto representa a 1 persona con al menos 4 propiedades, realizar un programa
que muestre un mensaje de presentacion por cada elemento del array. */


/*
let familia=[
    {
        nombre:"Juan",
        edad:56,
        signo:"cancer",
        altura:1.84,
    },
    {
        nombre:"Maria",
        edad:50,
        signo:"leo",
        altura:1.60,
    },
    {
        nombre:"Pablo",
        edad:25,
        signo:"acuario",
        altura:1.80,
    },
    {
        nombre:"Marta",
        edad:30,
        signo:"capricornio",
        altura:1.70,
    },
    {
        nombre:"Pedro",
        edad:32,
        signo:"Virgo",
        altura:1.74,
    }
]
for (let datos of familia) {
    alert ('mi nombre es '+datos.nombre+' tengo '+datos.edad+' años y mi signo es '+datos.signo+' y tengo una altura de '+datos.altura+' cm.');
} */

//--------------------------ejercicio 9

/* 9. Dado un array de 10 numeros, realizar un programa que recorra el array y solo
muestre los numeros impares. */
/* let list=[5,20,30,4,6,7,11,25,50,100];
let aux=0;
for(let i=0; i<=list.length-1; i++){
    if(!((list[i]%2)===0)){
        console.log(list[i]);
    }
} */

//--------------------------ejercicio 10

/* 10. Realizar un programa que permita la entrada de numeros y calcule la suma de los
numeros pares por un lado y los impares por otro, el ingreso de dato finaliza cuando
el usuario ingresa un 0. */

/* let sumListaPar=0;
let sumListaImpar=0;
let num;
while(num!=0){
    num=Number(prompt("ingresar numero:"));
    if(num!=0){
        if(num%2===0)
            sumListaPar+=num;
        else
        sumListaImpar+=num;
    }
}
console.log("suma de numeros pares "+sumListaPar);
console.log("suma de numeros impares "+sumListaImpar); */


//--------------------------ejercicio 11

/* 11. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
numero mas grande */
/* let list=[5,20,30,4,6,7,11,25,50,100];
function mayor(list){
    let aux=0;
    for(let i=0; i<=list.length-1; i++){
        if(list[i]>aux){
            aux=list[i];
        }
    }
    return aux
}
console.log(mayor(list))*/
//--------------------------ejercicio 12

/* 12. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
numero mas chico */

/* let list=[5,20,30,4,6,7,11,25,50,100];
function menor(list){
    let aux=0;
    for(let i=0; i<=list.length; i++){
        if(list[i]<aux){
            aux=list[i];
        }
    }
    return aux
} 
console.log(menor(list)) */

//--------------------------ejercicio 13

/* 13. Realizar un programa que permita jugar a piedra papel o tijeras, se debera poder
ingresar los nombres de 2 jugadores. En el bucle del juego se debera pedir 1 a 1 las
manos de cada jugador, y en cada turno se debera seguir jugando solo si se produjo
un empate. Caso contrario mostrar un mensaje con el nombre de la persona
ganadora. */
/* function juego ( ) {
    let jugador1nom=prompt("ingrese su nombre jugador 1");
    let jugador2nom=prompt("ingrese su nombre jugador 2");
    let resultado;
    while(resultado!=="hay un ganador"){
        let jugador1=prompt("ingrese su eleccion jugador 1 entre piedra, papel o tijeras");
        let jugador2=prompt("ingrese su eleccion jugador 2 entre piedra, papel o tijeras");
        if(jugador1.toUpperCase()==jugador2.toUpperCase()){
            console.log("empataron sigan jugando" );
            resultado="empataron"
        }
        else if(jugador1.toUpperCase()==jugador2.toUpperCase()){
            console.log("empataron sigan jugando");
            resultado
        }
        else if(jugador1.toUpperCase()=="TIJERAS" && jugador2.toUpperCase()=="PAPEL"){
            console.log("gana "+jugador1nom);
            resultado="hay un ganador"               
        }
        else if( jugador1.toUpperCase()=="PAPEL"&&jugador2.toUpperCase()=="PIEDRA"){
            console.log("gana "+jugador1nom);
            resultado="hay un ganador"
        }
        else if(jugador1.toUpperCase()=="PIEDRA"&&jugador2.toUpperCase()=="TIJERAS"){
            console.log("gana "+jugador1nom);
            resultado="hay un ganador"
        }
        else if( jugador2.toUpperCase()=="TIJERAS"&& jugador1.toUpperCase()=="PAPEL"){
            console.log("gana "+jugador2nom);
            resultado="hay un ganador"
        }
        else if(jugador2.toUpperCase()=="PAPEL"&&jugador1.toUpperCase()=="PIEDRA"){
            console.log("gana "+jugador2nom);
            resultado="hay un ganador"
        }
        else if(jugador2.toUpperCase()=="PIEDRA"&&jugador1.toUpperCase()=="TIJERAS"){
            console.log("gana "+jugador2nom);
            resultado="hay un ganador"
        }
        else{
            console.log("uno de los jugadores hizo trampa")
            resultado="han hecho trampa"
        } 
    }
}
juego ( ); */

//--------------------------ejercicio 14

/* 14. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado.
 */

/* console.log("    *")
console.log("   * *")
console.log("  *   *")
console.log(" *     *")
console.log("* * * * *") */

//--------------------------ejercicio 15

/* 15. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado
pero invertido. */



/* console.log("* * * * *")
console.log("   *     *")
console.log("    *   *")
console.log("     * *")
console.log("      *") */


//--------------------------ejercicio 16

/* 16. Dado un array de 10 numeros desordenados, realizar un programa que imprima por
pantalla el array ordenado. (NO USAR SORT, solo ciclos FOR) */
/* function list_ord(list){
    let lista_ordenada
    for (let j = 0; j < list.length; j++) {
        for (let i = 0; i < list.length-j-1; i++) {
            if(list[i] > list[i+1]){
                lista_ordenada = list[i+1];
                list[i+1] = list[i];
                list[i] = lista_ordenada;
            }
        }
    }
    console.log(list)
}

let list=[5,20,30,4,6,7,11,25,50,100];
list_ord(list)
 */