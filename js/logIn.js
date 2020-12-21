let users = [];

class User {
    constructor(uname, upassword) {
        this.userName = uname;
        this.userPassword = upassword;
    }
};

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

function validateInput(input, invalidInput) {
    input.addEventListener('blur', function(event) {
        if (input.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            invalidInput.classList.remove('hidden');
            }
        else {
            invalidInput.classList.add('hidden');
            input.setAttribute(`data-${input}`, `${input.value}`);
        }
    });
}

validateInput(username, invalidUsername);
validateInput(password, invalidPassword);

function validateInputOnSubmit(){
    let user;
    loginbtn.addEventListener('submit', function(event) {
        if ((username.checkValidity() === false) || (password.checkValidity() === false)) {
            event.preventDefault();
            event.stopPropagation();
            // invalid.classList.remove('hidden');
            }
        else {
            event.preventDefault();
            event.stopPropagation();
            // user = new User(`${username.value}`, `${password.value}`);
        }
    });
    return users
}

validateInputOnSubmit()