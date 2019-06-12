const cards = document.querySelectorAll('.card')

let hasFlippedCard = false
let firstCard, secondCard;

cards.forEach(card => card.addEventListener('click', flipCard));

function flipCard() {
  this.classList.add('flip')

  if (!hasFlippedCard) {
    //if false; this is the first card flipped
    //set the variable to true to keep track of this flipped card
    hasFlippedCard = true
    firstCard = this
  } else {
    //this will be the second clicked card
    hasFlippedCard = false;
    secondCard = this
  }

  //add matching logic
  //fliped card must have the same data-name attribute to match
  if (firstCard.dataset.name === secondCard.dataset.name) {
    firstCard.removeEventListner('click', flipCard)
    secondCard.removeEventListner('click', flipCard)
  } else {
    setTimeout(()=>{
      firstCard.classList.remove('flip')
      secondCard.classList.remove('flip')
    }, 1500);
  }
};