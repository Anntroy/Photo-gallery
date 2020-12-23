
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
asideLogIn.addEventListener('click', clickAsideLogIn);
cancelbtn.addEventListener('click', cancelLogInModal);

function openLogInModal(){
        modal.classList.remove('hidden');
}

function closeLogInModal(){
    modal.classList.add('hidden');
};

function clickAsideLogIn(){
    aside.classList.add('hidden');
    openLogInModal();
}

function validateInput(input, invalidInput) {
    input.addEventListener('blur', function(event) {
        if (input.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            invalidInput.classList.remove('hidden');
            input.value = "";
        }
        else {
            invalidInput.classList.add('hidden');
        }
    });
}

validateInput(username, invalidUsername);
validateInput(password, invalidPassword);

let usersArray = [];


function createNewUser(){
    console.log('creado')
    let user = {};
    if(JSON.parse(localStorage.getItem("users")) === null){
        localStorage.setItem('users', JSON.stringify(usersArray));
    }
    else {
        usersArray = JSON.parse(localStorage.getItem("users"));
    }
    user = new User(username.value, password.value);
    usersArray.push(user);
    localStorage.setItem("users", JSON.stringify(usersArray));
}

loginbtn.addEventListener('click', validateInputOnSubmit);

function validateInputOnSubmit(e){
    console.log('aqui')
    let usernameExist = false;
    let passwordExist = false;
    e.preventDefault();
    usersArray.forEach((item) => {
        console.log(item.userName);
        console.log(username.value);
        if(item.userName === username.value){
            usernameExist = true;
            if(item.userPassword === password.value){
                passwordExist = true;
            }
        }
    });
    if(usernameExist){
        if(passwordExist){
            modal.classList.add('hidden');
            currantUser.classList.remove('hidden');
            currantUser.innerHTML = `<h3 class="header__button-h3"><i class="fa fa-user-circle"></i><span class="tab"></span>${username.value}</h3>`;
            logIn.classList.add('hidden');
            logOut.classList.remove('hidden');
        }
        else {
            invalidLoginPassword.classList.remove('hidden');
        }
    }
    else {
        createNewUser();
        modal.classList.add('hidden');
        currantUser.classList.remove('hidden');
        currantUser.innerHTML = `<h3 class="header__button-h3"><i class="fa fa-user-circle"></i><span class="tab"></span>${username.value}</h3>`;
        logIn.classList.add('hidden');
        logOut.classList.remove('hidden');
    }
};
