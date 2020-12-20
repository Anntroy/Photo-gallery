function openSignUpModal(){
    signUp.addEventListener('click', function(){
        modal.classList.remove('hidden');
    })
}
openSignUpModal();

function closeSignUpModal(){
    cancelbtn.addEventListener('click', function(){
        modal.classList.add('hidden');
    });
    loginbtn.addEventListener('click', function(){
        modal.classList.add('hidden');
    });
}

closeSignUpModal();
