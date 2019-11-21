// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW


$("#shoot").click( function() {
    let input = $("#input").val();
    $("#userChoice").html(`<p> ${input}</p>`);

let computerChoice = Math.random()
if (computerChoice < 1/3) {
    $("#computerChoice").html(`<p>Scissors</p>`);
    if (input === 'paper') {
        $("#result").html("<p>Computer wins</P>")
    }
    if (input === 'rock') {
        $("#result").html("<p>You win</P>")
    }
    if (input === 'scissors') {
        $("#result").html("<p>Tie</P>")
    }
}
else if (computerChoice > 1/3 && computerChoice < 2/3){
       $("#computerChoice").html(`<p>Paper</p>`);
        if (input === 'paper') {
        $("#result").html("<p>Tie</P>")
    }
    if (input === 'rock') {
        $("#result").html("<p>Computer wins</P>")
    }
    if (input === 'scissors') {
        $("#result").html("<p>You win</P>")
    }
}
else if (computerChoice > 2/3){
       $("#computerChoice").html(`<p>Rock</p>`);
        if (input === 'paper') {
        $("#result").html("<p>You win</P>")
    }
    if (input === 'rock') {
        $("#result").html("<p>Tie</P>")
    }
    if (input === 'scissors') {
        $("#result").html("<p>Computer wins</P>")
    }
}

} );