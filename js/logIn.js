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

username.addEventListener('invalid', function(event){
    event.target.setCustomValidity('Username must have 5 to 12 characters without spaces');
})
