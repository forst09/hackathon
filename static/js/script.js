'use strict';

document.addEventListener('DOMContentLoaded', () => {
    let cards = document.querySelectorAll('.card');
    let activeCards;
    let counter = 0;

    const isCardActive = (e) => {
        counter++;
        e.target.closest('.card').classList.add('active');
        if (counter > 1) {
            activeCards = document.querySelectorAll('.card.active:not(.show)');
            console.log(activeCards);
            if (activeCards[0].querySelector('.card__img-img').getAttribute('src') === activeCards[1].querySelector('.card__img-img').getAttribute('src')) {
                console.log('similar cards');
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
            counter = 0;
        }

        console.log(counter);

    }

    cards.forEach(card => {
        card.addEventListener('click', isCardActive);
    })
});