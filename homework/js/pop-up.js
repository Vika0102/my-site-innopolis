let loginButton = document.querySelector('.login-button');
let loginPopUp = document.querySelector ('.login-pop-up');

loginButton.addEventListener ('click', showPopup);

function showPopup(evt) {
    evt.preventDefault();

    loginPopUp.classList.toggle('show-popup');
};
