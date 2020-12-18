function responsiveTopBar(){
    const title = get('title');
    window.addEventListener('resize', function(){
        if (window.matchMedia("(min-width: 600px)").matches) {
            title.innerHTML = `<h1 class="header__button-h1">Photo Gallery</h1>`;
        }
        else {
            title.innerHTML = `<h1 class="header__button-h1">Photo</h1>`;
        }
    });
}

responsiveTopBar()
