function createSignUpButton(){
    signUp = create("BUTTON");
    signUp.setAttribute("id", "signUp");
    signUp.setAttribute("class", "header__button-user");
    signUp.innerText = 'Sing Up';
    // signUp.addEventListener("keydown", submitInput);
    return signUp;
}