let news = document.querySelector('.news');
let mailingPopUp = document.querySelector ('.mailing-pop-up');
let Closenews = document.querySelector('.popup-close');

news.addEventListener ('click', showPopup);
Closenews.addEventListener ('click', close);

function showPopup(evt) {
    evt.preventDefault();

    mailingPopUp.classList.toggle('show-popup');
};

function close() {
    mailingPopUp.classList.remove('show-popup')
}

mailingPopUp.addEventListener('click', (e) => {
    if (e.target.classList.cotainers('show-popup')) {
        close ();
    }
})