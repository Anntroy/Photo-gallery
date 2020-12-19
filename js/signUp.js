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
    signupbtn.addEventListener('click', function(){
        modal.classList.add('hidden');
    });
}

closeSignUpModal();
