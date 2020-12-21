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
username.addEventListener('blur', throwInputError());

function throwInputError(){
    username.addEventListener('invalid', function(event){
        event.target.setCustomValidity('Username must have 5 to 12 lowercase characters and no more than two digits at the end');
    })
}
