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
    box01: {card: "Cow", faceUp: false},
    box02: {card: "Goat", faceUp: false},
    box03: {card: "Donkey", faceUp: false},
    box04: {card: "Pig", faceUp: false},
    box05: {card: "Chicken", faceUp: false},
    box06: {card: "Horse", faceUp: false},
    box07: {card: "Dog", faceUp: false},
    box08: {card: "Sheep", faceUp: false},
    box09: {card: "Goat", faceUp: false},
    box10: {card: "Cow", faceUp: false},
    box11: {card: "Horse", faceUp: false},
    box12: {card: "Chicken", faceUp: false},
    box13: {card: "Sheep", faceUp: false},
    box14: {card: "Dog", faceUp: false},
    box15: {card: "Pig", faceUp: false},
    box16: {card: "Donkey", faceUp: false}
}

// variables to hold cards to compare
let cardOne = "";
let cardTwo = "";

// setting up click event
let currentCard = document.querySelectorAll(".cards");
let currentTurn = document.querySelector(".playerPrompt");
let match = document.querySelector(".matchCase");
for(i=0; i<currentCard.length; i++) {
    currentCard[i].addEventListener("click", function(e) {
        e.preventDefault();
        // testing if first click
        // need to change style on click to show the front of the card
        // and the text from the object
        if(currentTurn.innerHTML == "Please choose your first card") {
            cardOne = e.target.id;
            cardFlipUp(cardOne, e);
            currentTurn.innerHTML = "Please choose your second card";
            match.innerHTML = "Try for a match";

        }else if(currentTurn.innerHTML == "Please choose your second card") {
            cardTwo = e.target.id;
            cardFlipUp(cardTwo, e);
            currentTurn.innerHTML = "Please choose your first card"

            if(cards[cardOne].card == cards[cardTwo].card) {
                match.innerHTML = "It's a match!";
                console.log("It's a match!");
        
            }else {
                match.innerHTML = "Try again!"
                console.log("Try again!");
                resetCards(cardOne);
                resetCards(cardTwo);
            }
        }
    })
}

function cardFlipUp(myCard, e) {
    e.target.style.background = "white";
    e.target.innerHTML = cards[myCard].card;
    cards[myCard].faceUp = true;
}

function resetCards(flipBack) {
    setTimeout(() => {
        let resetCard = document.querySelector(`#${flipBack}`);
        resetCard.style.background = "#006680";
        resetCard.innerHTML = "";
        console.log(resetCard.id);
        cards[resetCard.id].faceUp = false;
    }, 2000);

}