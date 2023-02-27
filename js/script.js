




let myArray = ["mail@uno.com", "mail@due.com", "mail@tre.com", "mail@quattro.com"];

let userEmail = document.getElementById("emailEl");

let userInput = document.getElementById("btnEl");

let resultEl = document.getElementById("result");

userInput.addEventListener("click", function() {

    // al di fuori del for devo dichiarare una variabile che possa avere due valori in base all'if
    let found = false;
    
    // il for va dichiarato all'interno dell'event listener
    for(let i = 0; i < myArray.length; i++) { 


        if(userEmail.value == myArray[i]) { 
            // questo è il secondo valore della variabile quando l'email è una dell'array
            found = true;                
        }
    }
    

    // gli if/else per il risultato finale dovranno essere dichiarati fuori dal for ma dentro l'event
    if(found == true) {
        resultEl.innerHTML = ("ACCESS GRANTED")
    }
    else {
        resultEl.innerHTML = ("ACCESS DENIED")
    }

});