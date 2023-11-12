'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const winPopup = document.querySelector('.popup');
    let cards = document.querySelectorAll('.card');
    let activeCards;
    let counterForActive = 0;
    let counterForMove = 0;
    let counterForShow = 0;

    const isCardActive = (e) => {
        e.target.closest('.card').classList.add('active');
        counterForActive++;
        if (counterForActive == 2) {
            counterForMove++;
            activeCards = document.querySelectorAll('.card.active:not(.show)');
            console.log(activeCards);
            if (activeCards[0].querySelector('.card__img-img').getAttribute('src') === activeCards[1].querySelector('.card__img-img').getAttribute('src')) {
                counterForShow++;
                activeCards.forEach(activeCard => {
                    activeCard.removeEventListener('click', isCardActive);
                    activeCard.classList.add('show');
                });
                activeCards[0].removeEventListener('click', isCardActive);
                activeCards[1].removeEventListener('click', isCardActive);
                counterForActive = 0;
                activeCards = [];
            }
            else {
                const activeTimer = setTimeout(function () {
                    activeCards.forEach(activeCard => {
                        activeCard.classList.remove('active');
                    })
                }, 1000);

            }
            counterForActive = 0;
        }

        if (counterForShow === cards.length / 2) {
            if (winPopup) {
                winPopup.querySelector('#move').textContent = counterForMove;
                winPopup.classList.add('active');
            }
        }

    }

    cards.forEach(card => {
        card.addEventListener('click', isCardActive);
    });

    function closePopup(popup) {
        popup.classList.remove('active');
    }

    winPopup.querySelector('.popup__close').addEventListener('click', () => {
        closePopup(winPopup);
    });

    winPopup.addEventListener('click', e => {
        if (e.target === winPopup) {
            closePopup(winPopup);
        }
    })
});