'use strict';

document.addEventListener('DOMContentLoaded', () => {
    let cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const cardsActive = function () {
                cards.forEach(card => {
                    if (card.classList.contains('active')) {
                        return true;
                    }
                    else return false;
                });
            };

            cardsActive();
        })
    })
});