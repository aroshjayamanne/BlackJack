let firsttCard = 11
let secondCard = 11
let sum = firsttCard + secondCard
let hasBlackJack = false
let amountWon = 0
let isAlive = true
let message = ''
let text = document.getElementById('sum-el')

function startGame() {
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
    
    let text = document.getElementById('message-el')
    text.textContent = message
    
    let cards = document.getElementById('cards-el')
    cards.textContent = firsttCard + ' & ' + secondCard

    let summ = document.getElementById('sum-el')
    summ.textContent =  summ.textContent + (firsttCard + secondCard) + ' '
}
