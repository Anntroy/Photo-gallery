function openSignUpModal(){
    signUp.addEventListener('click', function(){
        modal.innerHTML = `<form class="modal__form">
                                <div class="modal__form-div">
                                    <h2 class="modal__form-div-h2">Sign Up</h2>
                                    <hr>
                                    <label class="modal__form-div-label" for="email"><b>Email</b></label>
                                    <input class="modal__form-div-input" type="text" placeholder="Enter Email" name="email" required>

                                    <label class="modal__form-div-label" for="psw"><b>Password</b></label>
                                    <input class="modal__form-div-input" type="password" placeholder="Enter Password" name="psw" required>

                                    <label class="modal__form-div-label" for="psw-repeat"><b>Repeat Password</b></label>
                                    <input class="modal__form-div-input" type="password" placeholder="Repeat Password" name="psw-repeat" required>
                                    <div class="clearfix">
                                    <button type="button" onclick="document.getElementById('id01').style.display='none'" class="btn cancelbtn">Cancel</button>
                                    <button type="submit" class="btn signupbtn">Sign Up</button>
                                    </div>
                                    </div>
                                    </form>`
    })
}
openSignUpModal();

{/* <label>
    <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me
</label> */}
