const userNameAccept = "coderhouse";
const passwordAccept = 12345;
let userEntered = prompt("Ingrese el usuario autorizado")
let passwordEntered = parseInt(prompt("Ingrese la contraseña del usuario autorizado"));

for(let i=0; i < 3; i++){
    if(userNameAccept === userEntered && passwordAccept === passwordEntered){
        alert("Usted ha ingresado correctamente")
        timeConversion()
        break;
    }else if(i < 2){
        alert("Contraseña o usuario incorrecto,intente denuevo");
        let userEntered = prompt("Ingrese el usuario autorizado");
        let passwordEntered = parseInt(prompt("Ingrese la contraseña del usuario autorizado"));
        if(userNameAccept === userEntered && passwordAccept === passwordEntered){
            alert("Usted ha ingresado correctamente");
            timeConversion()
            break;
        }
    }else if(i === 2){
        alert("Usuario bloqueado")
    }
}

//El formato que se manejara es la hora militar 00:00 - 23:00
function timeConversion(){
    let timeToGoToBet = parseInt(prompt("Ingrese a la hora que se va a acostar a dormir en el siguiente formato hh tenga en cuenta que es PM"));
    let timeToWakeUp = parseInt(prompt("Ingrese la hora a la que se va a despertar en el siguiente formato hh tenga en cuenta que es AM"));

    console.log("Hora para dormise: " + timeToGoToBet);
    console.log("Hora para despertarse: " + timeToWakeUp);
    if((timeToGoToBet  >= 13 && timeToGoToBet<= 23 ) && (timeToWakeUp >= 0 && timeToWakeUp <= 12)){
        let restHours = (timeToGoToBet - timeToWakeUp) - 12;
        return console.log( userEntered + " usted dormira "  + restHours + " horas")
    }else{
        alert("Los datos ingresados no cumplen con los requisitos")
    }
}






// Se crea funcion para sacarle el iva al valor del producto digitado.
