## Project 1: Build a game -Flash Cards (Memory)

This will be a memory game. The player will be able to select two cards. If the cards match, they will stay face up. If they do not, they will be flipped face down.

### Current Features
* 4x4 grid
* image card backs
* text cards
* reset button
* track matches
* track scores

### Examples
This section turns a card face down and resets the values changed when turning it up. The event listeners are turned off on the second card click so here they are turned back on. It is in a setTimeout to delay the flip down so players can see what they clicked.
```// turning a card down
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
```

### Technology used
* HTML
* CSS
* Javascript

Here is the link to the [project repository](https://github.com/nealpoppe/Project-1)