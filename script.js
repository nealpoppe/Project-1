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
            match.innerHTML = "";
            cardOne = e.target.id;
            e.target.style.background = "white";
            e.target.innerHTML = cards[cardOne].card;
            cards[cardOne].faceUp = true;
            currentTurn.innerHTML = "Please choose your second card"
            // console.log(cards[cardOne]);
        }else if(currentTurn.innerHTML == "Please choose your second card") {
            cardTwo = e.target.id;
            e.target.style.background = "white";
            e.target.innerHTML = cards[cardTwo].card;
            cards[cardTwo].faceUp = true;
            currentTurn.innerHTML = "Please choose your first card"
            
            // if called this will reset immediatly
            // isMatch();

            // this works, but will keep running and reset after first card
            // if not stopped.
            // setInterval(function() {
            //     isMatch();
            // }, 3000);

            // this will wait to reset, but currently will still show first card
            // document.body.addEventListener("click", isMatch, true);
        }
    })
}

// function to check match
function isMatch(){
    // if it's a match, leave the cards face up
    if(cards[cardOne].card == cards[cardTwo].card) {
        console.log("It's a match!")

    }

    // NEED TO FIGURE OUT HOW TO LEAVE THE SECOND CARD UP FOR A TIME PERIOD
    // OR RESET ON CLICK
    else {
        console.log("Try again.");
        console.log(cardOne);
        // resetting card one
        let resetOne = document.querySelector(`#${cardOne}`);
        resetOne.style.background = "#006680";
        resetOne.innerHTML = "";
        cards[cardOne].faceUp = false;
        // resetting card two
        let resetTwo = document.querySelector(`#${cardTwo}`);
        resetTwo.style.background = "#006680";
        resetTwo.innerHTML = "";
        cards[cardTwo].faceUp = false;
    }
}
