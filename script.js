// initial hard coded cards object
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

// variables to hold cards and score
let cardOne = "";
let cardTwo = "";
let score = 0;
let winTotal = 0;

// setting up click event
let currentCard = document.querySelectorAll(".cards");
let currentTurn = document.querySelector(".playerPrompt");
let match = document.querySelector(".matchCase");

// adding event listener initially
for(i=0; i<currentCard.length; i++) {
    currentCard[i].addEventListener("click", cardClick);
}

// clicking a card
function cardClick(e){
    e.preventDefault();
        // first click
        if(currentTurn.innerHTML == "Please choose your first card") {
            cardOne = e.target.id;
            // can only pick face down cards
            if(cards[cardOne].faceUp == false) {
                cardFlipUp(cardOne, e);
                currentTurn.innerHTML = "Please choose your second card";
                // match.innerHTML = "Try for a match";
            }
        // second click
        }else if(currentTurn.innerHTML == "Please choose your second card") {
            cardTwo = e.target.id;
            // can only pick face down cards
            if(cards[cardTwo].faceUp == false){
                cardFlipUp(cardTwo, e);
                currentTurn.innerHTML = "Please choose your first card";
                // matched cards correctly
                if(cards[cardOne].card == cards[cardTwo].card) {
                    score += 1;
                    match.innerHTML = `Matches = ${score} || Wins = ${winTotal}`;
                    winnerWinner();
                // did not match cards correctly
                }else {
                    // turn off event listener
                    for(i=0; i<currentCard.length; i++){
                        currentCard[i].removeEventListener("click", cardClick);
                    }
                    resetCard(cardOne);
                    resetCard(cardTwo);
                }
            }
            cardFlipUp(cardTwo, e);
        }
}

// turning a card up
function cardFlipUp(myCard, e) {
    e.target.style.background = "lightgrey";
    e.target.innerHTML = cards[myCard].card;
    cards[myCard].faceUp = true;
}

// turning a card down
function resetCard(flipBack) {
    setTimeout(() => {
        let resetCard = document.querySelector(`#${flipBack}`);
        resetCard.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCI98Wf5S_6vHP1DNROEPZA7wmRmbskrpknA&usqp=CAU')";
        resetCard.innerHTML = "";
        cards[resetCard.id].faceUp = false;
        //turn event listener back on
        for(i=0; i<currentCard.length; i++){
            currentCard[i].addEventListener("click", cardClick);
        }
    }, 2000);
}

// win condition
function winnerWinner() {
    if (score == 8){
        currentTurn.innerHTML = "You win! Reset to try again";
        winTotal += 1;
        match.innerHTML = `Matches = ${score} || Wins = ${winTotal}`;
    }
}

// reset button
let reset = document.querySelector("#reset");
reset.addEventListener("click", function(e) {
    for(i=0; i<currentCard.length; i++) {
        let resetAll = document.querySelector(`#${Object.keys(cards)[i]}`);
        resetAll.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCI98Wf5S_6vHP1DNROEPZA7wmRmbskrpknA&usqp=CAU')";
        resetAll.innerHTML = "";
        cards[resetAll.id].faceUp = false;
        currentTurn.innerHTML = "Please choose your first card";
        score = 0;
        match.innerHTML = `Matches = ${score} || Wins = ${winTotal}`;
    }
    for(i=0; i<currentCard.length; i++) {
        currentCard[i].addEventListener("click", cardClick);
    }

    // MVP code
    // this will work to refresh the page
    // but will wipe out win total
    // window.location.reload();
})