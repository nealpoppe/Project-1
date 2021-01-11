/*
create a 4x4 grid (16 objects)
initially blue back
will need 8 pictures for the pairs
can hard code which picture goes where
on click will reveal picture
    need to store image on click
    will need to compare after the second click
can only click twice
    if they match, they stay face up and the user can click again
    if they do not match, they flip back down
*/

// initial cards object
// hard coded for now
var cards = {
    box01: {card: "A", faceUp: false},
    box02: {card: "A", faceUp: false},
    box03: {card: "B", faceUp: false},
    box04: {card: "B", faceUp: false},
    box05: {card: "C", faceUp: false},
    box06: {card: "C", faceUp: false},
    box07: {card: "D", faceUp: false},
    box08: {card: "D", faceUp: false},
    box09: {card: "E", faceUp: false},
    box10: {card: "E", faceUp: false},
    box11: {card: "F", faceUp: false},
    box12: {card: "F", faceUp: false},
    box13: {card: "G", faceUp: false},
    box14: {card: "G", faceUp: false},
    box15: {card: "H", faceUp: false},
    box16: {card: "H", faceUp: false}
}

// variables to hold cards to compare
let cardOne = "";
let cardTwo = "";

// setting up click event
let currentCard = document.querySelectorAll(".cards");
let currentTurn = document.querySelector(".playerPrompt");
for(i=0; i<currentCard.length; i++) {
    currentCard[i].addEventListener("click", function(e) {
        e.preventDefault();
        // testing if first click
        // need to change style on click to show the front of the card
        // and the text from the object
        if(currentTurn.innerHTML == "Please choose your first card") {
            cardOne = e.target.id;
            e.target.style.background = "white";
            e.target.innerHTML = cards[cardOne].card;
            currentTurn.innerHTML = "Please choose your second card"
        }else if(currentTurn.innerHTML == "Please choose your second card") {
            cardTwo = e.target.id;
            e.target.style.background = "white";
            e.target.innerHTML = cards[cardTwo].card;
            currentTurn.innerHTML = "Please choose your first card"
            // console.log(String(cardOne));
            // console.log(cardTwo);
            console.log(cards[cardOne]);
        }
    })
}

// function to check match
isMatch(){
    
}
