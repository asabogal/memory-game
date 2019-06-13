const cards = document.querySelectorAll('.card')

let hasFlippedCard = false
let lockBoard = false
let firstCard, secondCard;

init ()

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip')

  if (!hasFlippedCard) {
    //if false; this is the first card flipped
    //set the variable to true to keep track of this flipped card
    hasFlippedCard = true
    firstCard = this
    return; 
  }

  //this will be the second clicked card
  // hasFlippedCard = false;
  secondCard = this
  checkMatch()
};

  //add matching logic
  //fliped card must have the same data-name attribute to match
function checkMatch() {
  let isMatch = (firstCard.dataset.name === secondCard.dataset.name )
  isMatch ? disableCards() : unflipCards()
};

function disableCards() {
  firstCard.removeEventListener('click', flipCard)
  secondCard.removeEventListener('click', flipCard)
  resetBoard()
};

function unflipCards() {
  lockBoard = true

  setTimeout(()=>{
    firstCard.classList.remove('flip')
    secondCard.classList.remove('flip')
    resetBoard()
  }, 1500);
};

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
};


function init() {
  cards.forEach(card => card.addEventListener('click', flipCard));
  shuffle()
}


function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 16);
    card.style.order = randomPos;
  });
};