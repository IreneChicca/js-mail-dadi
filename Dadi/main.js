// recupero gli elementi di interesse

// const userDice = document.getElementById('user-dice')

// #genero due numeri random

const randomUser = Math.floor(Math.random() * 6) + 1;
const randomComputer = Math.floor(Math.random() * 6) + 1;


//imposto una variabile che si valorizza in base al vincitore

let winnerText = "";


// prendo gli oggetti di interesse per stampare i risultati

let resultUser = document.getElementById("user-result");
let resultComputer = document.getElementById("computer-result");
let result = document.getElementById("result");

// imposto le condizioni secondo quali definisco un vincitore e un perdente


if (randomUser > randomComputer) {


    winnerText = "hai vinto tu (:";


}

else if (randomComputer > randomUser) {

    winnerText = "ha vinto il computer ):";

}

else {
    winnerText = "pareggio :|";

}



resultUser.innerHTML = "il tuo numero è: " + randomUser
resultComputer.innerHTML = "il numero del computer è: " + randomComputer
result.innerHTML = winnerText



console.log(randomUser)
console.log(randomComputer)
console.log(winnerText)