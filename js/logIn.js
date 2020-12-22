
function User(uname, upassword) {
    this.userName = uname;
    this.userPassword = upassword;
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
        }
    });
}

validateInput(username, invalidUsername);
validateInput(password, invalidPassword);

function validateInputOnSubmit(){
    let inputs;
    let user = {};
    form.addEventListener('submit', function() {
        inputs = form.getElementsByTagName('input');
        user = new User(`${inputs[0].value}`, `${inputs[1].value}`);
        console.log(user)
        users.push(Object.assign(user));
        console.log(users)
        return users
    });
}


validateInputOnSubmit()