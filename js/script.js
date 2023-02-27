




let myArray = ["mail@uno.com", "mail@due.com", "mail@tre.com", "mail@quattro.com"];

for(let i = 0; i < myArray.length; i++) { 

    console.log(myArray[i])
}



let userEmail = document.getElementById("emailEl");

let userInput = document.getElementById("btnEl");

userInput.addEventListener("click", function() {
    
    
    if(userEmail == myArray[i]) {
        
        console.log("ciao");
        
    }
    

});