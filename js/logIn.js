
class User{
    constructor (uname, upassword) {
        this.userName = uname;
        this.userPassword = upassword;
    }
}

function cancelLogInModal(){
    closeLogInModal();
};

logIn.addEventListener('click', openLogInModal);
cancelbtn.addEventListener('click', cancelLogInModal);

function openLogInModal(){
        modal.classList.remove('hidden');
}

function closeLogInModal(){
    modal.classList.add('hidden');
};



function validateInput(input, invalidInput) {
    input.addEventListener('blur', function(event) {
        if (input.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            invalidInput.classList.remove('hidden');
        }
        else {
            invalidInput.classList.add('hidden');
        }
    });
}

validateInput(username, invalidUsername);
validateInput(password, invalidPassword);

function createNewUser(){
    let user = {};
    let currantUser = {};
    user = new User(username.value, password.value);
    currantUser = user;
    usersArray.push(user);
    localStorage.setItem("users", JSON.stringify(usersArray));
}

form.addEventListener('submit', validateInputOnSubmit);

function validateInputOnSubmit(e){
    e.preventDefault();
    if (usersArray.length === 0){
        createNewUser();
    }
    else{
        usersArray.forEach((item) => {
            if(item.userName === username.value){
                if(item.userPassword === password.value){
                    modal.classList.add('hidden');
                    currantUser.classList.remove('hidden');
                    currantUser.innerHTML = `<h3 class="header__button-h3">${username.value}</h3>`;
                    logIn.classList.add('hidden');
                    logOut.classList.remove('hidden');
                    return
                }
                else {
                    invalidLoginPassword.classList.remove('hidden');
                    return
                }
            }
            else {
                return
            }
        });
        createNewUser();
        modal.classList.add('hidden');
        currantUser.classList.remove('hidden');
        currantUser.innerHTML = `<h3 class="header__button-h3">${username.value}</h3>`;
        logIn.classList.add('hidden');
        logOut.classList.remove('hidden');
    }
};
