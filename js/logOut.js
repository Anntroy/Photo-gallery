logOut.addEventListener('click', closeUserSession);

function closeUserSession(){
    currantUser.classList.add('hidden');
    logOut.classList.add('hidden');
    logIn.classList.remove('hidden');
}
