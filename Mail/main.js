// creo un array di mail

const Mails = ['bianco@email.it', 'giallo@email.it', 'verde@email.it', 'blu@email.it', 'viola@email.it']

// chiedo la mail all'utente

const userEmail = prompt('Inserisci la tua mail')

// setto una variabile di appoggio settata su false

MailInList = false;

// prendo elemento di interesse dove scrivere messaggio

const message = document.getElementById('message');


for (let i = 0; i < Mails.length; i++) {

    // imposto una variabile che mi seleziona ogni elemento della lista su cui stiamo ciclando
    const Mail = Mails[i];

    // la confronto con quella passata dall'utente
    if (Mail == userEmail) {

        MailInList = true;

    }
}



if (MailInList == true) {

    message.innerHTML = 'accesso effettuato, benvenuto ' + userEmail

}

else {

    message.innerHTML = 'accesso negato'
}



