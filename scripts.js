let firsttCard = 10
let secondCard = 11
let sum = firsttCard + secondCard
let hasBlackJack = false
let amountWon = 0
let isAlive = true
let message = ''

if (sum <= 20) {
    message = 'Do you want to draw a new card? '
}

else if ( sum === 21) {
    message = 'U got a blackjack'
    amountWon += 10
    hasBlackJack = true
}

else {
    message = 'You are out of the game'
    isAlive = false
}

console.log (message)
