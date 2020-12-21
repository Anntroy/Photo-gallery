    let user = {
        username: "",
        password: "",
    }

function openLogInModal(){
    logIn.addEventListener('click', function(){
        modal.classList.remove('hidden');
    })
}
openLogInModal();

function closeLogInModal(){
    modal.classList.add('hidden');
};

function cancelLogInModal(){
    cancelbtn.addEventListener('click', function(){
        closeLogInModal();
    });
};

closeLogInModal();

cancelLogInModal();

function validateInput() {
    'use strict';
    username.addEventListener('blur', function(event) {
        if (username.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            invalidInput.classList.remove('hidden');
            }
        else {
            invalidInput.classList.add('hidden');
        }
    });
}

validateInput()
