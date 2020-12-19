function responsiveTopBar(){
    window.addEventListener('resize', function(){
        if (window.matchMedia("(min-width: 600px)").matches) {
            title.innerHTML = `<h1 class="header__button-h1">Photo Gallery</h1>`;
            aside.classList.remove('hidden');
            signUp.classList.remove('hidden');
            signIn.classList.remove('hidden');
        }
        else {
            title.innerHTML = `<h1 class="header__button-h1">Photo</h1>`;
            aside.classList.add('hidden');
            signUp.classList.add('hidden');
            signIn.classList.add('hidden');
        }
        // if (window.matchMedia("(min-width: 1000px)").matches) {
        //     headerRight.innerHTML = `<form class="" action="">
        //     <input class="header__form-input" type="text" placeholder="Search.." name="search">
        //     <button  class="header__button" type="submit"><i class="fa fa-search"></i></button>
        //     </form>`;
        // }
        // else {
        //     headerRight.innerHTML = `<button  class="header__button " href="#"><i class="fa fa-search"></i></button>`;
        // }
    });
}

responsiveTopBar();

