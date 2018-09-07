const memoryBoard = document.getElementById('memory-board');
let cards = document.querySelectorAll('.memory-card');
let deck = getData().then(data => data.deck.filter(x => x.name == 'dinos'));
let nrOfClicks = 0;

(function onInit() {
    loadControls();
    loadGame(deck);
})();

function getData() {
    return fetch('/data.json')
        .then(response => response.json()
        );
}

function loadControls() {
    const memoryContols = document.getElementById('memory-controls');
    getData().then(data => {
        data.deck.forEach(button => {
            memoryContols.innerHTML += `
            <button id="${button.name}" class="controls button">${button.name}</button>
        `;

            document.querySelectorAll('.controls').forEach(button => {
                return button.addEventListener('click', setDeck);
            });
        });
    });
}

function setDeck() {
    deck = getData().then(data => data.deck.filter(x => x.name == this.id));
    loadGame(deck);
}

function loadGame(deck) {

    memoryBoard.innerHTML = '';
    document.getElementById('clicks').innerHTML = `
    Clicks: ${nrOfClicks}
    `;

    deck.then(deck => {
      deck[0].cards.forEach(card => {
        memoryBoard.innerHTML += `
        <div class="memory-card" data-framework="${card}">
            <img src="img/${deck[0].imgURL}/${card}.svg" alt="${card}" class="front-face">
            <img src="img/${deck[0].imgURL}/${deck[0].frontfase}.svg" alt="Memory Card" class="back-face">
        </div>
        <div class="memory-card" data-framework="${card}">
            <img src="img/${deck[0].imgURL}/${card}.svg" alt="${card}" class="front-face">
            <img src="img/${deck[0].imgURL}/${deck[0].frontfase}.svg" alt="Memory Card" class="back-face">
        </div>
        `;
      });

      cards = document.querySelectorAll('.memory-card');

      cards.forEach(card => {
          return card.addEventListener('click', flipCard);
      });

      shuffle();

    });
}

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let correctMatch = 0;

function flipCard() {
    if (lockBoard) {
        return;
    }
    document.getElementById('clicks').innerHTML = `
    Clicks: ${++nrOfClicks}
  `;
    if (this === firstCard) return;
    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    lockBoard = true;

    checkForMatch();
}

function checkForMatch() {

    const isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();

}

function disableCards() {
    ++correctMatch;
    deck.then(deck => {
      if (correctMatch == deck[0].cards.length){
        let won = document.createElement('div');
        won.classList.add('won');
        won.innerHTML = `
          <div>
            <button id="won" class="button">New game?</button>
          </div>
        `;
        document.body.append(won);
        document.getElementById('won').addEventListener('click', newGame);
      }

    });
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

function newGame() {
    correctMatch = 0;
    nrOfClicks = 0;

    document.querySelector('.won').remove();

    loadGame(deck);

}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        lockBoard = false;
        resetBoard();
    }, 1000);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
}
