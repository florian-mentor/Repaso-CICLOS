/*
Se trata de dibujar un triángulo rectángulo con asteriscos. 
El usuario tecleará un valor entero, el programa escribirá con asteriscos 
tantas lineas como diga ese número. Cada linea estará formada por una serie de 
astericos tan larga como diga el número de línea en el que está.

Para separar una linea de la siguiente en console o en alert debes usar "\n". 
En este ejercicio usa console.log.
*/

let alto, ancho, linea, cadena;
alto = parseInt(prompt("Teclea un número de 1 a 5"));
for (linea = 1; linea <= alto; linea++){
    cadena=""
    for(ancho = 1; ancho <= linea; ancho++){
        cadena += "*";
    }
    //console.log( cadena+ "\n");
    alert( cadena+ "\n");
} 



/*
Crea un script que pida al usuario una contraseña. 
Si coincide con la clave definida en el script le devolverá el siguiente 
mensaje "Acceso concedido" de lo contrario le devolverá el mensaje "Acceso Denegado". 
Si falla tres veces se visualizará el mensaje "Alerta, intruso tratando de acceder…"
*/

let clave = null;
let intento = 0;
let passw = "Talento";
while (clave != passw && intento < 3){
     clave = prompt("Teclee su clave");
    if (clave == passw){
         alert("Acceso concedido..");
    }
    else{
         alert("Acceso denegado..");
        intento++;
    }
}
if (intento == 3){
     alert("Alerta Intruso tratando de acceder");
}



/*
Implementa un script haciendo uso de “do..while()” para crear una cadena que
contenga letras repetidas. Las letras se digitan por teclado y sólo podrán ser la
X o la Z, después de elegir las letras se le ingresa el número de repeticiones que
deberá estar entre 1 y 15.

Ejemplo: Si elijo X y luego digito 10 se mostrará XXXXXXXXXX. Si digito
una letra diferente me volverá a pedir la letra, y si tecleo 20 me
volverá a pedir el número
*/
let letra=null, veces=0, cad="";
do{
    letra = prompt("¿Qué letra desea X o la Z?");
}while (letra != 'X' && letra != "Z");
do{
   veces = parseInt(prompt("¿Cuantas repeticiones (1-15)?"));
}while (veces <1 || veces > 15)
do{
    cad+=letra;
    veces--;
}while (veces>0);
alert(cad);