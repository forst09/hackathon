'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const winPopup = document.querySelector('.popup');
    let cards = document.querySelectorAll('.card');
    let activeCards;
    let counterForActive = 0;
    let counterForMove = 0;
    let counterForShow = 0;

    const isCardActive = (e) => {
        counterForActive++;
        e.target.closest('.card').classList.add('active');
        if (counterForActive > 1) {
            counterForMove++;
            activeCards = document.querySelectorAll('.card.active:not(.show)');
            console.log(activeCards);
            if (activeCards[0].querySelector('.card__img-img').getAttribute('src') === activeCards[1].querySelector('.card__img-img').getAttribute('src')) {
                counterForShow++;
                activeCards.forEach(activeCard => {
                    activeCard.removeEventListener('click', isCardActive);
                    activeCard.classList.add('show');
                })
            }
            else {
                const activeTimer = setTimeout(function () {
                    console.log('not similar cards');
                    activeCards.forEach(activeCard => {
                        activeCard.classList.remove('active');
                    })
                }, 1000);

            }
            counterForActive = 0;
        }

        console.log(counterForShow);
        if (counterForShow === cards.length / 2) {
            if (winPopup) {
                winPopup.querySelector('#move').textContent = counterForMove;
                winPopup.classList.add('active');
            }
        }

    }

    cards.forEach(card => {
        card.addEventListener('click', isCardActive);
    })
});