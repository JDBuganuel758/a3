/*Variables*/
let numeroSecreto = 6;
let numeroUsuario = 0;
let contadorIntentos = 0;
while(numeroUsuario!=numeroSecreto){
    numeroUsuario = prompt("Inserte un número del 1 al 10");
    console.log(numeroUsuario);
    //Código para compilar
    contadorIntentos=contadorIntentos+1;
    if(numeroSecreto==numeroUsuario){
        //En caso acertemos el número
        alert(`¡Acertaste!, el número secreto es ${numeroSecreto}`);
        break;
    } else {
        if(numeroUsuario>numeroSecreto){
            alert("El número secreto es menor");
        } else{
            alert("El número secreto es mayor");
        }
        //En caso hayamos errado
        alert("No has acertado el número secreto");
    }
}
alert(`Acertaste en: ${contadorIntentos} intentos`)