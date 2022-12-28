let num1=prompt("ingrese un numero:");
let num2=prompt("ingrese un numero:");
let num3=prompt("ingrese un numero:");
//ejercicio 1
function primer_num(num1,num2){
    if(num1>num2){
        console.log("es mayor"); 
    }
}
primer_num(num1,num2);
//ejercicio 2
function iguales_num(num1,num2){
    if(num1==num2){
        console.log("son iguales"); 
    }
    else{
        console.log("son diferentes");
    }
    }
iguales_num(num1,num2);
//ejercicio 3
function mas_grande(num1,num2){
        if(num1>num2){
            console.log("el primer numero es mas grande");
        }
    else if(num2>num1){
        console.log("el segundo numero es mas grande");
    }
    else{
        console.log("son iguales");
    }
}
mas_grande(num1,num2,num3);
//ejercicio 4
function masChico(num1,num2,num3){
    if((num1<num2)&&(num1<num3)){
        console.log(num1);
    }
    else if((num2<num1)&&(num2<num3)){
        console.log(num2);
    }
    if((num3<num1)&&(num3<num1)){
        console.log(num3);
    }
}
masChico(num1,num2,num3);
//ejercicio 5
let per1={
    nom:prompt("ingrese su nombre:"),
    edad:prompt("ingrese su edad:"),
    altura:prompt("ingrese su altura en cm:"),
    vision:prompt("ingrese su campo visual entre 1 y 10:")
}
let per2={
    nom:prompt("ingrese su nombre:"),
    edad:prompt("ingrese su edad:"),
    altura:prompt("ingrese su altura en cm:"),
    vision:prompt("ingrese su campo visual entre 1 y 10:")
}
function persona_mas_alta(per1,per2){
    if(per1.altura>per2.altura){
        console.log("la primera persona es mas alta ");
    }
    else if(per2.altura>per1.altura){
        console.log("la segunda persona es mas alta ");
    }
    if(per1.edad>per2.edad){
        console.log("la primera persona es mas grande");
    }
    else if(per2.edad>per1.edad){
        console.log("la segunda persona es mas grande");
    }
}
persona_mas_alta(per1,per2);
 //ejercicio 6
function cap_man(per1){
    if((per1.altura>=150)&&((per1.vision>=8)&&(per1.vision<=10))){
        console.log("Esta capacitado para conducir");
    }
    else{""
        console.log("no esta capacitado para conducir")
    }
}
cap_man(per1);
 //ejercicio 7
let fest1={
    nom:prompt("ingrese su nombre :"),
    pas:prompt("ingrese si su pase es vip o normal :"),
    entrada:prompt("ingrese si tienen entrada con un si en caso de contar con una y no en caso de no contar con ella :")
}
function fiesta(fest1){      
    if(fest1.nom=="matias"){
            console.log("bienvenido");
    }
    else if(fest1.pas=="vip"||fest1.pas=="normal"){
        let ut=prompt("desea utilizarla si/no");
        if(ut==="si"){
            console.log("bienvenido");
        }
        else if(ut=="no"){
        console.log("Hasta luego");
        }
    }
    else if(fest1.pas=="si"){
        console.log("bienvenido")
    }
    else if(fest1.pas=="no"){
        let com=prompt("desea comprar una entrada si/no :");
        if(com=="si"){
            let ab=prompt("ingrese el valor a abonar el costo de la entrada es de $1000 :");
            if(ab==1000){
                console.log("bienvenido");
            }
            else if(ab<1000){
                console.log("su pago es insuficiente, hasta luego")
            }
        }
        else if(com=="no"){
            console.log("hasta luego")
        }
    }
}
fiesta(fest1); 
// ejercicio 9
function edades(){
    let edad=prompt("ingrese su edad :");
    if(edad>=0&&edad<=12){
        console.log("es un infante");
    }
    else if(edad>12&&edad<=45){
        console.log("es un mayor joven");
    }
    else if(edad>45&&edad<=100){
        console.log("es un anciano");
    }
    else if(edad>100){
        console.log("en realidad tiene esa edad?");
    }
}
edades();
//ejercicio 10
function juego(){
    let jugador1=prompt("ingrese su eleccion entre piedra, papel o tijeras");
    let jugador2=prompt("ingrese su eleccion entre piedra, papel o tijeras");
    if(jugador1==jugador2){
        console.log("empataron");
    }
    else if(jugador1.toUpperCase()=="TIJERAS"&&jugador2.toUpperCase()=="PAPEL"){
        console.log("gana el jugador 1");
    }
    else if(jugador1.toUpperCase()=="PAPEL"&&jugador2.toUpperCase()=="PIEDRA"){
        console.log("gana el jugador 1");
    }
    else if(jugador1.toUpperCase()=="PIEDRA"&&jugador2.toUpperCase()=="TIJERAS"){
        console.log("gana el jugador 1");
    }
    else if(jugador2.toUpperCase()=="TIJERAS"&&jugador1.toUpperCase()=="PAPEL"){
        console.log("gana el jugador 2");
    }
    else if(jugador2.toUpperCase()=="PAPEL"&&jugador1.toUpperCase()=="PIEDRA"){
        console.log("gana el jugador 2");
    }
    else if(jugador2.toUpperCase()=="PIEDRA"&&jugador1.toUpperCase()=="TIJERAS"){
        console.log("gana el jugador 2");
    }
    else{
        console.log("uno de los jugadores hizo trampa")
    }
}
juego();