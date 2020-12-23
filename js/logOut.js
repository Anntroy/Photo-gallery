logOut.addEventListener('click', closeUserSession);
asideDivLogOut.addEventListener('click', closeUserSession);

function closeUserSession(){
    currantUser.classList.add('hidden');
    logOut.classList.add('hidden');
    logIn.classList.remove('hidden');
    if(window.matchMedia("(max-width: 600px)").matches){
        aside.classList.add('hidden')
    }
}
