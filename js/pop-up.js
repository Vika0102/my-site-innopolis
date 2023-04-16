let news = document.querySelector('.news');
let mailingPopUp = document.querySelector ('.mailing-pop-up');

news.addEventListener ('click', showPopup);

function showPopup(evt) {
    evt.preventDefault();

    mailingPopUp.classList.toggle('show-popup');
};