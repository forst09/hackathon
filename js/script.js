'use strict';

document.addEventListener('DOMContentLoaded', () => {
    let cards = document.querySelectorAll('.card');

    function cardActive(cards) {
        cards.forEach(card => {
            if (card.classList.contains('active')) return true;
            else return false;
        })
    }

    cards.forEach(card => {
        card.addEventListener('click', () => {
            cards.forEach(card => {
                if (card.classList.contains('active')) {
                    return true;
                }
                else return false;
            });

            console.log(hehe);
        })
    })
});