/*Variables*/
let numeroMaximoPosible = prompt("Inserte el limite maximo del juego: ")
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let contadorIntentos = 1;
let maximoIntentos=10;
while(numeroUsuario!=numeroSecreto){
    numeroUsuario = parseInt(prompt(`Inserte un número del 1 al ${numeroMaximoPosible}`));
    console.log(typeof(numeroUsuario));
    //Código para compilar
    if(numeroSecreto==numeroUsuario){
        //En caso acertemos el número
        alert(`¡Acertaste!, el número secreto es ${numeroSecreto} `);
        alert(`Acertaste en: ${contadorIntentos} ${contadorIntentos == 1 ? 'vez' : 'veces'}`)
    } else {
        if(numeroUsuario>numeroSecreto){
            alert("El número secreto es menor");
        } else{
            alert("El número secreto es mayor");
        }
        //En caso hayamos errado
        contadorIntentos++;
        alert("Intentalo de nuevo");
        if(contadorIntentos>maximoIntentos){
            alert("Perdiste: No tienes más intentos");
            alert(`El número secreto era ${numeroSecreto} `)
            break;
        }
    }
}
