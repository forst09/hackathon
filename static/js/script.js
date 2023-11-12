'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const winPopup = document.querySelector('.popup');
    const btnReset = document.querySelectorAll('[data-reset]');
    const currentMove = document.querySelector('#moveCurrent');
    let cards = document.querySelectorAll('.card');
    let activeCards;
    let counterForActive = 0;
    let counterForMove = 0;
    let counterForShow = 0;

    const isCardActive = (e) => {
        const hehe = setTimeout(function () {
            e.target.closest('.card').classList.add('active');
            counterForActive++;
            if (counterForActive == 2) {
                counterForMove++;
                currentMove.textContent = counterForMove;

                activeCards = document.querySelectorAll('.card.active:not(.show)');
                console.log(activeCards);
                if (activeCards[0].querySelector('.card__img-img').getAttribute('src') === activeCards[1].querySelector('.card__img-img').getAttribute('src')) {
                    counterForShow++;
                    console.log(counterForShow);
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
                    }, 700);

                }
                counterForActive = 0;
            }

            if (counterForShow === cards.length / 2) {
                console.log('hehe')
                if (winPopup) {
                    winPopup.querySelector('#move').textContent = counterForMove;
                    winPopup.classList.add('active');
                }
            }
        }, 200)

    }

    cards.forEach(card => {
        card.addEventListener('click', isCardActive);
    });

    function shuffle() {
        const shuffleTimer = setTimeout(function () {
            cards.forEach((card) => {
                let randomPosotion = Math.floor(0.5 - Math.random());
                card.style.order = randomPosotion;
            });
        }, 500)
    }

    if (btnReset.length > 0) {
        btnReset.forEach(btn => {
            btn.addEventListener('click', () => {
                if (btn.classList.contains('popup__btn')) {
                    winPopup.classList.remove('active');
                };
                currentMove.textContent = 0;
                cards.forEach(card => {
                    card.classList.remove('active', 'show');
                });
                activeCards = [];
                counterForActive = 0;
                counterForMove = 0;
                counterForShow = 0;
                shuffle();
            });
        })
    }

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