let nombre = prompt("Ingrese el nombre del Jugador"); 

const parCancha = 72;
 
let hoyo1 = 0;
let hoyo2 = 0;
let hoyo3 = 0;
let hoyo4 = 0;
let hoyo5 = 0;
let hoyo6 = 0;
let hoyo7 = 0;
let hoyo8 = 0;
let hoyo9 = 0;
let hoyo10 = 0;
let hoyo11 = 0;
let hoyo12 = 0;
let hoyo13 = 0;
let hoyo14 = 0;
let hoyo15 = 0;
let hoyo16 = 0;
let hoyo17 = 0;
let hoyo18 = 0;

let cancha = prompt("Ingrese que salidas jugó: \nAzul (6500 yardas) \nBlanca (6000 yardas) \nRoja (5500 yardas)").toUpperCase();

switch (cancha) {
    case "AZUL":
        cancha = "6500 yardas"
        break
    case "BLANCA":
        cancha = "6000 yardas"
        break
    case "ROJA":
        cancha = "5500 yardas"
        break
    default:
        console.warn("Ha ingresado una cancha incorrecta. Vuelva a intentar");
}


let scoreTotal = 0;

function tarjetaTotal() {
    hoyo1 = parseInt(prompt("Cuantos golpes realizó en el Hoyo 1:"));
    hoyo2 = parseInt(prompt("Cuantos golpes realizó en el Hoyo 2:"));
    hoyo3 = parseInt(prompt("Cuantos golpes realizó en el Hoyo 3:"));
    hoyo4 = parseInt(prompt("Cuantos golpes realizó en el Hoyo 4:"));
    hoyo5 = parseInt(prompt("Cuantos golpes realizó en el Hoyo 5:"));
    hoyo6 = parseInt(prompt("Cuantos golpes realizó en el Hoyo 6:"));
    hoyo7 = parseInt(prompt("Cuantos golpes realizó en el Hoyo 7:"));
    hoyo8 = parseInt(prompt("Cuantos golpes realizó en el Hoyo 8:"));
    hoyo9 = parseInt(prompt("Cuantos golpes realizó en el Hoyo 9:"));
    hoyo10 = parseInt(prompt("Cuantos golpes realizó en el Hoyo 10:"));
    hoyo11 = parseInt(prompt("Cuantos golpes realizó en el Hoyo 11:"));
    hoyo12 = parseInt(prompt("Cuantos golpes realizó en el Hoyo 12:"));
    hoyo13 = parseInt(prompt("Cuantos golpes realizó en el Hoyo 13:"));
    hoyo14 = parseInt(prompt("Cuantos golpes realizó en el Hoyo 14:"));
    hoyo15 = parseInt(prompt("Cuantos golpes realizó en el Hoyo 15:"));
    hoyo16 = parseInt(prompt("Cuantos golpes realizó en el Hoyo 16:"));
    hoyo17 = parseInt(prompt("Cuantos golpes realizó en el Hoyo 17:"));
    hoyo18 = parseInt(prompt("Cuantos golpes realizó en el Hoyo 18:"));
    scoreTotal = hoyo1 + hoyo2 + hoyo3 + hoyo4 + hoyo5 + hoyo6 + hoyo7 + hoyo8 + hoyo9 + hoyo10 + hoyo11 + hoyo12 + hoyo13 + hoyo14 + hoyo15 + hoyo16 + hoyo17 + hoyo18
    if (scoreTotal > parCancha) {
    console.log("El jugador", nombre, "realizó un score total de", scoreTotal, "golpes en un campo de juego de", cancha, "par", parCancha, "(", scoreTotal - parCancha,"sobre el par ).")
    } else if (scoreTotal < parCancha) {
        console.log("El jugador", nombre, "realizó un score total de", scoreTotal, "golpes en un campo de", cancha, "par", parCancha, "(", parCancha - scoreTotal,"bajo el par ).")
    } else {
        console.log("El jugador", nombre, "realizó un score total de", scoreTotal, "golpes en un campo de", cancha, "par", parCancha, "(par de cancha).")
    }
}

tarjetaTotal()










